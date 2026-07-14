import Link from "next/link";
import {
  Car,
  ChevronDown,
  ChevronRight,
  Headphones,
  Laptop,
  Monitor,
  Smartphone,
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
    label: "ระบบติดตามรถผ่านคอมพิวเตอร์",
    description: "ใช้งานผ่านเว็บไซต์บน PC และ Apple Mac",
    href: "/prodeuct-service/car-program/com",
    icon: Laptop,
  },
  {
    label: "ระบบติดตามรถผ่านโทรศัพท์",
    description: "ติดตามตำแหน่งรถผ่านแอปบนมือถือ",
    href: "/prodeuct-service/car-program/mobile",
    icon: Smartphone,
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 hidden w-full bg-white lg:block">
      {/* Top section */}
      <div className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex h-[128px] max-w-[1440px] items-center justify-between px-8 xl:px-12 2xl:px-16">
          {/* Logo and company information */}
          <div className="flex min-w-0 items-center gap-6 xl:gap-8">
            <Link
              href="/"
              aria-label="กลับสู่หน้าหลัก"
              className="flex shrink-0 items-center"
            >
              <img
                src="/navbar/logo.png"
                alt="R&K Technology GPS"
                className="h-[72px] w-auto object-contain xl:h-[80px]"
              />
            </Link>

            <div className="h-[66px] w-px shrink-0 bg-neutral-200" />

            <div className="min-w-0">
              <h1 className="whitespace-nowrap text-[18px] font-bold leading-[1.45] text-[#111] xl:text-[20px] 2xl:text-[22px]">
                บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด
              </h1>

              <p className="mt-1 whitespace-nowrap text-[15px] font-medium leading-[1.55] text-neutral-600 xl:text-[16px] 2xl:text-[17px]">
                จำหน่ายและรับติดตั้งระบบ{" "}
                <span className="font-semibold text-[#ED002B]">
                  GPS Tracking
                </span>
              </p>

              <p className="whitespace-nowrap text-[14px] leading-[1.55] text-neutral-500 xl:text-[15px] 2xl:text-[16px]">
                รถทุกชนิดทั่วประเทศไทย
              </p>
            </div>
          </div>

          {/* Login information */}
          <div className="ml-8 flex shrink-0 items-center gap-5">
            <div className="text-right">
              <p className="whitespace-nowrap text-[13px] font-medium text-neutral-500 xl:text-[14px]">
                ระบบติดตามรถออนไลน์
              </p>

              <p className="mt-1 whitespace-nowrap text-[16px] font-semibold text-[#ED002B] xl:text-[17px]">
                เข้าสู่ระบบติดตามรถที่นี่
              </p>
            </div>

            <a
              href="https://rkgps.com/tracking/index.php?page=login"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="เข้าสู่ระบบติดตามรถ"
              className="group relative isolate flex min-w-[128px] items-center justify-center overflow-hidden rounded-full bg-[#ED002B] px-7 py-3 text-[16px] font-bold tracking-[0.4px] text-white shadow-[0_8px_22px_rgba(237,0,43,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D90027] hover:shadow-[0_12px_28px_rgba(237,0,43,0.3)] xl:min-w-[138px] xl:px-8 xl:text-[17px]"
            >
              <span className="relative z-10">Login</span>

              <span className="pointer-events-none absolute inset-y-[-40%] left-[-70%] w-[45%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px] animate-[loginShine_2.8s_ease-in-out_infinite]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="h-[62px] bg-[#ED002B] shadow-[0_5px_18px_rgba(0,0,0,0.1)]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-center px-8 xl:px-12 2xl:px-16">
          <div className="flex h-full items-center justify-center gap-9 whitespace-nowrap text-[15px] font-medium text-white xl:gap-12 xl:text-[16px]">
            <Link
              href="/"
              className="relative flex h-full items-center transition-colors duration-200 hover:text-white/75"
            >
              หน้าหลัก
            </Link>

            {/* About */}
            <div className="group/about relative flex h-full items-center">
              <Link
                href="/about/aboutus"
                className="flex h-full items-center gap-1.5 transition-colors duration-200 group-hover/about:text-white/75"
              >
                <span>เกี่ยวกับเรา</span>
                <ChevronDown size={17} strokeWidth={2.2} />
              </Link>

              <div className="invisible absolute left-1/2 top-full w-[230px] -translate-x-1/2 translate-y-3 rounded-b-2xl bg-white p-3 opacity-0 shadow-[0_20px_45px_rgba(0,0,0,0.16)] transition-all duration-200 group-hover/about:visible group-hover/about:translate-y-0 group-hover/about:opacity-100">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3.5 text-[15px] font-medium text-black transition-colors duration-200 hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Product and service */}
            <div className="group/product relative flex h-full items-center">
              <Link
                href="/prodeuct-service/car-program/com"
                className="flex h-full items-center gap-1.5 transition-colors duration-200 group-hover/product:text-white/75"
              >
                <span>สินค้าและบริการ</span>
                <ChevronDown size={17} strokeWidth={2.2} />
              </Link>

              <div className="invisible absolute left-1/2 top-full w-[305px] -translate-x-1/2 translate-y-3 rounded-b-2xl bg-white p-3 opacity-0 shadow-[0_20px_45px_rgba(0,0,0,0.16)] transition-all duration-200 group-hover/product:visible group-hover/product:translate-y-0 group-hover/product:opacity-100">
                {/* Device */}
                <div className="group/device relative">
                  <div className="flex cursor-default items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-medium text-black transition-colors duration-200 hover:bg-[#FFF3F5] hover:text-[#ED002B]">
                    <div className="flex items-center gap-3">
                      <Monitor size={22} />
                      <span>อุปกรณ์</span>
                    </div>

                    <ChevronRight size={18} />
                  </div>

                  <div className="invisible absolute left-full top-0 ml-3 w-[230px] translate-x-2 rounded-2xl bg-white p-3 opacity-0 shadow-[0_20px_45px_rgba(0,0,0,0.16)] transition-all duration-200 group-hover/device:visible group-hover/device:translate-x-0 group-hover/device:opacity-100">
                    {deviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-3.5 text-[15px] font-medium text-black transition-colors duration-200 hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tracking program */}
                <div className="group/tracking relative">
                  <div className="flex cursor-default items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-medium text-black transition-colors duration-200 hover:bg-[#FFF3F5] hover:text-[#ED002B]">
                    <div className="flex items-center gap-3">
                      <Car size={22} />
                      <span>โปรแกรมติดตามรถ</span>
                    </div>

                    <ChevronRight size={18} />
                  </div>

                  <div className="invisible absolute left-full top-0 ml-3 w-[390px] translate-x-2 rounded-2xl bg-white p-3 opacity-0 shadow-[0_20px_45px_rgba(0,0,0,0.16)] transition-all duration-200 group-hover/tracking:visible group-hover/tracking:translate-x-0 group-hover/tracking:opacity-100">
                    {trackingItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/item flex items-center gap-4 rounded-xl px-4 py-4 text-black transition-colors duration-200 hover:bg-[#FFF3F5]"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-black transition-colors duration-200 group-hover/item:bg-white group-hover/item:text-[#ED002B]">
                            <Icon size={22} strokeWidth={2} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-[15px] font-semibold transition-colors duration-200 group-hover/item:text-[#ED002B]">
                              {item.label}
                            </p>

                            <p className="mt-1 text-[12px] font-normal leading-[1.5] text-neutral-500">
                              {item.description}
                            </p>
                          </div>

                          <ChevronRight
                            size={18}
                            className="shrink-0 text-neutral-400 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-[#ED002B]"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* After sale */}
                <Link
                  href="/prodeuct-service/after-sale"
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[16px] font-medium text-black transition-colors duration-200 hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                >
                  <Headphones size={22} />
                  <span>บริการหลังการขาย</span>
                </Link>
              </div>
            </div>

            <Link
              href="/work-with-us"
              className="flex h-full items-center transition-colors duration-200 hover:text-white/75"
            >
              สมัครงานกับเรา
            </Link>

            <Link
              href="/contact"
              className="flex h-full items-center transition-colors duration-200 hover:text-white/75"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </nav>

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
    </header>
  );
}
