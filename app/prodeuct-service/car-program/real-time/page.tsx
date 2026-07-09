"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  Cloud,
  FileText,
  Globe,
  Map,
  Monitor,
  Server,
  Smartphone,
} from "lucide-react";

const steps = [
  "ติดตั้งอุปกรณ์ GPS Tracker ติดตามรถยนต์ไว้ที่รถที่ต้องการติดตาม",
  "GPS Tracker รับสัญญาณจากดาวเทียม GPS เพื่อคำนวณพิกัดตำแหน่ง",
  "อุปกรณ์เชื่อมต่อ Internet ผ่าน GPRS ของระบบมือถือ เช่น DTAC / AIS / TRUE และส่งข้อมูลไปยัง Server แบบ Real Time ทุก ๆ 30 วินาที",
  "เข้าใช้งานระบบติดตามรถยนต์แบบ Real Time ผ่าน Internet ได้จาก Computer ทุกเครื่อง",
];

const featuresLeft = [
  "ไม่ต้องติดตั้งโปรแกรมเพื่อใช้งาน",
  "ใช้งานได้จาก Computer ทุกเครื่อง ทั้ง PC, Apple Mac",
  "ใช้งานได้พร้อม ๆ กันหลายผู้ใช้",
  "ใช้งานบนมือถือ iPhone, Android และ Browser",
  "ใช้งานบน Tablet เช่น iPad และ Galaxy Tab",
];

const featuresRight = [
  "ไม่ต้องติดตั้ง Server ที่บริษัท",
  "ไม่ต้องดูแลระบบเอง",
  "ไม่ต้อง Upgrade โปรแกรม",
  "ไม่ต้อง Update แผนที่",
  "ระบบเป็น Web Base Application ใช้งานง่าย",
];

const developmentItems = [
  "สามารถปรับเปลี่ยน แก้ไข และเพิ่มเติม Function ได้ทันที",
  "โปรแกรมใช้งานง่าย ไม่ซับซ้อน แต่มี Function ครบถ้วน",
  "โปรแกรมพัฒนาอย่างต่อเนื่อง มี Feature ใหม่เพิ่มเติมอยู่เสมอ",
];

const mapItems = [
  "แผนที่ Online by Longdo Map",
  "สามารถดูตำแหน่งรถแบบ Real Time",
  "สามารถดูเส้นทางย้อนหลัง",
  "รองรับการแสดงผลบนคอมพิวเตอร์และโทรศัพท์มือถือ",
];

const reportItems = [
  "รายงานเที่ยวรถ",
  "รายงานสถานะรถ",
  "รายงานชั่วโมงการทำงาน",
  "รายงานความเร็วเกินกำหนด",
  "รายงานรถจอดนานผิดปกติ",
  "รายงานการรูดบัตร",
  "รายงานพฤติกรรมการขับขี่",
  "รายงานการใช้น้ำมันและพลังงาน",
  "รายงานการเข้าจุดสำคัญ",
  "รายงานการเข้าจุดเสี่ยง",
  "รายงานการเข้าเส้นทางเสี่ยง",
  "รายงานอุณหภูมิรถ",
  "รายงานการแจ้งเตือนอุปกรณ์",
  "รายงานสถานะอุปกรณ์",
  "รายงานรถขาดการติดต่อ",
  "รายงานสรุปรายคัน",
];

const desktopScreens = [
  { title: "หน้าจอคอมพิวเตอร์ 1", image: "/product/real-time/1.png" },
  { title: "หน้าจอคอมพิวเตอร์ 2", image: "/product/real-time/2.png" },
  { title: "หน้าจอคอมพิวเตอร์ 3", image: "/product/real-time/3.png" },
  { title: "หน้าจอคอมพิวเตอร์ 4", image: "/product/real-time/4.png" },
  { title: "หน้าจอคอมพิวเตอร์ 5", image: "/product/real-time/5.png" },
  { title: "หน้าจอคอมพิวเตอร์ 6", image: "/product/real-time/6.png" },
];

