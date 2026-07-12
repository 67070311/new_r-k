"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const clients = Array.from(
  { length: 55 },
  (_, index) => `/home/client/${index + 1}.png`,
);

const marqueeClients = [...clients, ...clients];

export default function ClientSection() {
  return (
    <section className="overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[22px] font-semibold text-black sm:text-[24px] lg:text-[28px]">
            ลูกค้าของเรา
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-14 rounded-full bg-[#ED002B]" />
        </div>

        <div className="relative mt-10 overflow-hidden sm:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

          <motion.div
            className="flex w-max items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 120,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeClients.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-[90px] w-[140px] shrink-0 items-center justify-center px-5 sm:w-[170px] sm:px-6 lg:w-[190px]"
              >
                <img
                  src={logo}
                  alt={`โลโก้ลูกค้า ${(index % clients.length) + 1}`}
                  className="max-h-16 max-w-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/client-all"
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#ED002B] transition-opacity hover:opacity-70"
          >
            ดูทั้งหมด
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
