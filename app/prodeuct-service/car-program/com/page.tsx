"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
  "ติดตั้งอุปกรณ์ GPS Tracker ไว้ที่รถหรือยานพาหนะที่ต้องการติดตาม",
  "GPS Tracker รับสัญญาณจากดาวเทียม GPS เพื่อคำนวณตำแหน่งของรถ",
  "อุปกรณ์เชื่อมต่ออินเทอร์เน็ตผ่านเครือข่ายมือถือ เช่น AIS, TRUE หรือ DTAC และส่งข้อมูลไปยังเซิร์ฟเวอร์แบบ Real Time ทุก ๆ 30 วินาที",
  "ผู้ใช้งานเข้าสู่ระบบผ่านเว็บไซต์บนคอมพิวเตอร์ เพื่อตรวจสอบตำแหน่งรถ เส้นทางย้อนหลัง และรายงานต่าง ๆ",
];

const featuresLeft = [
  "ไม่ต้องติดตั้งโปรแกรมลงในคอมพิวเตอร์",
  "ใช้งานผ่าน Web Browser ได้ทันที",
  "รองรับคอมพิวเตอร์ทั้ง Windows และ Apple Mac",
  "สามารถใช้งานพร้อมกันได้หลายผู้ใช้",
  "ติดตามรถและตรวจสอบข้อมูลได้แบบ Real Time",
];

const featuresRight = [
  "ไม่ต้องติดตั้ง Server ภายในบริษัท",
  "ไม่ต้องดูแลระบบและฐานข้อมูลด้วยตนเอง",
  "ไม่ต้อง Upgrade โปรแกรมด้วยตนเอง",
  "ไม่ต้อง Update แผนที่ด้วยตนเอง",
  "ระบบ Web Base Application ใช้งานง่ายและสะดวก",
];

const developmentItems = [
  "สามารถปรับเปลี่ยน แก้ไข และเพิ่มเติม Function ได้ตามความต้องการ",
  "โปรแกรมใช้งานง่าย ไม่ซับซ้อน และมี Function ครบถ้วน",
  "ระบบได้รับการพัฒนาอย่างต่อเนื่อง พร้อม Feature ใหม่อยู่เสมอ",
];

const mapItems = [
  "แผนที่ออนไลน์โดย Longdo Map",
  "ดูตำแหน่งรถแบบ Real Time",
  "ดูเส้นทางย้อนหลังของรถแต่ละคัน",
  "ตรวจสอบสถานะรถผ่านหน้าจอคอมพิวเตอร์",
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
  "/product/real-time/1.png",
  "/product/real-time/2.png",
  "/product/real-time/3.png",
  "/product/real-time/4.png",
  "/product/real-time/5.png",
  "/product/real-time/6.png",
];

