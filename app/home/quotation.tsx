"use client";

import { Mail, Phone, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Quotation() {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        {/* QR Code และช่องทางติดต่อ */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto w-full max-w-[430px] lg:mx-0"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {/* LINE QR */}
            <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm sm:rounded-2xl">
              <div className="flex aspect-square items-center justify-center p-2 sm:p-3">
                <img
                  src="/home/quotation/qr1.png"
                  alt="LINE QR Code"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <div className="px-1.5 pb-3 pt-1 text-center sm:px-3 sm:pb-5 sm:pt-2">
                <p className="whitespace-nowrap text-[11px] font-extrabold tracking-[0.01em] text-[#ED002B] min-[390px]:text-[12px] sm:text-[18px]">
                  ID LINE : RKGPS
                </p>
              </div>
            </div>

            {/* QR Code 2 */}
            <div className="flex aspect-square min-w-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-white p-2 shadow-sm sm:rounded-2xl sm:p-3">
              <img
                src="/home/quotation/qr2.png"
                alt="QR Code สำหรับติดต่อ"
                className="h-full w-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          {/* Contact */}
          <div className="mt-7 space-y-4 text-[14px] text-black sm:mt-8 sm:space-y-5 sm:text-[17px] lg:text-[18px]">
            <a
              href="mailto:info@r-ktechnologygps.com"
              className="flex min-w-0 items-start gap-3 transition hover:text-[#ED002B] sm:items-center sm:gap-5"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 stroke-[2] sm:mt-0 sm:h-6 sm:w-6" />

              <span className="min-w-0 break-all leading-6">
                info@r-ktechnologygps.com
              </span>
            </a>

            <div className="flex items-start gap-3 sm:items-center sm:gap-5">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 stroke-[2] sm:mt-0 sm:h-6 sm:w-6" />

              <div className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 leading-6">
                <a
                  href="tel:0863004117"
                  className="whitespace-nowrap transition hover:text-[#ED002B]"
                >
                  086-3004117
                </a>

                <span className="text-black/50">,</span>

                <a
                  href="tel:0868898593"
                  className="whitespace-nowrap transition hover:text-[#ED002B]"
                >
                  086-8898593
                </a>
              </div>
            </div>

            <a
              href="tel:021980006"
              className="flex items-center gap-3 transition hover:text-[#ED002B] sm:gap-5"
            >
              <Phone className="h-5 w-5 shrink-0 stroke-[2] sm:h-6 sm:w-6" />
              <span>02-1980006</span>
            </a>
          </div>
        </motion.div>

        {/* แบบฟอร์ม */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full min-w-0"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-[24px] font-semibold text-black sm:text-[27px] lg:text-[28px]">
              ส่งข้อความ
            </h2>

            <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-[#ED002B] lg:mx-0" />
          </div>

          <form className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
            <div>
              <label
                htmlFor="quotation-name"
                className="mb-2 block text-[14px] font-medium text-black/70 sm:text-[16px]"
              >
                ชื่อ <span className="text-[#ED002B]">*</span>
              </label>

              <input
                id="quotation-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="กรอกชื่อ"
                className="h-[48px] w-full rounded-full border border-black/20 bg-white px-5 text-[14px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[54px] sm:text-[15px]"
              />
            </div>

            <div>
              <label
                htmlFor="quotation-email"
                className="mb-2 block text-[14px] font-medium text-black/70 sm:text-[16px]"
              >
                อีเมล <span className="text-[#ED002B]">*</span>
              </label>

              <input
                id="quotation-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="กรอกอีเมล"
                className="h-[48px] w-full rounded-full border border-black/20 bg-white px-5 text-[14px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[54px] sm:text-[15px]"
              />
            </div>

            <div>
              <label
                htmlFor="quotation-subject"
                className="mb-2 block text-[14px] font-medium text-black/70 sm:text-[16px]"
              >
                เรื่อง <span className="text-[#ED002B]">*</span>
              </label>

              <input
                id="quotation-subject"
                name="subject"
                type="text"
                required
                placeholder="กรอกเรื่อง"
                className="h-[48px] w-full rounded-full border border-black/20 bg-white px-5 text-[14px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[54px] sm:text-[15px]"
              />
            </div>

            <div>
              <label
                htmlFor="quotation-message"
                className="mb-2 block text-[14px] font-medium text-black/70 sm:text-[16px]"
              >
                ข้อความ <span className="text-[#ED002B]">*</span>
              </label>

              <textarea
                id="quotation-message"
                name="message"
                required
                placeholder="กรอกข้อความ"
                className="h-[120px] w-full resize-none rounded-[16px] border border-black/20 bg-white px-5 py-4 text-[14px] text-black outline-none transition placeholder:text-black/35 focus:border-[#ED002B] focus:ring-2 focus:ring-[#ED002B]/10 sm:h-[135px] sm:text-[15px]"
              />
            </div>

            <button
              type="submit"
              className="h-[50px] w-full rounded-full bg-[#ED002B] text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(237,0,43,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D90027] hover:shadow-[0_12px_26px_rgba(237,0,43,0.28)] active:translate-y-0 sm:h-[54px] sm:text-[16px]"
            >
              ขอใบเสนอราคา
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
