"use client";

import { useEffect, useMemo, useState } from "react";
import { UsersRound } from "lucide-react";

type VisitorStats = {
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

const fallbackStats: VisitorStats = {
  today: 182,
  yesterday: 759,
  thisWeek: 2865,
  lastWeek: 991522,
  thisMonth: 7783,
  lastMonth: 13765,
  allDays: 997747,
  serverTime: "",
  timeZone: "Asia/Bangkok",
  configured: false,
};

const countedDateKey = "rk-visitor-counted-date";

const statLabels = [
  ["วันนี้", "today"],
  ["เมื่อวาน", "yesterday"],
  ["สัปดาห์นี้", "thisWeek"],
  ["สัปดาห์ก่อน", "lastWeek"],
  ["เดือนนี้", "thisMonth"],
  ["เดือนก่อน", "lastMonth"],
] as const;

export default function VisitorCounter() {
  const [stats, setStats] = useState<VisitorStats>(fallbackStats);

  useEffect(() => {
    let isActive = true;

    const syncVisitorStats = async () => {
      const todayKey = getBangkokDateKey(new Date());
      const countedToday = getStoredCountedDate() === todayKey;

      const response = await fetch("/api/visitors", {
        method: countedToday ? "GET" : "POST",
        cache: "no-store",
      });
      const nextStats = (await response.json()) as VisitorStats;

      if (!isActive) {
        return;
      }

      setStats(nextStats);

      if (!countedToday && response.ok && nextStats.configured) {
        setStoredCountedDate(todayKey);
      }
    };

    syncVisitorStats().catch(() => {
      if (isActive) {
        setStats(fallbackStats);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  const digits = useMemo(
    () => formatTotalDigits(stats.allDays),
    [stats.allDays],
  );

  return (
    <section
      aria-label="สถิติผู้เข้าชมเว็บไซต์"
      className="mt-10 border-t border-white/20 pt-8 sm:mt-12 sm:pt-10"
    >
      <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm sm:tracking-[0.25em]">
            Website Visitors
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B] sm:h-11 sm:w-11">
              <UsersRound size={20} />
            </div>

            <div
              className="flex min-w-0 shrink flex-nowrap gap-1 sm:gap-1.5"
              aria-hidden="true"
            >
              {digits.map((digit, index) => (
                <span
                  key={`${digit}-${index}`}
                  className="flex h-8 w-5 items-center justify-center rounded-[4px] border border-white/20 bg-neutral-950 text-center font-mono text-xl font-bold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] sm:h-9 sm:w-7 sm:text-2xl"
                >
                  {digit}
                </span>
              ))}
            </div>

            <span className="sr-only">
              ผู้เข้าชมทั้งหมด {formatNumber(stats.allDays)} ครั้ง
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-3 gap-y-6 text-sm sm:gap-x-5 lg:grid-cols-6">
          {statLabels.map(([label, key]) => (
            <div key={key} className="min-w-0">
              <p className="text-white/65">{label}</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-white sm:text-xl">
                {formatNumber(stats[key])}
              </p>
            </div>
          ))}
        </div>
      </div>

      {stats.serverTime ? (
        <p className="mt-5 text-xs tabular-nums text-white/60">
          Server time {stats.serverTime}
        </p>
      ) : null}
    </section>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatTotalDigits(value: number) {
  const digits = String(Math.max(0, Math.floor(value))).padStart(8, "0");
  return digits.split("");
}

function getBangkokDateKey(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value ?? "1970";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";

  return `${year}-${month}-${day}`;
}

function getStoredCountedDate() {
  try {
    return window.localStorage.getItem(countedDateKey);
  } catch {
    return null;
  }
}

function setStoredCountedDate(dateKey: string) {
  try {
    window.localStorage.setItem(countedDateKey, dateKey);
  } catch {
    // Counting still succeeds even when the browser blocks localStorage.
  }
}
