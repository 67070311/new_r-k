"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Cable,
  MapPin,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: RadioTower,
    title: "รองรับ 4G",
    desc: "เชื่อมต่อเสถียร",
  },
  {
    icon: ShieldCheck,
    title: "กันน้ำ IP66",
    desc: "ทนทาน",
  },
  {
    icon: BatteryCharging,
    title: "แบตเตอรี่ในตัว",
    desc: "600mAh",
  },
  {
    icon: Cable,
    title: "รองรับ I/O",
    desc: "RS232 / USB",
  },
];

const mainFeaturesLeft = [
  "ไฟเลี้ยง Power input 8-92V",
  "กันน้ำ Waterproof IP66",
  "เสาอากาศในตัว Internal antennas",
  "พอร์ต I/O 1 input / 1 output / 1 AD",
  "พอร์ต RS232 จำนวน 1 พอร์ต",
];

const mainFeaturesRight = [
  "รองรับอุปกรณ์เสริม Supported optional accessories",
  "Magnetic Card Reader",
  "Capacitive fuel sensor",
  "Buzzer",
  "Relay",
  "Door sensor",
  "Liquid sensor",
];

const specsLeft = [
  "ขนาด Dimension 80 × 53 × 21 mm",
  "น้ำหนัก Weight 162g",
  "โมดูล GSM GSM Module Quectel EG915U",
  "โมดูล GPS GPS Module Quectel L70-R",
  "แรงดันไฟเข้า Input Voltage DC 8~92V / 1.5A",
  "แบตเตอรี่ภายใน Internal Battery 600mAh / 3.7V",
  "การใช้พลังงาน Power Consumption 7.8mA standby current",
  "อายุแบตเตอรี่ Internal Battery Life 4.2 hours at 10 seconds time interval",
  "อุณหภูมิขณะทำงาน Operating Temperature -20℃~70℃",
  "ความชื้น Humidity 5%~95%",
];

const specsRight = [
  "ไฟ LED LED Light 3 LED lights indicating GPS/GSM/External power status",
  "ปุ่ม / สวิตช์ Button / Switch 1 power switch inside case",
  "หน่วยความจำ Flash Memory 8MB (GPRS data 10200 units, SMS data 320 units)",
  "ความถี่ GSM GSM Frequency 850/900/1800/1900MHz",
  "ความถี่ UMTS UMTS Frequency Don't support",
  "ความถี่ 4G LTE 4G LTE Frequency B1/B3/B5/B7/B8/B20/B28",
  "ความเร็วเริ่มต้น GPS GPS Start Speed Cold start 35s / Hot start 1s",
  "ความแม่นยำ Position Accuracy 10m",
  "พอร์ต I/O 1 Digital input, positive, default for ACC detection",
  "1 Analog input, voltage range is 0-36V",
  "1 Output",
  "1 RS232 for magnetic reader",
  "1 USB port",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function FIFOTRACKPage() {
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
              src="/product/fifo/fifo.png"
              alt="FIFOTRACK S50K"
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
            <h1 className="text-4xl font-bold sm:text-5xl">FIFOTRACK S50K</h1>

            <p className="mt-4 text-[16px] leading-7 text-neutral-700 sm:text-[18px]">
              Basic 4G Vehicle GPS Tracker รุ่น DLT Version รองรับมาตรฐาน
              NTBC/DLT approval
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
          FIFOTRACK S50K เป็นอุปกรณ์ติดตามยานพาหนะระบบ 4G GPS Tracker
          รองรับไฟเลี้ยงกว้าง 8-92V กันน้ำมาตรฐาน IP66 มีเสาอากาศภายในตัวเครื่อง
          รองรับพอร์ต I/O, RS232 และ USB เหมาะสำหรับติดตั้งในรถบรรทุก รถขนส่ง
          และยานพาหนะที่ต้องการระบบติดตาม พร้อมรองรับอุปกรณ์เสริม เช่น
          เครื่องอ่านบัตรแม่เหล็ก เซนเซอร์น้ำมัน รีเลย์ และเซนเซอร์ประตู
        </motion.p>

        <SpecSection
          eyebrow="คุณสมบัติเด่น"
          title="Main Features"
          leftItems={mainFeaturesLeft}
          rightItems={mainFeaturesRight}
          className="mt-16"
        />

        <SpecSection
          eyebrow="รายละเอียดสินค้า"
          title="Specifications"
          leftItems={specsLeft}
          rightItems={specsRight}
          className="mt-20"
        />
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
