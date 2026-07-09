"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Body() {
  return (
    <section className="bg-white px-6 py-14 md:px-10 lg:px-20 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ED002B]/10">
              <MapPin className="h-8 w-8 text-[#ED002B]" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#111]">
              สำนักงานใหญ่
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#ED002B]" />

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
              บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด
              <br />
              เลขที่ 88/180 หมู่ 6 ตำบลคูบางหลวง
              <br />
              อำเภอลาดหลุมแก้ว จังหวัดปทุมธานี 12140
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
