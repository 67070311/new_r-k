import Link from "next/link";
import {
  Car,
  ChevronDown,
  ChevronRight,
  Headphones,
  Monitor,
} from "lucide-react";

const aboutItems = [
  { label: "เกี่ยวกับเรา", href: "/about/aboutus" },
  { label: "ภาพการทำงาน", href: "/about/image" },
  { label: "บทความ", href: "/about/article" },
];

const deviceItems = [
  { label: "FIFOTRACK", href: "/prodeuct-service/FIFOTRACK" },
  { label: "GT06E", href: "/prodeuct-service/GT06E" },
  { label: "TS107", href: "/prodeuct-service/TS107" },
  { label: "VL802", href: "/prodeuct-service/VL802" },
  { label: "VT100-L", href: "/prodeuct-service/VT100-L" },
  { label: "VT200-L", href: "/prodeuct-service/VT200-L" },
];

const trackingItems = [
  {
    label: "GPS ติดตามรถ Real Time",
    href: "/prodeuct-service/car-program/real-time",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-[90px] w-full bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)] lg:block">
      <div className="mx-auto grid h-full max-w-[1440px] grid-cols-[250px_1fr_190px] items-center px-10 xl:px-16">
        <Link href="/" className="flex items-center">
          <img
            src="/navbar/logo.png"
            alt="R&K Logo"
            className="h-[54px] w-auto object-contain"
          />
        </Link>

        <div className="flex h-full items-center justify-center gap-7 whitespace-nowrap text-[16px] font-medium text-black xl:gap-9 xl:text-[17px]">
          <Link href="/" className="transition hover:text-[#108C2E]">
            หน้าหลัก
          </Link>

          <div className="group/about relative flex h-full items-center">
            <Link
              href="/about/aboutus"
              className="flex items-center gap-1.5 text-black transition group-hover/about:text-[#108C2E]"
            >
              เกี่ยวกับเรา
              <ChevronDown size={18} strokeWidth={2.2} />
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[230px] -translate-x-1/2 rounded-xl bg-white p-3 text-black opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/about:visible group-hover/about:opacity-100">
              {aboutItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-3.5 text-[15px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group/product relative flex h-full items-center">
            <Link
              href="/prodeuct-service/car-program/real-time"
              className="flex items-center gap-1.5 text-black transition group-hover/product:text-[#108C2E]"
            >
              สินค้าและบริการ
              <ChevronDown size={18} strokeWidth={2.2} />
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[305px] -translate-x-1/2 rounded-2xl bg-white p-3 text-black opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/product:visible group-hover/product:opacity-100">
              <div className="group/device relative">
                <div className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]">
                  <div className="flex items-center gap-3">
                    <Monitor size={22} />
                    <span>อุปกรณ์</span>
                  </div>

                  <ChevronRight size={18} />
                </div>

                <div className="invisible absolute left-full top-0 ml-3 w-[230px] rounded-2xl bg-white p-3 text-black opacity-0 shadow-xl transition-all duration-200 group-hover/device:visible group-hover/device:opacity-100">
                  {deviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3.5 text-[15px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="group/tracking relative">
                <Link
                  href="/prodeuct-service/car-program/real-time"
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                >
                  <div className="flex items-center gap-3">
                    <Car size={22} />
                    <span>โปรแกรมติดตามรถ</span>
                  </div>

                  <ChevronRight size={18} />
                </Link>

                <div className="invisible absolute left-full top-0 ml-3 w-[390px] rounded-2xl bg-white p-4 text-black opacity-0 shadow-xl transition-all duration-200 group-hover/tracking:visible group-hover/tracking:opacity-100">
                  {trackingItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3.5 text-[15px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/prodeuct-service/after-sale"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[16px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                <Headphones size={22} />
                <span>บริการหลังการขาย</span>
              </Link>
            </div>
          </div>

          <Link
            href="/work-with-us"
            className="text-black transition hover:text-[#108C2E]"
          >
            สมัครงานกับเรา
          </Link>

          <Link
            href="/contact"
            className="text-black transition hover:text-[#108C2E]"
          >
            ติดต่อเรา
          </Link>
        </div>

        <div className="flex h-full items-center justify-end">
          <a
            href="https://rkgps.com/tracking/index.php?page=login"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate flex min-w-[130px] items-center justify-center overflow-hidden rounded-full bg-[#ED002B] px-8 py-3.5 text-[16px] font-semibold text-white shadow-[0_8px_22px_rgba(237,0,43,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D90027] hover:shadow-[0_12px_28px_rgba(237,0,43,0.32)]"
          >
            <span className="relative z-10">Login</span>

            <span className="pointer-events-none absolute inset-y-[-40%] left-[-70%] w-[45%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px] animate-[loginShine_2.8s_ease-in-out_infinite]" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes loginShine {
          0% {
            left: -70%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          45% {
            left: 130%;
            opacity: 0;
          }

          100% {
            left: 130%;
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
}
