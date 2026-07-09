"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BatteryCharging, MapPin, RadioTower, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: RadioTower,
    title: "รองรับ 3G",
    desc: "เชื่อมต่อเสถียร",
  },
  {
    icon: MapPin,
    title: "ติดตามแม่นยำ",
    desc: "เรียลไทม์",
  },
  {
    icon: BatteryCharging,
    title: "แบตเตอรี่สำรอง",
    desc: "ในตัว",
  },
  {
    icon: ShieldCheck,
    title: "ติดตั้งง่าย",
    desc: "ใช้งานได้ทันที",
  },
];

const specsLeft = [
  "ขอบเขตการตรวจสอบ Monitoring Scope ≤ 5M",
  "สายอากาศแบบเซรามิคในตัว Antenna Built-in GPS ceramic antenna; GSM quad-ban antenna",
  "แอลอีดีแสดงค่า LED Indicator GPS(blue), GSM(green), Power(red)",
  "แรงดันไฟฟ้าขณะทำงาน Operating Voltage 9-36VDC",
  "อุณหภูมิขณะทำงาน Operating Temperature",
];

const specsRight = [
  "ความชื้นสัมพัทธ์ขณะทำงาน Operating Humidity 5%~95%, non-dense",
  "แบตเตอรี่ในตัวแบบลิเธียม Built-in Battery 450mAh/3.7V industrial lithium polymer battery",
  "เวลาสแตนบาย Standby 4 ชั่วโมง hours",
  "ขนาด Dimension ยาว 98(L) × กว้าง 52.0 (W) × สูง 15.0 (H) mm",
  "น้ำหนัก Weight 80 กรัม g",
];

const hardwareLeft = [
  "ระบบการสื่อสารข้อมูล WCDMA/GSM Communication System WCDMA/GSM",
  "ความถี่ Frequency WCDMA 850/900/1900/2100MHz",
  "จีเอสเอ็ม GSM 850/900/1800/1900MHz",
  "เครือข่าย Networks WCDMA / EDGE/GPRS",
  "กำลังเพาเวอร์ Output Power",
  "-106dBm/GSM 900MHz, GSM 1800MHz",
  "MTK high sensitivity GPS chip",
  "ความแม่นยำในการระบุตำแหน่ง Location Accuracy ความไวในการติดตาม Tracking Sensitivity - 165dBm",
  "ความไวในการได้ตำแหน่ง Acquisition Sensitivity - 148dBm",
];

const hardwareRight = [
  "Class 3 (24dBm +1/-3dB) for UMTS bands",
  "Class 4 (33dBm ±2dB) for GSM 850/900MHz",
  "Class 1 (30dBm ±2dB) for GSM 1800/1900MHz",
  "ความไวในการรับสัญญาณ Receive Sensitivity",
  "-110dBm/UMTS Bands",
  "ความถี่ Frequency L1,1575.42MHz C/A code",
  "แชลแนล Channels 66",
  "เวลาในการระบุตำแหน่ง Location time",
  "Hot start : ≤2sec(open sky)",
  "Cold start : ≤35sec(open sky)",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function GT06EPage() {
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
              src="/product/gt06e/gt06e.png"
              alt="GT06E"
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
            <h1 className="text-4xl font-bold sm:text-5xl">GT06E</h1>

            <p className="mt-4 text-[16px] leading-7 text-neutral-700 sm:text-[18px]">
              รองรับซิมการ์ด 3G ใช้งานได้ทนทาน ความเร็วในการเชื่อมต่อข้อมูลสูง
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
          ตัวเครื่อง GT06E รองรับซิมการ์ด 3G ใช้งานได้ทนทาน
          ความเร็วในการเชื่อมต่อข้อมูลสูง
          มีไมโครโฟนสำหรับโทรเข้าดักฟังเสียงสนทนาภายในห้องโดยสาร
          รองรับคลื่นความถี่ 3G ใช้งานได้ทนทาน ยาวนาน สัญญาณดี ความไวสูง
          สายอากาศในตัว ติดตั้งง่าย ขนาดเล็ก กระทัดรัด สั่งดับเครื่องยนต์ได้
          มีระบบ AGPS ระบุตำแหน่งได้แม้ไม่มีตำแหน่งจากดาวเทียม
          แจ้งเตือนทันทีเมื่อถอดแบต หรือแรงดันต่ำกว่าปกติ ใช้งานได้ทั้งความถี่
          2G และ 3G คลื่นความถี่ 900/1800 MHZ และ 2100MHZ
        </motion.p>

        <SpecSection
          eyebrow="คุณสมบัติ"
          title="Main Specifications"
          leftItems={specsLeft}
          rightItems={specsRight}
          className="mt-16"
        />

        <SpecSection
          eyebrow="คุณสมบัติของฮาร์ดแวร์"
          title="Hardware Specification"
          leftItems={hardwareLeft}
          rightItems={hardwareRight}
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
