"use client";

import { motion } from "framer-motion";

export default function Section2() {
  const items = [
    {
      image: "/home/2/1.png",
      title: "รถโดยสารสาธารณะ และรถตู้โดยสาร",
    },
    {
      image: "/home/2/2.png",
      title: "รถบรรทุกขนส่งสินค้า ตั้งแต่ 10 ล้อขึ้นไป",
    },
    {
      image: "/home/2/3.png",
      title: "รถบรรทุกขนส่งสินค้าวัตถุอันตราย",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat pb-20 pt-10 sm:pb-24 sm:pt-12 md:pt-14 lg:pb-28 lg:pt-16"
      style={{
        backgroundImage: "url('/home/2/bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-[20px] font-semibold leading-tight text-black sm:text-[22px] lg:text-[24px]">
            ระบบ GPS ติดตามรถ
          </h2>

          <p className="mt-2 text-[13px] font-normal leading-relaxed text-black sm:text-[15px] lg:text-[16px]">
            พร้อมเครื่องอ่านบัตรใบขับขี่ก่อนนำรถมาต่อทะเบียน
          </p>

          <div className="mx-auto mt-3 h-[2px] w-14 rounded-full bg-[#ED002B]" />
        </motion.div>

        <div className="mt-9 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5 lg:mt-12 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-auto w-full max-w-[230px] object-contain transition duration-300 hover:scale-105 sm:max-w-[210px] md:max-w-[250px] lg:max-w-[310px]"
              />

              <h3 className="mt-6 text-[14px] font-semibold leading-[1.45] text-black sm:text-[13px] md:text-[15px] lg:mt-7 lg:text-[17px]">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
