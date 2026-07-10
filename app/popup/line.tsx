"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaLine } from "react-icons/fa6";

type LinePopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function LinePopup({ open, onClose }: LinePopupProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-black/55 px-3 py-4 backdrop-blur-[3px] sm:px-5 sm:py-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 26,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative my-auto w-full max-w-[340px] overflow-hidden rounded-[22px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:max-w-[430px] sm:rounded-[28px]"
          >
            <div className="h-[5px] w-full bg-[#06C755] sm:h-[7px]" />

            <button
              type="button"
              onClick={onClose}
              aria-label="ปิดหน้าต่าง LINE"
              className="absolute right-3 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F4F5] text-black transition duration-200 hover:rotate-90 hover:bg-[#06C755] hover:text-white sm:right-5 sm:top-6 sm:h-10 sm:w-10"
            >
              <X
                size={17}
                strokeWidth={2.2}
                className="sm:h-[21px] sm:w-[21px]"
              />
            </button>

            <div className="px-5 pb-5 pt-6 text-center sm:px-10 sm:pb-9 sm:pt-9">
              <div className="relative mx-auto flex h-[58px] w-[58px] items-center justify-center sm:h-[76px] sm:w-[76px]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#06C755]/10" />

                <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#06C755] text-white shadow-[0_12px_28px_rgba(6,199,85,0.25)] sm:h-[68px] sm:w-[68px]">
                  <FaLine className="text-[27px] sm:text-[34px]" />
                </div>
              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#06C755] sm:mt-5 sm:text-[12px] sm:tracking-[0.2em]">
                Contact via LINE
              </p>

              <h2 className="mt-1.5 text-[21px] font-bold leading-tight text-black sm:mt-2 sm:text-[28px]">
                ติดต่อเราผ่าน LINE
              </h2>

              <p className="mx-auto mt-2 max-w-[280px] text-[12px] leading-5 text-black/55 sm:mt-3 sm:max-w-[320px] sm:text-[15px] sm:leading-6">
                สแกน QR Code เพื่อเพิ่มเพื่อนและสอบถามข้อมูลสินค้า บริการติดตั้ง
                GPS และบริการหลังการขาย
              </p>

              <div className="mx-auto mt-4 w-full max-w-[170px] rounded-[16px] border border-black/10 bg-white p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.08)] sm:mt-5 sm:max-w-[220px] sm:rounded-[20px] sm:p-3">
                <img
                  src="/home/quotation/qr1.png"
                  alt="LINE QR Code RKGPS"
                  className="aspect-square h-auto w-full object-contain"
                />

                <div className="mt-2 rounded-[10px] bg-[#F1FFF6] px-2 py-2 sm:rounded-[12px] sm:px-3 sm:py-2.5">
                  <p className="text-[12px] font-bold tracking-[0.02em] text-[#06A944] sm:text-[16px] sm:tracking-[0.03em]">
                    ID LINE : RKGPS
                  </p>
                </div>
              </div>

              <a
                href="https://line.me/R/ti/p/@RKGPS"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-4 flex h-[46px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#06C755] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(6,199,85,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#05B94E] hover:shadow-[0_14px_30px_rgba(6,199,85,0.32)] sm:mt-6 sm:h-[56px] sm:gap-3 sm:text-[17px]"
              >
                <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                <FaLine className="relative z-10 text-[18px] sm:text-[22px]" />
                <span className="relative z-10">เปิดแอป LINE</span>

                <ExternalLink
                  size={15}
                  strokeWidth={2.2}
                  className="relative z-10 sm:h-[17px] sm:w-[17px]"
                />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="mt-3 text-[12px] font-medium text-black/45 transition hover:text-black sm:mt-4 sm:text-[14px]"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
