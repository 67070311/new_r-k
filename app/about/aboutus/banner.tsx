"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative -mt-[70px] overflow-hidden bg-white">
      <img
        src="/home/banner/bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto grid min-h-[640px] max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pt-[70px] md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto -translate-y-[35px] max-w-[540px] text-center lg:mx-0 lg:text-left"
        >
          <h1 className="text-[32px] font-semibold leading-[1.35] tracking-[-0.025em] text-black sm:text-[36px] md:text-[40px] lg:text-[42px]">
            Company Backgroud <br className="hidden sm:block" />
            มาตรฐานระดับประเทศ
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-14 bg-[#ED002B] lg:mx-0 lg:mt-7" />

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start lg:gap-5">
            <img
              src="/home/banner/logo.png"
              alt="หนังสือรับรอง"
              className="h-[60px] w-[60px] shrink-0 rounded-full object-contain sm:h-[66px] sm:w-[66px]"
            />

            <p className="text-[16px] font-medium leading-[1.7] text-[#ED002B] sm:text-[17px] lg:text-[18px]">
              บริษัทได้รับหนังสือรับรองถูกต้องจากกรม
              <br className="hidden sm:block" />
              ขนส่งเรียบร้อยแล้ว
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="relative flex -translate-y-[35px] items-center justify-center lg:h-full lg:translate-x-14 lg:justify-end"
        >
          <img
            src="/about/aboutus/banner.png"
            alt="GPS Tracking Vehicles"
            className="w-full max-w-[560px] object-contain sm:max-w-[640px] lg:w-[760px] lg:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
