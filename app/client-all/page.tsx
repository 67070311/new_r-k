import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const clients = Array.from(
  { length: 55 },
  (_, index) => `/home/client/${index + 1}.png`,
);

export default function ClientAllPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-3 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#ED002B] transition-opacity hover:opacity-70 sm:text-[15px]"
        >
          <ArrowLeft className="h-4 w-4" />
          กลับหน้าหลัก
        </Link>

        <div className="mt-8 text-center sm:mt-10">
          <h1 className="text-[24px] font-semibold text-black sm:text-[30px]">
            ลูกค้าของเรา
          </h1>

          <div className="mx-auto mt-3 h-[2px] w-14 rounded-full bg-[#ED002B]" />

          <p className="mx-auto mt-4 max-w-[560px] text-[13px] leading-6 text-gray-500 sm:text-[15px]">
            บริษัทและองค์กรที่ไว้วางใจเลือกใช้บริการจากเรา
          </p>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-2 sm:mt-12 sm:gap-4 lg:gap-6">
          {clients.map((logo, index) => (
            <div
              key={logo}
              className="flex aspect-square min-w-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-xl sm:p-4 lg:p-6"
            >
              <img
                src={logo}
                alt={`โลโก้ลูกค้า ${index + 1}`}
                className="h-full w-full object-contain"
                loading={index < 12 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
