"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "โลจิสติกส์ คืออะไร?",
    desc: "คำว่าโลจิสติกส์ หรือ ลอจิสติกส์ (Logistics) คือระบบการจัดการการขนส่งและบริหารจัดการสินค้าให้มีประสิทธิภาพ...",
    image: "/home/article/1.png",
    href: "/article/1",
  },
  {
    title: "กลยุทธ์ในการลดต้นทุนการขนส่ง",
    desc: "การบริหารต้นทุนการขนส่งอย่างมีประสิทธิภาพช่วยเพิ่มกำไรและลดค่าใช้จ่ายของธุรกิจ...",
    image: "/home/article/2.png",
    href: "/article/2",
  },
  {
    title: "GPS Tracking ช่วยธุรกิจได้อย่างไร",
    desc: "ระบบ GPS Tracking ช่วยติดตามรถแบบ Real-Time เพิ่มประสิทธิภาพการทำงานและลดต้นทุน...",
    image: "/home/article/1.png",
    href: "/article/3",
  },
  {
    title: "เลือก GPS Tracking อย่างไรให้เหมาะกับธุรกิจ",
    desc: "การเลือก GPS Tracking ควรพิจารณาความแม่นยำ ฟังก์ชันการใช้งาน และบริการหลังการขาย...",
    image: "/home/article/2.png",
    href: "/article/4",
  },
];

export default function ArticleSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const width =
      window.innerWidth < 640
        ? window.innerWidth * 0.9
        : window.innerWidth < 1024
          ? window.innerWidth * 0.5
          : 400;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h2 className="text-[22px] font-semibold text-black sm:text-[26px] lg:text-[30px]">
              บทความล่าสุด
            </h2>

            <div className="mt-3 h-[3px] w-14 rounded-full bg-[#ED002B]" />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#ED002B] hover:text-[#ED002B]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#ED002B] hover:text-[#ED002B]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="w-[88%] shrink-0 snap-center sm:w-[48%] lg:w-[380px]"
            >
              <Link
                href={article.href}
                className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="line-clamp-2 text-[17px] font-semibold leading-snug text-black">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-[14px] leading-7 text-gray-600">
                    {article.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
