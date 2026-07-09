"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  CalendarDays,
  Gauge,
  IdCard,
  MapPin,
  Monitor,
  RadioTower,
  RotateCcw,
  ShieldCheck,
  Target,
} from "lucide-react";

const features = [
  { icon: RadioTower, title: "รองรับ 3G", desc: "เชื่อมต่อเสถียร" },
  { icon: MapPin, title: "ติดตามเรียลไทม์", desc: "ตำแหน่งแม่นยำ" },
  { icon: BatteryCharging, title: "แบตเตอรี่สำรอง", desc: "ในตัว" },
  { icon: ShieldCheck, title: "รองรับ GPS ขนส่ง", desc: "ตามข้อกำหนด" },
];

const specsLeft = [
  "รองรับเครื่องรูดบัตรแถบแม่เหล็ก ตามข้อกำหนดกรมขนส่ง",
  "Buzzer แจ้งเตือนเมื่อใช้ใบขับขี่ผิดประเภท",
  "ระบุตำแหน่งปัจจุบันของตัวรถ",
  "ดูความเร็วที่ใช้ในการขับขี่",
  "ดูสถานะเครื่องยนต์ ติดเครื่อง / ดับเครื่อง",
];

const specsRight = [
  "ดูเส้นทางการวิ่งย้อนหลังได้ 6 เดือน",
  "รายงานการใช้งานตัวรถแบบละเอียด",
  "มี Memory ในตัวเครื่อง เก็บข้อมูลตามข้อกำหนดกรมขนส่ง",
  "ติดตั้งได้กับรถทุกประเภท รวมถึงรถบรรทุกวัตถุอันตราย",
];

const workingItems = [
  {
    icon: IdCard,
    title: "รูดบัตรก่อนขับรถ",
    desc: "พนักงานขับรถรูดใบขับขี่ก่อนขับ หากไม่รูดบัตรหรือใช้บัตรผิดประเภท ระบบจะส่งเสียงเตือนจนกว่าจะใช้บัตรที่ถูกต้อง",
  },
  {
    icon: RadioTower,
    title: "ส่งข้อมูลไปยัง Server",
    desc: "เครื่อง GPS ส่งข้อมูลคนขับ ตำแหน่ง และความเร็วไปยัง Server ผู้ให้บริการ และ Server กรมขนส่งทางบก",
  },
  {
    icon: Monitor,
    title: "ดูข้อมูลผ่านเว็บไซต์และมือถือ",
    desc: "ผู้ประกอบการสามารถดูตำแหน่งรถ รายงานการใช้รถ และสถานะต่าง ๆ ผ่านเว็บไซต์หรือมือถือ",
  },
  {
    icon: CalendarDays,
    title: "ดูย้อนหลัง 6 เดือน",
    desc: "รองรับการตรวจสอบเส้นทางและตำแหน่งย้อนหลังได้สูงสุด 6 เดือน",
  },
  {
    icon: RotateCcw,
    title: "ส่งข้อมูล 24 ชั่วโมง",
    desc: "ข้อมูลการเดินทางถูกส่งไปยังกรมขนส่งทางบกอย่างต่อเนื่องตลอด 24 ชั่วโมง",
  },
];

const reportLeft = [
  "รายงานการขับรถด้วยความเร็วเกินกำหนด",
  "รายงานการขับรถเกินระยะเวลาที่กำหนด ต่อเนื่องเกิน 4 ชั่วโมง",
  "รายงานการขับรถเกินระยะเวลารวมกันเกินกว่า 8 ชั่วโมงในทุก ๆ 24 ชั่วโมง",
  "รายงานการขับรถโดยไม่แสดงตัวผู้ขับขี่",
];

const reportRight = [
  "รายงานการขับรถโดยใช้ใบอนุญาตผิดประเภท",
  "รายงานการขับรถโดยไม่ใช้เครื่องบันทึกข้อมูลการเดินทางของรถ",
  "รายงานการปลดหรือการถอดเครื่องบันทึกข้อมูลการเดินทางของรถ",
];

