"use client";

import { Mail, Phone, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Quotation() {
  return (
    <section className="overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto w-full max-w-[430px] lg:mx-0"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="p-3 pb-0">
                <img
                  src="/home/quotation/qr1.png"
                  alt="LINE QR Code"
                  className="aspect-square w-full object-contain"
                />
              </div>

              <div className="px-3 pb-5 pt-2 text-center">
                <p className="text-[18px] font-extrabold tracking-[0.03em] text-[#ED002B] sm:text-[19px]">
                  ID LINE : RKGPS
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
              <img
                src="/home/quotation/qr2.png"
                alt="QR Code 2"
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-8 space-y-5 text-[15px] text-black sm:text-[17px] lg:text-[18px]">
            <a
              href="mailto:info@r-ktechnologygps.com"
              className="flex items-center gap-4 transition hover:text-[#ED002B] sm:gap-5"
            >
              <Mail className="h-5 w-5 shrink-0 stroke-[2] sm:h-6 sm:w-6" />
              <span className="break-all">info@r-ktechnologygps.com</span>
            </a>

            <div className="flex items-start gap-4 sm:items-center sm:gap-5">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 stroke-[2] sm:mt-0 sm:h-6 sm:w-6" />

              <div className="flex flex-wrap gap-x-2 gap-y-1">
                <a
                  href="tel:0863004117"
                  className="transition hover:text-[#ED002B]"
                >
                  086-3004117
                </a>

                <span>,</span>

                <a
                  href="tel:0868898593"
                  className="transition hover:text-[#ED002B]"
                >
                  086-8898593
                </a>
              </div>
            </div>

            <a
              href="tel:021980006"
              className="flex items-center gap-4 transition hover:text-[#ED002B] sm:gap-5"
            >
              <Phone className="h-5 w-5 shrink-0 stroke-[2] sm:h-6 sm:w-6" />
              <span>02-1980006</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full"
        >
          <h2 className="text-[24px] font-semibold text-black sm:text-[26px] lg:text-[28px]">
            ส่งข้อความ
          </h2>

          <form className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="quotation-name"
                className="mb-2 block text-[15px] font-medium text-black/70 sm:text-[16px]"
              >
                ชื่อ <span className="text-[#ED002B]">*</span>
              </label>

              <input
                id="quotation-name"
                name="name"
                type="text"
                required
                placeholder="กรอกชื่อ"
                className="h-[50px] w-full rounded-full border border-black/20 bg-white px-5 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[54px]"
              />
            </div>

            <div>
              <label
                htmlFor="quotation-email"
                className="mb-2 block text-[15px] font-medium text-black/70 sm:text-[16px]"
              >
                อีเมล <span className="text-[#ED002B]">*</span>
              </label>

              <input
                id="quotation-email"
                name="email"
                type="email"
                required
                placeholder="กรอกอีเมล"
                className="h-[50px] w-full rounded-full border border-black/20 bg-white px-5 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[54px]"
              />
            </div>

            <div>
              <label
                htmlFor="quotation-subject"
                className="mb-2 block text-[15px] font-medium text-black/70 sm:text-[16px]"
              >
                เรื่อง <span className="text-[#ED002B]">*</span>
              </label>

              <input
                id="quotation-subject"
                name="subject"
                type="text"
                required
                placeholder="กรอกเรื่อง"
                className="h-[50px] w-full rounded-full border border-black/20 bg-white px-5 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[54px]"
              />
            </div>

            <div>
              <label
                htmlFor="quotation-message"
                className="mb-2 block text-[15px] font-medium text-black/70 sm:text-[16px]"
              >
                ข้อความ <span className="text-[#ED002B]">*</span>
              </label>

              <textarea
                id="quotation-message"
                name="message"
                required
                placeholder="กรอกข้อความ"
                className="h-[125px] w-full resize-none rounded-[16px] border border-black/20 bg-white px-5 py-4 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[135px]"
              />
            </div>

            <button
              type="submit"
              className="h-[50px] w-full rounded-full bg-[#ED002B] text-[16px] font-semibold text-white shadow-[0_8px_22px_rgba(237,0,43,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D90027] hover:shadow-[0_12px_26px_rgba(237,0,43,0.28)] sm:h-[54px]"
            >
              ขอใบเสนอราคา
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
