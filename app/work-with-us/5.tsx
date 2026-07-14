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
    text: "info@r-ktechnologygps.com",
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
          className="rounded-2xl bg-neutral-50 p-6 sm:p-7 lg:p-8"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_2.8fr]">
            {/* Left */}
            <div>
              <h2 className="whitespace-nowrap text-[22px] font-semibold leading-tight text-black sm:text-[26px] lg:text-[30px] xl:text-[32px]">
                สนใจร่วมธุรกิจกับเรา
              </h2>

              <p className="mt-3 whitespace-nowrap text-[15px] leading-7 text-neutral-700">
                สอบถามข้อมูลเพิ่มเติมได้ที่
              </p>
            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-[0.9fr_1.45fr_1.65fr]">
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
                    className="flex items-center gap-4 rounded-xl bg-white px-5 py-5 shadow-sm"
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="shrink-0 text-neutral-900"
                    />

                    <p className="whitespace-nowrap text-[14px] font-medium text-neutral-900 lg:text-[15px] xl:text-[16px]">
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
