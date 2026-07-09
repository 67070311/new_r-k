"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  MapPin,
  RadioTower,
  ShieldCheck,
  Siren,
  Wifi,
  Database,
  Gauge,
} from "lucide-react";

const features = [
  { icon: RadioTower, title: "รองรับ 4G LTE", desc: "Cat-1 / Cat-M / NB" },
  { icon: MapPin, title: "GPS + BDS", desc: "< 2.5m CEP" },
  { icon: BatteryCharging, title: "แบตเตอรี่สำรอง", desc: "ติดตามต่อเนื่อง" },
  { icon: ShieldCheck, title: "กันน้ำ IP66", desc: "ทนทาน" },
];

const cellularLeft = [
  "โมดูล 4G: SIMCOM A7670 / SIM7070G / SIM7500",
  "เทคโนโลยี: LTE / GSM / GPRS / GNSS",
  "Cat-1 (A7670), 4G LTE, SIMCOM",
  "VT100-LCN: LTE-FDD B1/B3/B5/B8, LTE-TDD B34/B38/B39/B40/B41, GSM 900/1800MHz",
  "VT100-LEU: LTE-FDD B1/B3/B5/B7/B8/B20, GSM 900/1800MHz",
];

const cellularRight = [
  "VT100-LSA: LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66, GSM 850/900/1800/1900MHz",
  "Cat-M / Cat-NB / GSM (SIM7070G), SIMCOM",
  "VT100-LMNG Cat-M: B1/B2/B3/B4/B5/B8/B12/B13/B14/B18/B19/B20/B25/B26/B27/B28/B66/B85",
  "VT100-LMNG Cat-NB: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B25/B26/B28/B66/B71/B85",
  "SIM7500: VT100-LNA-7500 LTE-FDD B2/B4/B12, WCDMA B2/B5 และ VT100-LSA-7500 LTE-FDD B1/B3/B5/B7/B8/B28, WCDMA B1/B5",
];

const gnssLeft = [
  "GNSS: GPS + BDS",
  "โมดูล GPS: L76K รองรับการระบุตำแหน่งแบบสองโหมด",
  "ผู้รับสัญญาณ: 33 ช่อง",
  "ความไวในการติดตาม: -165 dBm",
];

const gnssRight = [
  "ความแม่นยำ: < 2.5m CEP",
  "เริ่มต้นอย่างรวดเร็ว Hot Start: < 1 วินาที",
  "เริ่มต้นแบบเย็น Cold Start: < 35 วินาที",
];

const highlightItems = [
  { icon: Wifi, title: "GPS + BDS", desc: "รองรับระบบกำหนดตำแหน่งหลายระบบ" },
  { icon: Siren, title: "SOS Alert", desc: "รองรับปุ่มแจ้งเตือนฉุกเฉิน" },
  {
    icon: Gauge,
    title: "Driving Behavior",
    desc: "แจ้งเตือนความเร็วและพฤติกรรมขับขี่",
  },
  {
    icon: Database,
    title: "Memory 16MB",
    desc: "บันทึกข้อมูลเมื่อสัญญาณขาดหาย",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function VT100LPage() {
  return (
    <main className="bg-white pt-[82px] text-black">
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden rounded-xl bg-[#F7F8FA]"
          >
            <Image
              src="/product/vt100/vt100.png"
              alt="VT100-L"
              width={650}
              height={430}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold sm:text-5xl">VT100-L</h1>

            <p className="mt-4 text-[16px] leading-7 text-neutral-700 sm:text-[18px]">
              อุปกรณ์ติดตามตำแหน่ง 4G LTE รองรับ LTE/GSM/GPRS/GNSS พร้อมระบบ GPS
              + BDS และฟังก์ชันแจ้งเตือนสำหรับยานพาหนะ
            </p>

            <div className="mt-4 h-[2px] w-[74px] bg-[#ED002B]" />

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border border-neutral-300 text-[#ED002B] sm:h-[78px] sm:w-[78px]">
                      <Icon size={34} strokeWidth={2.2} />
                    </div>

                    <h3 className="mt-4 text-[15px] font-bold sm:text-[16px]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[14px] text-neutral-700">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 text-[15px] leading-8 text-neutral-800 sm:text-[16px] lg:mt-14"
        >
          VT100-L เป็นอุปกรณ์ติดตามตำแหน่งสำหรับยานพาหนะ รองรับเครือข่าย 4G LTE
          และระบบสื่อสารหลายรูปแบบ เช่น LTE, GSM, GPRS และ GNSS ใช้งานร่วมกับ
          GPS + BDS เพื่อระบุตำแหน่งได้อย่างแม่นยำ พร้อมรองรับฟังก์ชันแจ้งเตือน
          SOS, แจ้งเตือนความเร็ว, การสั่นสะเทือนผิดปกติ และการบันทึกข้อมูลเมื่อ
          สัญญาณขาดหาย เหมาะสำหรับงานติดตามรถยนต์ รถขนส่ง และงานบริหารฟลีท
        </motion.p>

        <SpecSection
          eyebrow="เครือข่าย"
          title="Cellular"
          leftItems={cellularLeft}
          rightItems={cellularRight}
          className="mt-16"
        />

        <SpecSection
          eyebrow="ระบบระบุตำแหน่ง"
          title="GNSS"
          leftItems={gnssLeft}
          rightItems={gnssRight}
          className="mt-20"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 rounded-3xl bg-[#F7F8FA] px-5 py-8 sm:px-8 lg:px-10"
        >
          <p className="text-[16px] text-neutral-700">จุดเด่นของสินค้า</p>

          <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
            VT100-L Highlights
          </h2>

          <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlightItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-4 text-[16px] font-bold">{item.title}</h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-700">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function SpecSection({
  eyebrow,
  title,
  leftItems,
  rightItems,
  className = "",
}: {
  eyebrow: string;
  title: string;
  leftItems: string[];
  rightItems: string[];
  className?: string;
}) {
  const rowCount = Math.max(leftItems.length, rightItems.length);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <p className="text-[16px] text-neutral-700">{eyebrow}</p>

      <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
        {title}
      </h2>

      <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

      <div className="mt-8 space-y-3 sm:space-y-5">
        {Array.from({ length: rowCount }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:gap-x-28"
          >
            <div className="min-w-0">
              {leftItems[index] ? (
                <SpecCard text={leftItems[index]} index={index} />
              ) : null}
            </div>

            <div className="min-w-0">
              {rightItems[index] ? (
                <SpecCard text={rightItems[index]} index={index} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SpecCard({ text, index }: { text: string; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.04,
      }}
      className="h-full min-w-0 rounded-2xl border border-neutral-300 px-3 py-4 text-[13px] leading-6 text-neutral-800 break-words sm:px-6 sm:py-5 sm:text-[16px] sm:leading-8"
    >
      <div className="flex items-start gap-2">
        <span className="mt-[2px] shrink-0">•</span>
        <span className="min-w-0 break-words">{text}</span>
      </div>
    </motion.div>
  );
}
