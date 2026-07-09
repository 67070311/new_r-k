"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 md:px-10 lg:flex-row lg:justify-center lg:gap-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-[360px] shrink-0 md:max-w-[430px] lg:max-w-[470px]"
        >
          <img
            src="/work-with-us/team.png"
            alt="Work With Us"
            className="w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-[500px] text-center lg:text-left"
        >
          <p className="mb-3 text-[14px] text-[#444] md:text-[15px]">
            ร่วมเป็นส่วนหนึ่งกับเรา
          </p>

          <h2 className="text-[26px] font-bold leading-tight text-[#1F1F1F] md:text-[30px] lg:text-[32px]">
            เปิดรับบุคลากรรุ่นใหม่
          </h2>

          <h3 className="mt-2 text-[22px] font-bold leading-snug text-[#ED002B] md:text-[26px] lg:text-[28px]">
            เพื่อรองรับการเติบโตขององค์กรในอนาคต
          </h3>

          <p className="mt-5 text-[15px] leading-8 text-[#555] md:mt-6 md:text-[16px]">
            หากคิดว่า คุณเป็นคนเก่งและมีความสามารถ
            <br className="hidden md:block" />
            หรือมีโครงการที่จะสามารถเพิ่มยอดขายให้กับบริษัทได้
            <br className="hidden md:block" />
            ทางเราก็พร้อมที่จะรับข้อเสนอและเงื่อนไขจากคุณได้ในทันที
            <br className="hidden md:block" />
            โดยมีรายละเอียดดังต่อไปนี้
          </p>

          <div className="mx-auto mt-7 h-[3px] w-[80px] bg-[#ED002B] md:mt-8 md:w-[90px] lg:mx-0" />
        </motion.div>
      </div>
    </section>
  );
}
