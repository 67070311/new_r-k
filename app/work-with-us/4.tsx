"use client";

import { motion } from "framer-motion";
import { Store, UserRound } from "lucide-react";

const cards = [
  {
    icon: UserRound,
    title: "Dealer",
    description:
      "ยินดีต้อนรับสู่ร้านค้าพันธมิตรตัวแทนจำหน่าย อุปกรณ์ติดตาม และระบบจัดการยานพาหนะครบวงจร ค้นหาสินค้าคุณภาพและบริการที่พร้อมการสนับสนุนจากผู้เชี่ยวชาญ",
    highlight: "สอบถามข้อมูลเพิ่มเติมได้ที่ HOTLINE 066-3038117",
  },
  {
    icon: Store,
    title: "Independent sales",
    description:
      "เปิดโอกาสธุรกิจให้เป็นเจ้าของร้านของคุณเอง อิสระ ลงทุนคุ้ม ไม่ต้องทำงานประจำ",
  },
];

export default function DealerSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-[22px] font-semibold leading-snug text-black sm:text-[24px] lg:text-[26px]">
            ตัวแทนจำหน่าย
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-20 bg-[#E60012]" />
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_8px_28px_rgba(0,0,0,0.08)] sm:p-6 lg:rounded-3xl lg:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-50 sm:h-18 sm:w-18 lg:h-20 lg:w-20">
                    <Icon
                      size={30}
                      strokeWidth={2}
                      className="text-[#E60012] sm:size-[34px] lg:size-[38px]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[21px] font-semibold leading-snug text-black sm:text-[23px] lg:text-[25px]">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-[14px] font-normal leading-7 text-neutral-800 sm:text-[15px] lg:text-[16px] lg:leading-8">
                      {card.description}
                    </p>

                    {card.highlight && (
                      <p className="mt-5 text-[14px] font-semibold leading-7 text-[#E60012] sm:text-[15px] lg:text-[16px]">
                        {card.highlight}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
