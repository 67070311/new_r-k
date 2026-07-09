"use client";

import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const products = [
  { image: "/home/5/1.png", name: "GT06E", desc: "รองรับซิมการ์ด 3G" },
  { image: "/home/5/2.png", name: "TS107 3G", desc: "พร้อมเครื่องรูดบัตร" },
  { image: "/home/5/3.png", name: "FIFOTRACK", desc: "Model: S50K" },
  { image: "/home/5/4.png", name: "VL802", desc: "" },
  { image: "/home/5/5.png", name: "VT100-L", desc: "" },
  { image: "/home/5/6.png", name: "VT200-L", desc: "" },
];

const features = ["ติดตามแม่นยำ", "ประหยัดพลังงาน", "ติดตั้งได้กับรถทุกประเภท"];

const benefits = [
  { title: "แม่นยำ", desc: "ติดตามแบบ Real-Time" },
  { title: "ปลอดภัย", desc: "ข้อมูลเข้ารหัส" },
  { title: "ติดตั้งง่าย", desc: "พร้อมใช้งานทันที" },
  { title: "รับประกัน", desc: "คุณภาพสินค้า" },
];

export default function Section5() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? products.length - 2 : prev - 2));
  };

  const visibleProducts = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
      style={{
        backgroundImage: "url('/home/5/bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/45" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-3 sm:px-6 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:px-12 xl:px-16">
        <div className="text-center lg:text-left">
          <p className="text-[16px] font-semibold text-[#ED002B] sm:text-[18px]">
            อุปกรณ์
          </p>

          <h2 className="mt-3 text-[20px] font-semibold leading-[1.45] text-black sm:text-[22px] md:text-[24px] lg:text-[26px]">
            GPS TRACKING
            <br />
            คุณภาพของเรา
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#ED002B] lg:mx-0" />

          <p className="mx-auto mt-4 max-w-[500px] text-[14px] leading-[1.8] text-black sm:text-[15px] md:text-[16px] lg:mx-0">
            เลือกอุปกรณ์ที่เหมาะกับการใช้งานของคุณ
            <br className="hidden sm:block" />
            รองรับรถทุกประเภท ผ่านมาตรฐานกรมการขนส่งทางบก
            <br className="hidden sm:block" />
            พร้อมรับประกันสินค้าและบริการติดตั้งโดยทีมงานมืออาชีพ
          </p>

          <div className="mx-auto mt-7 grid max-w-[520px] grid-cols-4 gap-2 sm:gap-4 lg:mx-0">
            {benefits.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#ED002B] text-[#ED002B] sm:h-10 sm:w-10 lg:h-11 lg:w-11">
                  <CheckCircle className="h-4 w-4 stroke-[2.2] sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>

                <h3 className="mt-2 text-[11px] font-semibold text-black sm:text-[14px] lg:text-[15px]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[9px] leading-relaxed text-black sm:text-[11px] lg:text-[12px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-2 sm:gap-5">
            {visibleProducts.map((item) => (
              <div
                key={item.name}
                className="rounded-[12px] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:rounded-[14px] sm:p-5"
              >
                <div className="flex h-[95px] items-center justify-center xs:h-[110px] sm:h-[170px] md:h-[190px] lg:h-[200px] xl:h-[220px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full w-full object-contain"
                  />
                </div>

                <h3 className="mt-2 text-[12px] font-semibold text-black sm:mt-4 sm:text-[17px] md:text-[18px] lg:text-[19px]">
                  {item.name}
                </h3>

                {item.desc && (
                  <p className="mt-1 text-[10px] font-medium text-[#ED002B] sm:text-[15px] lg:text-[16px]">
                    {item.desc}
                  </p>
                )}

                <div className="mt-2 border-t border-black/10 pt-2 sm:mt-3 sm:pt-4">
                  <div className="space-y-1.5 sm:space-y-3">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-1.5 text-[9px] text-black sm:gap-3 sm:text-[14px] lg:text-[15px]"
                      >
                        <CheckCircle className="h-3.5 w-3.5 shrink-0 fill-[#ED002B] text-white sm:h-5 sm:w-5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_22px_rgba(0,0,0,0.15)] transition hover:bg-[#ED002B] hover:text-white sm:h-10 sm:w-10 md:absolute md:left-2 md:top-1/2 md:mt-0 md:-translate-y-1/2 lg:-left-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="flex justify-center gap-2">
              {[0, 2, 4].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-8 bg-[#ED002B]"
                      : "w-3 bg-black/25"
                  }`}
                  aria-label={`Go to product group ${index / 2 + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_22px_rgba(0,0,0,0.15)] transition hover:bg-[#ED002B] hover:text-white sm:h-10 sm:w-10 md:absolute md:right-2 md:top-1/2 md:mt-0 md:-translate-y-1/2 lg:-right-6"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
