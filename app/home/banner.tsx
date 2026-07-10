"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-white pt-[82px]">
      {/* Background */}
      <img
        src="/home/banner/bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto grid min-h-[560px] max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-12 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-20 lg:py-0">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-[540px] text-center lg:mx-0 lg:text-left"
        >
          <h1 className="text-[32px] font-semibold leading-[1.35] tracking-[-0.025em] text-black sm:text-[36px] md:text-[40px] lg:text-[42px]">
            ระบบ <span className="text-[#ED002B]">GPS Tracking</span>
            <br className="hidden sm:block" />
            มาตรฐานระดับประเทศ
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-14 bg-[#ED002B] lg:mx-0 lg:mt-7" />

          <p className="mt-5 text-[16px] font-normal leading-[1.75] text-black sm:text-[17px] md:text-[18px] lg:text-[19px]">
            ติดตามรถและทรัพย์สินของคุณแบบ Real Time
            <br className="hidden sm:block" />
            แม่นยำ ปลอดภัย เชื่อถือได้ 24 ชั่วโมง
          </p>

          {/* Certificate */}
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start lg:gap-5">
            <img
              src="/home/banner/logo.png"
              alt="ตราหนังสือรับรองจากกรมขนส่ง"
              className="h-[60px] w-[60px] shrink-0 rounded-full object-contain sm:h-[66px] sm:w-[66px]"
            />

            <p className="text-[16px] font-medium leading-[1.7] text-[#ED002B] sm:text-[17px] lg:text-[18px]">
              บริษัทได้รับหนังสือรับรองถูกต้องจากกรม
              <br className="hidden sm:block" />
              ขนส่งเรียบร้อยแล้ว
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start lg:gap-7">
            {/* สินค้าและบริการ */}
            <Link
              href="/prodeuct-service/car-program/real-time"
              className="flex h-[48px] w-full max-w-[190px] items-center justify-center rounded-full bg-[#ED002B] text-[15px] font-medium text-white shadow-[0_10px_26px_rgba(237,0,43,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D90027] hover:shadow-[0_13px_30px_rgba(237,0,43,0.3)] sm:h-[50px] sm:text-[16px]"
            >
              สินค้าและบริการ
            </Link>

            {/* ติดต่อเรา */}
            <Link
              href="/contact"
              className="flex h-[48px] w-full max-w-[190px] items-center justify-center rounded-full border border-[#ED002B] bg-white text-[15px] font-medium text-[#ED002B] shadow-[0_10px_26px_rgba(237,0,43,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_13px_30px_rgba(237,0,43,0.18)] sm:h-[50px] sm:text-[16px]"
            >
              ติดต่อเรา
            </Link>
          </div>
        </motion.div>

        {/* Vehicle Image */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="relative flex items-center justify-center lg:h-full lg:translate-x-14 lg:justify-end"
        >
          <img
            src="/home/banner/new-banner.png"
            alt="รถที่รองรับระบบ GPS Tracking"
            className="w-full max-w-[560px] object-contain sm:max-w-[640px] lg:w-[760px] lg:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
