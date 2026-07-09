"use client";

import { motion } from "framer-motion";
import { ClipboardList, MapPin, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "ติดตามแบบเรียลไทม์",
    desc: "อัปเดตตำแหน่งทุกวินาที",
    icon: MapPin,
    color: "text-[#00A84F]",
  },
  {
    title: "ปลอดภัย เชื่อถือได้",
    desc: "มาตรฐานระดับสากล",
    icon: ShieldCheck,
    color: "text-[#ED002B]",
  },
  {
    title: "รายงานครบถ้วน",
    desc: "วิเคราะห์ข้อมูลเชิงลึก",
    icon: ClipboardList,
    color: "text-[#F5A400]",
  },
];

export default function HomeFeatureSection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-20 lg:py-16">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className="flex min-h-[130px] flex-col items-center justify-center rounded-xl bg-white px-4 py-5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] lg:min-h-[150px] lg:px-6 lg:py-7"
            >
              <Icon
                className={`h-7 w-7 stroke-[2.2] lg:h-8 lg:w-8 ${item.color}`}
              />

              <h3 className="mt-3 text-[16px] font-semibold leading-snug text-black lg:mt-4 lg:text-[20px]">
                {item.title}
              </h3>

              <p className="mt-1 text-[13px] leading-relaxed text-gray-600 lg:mt-2 lg:text-[16px]">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
