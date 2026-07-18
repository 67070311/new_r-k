import "server-only";

const TIME_ZONE = "Asia/Bangkok";
const REDIS_KEY_PREFIX = "rk:visitor-counter";
const MIGRATION_DATE_KEY = "2026-07-18";

type CounterPeriod = {
  today: string;
  yesterday: string;
  thisWeek: string;
  lastWeek: string;
  thisMonth: string;
  lastMonth: string;
};

export type VisitorStats = {
  today: number;
  yesterday: number;
  thisWeek: number;
  lastWeek: number;
  thisMonth: number;
  lastMonth: number;
  allDays: number;
  serverTime: string;
  timeZone: string;
  configured: boolean;
};

type UpstashResult = {
  result?: unknown;
  error?: string;
};

const redisKeys = {
  total: `${REDIS_KEY_PREFIX}:total`,
  day: (dateKey: string) => `${REDIS_KEY_PREFIX}:day:${dateKey}`,
  week: (weekKey: string) => `${REDIS_KEY_PREFIX}:week:${weekKey}`,
  month: (monthKey: string) => `${REDIS_KEY_PREFIX}:month:${monthKey}`,
};

const migrationPeriods = getPeriodsFromDateKey(MIGRATION_DATE_KEY);

const legacyBaselines = new Map<string, number>([
  [redisKeys.total, 997747],
  [redisKeys.day(migrationPeriods.today), 182],
  [redisKeys.day(migrationPeriods.yesterday), 759],
  [redisKeys.week(migrationPeriods.thisWeek), 2865],
  [redisKeys.week(migrationPeriods.lastWeek), 991522],
  [redisKeys.month(migrationPeriods.thisMonth), 7783],
  [redisKeys.month(migrationPeriods.lastMonth), 13765],
]);

export async function readVisitorStats(): Promise<VisitorStats> {
  const periods = getCurrentPeriods();
  const snapshotKeys = getSnapshotKeys(periods);
  const deltas = await readCounterDeltas(snapshotKeys);

  return buildStats(periods, snapshotKeys, deltas, true);
}

export async function incrementVisitorStats(): Promise<VisitorStats> {
  const periods = getCurrentPeriods();
  const snapshotKeys = getSnapshotKeys(periods);
  const incrementKeys = [
    redisKeys.total,
    redisKeys.day(periods.today),
    redisKeys.week(periods.thisWeek),
    redisKeys.month(periods.thisMonth),
  ];

  const commands = [
    ...incrementKeys.map((key) => ["INCR", key]),
    ["MGET", ...snapshotKeys],
  ];
  const results = await redisPipeline(commands);
  const mgetResult = results.at(-1);
  const deltas = Array.isArray(mgetResult) ? mgetResult : [];

  return buildStats(periods, snapshotKeys, deltas, true);
}

export function getFallbackVisitorStats(): VisitorStats {
  const periods = getCurrentPeriods();
  const snapshotKeys = getSnapshotKeys(periods);

  return buildStats(periods, snapshotKeys, [], false);
}

async function readCounterDeltas(keys: string[]) {
  const [deltas] = await redisPipeline([["MGET", ...keys]]);
  return Array.isArray(deltas) ? deltas : [];
}

async function redisPipeline(commands: (string | number)[][]) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error("Upstash Redis environment variables are not configured.");
  }

  const response = await fetch(`${url.replace(/\/$/, "")}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  const payload = (await response.json()) as UpstashResult[] | UpstashResult;

  if (!response.ok) {
    throw new Error(
      Array.isArray(payload)
        ? "Upstash Redis request failed."
        : payload.error ?? "Upstash Redis request failed.",
    );
  }

  if (!Array.isArray(payload)) {
    throw new Error(payload.error ?? "Unexpected Upstash Redis response.");
  }

  const failedCommand = payload.find((item) => item.error);

  if (failedCommand?.error) {
    throw new Error(failedCommand.error);
  }

  return payload.map((item) => item.result);
}

function buildStats(
  periods: CounterPeriod,
  keys: string[],
  deltas: unknown[],
  configured: boolean,
): VisitorStats {
  const valueByKey = new Map(
    keys.map((key, index) => [
      key,
      getBaselineValue(key) + toCounterNumber(deltas[index]),
    ]),
  );

  return {
    today: valueByKey.get(redisKeys.day(periods.today)) ?? 0,
    yesterday: valueByKey.get(redisKeys.day(periods.yesterday)) ?? 0,
    thisWeek: valueByKey.get(redisKeys.week(periods.thisWeek)) ?? 0,
    lastWeek: valueByKey.get(redisKeys.week(periods.lastWeek)) ?? 0,
    thisMonth: valueByKey.get(redisKeys.month(periods.thisMonth)) ?? 0,
    lastMonth: valueByKey.get(redisKeys.month(periods.lastMonth)) ?? 0,
    allDays: valueByKey.get(redisKeys.total) ?? 0,
    serverTime: formatServerTime(new Date()),
    timeZone: TIME_ZONE,
    configured,
  };
}

function getSnapshotKeys(periods: CounterPeriod) {
  return [
    redisKeys.total,
    redisKeys.day(periods.today),
    redisKeys.day(periods.yesterday),
    redisKeys.week(periods.thisWeek),
    redisKeys.week(periods.lastWeek),
    redisKeys.month(periods.thisMonth),
    redisKeys.month(periods.lastMonth),
  ];
}

function getBaselineValue(key: string) {
  return legacyBaselines.get(key) ?? 0;
}

function toCounterNumber(value: unknown) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

function getCurrentPeriods() {
  return getPeriodsFromDateKey(getBangkokDateKey(new Date()));
}

function getPeriodsFromDateKey(dateKey: string): CounterPeriod {
  const date = dateFromKey(dateKey);
  const yesterday = addDays(date, -1);
  const lastWeek = addDays(date, -7);

  return {
    today: dateKeyFromDate(date),
    yesterday: dateKeyFromDate(yesterday),
    thisWeek: isoWeekKey(date),
    lastWeek: isoWeekKey(lastWeek),
    thisMonth: monthKey(date),
    lastMonth: previousMonthKey(date),
  };
}

function getBangkokDateKey(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value ?? "1970";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";

  return `${year}-${month}-${day}`;
}

function dateFromKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function dateKeyFromDate(date: Date) {
  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}-${pad2(
    date.getUTCDate(),
  )}`;
}

function monthKey(date: Date) {
  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}`;
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setUTCDate(nextDate.getUTCDate() + days);
  return nextDate;
}

function previousMonthKey(date: Date) {
  const previousMonth = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() - 1, 1),
  );

  return monthKey(previousMonth);
}

function isoWeekKey(date: Date) {
  const weekDate = new Date(date);
  const day = weekDate.getUTCDay() || 7;
  weekDate.setUTCDate(weekDate.getUTCDate() + 4 - day);

  const yearStart = new Date(Date.UTC(weekDate.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(
    ((weekDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
  );

  return `${weekDate.getUTCFullYear()}-W${pad2(weekNumber)}`;
}

function formatServerTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "00";

  return `${getPart("year")}-${getPart("month")}-${getPart("day")} ${getPart(
    "hour",
  )}:${getPart("minute")}:${getPart("second")}`;
}

function pad2(value: number) {
  return String(value).padStart(2, "0");
}
