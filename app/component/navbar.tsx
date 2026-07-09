import Link from "next/link";
import {
  Car,
  ChevronDown,
  ChevronRight,
  Headphones,
  LogIn,
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

const loginItems = [
  {
    title: "LOGIN SERVICE",
    desc: "ระบบ GPS ติดตามรถส่วนบุคคลและขนส่งสินค้าทั่วไป",
    href: "/login/service",
  },
  {
    title: "LOGIN TRANSPORT",
    desc: "ระบบ GPS ติดตามรถขนส่งที่ใช้เครื่องรูดบัตรใบขับขี่",
    href: "/login/transport",
  },
  {
    title: "GPS กันขโมย",
    desc: "ระบบ GPS ติดตามรถส่วนบุคคลจับโจรขโมยผ่านดาวเทียม",
    href: "/login/anti-theft",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-[82px] w-full bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)] lg:block">
      <div className="mx-auto grid h-full max-w-[1440px] grid-cols-[180px_1fr_180px] items-center px-10 xl:px-16">
        <Link href="/" className="flex items-center">
          <img
            src="/navbar/logo.png"
            alt="R&K Logo"
            className="h-[34px] w-auto"
          />
        </Link>

        <div className="flex h-full items-center justify-center gap-7 whitespace-nowrap text-[15px] font-medium text-black xl:gap-9">
          <Link href="/" className="transition hover:text-[#108C2E]">
            หน้าหลัก
          </Link>

          <div className="group/about relative flex h-full items-center">
            <Link
              href="/about/aboutus"
              className="flex items-center gap-1.5 text-black transition group-hover/about:text-[#108C2E]"
            >
              เกี่ยวกับเรา
              <ChevronDown size={16} strokeWidth={2.2} />
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[220px] -translate-x-1/2 rounded-xl bg-white p-3 text-black opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/about:visible group-hover/about:opacity-100">
              {aboutItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-[14px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
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
              <ChevronDown size={16} strokeWidth={2.2} />
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[285px] -translate-x-1/2 rounded-2xl bg-white p-3 text-black opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/product:visible group-hover/product:opacity-100">
              <div className="group/device relative">
                <div className="flex items-center justify-between rounded-xl px-4 py-3 text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]">
                  <div className="flex items-center gap-3">
                    <Monitor size={20} />
                    <span>อุปกรณ์</span>
                  </div>
                  <ChevronRight size={16} />
                </div>

                <div className="invisible absolute left-full top-0 ml-3 w-[220px] rounded-2xl bg-white p-3 text-black opacity-0 shadow-xl transition-all duration-200 group-hover/device:visible group-hover/device:opacity-100">
                  {deviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-[14px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="group/tracking relative">
                <Link
                  href="/prodeuct-service/car-program/real-time"
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                >
                  <div className="flex items-center gap-3">
                    <Car size={20} />
                    <span>โปรแกรมติดตามรถ</span>
                  </div>
                  <ChevronRight size={16} />
                </Link>

                <div className="invisible absolute left-full top-0 ml-3 w-[390px] rounded-2xl bg-white p-4 text-black opacity-0 shadow-xl transition-all duration-200 group-hover/tracking:visible group-hover/tracking:opacity-100">
                  {trackingItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-[14px] text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/prodeuct-service/after-sale"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                <Headphones size={20} />
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
            href="/faq"
            className="text-black transition hover:text-[#108C2E]"
          >
            ถามตอบ
          </Link>

          <Link
            href="/contact"
            className="text-black transition hover:text-[#108C2E]"
          >
            ติดต่อเรา
          </Link>
        </div>

        <div className="group/login relative flex h-full items-center justify-end">
          <button className="flex items-center gap-1.5 rounded-full bg-[#ED002B] px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-[#D90027]">
            Login
            <ChevronDown size={16} />
          </button>

          <div className="invisible absolute right-0 top-full w-[420px] rounded-2xl border border-neutral-100 bg-white p-4 text-black opacity-0 shadow-xl transition-all duration-200 group-hover/login:visible group-hover/login:opacity-100">
            {loginItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mb-2 flex items-start gap-4 rounded-xl border border-neutral-100 p-4 text-black transition hover:bg-[#F5FBF7]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#108C2E]">
                  <LogIn size={20} />
                </div>

                <div>
                  <p className="text-[14px] font-medium text-black">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-6 text-gray-500">
                    {item.desc}
                  </p>
                </div>

                <ChevronRight className="ml-auto mt-2 h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
