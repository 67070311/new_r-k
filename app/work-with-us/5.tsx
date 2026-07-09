"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Smartphone } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    text: "02-1980006",
  },
  {
    icon: Smartphone,
    text: "086-3004117, 086-8898593",
  },
  {
    icon: Mail,
    text: "info@r-ktechnology.com",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl bg-neutral-50 p-5 sm:p-6 lg:p-8"
        >
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_3fr]">
            <div>
              <h2 className="text-[24px] font-semibold leading-snug text-black sm:text-[28px] lg:text-[32px]">
                สนใจร่วมธุรกิจกับเรา
              </h2>

              <p className="mt-2 text-[15px] font-normal leading-7 text-neutral-800 sm:text-[16px]">
                สอบถามข้อมูลเพิ่มเติมได้ที่
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <motion.div
                    key={contact.text}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-4 rounded-xl bg-white px-5 py-5 shadow-sm sm:px-4 lg:px-6"
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.9}
                      className="shrink-0 text-neutral-900"
                    />

                    <p className="text-[14px] font-normal leading-6 text-neutral-900 sm:text-[13px] md:text-[14px] lg:text-[18px]">
                      {contact.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
