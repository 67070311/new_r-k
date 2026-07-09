"use client";

import { Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const jobs = [
  "พนักงานขายอิสระทั่วประเทศ (Sales Freelance)",
  "ร้านขายอุปกรณ์ประดับยนต์",
  "Dealer (ประจำทุกภาค)",
];

export default function WorkSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-black">
              ตำแหน่งที่เปิดรับ
            </h2>

            <div className="mt-8 space-y-7">
              <div className="text-lg leading-9 text-black">
                <span>1. รับสมัครพนักงานขายทั่วประเทศ </span>
                <span className="text-[#E60012]">จำหน่ายระบบติดตามรถยนต์</span>
                <br />
                <span className="text-[#E60012]">(GPS Tracking)</span>
              </div>

              <div className="text-lg leading-9 text-black">
                <span>2. รับสมัครตัวแทน </span>
                <span className="text-[#E60012]">
                  จำหน่ายระบบติดตามรถยนต์ (GPS)
                </span>
              </div>
            </div>

            <ol className="mt-8 space-y-2 text-[17px] leading-8 text-neutral-700">
              {jobs.map((job, index) => (
                <li key={job}>
                  {index + 1}. {job}
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-xl"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-red-50">
                <Megaphone
                  className="text-[#E60012]"
                  size={34}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold leading-snug text-black">
                  ไม่จำเป็นต้องมีประสบการณ์เกี่ยวกับระบบ{" "}
                  <span className="text-[#E60012]">GPS</span>
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-neutral-600">
                  มีเจ้าหน้าที่สอนการใช้งานให้ใช้เวลาเพียง 1 วัน
                  สามารถเริ่มขายได้ทันที ระบบใช้งานง่าย
                  พร้อมทีมงานคอยให้คำแนะนำตลอด
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
