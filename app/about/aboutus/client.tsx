"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const clients = [
  "/home/client/1.png",
  "/home/client/2.png",
  "/home/client/3.png",
  "/home/client/4.png",
  "/home/client/5.png",
  "/home/client/6.png",
  "/home/client/7.png",
  "/home/client/8.png",
  "/home/client/9.png",
  "/home/client/10.png",
  "/home/client/11.png",
  "/home/client/12.png",
];

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

        <div className="relative mt-10 overflow-hidden">
          <div className="flex w-max animate-client-scroll">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="mx-3 flex h-[52px] w-[88px] shrink-0 items-center justify-center sm:mx-4 sm:h-[60px] sm:w-[100px] lg:mx-5 lg:h-[72px] lg:w-[120px]"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/clients"
            className="group flex items-center gap-2 text-[15px] font-medium text-[#ED002B]"
          >
            ดูทั้งหมด
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes clientScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-client-scroll {
          animation: clientScroll 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
