"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  Clock,
  Cloud,
  FileText,
  History,
  LocateFixed,
  Map,
  Navigation,
  Server,
  Smartphone,
} from "lucide-react";

const steps = [
  "ติดตั้งอุปกรณ์ GPS Tracker ไว้ที่รถหรือยานพาหนะที่ต้องการติดตาม",
  "GPS Tracker รับสัญญาณจากดาวเทียม เพื่อคำนวณพิกัดตำแหน่งของรถ",
  "อุปกรณ์ส่งข้อมูลตำแหน่งและสถานะรถผ่านเครือข่ายมือถือไปยัง Server แบบ Real Time",
  "ผู้ใช้งานเปิดแอป RKTRACK บนโทรศัพท์มือถือ เพื่อตรวจสอบตำแหน่งรถและข้อมูลการเดินทาง",
];

const featuresLeft = [
  "ติดตามตำแหน่งรถผ่านโทรศัพท์มือถือ",
  "ดูตำแหน่งรถแบบ Real Time",
  "ตรวจสอบสถานะรถแต่ละคัน",
  "ดูเส้นทางย้อนหลังได้ทุกที่",
  "รองรับโทรศัพท์ระบบ iOS และ Android",
];

const featuresRight = [
  "เข้าใช้งานระบบได้อย่างสะดวก",
  "ไม่ต้องติดตั้ง Server ภายในบริษัท",
  "ข้อมูลถูกจัดเก็บบน Cloud Server",
  "ระบบได้รับการพัฒนาและอัปเดตอย่างต่อเนื่อง",
  "รองรับการใช้งานผ่าน Internet และเครือข่ายมือถือ",
];

const trackingItems = [
  "แสดงตำแหน่งรถบนแผนที่",
  "ติดตามรถแบบ Real Time",
  "ดูสถานะการเคลื่อนที่และการจอดรถ",
  "ตรวจสอบความเร็วของรถ",
  "เลือกดูรถแต่ละคันได้อย่างสะดวก",
];

const historyItems = [
  "ดูเส้นทางการเดินทางย้อนหลัง",
  "ตรวจสอบช่วงเวลาเริ่มต้นและสิ้นสุด",
  "ดูตำแหน่งที่รถเคยเดินทางผ่าน",
  "ตรวจสอบระยะทางและข้อมูลการเดินทาง",
  "ช่วยวิเคราะห์การใช้งานรถแต่ละคัน",
];

const notificationItems = [
  "แจ้งเตือนสถานะสำคัญของรถ",
  "แจ้งเตือนเมื่อรถขาดการติดต่อ",
  "แจ้งเตือนความเร็วเกินกำหนด",
  "ตรวจสอบข้อมูลอุปกรณ์ GPS",
  "ติดตามเหตุการณ์สำคัญผ่านโทรศัพท์มือถือ",
];

const mobileScreens = [
  "/product/real-time/phone/1.png",
  "/product/real-time/phone/2.png",
  "/product/real-time/phone/3.png",
  "/product/real-time/phone/4.png",
  "/product/real-time/phone/5.png",
  "/product/real-time/phone/6.png",
  "/product/real-time/phone/7.png",
  "/product/real-time/phone/8.png",
  "/product/real-time/phone/9.png",
  "/product/real-time/phone/10.png",
];