const mobileScreens = [
  { title: "หน้าจอโทรศัพท์ 1", image: "/product/real-time/phone/1.png" },
  { title: "หน้าจอโทรศัพท์ 2", image: "/product/real-time/phone/2.png" },
  { title: "หน้าจอโทรศัพท์ 3", image: "/product/real-time/phone/3.png" },
  { title: "หน้าจอโทรศัพท์ 4", image: "/product/real-time/phone/4.png" },
  { title: "หน้าจอโทรศัพท์ 5", image: "/product/real-time/phone/5.png" },
  { title: "หน้าจอโทรศัพท์ 6", image: "/product/real-time/phone/6.png" },
  { title: "หน้าจอโทรศัพท์ 7", image: "/product/real-time/phone/7.png" },
  { title: "หน้าจอโทรศัพท์ 8", image: "/product/real-time/phone/8.png" },
  { title: "หน้าจอโทรศัพท์ 9", image: "/product/real-time/phone/9.png" },
  { title: "หน้าจอโทรศัพท์ 10", image: "/product/real-time/phone/10.png" },
];

const highlights = [
  {
    icon: Globe,
    title: "Web Base",
    desc: "ใช้งานผ่าน Internet ไม่ต้องติดตั้งโปรแกรม",
  },
  {
    icon: Clock,
    title: "Real Time",
    desc: "ส่งข้อมูลตำแหน่งทุก ๆ 30 วินาที",
  },
  {
    icon: Server,
    title: "Cloud Server",
    desc: "ข้อมูลถูกจัดเก็บบน Server พร้อมใช้งาน",
  },
  {
    icon: Monitor,
    title: "Multi Device",
    desc: "รองรับคอมพิวเตอร์ มือถือ และแท็บเล็ต",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function RealTimePage() {
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
              src="/product/car/real-time/main.png"
              alt="GPS Tracking Real Time"
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
            <h1 className="text-4xl font-bold sm:text-5xl">
              GPS ติดตามรถ Real Time
            </h1>

            <p className="mt-4 text-[16px] leading-7 text-neutral-700 sm:text-[18px]">
              ระบบติดตามรถผ่าน Internet แบบ Real Time ดูตำแหน่งรถ ความเร็ว
              เส้นทางย้อนหลัง และรายงานการใช้งานรถได้จากคอมพิวเตอร์ มือถือ
              และแท็บเล็ต
            </p>

            <div className="mt-4 h-[2px] w-[74px] bg-[#ED002B]" />

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-6">
              {highlights.map((item, index) => {
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
          ระบบ GPS Tracking Real Time ช่วยให้ผู้ใช้งานสามารถติดตามรถและทรัพย์สิน
          ได้แบบสด ๆ ผ่าน Internet ข้อมูลจาก GPS Tracker จะถูกส่งไปยัง Server
          เพื่อจัดเก็บตำแหน่ง ความเร็ว และข้อมูลการเดินทาง ทำให้สามารถตรวจสอบรถ
          ดูเส้นทางย้อนหลัง และเรียกดูรายงานต่าง ๆ ได้สะดวกจากทุกอุปกรณ์
        </motion.p>

        <ProcessSection />

        <SpecSection
          eyebrow="Key Feature"
          title="คุณสมบัติหลักของ Tracking Server"
          leftItems={featuresLeft}
          rightItems={featuresRight}
          className="mt-20"
        />

        <FeatureGroupSection />

        <ScreenshotSection />
      </section>
    </main>
  );
}

function ProcessSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-16 rounded-3xl bg-[#F7F8FA] px-5 py-8 sm:px-8 lg:px-10"
    >
      <p className="text-[16px] text-neutral-700">การทำงานของระบบ</p>

      <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
        Internet Real Time Tracking
      </h2>

      <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
        {steps.map((item, index) => (
          <motion.div
            key={item}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.06,
            }}
            className="h-full rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="flex gap-4">
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#ED002B]/10 text-[15px] font-bold text-[#ED002B]">
                {index + 1}
              </div>

              <p className="text-[14px] leading-7 text-neutral-800 sm:text-[15px]">
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FeatureGroupSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20"
    >
      <p className="text-[16px] text-neutral-700">ระบบและรายงาน</p>

      <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
        Platform Features
      </h2>

      <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <FeatureBox
          icon={Cloud}
          title="พัฒนาได้ต่อเนื่อง"
          items={developmentItems}
        />

        <FeatureBox icon={Map} title="แผนที่และการติดตาม" items={mapItems} />

        <FeatureBox icon={FileText} title="รายงาน (User)" items={reportItems} />
      </div>
    </motion.div>
  );
}

function FeatureBox({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Cloud;
  title: string;
  items: string[];
}) {
  return (
    <div className="h-full rounded-3xl border border-neutral-200 bg-white p-6">
      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
        <Icon size={30} strokeWidth={2.2} />
      </div>

      <h3 className="mt-5 text-[18px] font-bold">{title}</h3>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex gap-3 text-[14px] leading-6 text-neutral-700"
          >
            <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-[#108C2E]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenshotSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20 rounded-3xl bg-[#F7F8FA] px-4 py-10 sm:px-8 lg:px-10"
    >
      <p className="text-center text-[16px] text-neutral-700">
        หน้าจอการใช้งาน
      </p>

      <h2 className="mt-2 text-center text-3xl font-bold text-[#ED002B] sm:text-4xl">
        Tracking Server Screens
      </h2>

      <div className="mx-auto mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

      <ScreenGroup
        icon={Monitor}
        title="รูปแบบในคอมพิวเตอร์"
        desc="หน้าจอระบบ Tracking Server สำหรับใช้งานผ่านคอมพิวเตอร์"
        items={desktopScreens}
        type="desktop"
      />

      <AppIntroSection />

      <ScreenGroup
        icon={Smartphone}
        title="รูปแบบโทรศัพท์"
        desc="ระบบสามารถใช้งานผ่านแอป RKTRACK บนโทรศัพท์มือถือ เพื่อติดตามตำแหน่งรถ ดูสถานะรถ เส้นทางย้อนหลัง และข้อมูลสำคัญได้สะดวกทุกที่"
        items={mobileScreens}
        type="mobile"
        className="mt-10"
      />
    </motion.div>
  );
}

function AppIntroSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[32px] bg-[#F7F8FA] p-4 sm:max-w-[360px]">
          <Image
            src="/product/real-time/phone/app.png"
            alt="RKTRACK App"
            width={360}
            height={720}
            className="h-auto w-full rounded-[24px] object-cover"
          />
        </div>

        <div>
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
            <Smartphone size={30} strokeWidth={2.2} />
          </div>

          <h3 className="mt-5 text-[28px] font-bold text-black sm:text-[34px]">
            แอป RKTRACK
          </h3>

          <p className="mt-4 text-[15px] leading-8 text-neutral-700 sm:text-[17px]">
            รองรับการใช้งานผ่านแอป RKTRACK บนโทรศัพท์มือถือ
            ช่วยให้ผู้ใช้งานสามารถติดตามรถแบบ Real Time ตรวจสอบตำแหน่ง ดูสถานะรถ
            และเรียกดูข้อมูลสำคัญได้ง่ายจากมือถือ
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "ดูตำแหน่งรถแบบ Real Time",
              "ตรวจสอบสถานะรถผ่านมือถือ",
              "ดูเส้นทางและข้อมูลการเดินทาง",
              "ใช้งานง่าย สะดวกทุกที่",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-[#F7F8FA] px-4 py-3 text-[14px] leading-6 text-neutral-800"
              >
                <span className="mr-2 text-[#ED002B]">•</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ScreenGroup({
  icon: Icon,
  title,
  desc,
  items,
  type,
  className = "",
}: {
  icon: typeof Monitor;
  title: string;
  desc: string;
  items: {
    title: string;
    image: string;
  }[];
  type: "desktop" | "mobile";
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mt-10 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8 ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
          <Icon size={30} strokeWidth={2.2} />
        </div>

        <div>
          <h3 className="text-[24px] font-bold text-black sm:text-[28px]">
            {title}
          </h3>

          <p className="mt-1 text-[14px] leading-6 text-neutral-600 sm:text-[16px]">
            {desc}
          </p>
        </div>
      </div>

      <div
        className={`mt-8 grid gap-4 sm:gap-5 ${
          type === "desktop"
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
        }`}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.04,
            }}
            className="overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-[#F7F8FA]"
          >
            <div
              className={`relative bg-white ${
                type === "desktop" ? "aspect-[16/9]" : "aspect-[9/16]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={
                  type === "desktop"
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 20vw"
                }
                className="object-cover"
              />
            </div>

            <div className="px-3 py-3 sm:px-4 sm:py-4">
              <p className="text-center text-[12px] font-bold leading-5 text-[#ED002B] sm:text-[16px] sm:leading-6">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
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
      className="h-full min-w-0 break-words rounded-2xl border border-neutral-300 px-3 py-4 text-[13px] leading-6 text-neutral-800 sm:px-6 sm:py-5 sm:text-[16px] sm:leading-8"
    >
      <div className="flex items-start gap-2">
        <span className="mt-[2px] shrink-0">•</span>
        <span className="min-w-0 break-words">{text}</span>
      </div>
    </motion.div>
  );
}
