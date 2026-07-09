"use client";

import { useMemo, useState } from "react";

const PER_PAGE = 15;
const TOTAL_IMAGES = 70;

const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  id: i + 1,
  src: `/about/image/${i + 1}.webp`,
}));

export default function Body() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(images.length / PER_PAGE);

  const currentImages = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return images.slice(start, start + PER_PAGE);
  }, [page]);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Mobile: 3 รูป / แถว | Tablet: 2 | Desktop: 3 */}
        <div className="grid grid-cols-3 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {currentImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-md bg-white">
              <img
                src={image.src}
                alt={`work image ${image.id}`}
                className="aspect-square w-full object-cover transition duration-300 hover:scale-105 md:h-[260px] md:aspect-auto"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-14 md:gap-6">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm transition hover:bg-gray-100 disabled:opacity-40 md:px-5"
          >
            ก่อนหน้า
          </button>

          <span className="text-sm font-medium md:text-base">
            หน้า {page} จาก {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="rounded-lg bg-[#ED002B] px-4 py-2 text-sm text-white transition hover:bg-[#D90027] disabled:opacity-40 md:px-5"
          >
            ถัดไป
          </button>
        </div>
      </div>
    </section>
  );
}