const highlights = [
  {
    icon: LocateFixed,
    title: "Real Time",
    desc: "ติดตามตำแหน่งรถแบบ Real Time",
  },
  {
    icon: Navigation,
    title: "Live Location",
    desc: "ดูตำแหน่งและสถานะรถบนแผนที่",
  },
  {
    icon: History,
    title: "Route History",
    desc: "ตรวจสอบเส้นทางย้อนหลังได้สะดวก",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "ใช้งานผ่านแอปบนโทรศัพท์มือถือ",
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

export default function MobileTrackingPage() {
  return (
    <main className="bg-white pt-[82px] text-black">
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
        {/* Hero */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mx-auto w-full max-w-[430px]"
          >
            <div className="overflow-hidden rounded-[36px] bg-[#F7F8FA] p-4 sm:p-5">
              <Image
                src="/product/real-time/app/app.png"
                alt="แอป RKTRACK สำหรับติดตามรถบนโทรศัพท์มือถือ"
                width={430}
                height={780}
                className="h-auto w-full rounded-[28px] object-cover"
                priority
              />
            </div>
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
              <Smartphone size={18} />
              ระบบสำหรับโทรศัพท์มือถือ
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              แอปติดตามรถ
              <br />
              RKTRACK
            </h1>

            <p className="mt-5 text-[16px] leading-8 text-neutral-700 sm:text-[18px]">
              ระบบติดตามรถผ่านโทรศัพท์มือถือ ช่วยให้คุณตรวจสอบตำแหน่งรถแบบ Real
              Time ดูสถานะรถ เส้นทางย้อนหลัง
              และข้อมูลสำคัญได้อย่างสะดวกจากทุกที่
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
                href="/prodeuct-service/car-program/com"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 text-[15px] font-semibold text-black transition-all duration-300 hover:border-[#ED002B] hover:bg-[#FFF3F5] hover:text-[#ED002B]"
              >
                ดูระบบสำหรับคอมพิวเตอร์
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
          แอป RKTRACK ช่วยให้ผู้ใช้งานสามารถตรวจสอบรถผ่านโทรศัพท์มือถือได้แบบ
          Real Time ข้อมูลตำแหน่งจากอุปกรณ์ GPS Tracker จะถูกส่งไปยัง Server
          และแสดงผลบนแอป ทำให้สามารถดูตำแหน่งรถ สถานะการทำงาน ความเร็ว
          และเส้นทางย้อนหลังได้สะดวก โดยไม่จำเป็นต้องอยู่หน้าคอมพิวเตอร์
        </motion.p>

        <ProcessSection />

        <SpecSection
          eyebrow="Mobile Application"
          title="คุณสมบัติหลักของแอป RKTRACK"
          leftItems={featuresLeft}
          rightItems={featuresRight}
          className="mt-20"
        />

        <FeatureGroupSection />

        <ScreenshotSection />

        <ComputerPageBanner />
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
        Mobile Real Time Tracking
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
      <p className="text-[16px] text-neutral-700">
        ฟังก์ชันการใช้งานบนโทรศัพท์
      </p>

      <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
        Mobile App Features
      </h2>

      <div className="mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <FeatureBox icon={Map} title="ติดตามตำแหน่งรถ" items={trackingItems} />

        <FeatureBox
          icon={History}
          title="ดูเส้นทางย้อนหลัง"
          items={historyItems}
        />

        <FeatureBox
          icon={BellRing}
          title="สถานะและการแจ้งเตือน"
          items={notificationItems}
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
  icon: typeof Map;
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
        RKTRACK App Screens
      </h2>

      <div className="mx-auto mt-5 h-[2px] w-[74px] bg-[#ED002B]" />

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
            <Smartphone size={30} strokeWidth={2.2} />
          </div>

          <div>
            <h3 className="text-[24px] font-bold text-black sm:text-[28px]">
              แอปติดตามรถบนโทรศัพท์มือถือ
            </h3>

            <p className="mt-1 text-[14px] leading-6 text-neutral-600 sm:text-[16px]">
              ตรวจสอบตำแหน่งรถ สถานะรถ เส้นทางย้อนหลัง
              และข้อมูลการเดินทางผ่านแอป RKTRACK
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-5">
          {mobileScreens.map((image, index) => (
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
              <div className="relative aspect-[9/16]">
                <Image
                  src={image}
                  alt={`หน้าจอแอป RKTRACK ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ComputerPageBanner() {
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
            <Server size={30} strokeWidth={2.2} />
          </div>

          <div>
            <p className="text-[14px] font-medium text-white/75">
              ใช้งานผ่านเว็บไซต์
            </p>

            <h2 className="mt-1 text-[26px] font-bold sm:text-[32px]">
              ต้องการดูระบบสำหรับคอมพิวเตอร์?
            </h2>

            <p className="mt-2 max-w-[680px] text-[14px] leading-7 text-white/85 sm:text-[16px]">
              ดูรายละเอียดระบบ Tracking Server สำหรับติดตามรถ ดูเส้นทางย้อนหลัง
              และเรียกดูรายงานผ่านคอมพิวเตอร์
            </p>
          </div>
        </div>

        <Link
          href="/prodeuct-service/car-program/com"
          className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-[#ED002B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF3F5]"
        >
          ดูระบบบนคอมพิวเตอร์
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