const highlights = [
  {
    icon: Globe,
    title: "Web Base",
    desc: "ใช้งานผ่านเว็บไซต์ ไม่ต้องติดตั้งโปรแกรม",
  },
  {
    icon: Clock,
    title: "Real Time",
    desc: "ส่งข้อมูลตำแหน่งทุก ๆ 30 วินาที",
  },
  {
    icon: Server,
    title: "Cloud Server",
    desc: "จัดเก็บข้อมูลบน Server ที่พร้อมใช้งาน",
  },
  {
    icon: Monitor,
    title: "Computer",
    desc: "รองรับคอมพิวเตอร์ Windows และ Apple Mac",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function ComputerTrackingPage() {
  return (
    <main className="bg-white pt-[82px] text-black">
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
        {/* Hero */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="overflow-hidden rounded-2xl bg-[#F7F8FA]"
          >
            <Image
              src="/product/real-time/head.png"
              alt="ระบบ GPS ติดตามรถผ่านคอมพิวเตอร์"
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
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ED002B]/10 px-4 py-2 text-[14px] font-semibold text-[#ED002B]">
              <Monitor size={18} />
              ระบบสำหรับคอมพิวเตอร์
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              ระบบติดตามรถ
              <br />
              ผ่านคอมพิวเตอร์
            </h1>

            <p className="mt-5 text-[16px] leading-8 text-neutral-700 sm:text-[18px]">
              ระบบ GPS Tracking แบบ Web Base สำหรับติดตามตำแหน่งรถแบบ Real Time
              ตรวจสอบความเร็ว ดูเส้นทางย้อนหลัง
              และเรียกดูรายงานผ่านคอมพิวเตอร์ได้อย่างสะดวก
            </p>

            <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://rkgps.com/tracking/index.php?page=login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#ED002B] px-7 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(237,0,43,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D90027] hover:shadow-[0_14px_30px_rgba(237,0,43,0.28)]"
              >
                เข้าสู่ระบบติดตามรถ
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/prodeuct-service/car-program/mobile"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 text-[15px] font-semibold text-black transition-all duration-300 hover:border-[#ED002B] hover:bg-[#FFF3F5] hover:text-[#ED002B]"
              >
                <Smartphone size={19} />
                ดูระบบสำหรับโทรศัพท์มือถือ
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-16 lg:grid-cols-4">
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
                className="rounded-2xl border border-neutral-200 bg-white p-5 text-center sm:p-6"
              >
                <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B] sm:h-[72px] sm:w-[72px]">
                  <Icon size={31} strokeWidth={2.2} />
                </div>

                <h3 className="mt-4 text-[15px] font-bold sm:text-[16px]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-neutral-600 sm:text-[14px]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-12 text-[15px] leading-8 text-neutral-800 sm:text-[16px] lg:mt-14"
        >
          ระบบ GPS Tracking ช่วยให้ผู้ใช้งานสามารถติดตามรถและทรัพย์สินได้แบบ
          Real Time ผ่านเว็บไซต์ ข้อมูลจากอุปกรณ์ GPS Tracker
          จะถูกส่งไปจัดเก็บบน Server ทำให้ผู้ใช้งานสามารถตรวจสอบตำแหน่งรถ
          ความเร็ว สถานะการทำงาน เส้นทางย้อนหลัง และรายงานต่าง ๆ
          ผ่านคอมพิวเตอร์ได้จากทุกสถานที่ที่มีอินเทอร์เน็ต
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

        <MobilePageBanner />
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
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
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
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
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

        <FeatureBox
          icon={FileText}
          title="รายงานสำหรับผู้ใช้งาน"
          items={reportItems}
        />
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
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
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
        title="ระบบติดตามรถบนคอมพิวเตอร์"
        desc="ติดตามตำแหน่งรถแบบ Real Time ตรวจสอบสถานะ ดูเส้นทางย้อนหลัง และเรียกดูรายงานผ่านหน้าจอคอมพิวเตอร์"
        images={desktopScreens}
      />
    </motion.div>
  );
}

function ScreenGroup({
  icon: Icon,
  title,
  desc,
  images,
}: {
  icon: typeof Monitor;
  title: string;
  desc: string;
  images: string[];
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mt-10 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8"
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

      <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <motion.div
            key={image}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.04,
            }}
            className="overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-white"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function MobilePageBanner() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mt-20 overflow-hidden rounded-3xl bg-[#ED002B] px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-12"
    >
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-white/15">
            <Smartphone size={30} strokeWidth={2.2} />
          </div>

          <div>
            <p className="text-[14px] font-medium text-white/75">
              ใช้งานผ่านโทรศัพท์มือถือ
            </p>

            <h2 className="mt-1 text-[26px] font-bold sm:text-[32px]">
              ต้องการดูระบบติดตามรถบนมือถือ?
            </h2>

            <p className="mt-2 max-w-[680px] text-[14px] leading-7 text-white/85 sm:text-[16px]">
              ดูรายละเอียดแอป RKTRACK สำหรับติดตามตำแหน่งรถ
              ตรวจสอบสถานะและข้อมูลการเดินทางผ่านโทรศัพท์มือถือ
            </p>
          </div>
        </div>

        <Link
          href="/prodeuct-service/car-program/mobile"
          className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-[#ED002B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF3F5]"
        >
          ดูระบบบนโทรศัพท์
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
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
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
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
