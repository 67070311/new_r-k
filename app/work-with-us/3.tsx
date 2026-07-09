"use client";

import { motion } from "framer-motion";
import { BatteryCharging, MapPin, RadioTower, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: RadioTower,
    title: "รองรับ 3G",
    desc: "เชื่อมต่อเสถียร",
  },
  {
    icon: MapPin,
    title: "ติดตามแม่นยำ",
    desc: "เรียลไทม์",
  },
  {
    icon: BatteryCharging,
    title: "แบตเตอรี่สำรอง",
    desc: "ในตัว",
  },
  {
    icon: ShieldCheck,
    title: "ติดตั้งง่าย",
    desc: "ใช้งานได้ทันที",
  },
];

export default function BenefitSection() {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[17px] font-medium text-black md:text-[18px]">
            สวัสดิการ
          </h2>

          <div className="mt-3 h-[2px] w-[60px] bg-[#ED002B]" />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#FFF0F3] md:h-[58px] md:w-[58px]">
                  <Icon className="h-6 w-6 text-[#ED002B]" />
                </div>

                <div>
                  <h3 className="text-[14px] font-medium leading-tight text-black md:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[12px] font-normal leading-5 text-[#555] md:text-[13px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
