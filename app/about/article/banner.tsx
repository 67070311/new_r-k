"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative -mt-[72px] h-[420px] overflow-hidden lg:-mt-[82px] lg:h-[520px]">
      {/* Background */}
      <img
        src="/about/image/bg.png"
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 pt-[72px] lg:px-20 lg:pt-[82px]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-[15px] text-white lg:mb-5 lg:text-[20px]">
            บทความ
          </p>

          <h1 className="text-[34px] font-bold leading-tight text-white lg:text-[54px]">
            <>
              News & <br />
              Articles
            </>
          </h1>

          <div className="mt-4 h-[3px] w-[70px] bg-[#ED002B] lg:mt-6 lg:w-[90px]" />
        </motion.div>
      </div>
    </section>
  );
}