const alertItems = [
  {
    icon: Gauge,
    title: "ความเร็วเกินกำหนด",
    desc: "รถบรรทุกลักษณะ 4 รายงานเมื่อเกิน 80 กม./ชม. และรถลากจูงลักษณะ 9 รายงานเมื่อเกิน 60 กม./ชม.",
  },
  {
    icon: CalendarDays,
    title: "ขับรถต่อเนื่องเกินเวลา",
    desc: "รายงานเมื่อขับรถต่อเนื่องเกิน 4 ชั่วโมง โดยไม่มีการหยุดพักเกิน 30 นาที",
  },
  {
    icon: Target,
    title: "ไม่แสดงตัวผู้ขับขี่",
    desc: "รายงานเมื่อเครื่องยนต์ทำงานหรือรถเคลื่อนที่โดยไม่ได้รูดบัตรแสดงตัวผู้ขับขี่",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function TS107Page() {
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
              src="/product/ts107/ts107.png"
              alt="TS107 3G"
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
            <h1 className="text-4xl font-bold sm:text-5xl">TS107 3G</h1>

            <p className="mt-4 text-[16px] leading-7 text-neutral-700 sm:text-[18px]">
              อุปกรณ์ GPS สำหรับรถขนส่ง รองรับซิมการ์ด 3G
              ใช้งานร่วมกับระบบรูดบัตรใบขับขี่
              และส่งข้อมูลตามข้อกำหนดกรมขนส่งทางบก
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
          TS107 3G
          เหมาะสำหรับงานติดตามรถขนส่งและรถที่ต้องปฏิบัติตามข้อกำหนดกรมขนส่งทางบก
          รองรับการรูดบัตรแสดงตัวผู้ขับขี่ การบันทึกข้อมูลการเดินทาง
          การดูตำแหน่งย้อนหลัง การแจ้งเตือนการใช้ใบขับขี่ผิดประเภท
          และการส่งข้อมูลไปยังระบบ Server ตลอด 24 ชั่วโมง
        </motion.p>

        <SpecSection
          eyebrow="คุณสมบัติ"
          title="Main Specifications"
          leftItems={specsLeft}
          rightItems={specsRight}
          className="mt-16"
        />

        <WorkingSection />

        <ReportSection />

        <RequirementSection />
      </section>
    </main>
  );
}

function WorkingSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20 rounded-3xl bg-[#F7F8FA] px-5 py-8 sm:px-8 lg:px-10"
    >
      <p className="text-[16px] text-neutral-700">การทำงานของ</p>

      <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
        GPS ขนส่ง
      </h2>

      <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:gap-5">
        {workingItems.map((item, index) => {
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
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-700 sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function ReportSection() {
  return (
    <SpecSection
      eyebrow="รายงาน"
      title="DLT Reports"
      leftItems={reportLeft}
      rightItems={reportRight}
      className="mt-20"
    />
  );
}

function RequirementSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20 rounded-3xl border border-red-100 bg-[#FFF6F7] px-5 py-8 sm:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[150px_1fr] lg:items-start">
        <div>
          <p className="text-[16px] text-neutral-700">
            ข้อกำหนดจากกรมขนส่งทางบก
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
            Transport Regulation
          </h2>

          <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

          <p className="mt-7 text-[15px] leading-8 text-neutral-800 sm:text-[16px]">
            สำหรับรถบรรทุกวัตถุอันตราย ลักษณะ 4 และรถลากจูง ลักษณะ 9
            ที่ใช้สำหรับลากรถกึ่งพ่วงหรือขนส่งวัตถุอันตราย เช่น น้ำมันเชื้อเพลิง
            สารเคมี และวัตถุไวไฟ ระบบ GPS ต้องรองรับการบันทึกข้อมูลการเดินทาง
            การแสดงตัวผู้ขับขี่ และการส่งรายงานตามข้อกำหนดกรมขนส่งทางบก
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {alertItems.map((item, index) => {
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
                  className="rounded-2xl border border-red-100 bg-white p-5"
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
        </div>
      </div>
    </motion.div>
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
            className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-x-28"
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
