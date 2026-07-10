"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";

type TelPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function TelPopup({ open, onClose }: TelPopupProps) {
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
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 18,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 26,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative my-auto w-full max-w-[340px] overflow-hidden rounded-[22px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:max-w-[430px] sm:rounded-[28px]"
          >
            {/* เส้นสีแดงด้านบน */}
            <div className="h-[5px] w-full bg-[#ED002B] sm:h-[7px]" />

            {/* ปุ่มปิด */}
            <button
              type="button"
              onClick={onClose}
              aria-label="ปิดหน้าต่าง"
              className="absolute right-3 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F4F5] text-black transition duration-200 hover:rotate-90 hover:bg-[#ED002B] hover:text-white sm:right-5 sm:top-6 sm:h-10 sm:w-10"
            >
              <X
                size={17}
                strokeWidth={2.2}
                className="sm:h-[21px] sm:w-[21px]"
              />
            </button>

            <div className="px-5 pb-5 pt-6 text-center sm:px-10 sm:pb-10 sm:pt-11">
              {/* ไอคอนโทรศัพท์ */}
              <div className="relative mx-auto flex h-[64px] w-[64px] items-center justify-center sm:h-[92px] sm:w-[92px]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#ED002B]/10" />

                <div className="relative flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#ED002B] text-white shadow-[0_12px_28px_rgba(237,0,43,0.25)] sm:h-[82px] sm:w-[82px] sm:shadow-[0_15px_35px_rgba(237,0,43,0.28)]">
                  <Phone
                    size={26}
                    strokeWidth={2}
                    className="sm:h-[34px] sm:w-[34px]"
                  />
                </div>
              </div>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ED002B] sm:mt-7 sm:text-[14px] sm:tracking-[0.2em]">
                Contact us
              </p>

              <h2 className="mt-1.5 text-[21px] font-bold leading-tight text-black sm:mt-2 sm:text-[29px]">
                โทรศัพท์สำนักงาน
              </h2>

              <p className="mx-auto mt-2 max-w-[280px] text-[12px] leading-5 text-black/55 sm:mt-3 sm:max-w-[320px] sm:text-[16px] sm:leading-7">
                ติดต่อสอบถามข้อมูลสินค้า บริการติดตั้ง GPS และบริการหลังการขาย
              </p>

              {/* เบอร์โทร */}
              <a
                href="tel:021980006"
                aria-label="โทร 02-1980006"
                className="mt-4 flex items-center justify-center rounded-[14px] border border-black/10 bg-[#F7F8FA] px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#ED002B]/30 hover:bg-[#FFF5F7] hover:shadow-[0_12px_30px_rgba(237,0,43,0.1)] sm:mt-7 sm:rounded-[18px] sm:px-5 sm:py-5"
              >
                <span className="text-[24px] font-bold tracking-[0.03em] text-black sm:text-[34px] sm:tracking-[0.04em]">
                  02-1980006
                </span>
              </a>

              {/* ปุ่มโทร */}
              <a
                href="tel:021980006"
                className="group relative mt-4 flex h-[46px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ED002B] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(237,0,43,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D90027] hover:shadow-[0_14px_30px_rgba(237,0,43,0.32)] sm:mt-6 sm:h-[56px] sm:gap-3 sm:text-[17px] sm:shadow-[0_12px_28px_rgba(237,0,43,0.23)]"
              >
                <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                <Phone
                  size={18}
                  strokeWidth={2.2}
                  className="relative z-10 sm:h-[21px] sm:w-[21px]"
                />

                <span className="relative z-10">โทรหาเรา</span>
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
