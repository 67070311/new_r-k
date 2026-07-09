"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const allImages = Array.from({ length: 70 }, (_, index) => ({
  src: `/about/image/${index + 1}.png`,
  alt: `ภาพการทำงาน ${index + 1}`,
}));

const slots = [
  { id: 0, className: "row-span-2", large: true },
  { id: 1, className: "", large: false },
  { id: 2, className: "", large: false },
  { id: 3, className: "", large: false },
  { id: 4, className: "", large: false },
];

export default function HomeGallerySection() {
  const [startIndex, setStartIndex] = useState(0);

  const currentImages = useMemo(() => {
    return slots.map((slot, index) => {
      const imageIndex = (startIndex + index) % allImages.length;

      return {
        ...slot,
        ...allImages[imageIndex],
      };
    });
  }, [startIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStartIndex((prev) => (prev + 5) % allImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-20 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-[1080px] grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
      >
        {currentImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.06,
            }}
            className={`relative overflow-hidden bg-gray-100 ${image.className}`}
          >
            <div
              className={`relative ${
                image.large
                  ? "h-[230px] sm:h-[360px] lg:h-[430px]"
                  : "h-[110px] sm:h-[172px] lg:h-[205px]"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
