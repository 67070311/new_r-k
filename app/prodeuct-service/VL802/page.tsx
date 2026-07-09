"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  MapPin,
  RadioTower,
  ShieldCheck,
  Siren,
} from "lucide-react";

const features = [
  {
    icon: RadioTower,
    title: "รองรับ LTE CAT1",
    desc: "พร้อม GSM",
  },
  {
    icon: MapPin,
    title: "ระบุตำแหน่งแม่นยำ",
    desc: ">2.5m CEP",
  },
  {
    icon: BatteryCharging,
    title: "แบตเตอรี่สำรอง",
    desc: "450mAh",
  },
  {
    icon: ShieldCheck,
    title: "กันน้ำ IP65",
    desc: "ทนทาน",
  },
];

const gnssLeft = [
  "ระบบกำหนดตำแหน่ง Positioning System GPS + BDS + Wi-Fi",
  "ความถี่ Frequency L1",
  "ความแม่นยำของตำแหน่ง Position Accuracy >2.5m CEP",
  "ความไวในการติดตาม Tracking Sensitivity -162dBm",
];

const gnssRight = [
  "ความไวในการรับข้อมูล Acquisition Sensitivity -160dBm",
  "TTFF Hot Start ค่าเฉลี่ยเริ่มต้นร้อน ≤1 วินาที",
  "TTFF Cold Start ค่าเฉลี่ยการเริ่มต้นระบบเย็น ≤32 วินาที",
];

const cellularLeft = [
  "เครือข่ายการสื่อสาร Communication Network LTE CAT1 / GSM",
  "VL802-E LTE-FDD: B1/B3/B7/B8/B20/B28",
  "VL802-E LTE-TDD: B34/B38/B39/B40/B41",
  "VL802-E GSM: 850/900/1800/1900MHz",
];

const cellularRight = [
  "VL802-L LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B28",
  "VL802-L GSM: 850/900/1800/1900MHz",
];

const specsLeft = [
  "แบตเตอรี่ Battery Industrial lithium polymer battery 450mAh / 3.7V",
  "แบตเตอรี่ตัวเลือก Optional Battery 1,000mAh / 3.7V",
  "แรงดันไฟฟ้าขาเข้า Input Voltage 9-36VDC",
  "ไฟ LED แสดงสถานะ LED Indicator GNSS(green), Cellular(blue), Power(red)",
  "ซิม SIM Micro SIM",
  "การจัดเก็บข้อมูล Data Storage 16+16MB",
  "อินพุตดิจิทัล Digital Input ACC, SOS",
  "เอาต์พุตดิจิทัล Digital Output Relay",
];

const specsRight = [
  "I/O ที่กำหนดค่าได้ Configurable I/O สามารถกำหนดค่า I/O พิเศษ 2 ตัวเป็นอินพุตหรือเอาต์พุตดิจิทัลเพิ่มเติมได้",
  "ขนาด Dimension 105 × 56 × 22mm",
  "น้ำหนัก Weight 120 กรัม",
  "อุณหภูมิในการทำงาน Operating Temperature -20°C ถึง +70°C",
  "ระดับการป้องกัน IP IP Rating IP65",
  "เซ็นเซอร์ Sensor มาตรความเร่ง Accelerometer",
  "สถานการณ์ Scenario แจ้งเตือน SOS, แจ้งเตือนขับรถเร็ว, แจ้งเตือนการสั่นสะเทือนผิดปกติ, แจ้งเตือนการขับรถเมื่อยล้า",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function VL802Page() {
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
              src="/product/vl802/vl802.png"
              alt="VL802"
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
            <h1 className="text-4xl font-bold sm:text-5xl">VL802</h1>

            <p className="mt-4 text-[16px] leading-7 text-neutral-700 sm:text-[18px]">
              อุปกรณ์ติดตามตำแหน่งระบบ LTE CAT1/GSM รองรับ GPS + BDS + Wi-Fi
              พร้อมแบตเตอรี่สำรองในตัว
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
          VL802 เป็นอุปกรณ์ติดตามตำแหน่งสำหรับยานพาหนะ รองรับเครือข่าย LTE CAT1
          และ GSM ใช้ระบบระบุตำแหน่ง GPS + BDS + Wi-Fi ให้ค่าความแม่นยำสูง
          รองรับแรงดันไฟฟ้า 9-36VDC มีแบตเตอรี่ลิเธียมโพลิเมอร์ในตัว พร้อมอินพุต
          ACC, SOS, เอาต์พุต Relay และ I/O ที่สามารถกำหนดค่าเพิ่มเติมได้
          เหมาะสำหรับงานติดตามรถยนต์ รถขนส่ง และระบบแจ้งเตือนความปลอดภัย
        </motion.p>

        <SpecSection
          eyebrow="ระบบระบุตำแหน่ง"
          title="GNSS"
          leftItems={gnssLeft}
          rightItems={gnssRight}
          className="mt-16"
        />

        <SpecSection
          eyebrow="เครือข่าย"
          title="Cellular"
          leftItems={cellularLeft}
          rightItems={cellularRight}
          className="mt-20"
        />

        <SpecSection
          eyebrow="พารามิเตอร์ทางเทคนิค"
          title="Technical Specifications"
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
