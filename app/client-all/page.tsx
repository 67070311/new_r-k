import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const clients = Array.from(
  { length: 55 },
  (_, index) => `/home/client/${index + 1}.png`,
);

export default function ClientAllPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-[#ED002B] hover:opacity-70"
        >
          <ArrowLeft className="h-4 w-4" />
          กลับหน้าหลัก
        </Link>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-black">ลูกค้าของเรา</h1>

          <div className="mx-auto mt-3 h-[2px] w-14 rounded-full bg-[#ED002B]" />
        </div>

        <div className="mt-12 grid grid-cols-4 gap-6">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex h-36 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-lg"
            >
              <img
                src={logo}
                alt={`ลูกค้า ${index + 1}`}
                className="max-h-20 max-w-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
