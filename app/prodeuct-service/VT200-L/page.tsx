"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Camera,
  Database,
  Gauge,
  MapPin,
  RadioTower,
  ShieldCheck,
  Volume2,
} from "lucide-react";

const features = [
  { icon: RadioTower, title: "4G LTE", desc: "รองรับ 4G/3G/2G" },
  { icon: MapPin, title: "GPS + BD2", desc: "ระบุตำแหน่งแม่นยำ" },
  { icon: ShieldCheck, title: "กันน้ำ IP66", desc: "ทนทาน" },
  { icon: BatteryCharging, title: "แบตเตอรี่สำรอง", desc: "500mAh" },
];

const generalLeft = [
  "แหล่งจ่ายไฟ: 9V-100V",
  "ขนาด: 99 × 54 × 19.5 มม.",
  "น้ำหนัก: 106 กรัม",
  "แบตเตอรี่สำรอง: 500mAh",
  "การใช้พลังงานปกติ: 110mAh",
  "เวลาทำงาน: 33 ชั่วโมงในโหมดประหยัดพลังงาน และ 4 ชั่วโมงในโหมดปกติ",
];

const generalRight = [
  "อุณหภูมิในการทำงาน: -20°C ถึง +75°C",
  "ความชื้น: 5% ถึง 95% ไม่กลั่นตัว",
  "หน่วยความจำ: 128M bit",
  "ระดับการกันน้ำ: IP66",
  "เซ็นเซอร์: เซ็นเซอร์เร่งความเร็ว 3 มิติ",
  "การวางตำแหน่ง: GPS + BD2",
];

const lteLeft = [
  "โมดูล 4G LTE: EC200S (Cat-1) / EC200T (Cat-4), Quectel",
  "VT200-LCN: LTE-FDD B1/B3/B5/B8",
  "VT200-LCN: LTE-TDD B34/B38/B39/B40/B41",
  "VT200-LCN: GSM 900/1800MHz",
  "VT200-LEU: LTE-FDD B1/B3/B5/B7/B8/B20/B28",
  "VT200-LEU: LTE-TDD B38/B40/B41",
];

const lteRight = [
  "VT200-LEU: GSM 850/900/1800/1900MHz",
  "VT200-LAU: LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66",
  "VT200-LAU: LTE-TDD B40",
  "VT200-LAU: WCDMA B1/B2/B4/B5/B8",
  "VT200-LAU: GSM 850/900/1800/1900MHz",
];

const dataLeft = [
  "LTE FDD: ดาวน์โหลดสูงสุด 10Mbps / อัปโหลดสูงสุด 5Mbps",
  "LTE TDD: ดาวน์โหลดสูงสุด 8.96Mbps / อัปโหลดสูงสุด 3.1Mbps",
];

const dataRight = [
  "WCDMA: ดาวน์โหลดสูงสุด 384Kbps / อัปโหลดสูงสุด 384Kbps",
  "GPRS: ดาวน์โหลดสูงสุด 107Kbps / อัปโหลดสูงสุด 85Kbps",
];

const highlightItems = [
  {
    icon: Database,
    title: "128M Flash",
    desc: "บันทึกข้อมูลเมื่อสัญญาณขาดหาย",
  },
  {
    icon: Camera,
    title: "Camera",
    desc: "รองรับการถ่ายภาพและอัปโหลดไปยังเซิร์ฟเวอร์",
  },
  {
    icon: Volume2,
    title: "Two-way Audio",
    desc: "รองรับไมค์และลำโพงสำหรับสื่อสารสองทาง",
  },
  {
    icon: Gauge,
    title: "Driving Behavior",
    desc: "แจ้งเตือนพฤติกรรมขับขี่ผิดปกติ",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function VT200LPage() {
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
              src="/product/vt200/vt200.png"
              alt="VT200-L"
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
            <h1 className="text-4xl font-bold sm:text-5xl">VT200-L</h1>

            <p className="mt-4 text-[16px] leading-7 text-neutral-700 sm:text-[18px]">
              อุปกรณ์ติดตามตำแหน่ง 4G Pro Vehicle GPS Tracker รองรับ 4G/3G/2G,
              GPS + BD2, หน่วยความจำ 128M Flash
              และการใช้งานกับยานพาหนะหลายประเภท
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
          VT200-L เป็นอุปกรณ์ติดตามตำแหน่งสำหรับยานพาหนะระดับ Pro
          รองรับแรงดันไฟฟ้า 9-100V เหมาะกับรถยนต์ รถโดยสาร รถจักรยานยนต์
          และยานพาหนะเชิงพาณิชย์ มาพร้อมหน่วยความจำ 128M bit, กันน้ำ IP66,
          แบตเตอรี่สำรอง 500mAh และเซ็นเซอร์เร่งความเร็ว 3 มิติ
          สำหรับตรวจจับพฤติกรรมการขับขี่และเหตุการณ์ผิดปกติ
        </motion.p>

        <SpecSection
          eyebrow="คุณสมบัติทั่วไป"
          title="General Specifications"
          leftItems={generalLeft}
          rightItems={generalRight}
          className="mt-16"
        />

        <SpecSection
          eyebrow="ข้อมูลจำเพาะเครือข่าย"
          title="LTE / GSM"
          leftItems={lteLeft}
          rightItems={lteRight}
          className="mt-20"
        />

        <SpecSection
          eyebrow="การส่งข้อมูล"
          title="Data Transmission"
          leftItems={dataLeft}
          rightItems={dataRight}
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
            VT200-L Highlights
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
