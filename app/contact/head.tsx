"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Smartphone } from "lucide-react";

export default function ContactHead() {
  return (
    <section className="bg-white px-6 py-14 md:px-10 md:py-16 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/contact/contact.png"
            alt="Contact"
            className="w-full object-contain"
          />

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <Mail className="h-7 w-7 text-[#222]" />
              <span className="text-[18px] text-[#222]">
                info@r-ktechnology.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Smartphone className="h-7 w-7 text-[#222]" />
              <span className="text-[18px] text-[#222]">
                086-3004117, 086-8898593
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-7 w-7 text-[#222]" />
              <span className="text-[18px] text-[#222]">02-1980006</span>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-7 text-[24px] font-medium text-black md:text-[28px]">
            ส่งข้อความ
          </h1>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-[15px] font-medium text-[#555]">
                ชื่อ <span className="text-[#ED002B]">*</span>
              </label>

              <input
                type="text"
                placeholder="กรอกชื่อ"
                className="h-[50px] w-full rounded-full border border-[#D9D9D9] px-5 text-[15px] outline-none transition focus:border-[#ED002B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[15px] font-medium text-[#555]">
                อีเมล <span className="text-[#ED002B]">*</span>
              </label>

              <input
                type="email"
                placeholder="กรอกอีเมล"
                className="h-[50px] w-full rounded-full border border-[#D9D9D9] px-5 text-[15px] outline-none transition focus:border-[#ED002B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[15px] font-medium text-[#555]">
                เรื่อง <span className="text-[#ED002B]">*</span>
              </label>

              <input
                type="text"
                placeholder="กรอกเรื่อง"
                className="h-[50px] w-full rounded-full border border-[#D9D9D9] px-5 text-[15px] outline-none transition focus:border-[#ED002B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[15px] font-medium text-[#555]">
                ข้อความ <span className="text-[#ED002B]">*</span>
              </label>

              <textarea
                placeholder="กรอกข้อความ"
                className="h-[120px] w-full resize-none rounded-[16px] border border-[#D9D9D9] px-5 py-4 text-[15px] outline-none transition focus:border-[#ED002B]"
              />
            </div>

            <button
              type="submit"
              className="h-[50px] w-full rounded-full bg-[#ED002B] text-[16px] font-semibold text-white transition hover:bg-[#d90027]"
            >
              ส่งข้อความ
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
