"use client";

import { motion } from "framer-motion";
import { MapPinned, Route, ShieldCheck } from "lucide-react";

export default function Section3() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home/3/newbg.png')", // เปลี่ยนเป็นรูปใหม่ของคุณ
      }}
    >
      {/* Overlay เพื่อให้อ่านข้อความง่าย */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8F0008]/75 via-[#B9000B]/35 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[560px] max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-[560px] rounded-[28px] border border-white/15 bg-white/10 p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8"
        >
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold tracking-wide">
            R&amp;K TECHNOLOGY GPS
          </div>

          <h2 className="text-[28px] font-bold leading-[1.3] sm:text-[34px] lg:text-[42px]">
            ผู้เชี่ยวชาญระบบ
            <br />
            GPS Tracking ทั่วประเทศ
          </h2>

          <p className="mt-5 text-[14px] leading-8 text-white/95 sm:text-[15px]">
            บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด เริ่มก่อตั้งตั้งแต่ปี
            2547 จำหน่ายและติดตั้งระบบ GPS Tracking สำหรับรถทุกชนิด
            พร้อมระบบติดตามแบบ Real Time ครอบคลุมทั่วประเทศ
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <MapPinned className="mb-3 h-5 w-5" />
              <p className="text-[13px] font-semibold leading-6">
                ติดตามตำแหน่ง
                <br />
                Real Time
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <Route className="mb-3 h-5 w-5" />
              <p className="text-[13px] font-semibold leading-6">
                ดูเส้นทาง
                <br />
                ย้อนหลัง
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <ShieldCheck className="mb-3 h-5 w-5" />
              <p className="text-[13px] font-semibold leading-6">
                รายงาน
                <br />
                การใช้งานรถ
              </p>
            </div>
          </div>

          <p className="mt-7 text-[15px] font-bold leading-7 sm:text-[16px]">
            เราเลือกใช้ระบบแผนที่ที่มีความละเอียดที่สุดในประเทศไทย
          </p>
        </motion.div>

        {/* Right (เว้นไว้เพราะใช้ Background แล้ว) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
