"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Car,
  ChevronDown,
  ExternalLink,
  Headphones,
  Menu,
  Monitor,
  X,
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

const trackingLoginUrl = "https://rkgps.com/tracking/index.php?page=login";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [deviceOpen, setDeviceOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setServiceOpen(false);
    setDeviceOpen(false);
    setTrackingOpen(false);
  };

  const toggleService = () => {
    setServiceOpen((current) => {
      const nextValue = !current;

      if (!nextValue) {
        setDeviceOpen(false);
        setTrackingOpen(false);
      }

      return nextValue;
    });
  };

  const toggleDevice = () => {
    setDeviceOpen((current) => !current);
    setTrackingOpen(false);
  };

  const toggleTracking = () => {
    setTrackingOpen((current) => !current);
    setDeviceOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="ปิดเมนู"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-[0_3px_16px_rgba(0,0,0,0.08)] lg:hidden">
        <div className="flex h-[76px] items-center justify-between px-5">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="กลับสู่หน้าหลัก"
            className="flex items-center"
          >
            <img
              src="/navbar/logo.png"
              alt="R&K Technology GPS"
              className="h-[46px] w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ED002B] text-white shadow-[0_7px_18px_rgba(237,0,43,0.22)] transition active:scale-95"
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={2.3} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2.3} />
            )}
          </button>
        </div>

        <div className="h-1 w-full bg-[#ED002B]" />

        <div
          id="mobile-navigation"
          className={`absolute left-0 top-full w-full overflow-hidden bg-white shadow-[0_18px_35px_rgba(0,0,0,0.13)] transition-all duration-300 ${
            menuOpen
              ? "visible max-h-[calc(100dvh-80px)] opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <nav
            aria-label="เมนูหลักบนโทรศัพท์"
            className="max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain px-4 pb-7 pt-4"
          >
            <div className="space-y-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex min-h-12 items-center rounded-xl px-4 py-3 text-[16px] font-semibold text-neutral-900 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
              >
                หน้าหลัก
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setAboutOpen((current) => !current)}
                  aria-expanded={aboutOpen}
                  className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-semibold text-neutral-900 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                >
                  <span>เกี่ยวกับเรา</span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2.2}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    aboutOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#FFE0E6] pb-2 pl-3">
                      {aboutItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="block rounded-xl px-4 py-3 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={toggleService}
                  aria-expanded={serviceOpen}
                  className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-semibold text-neutral-900 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                >
                  <span>สินค้าและบริการ</span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2.2}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    serviceOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#FFE0E6] pb-2 pl-3">
                      <div>
                        <button
                          type="button"
                          onClick={toggleDevice}
                          aria-expanded={deviceOpen}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium text-neutral-700 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                        >
                          <span className="flex items-center gap-3">
                            <Monitor
                              className="h-5 w-5 shrink-0"
                              strokeWidth={2}
                            />
                            <span>อุปกรณ์</span>
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              deviceOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ${
                            deviceOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-5 space-y-1 border-l border-neutral-200 py-1 pl-3">
                              {deviceItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMenu}
                                  className="block rounded-lg px-3 py-2.5 text-[14px] font-medium text-neutral-500 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={toggleTracking}
                          aria-expanded={trackingOpen}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium text-neutral-700 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                        >
                          <span className="flex items-center gap-3">
                            <Car className="h-5 w-5 shrink-0" strokeWidth={2} />
                            <span>โปรแกรมติดตามรถ</span>
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              trackingOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ${
                            trackingOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-5 space-y-1 border-l border-neutral-200 py-1 pl-3">
                              {trackingItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMenu}
                                  className="block rounded-lg px-3 py-2.5 text-[14px] font-medium leading-6 text-neutral-500 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/prodeuct-service/after-sale"
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-neutral-700 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
                      >
                        <Headphones
                          className="h-5 w-5 shrink-0"
                          strokeWidth={2}
                        />
                        <span>บริการหลังการขาย</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/work-with-us"
                onClick={closeMenu}
                className="flex min-h-12 items-center rounded-xl px-4 py-3 text-[16px] font-semibold text-neutral-900 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
              >
                สมัครงานกับเรา
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex min-h-12 items-center rounded-xl px-4 py-3 text-[16px] font-semibold text-neutral-900 transition-colors hover:bg-[#FFF3F5] hover:text-[#ED002B]"
              >
                ติดต่อเรา
              </Link>
            </div>

            <div className="mt-5 border-t border-neutral-100 pt-5">
              <p className="text-center text-[13px] font-medium text-neutral-500">
                ระบบติดตามรถออนไลน์
              </p>

              <p className="mt-1 text-center text-[15px] font-semibold text-[#ED002B]">
                เข้าสู่ระบบติดตามรถที่นี่
              </p>

              <a
                href={trackingLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="group relative isolate mt-4 flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#ED002B] px-5 py-4 text-[16px] font-bold tracking-[0.3px] text-white shadow-[0_10px_25px_rgba(237,0,43,0.24)] transition-all hover:bg-[#D90027] active:scale-[0.98]"
              >
                <span className="relative z-10">Login</span>

                <ExternalLink
                  className="relative z-10 h-[18px] w-[18px]"
                  strokeWidth={2.2}
                />

                <span className="pointer-events-none absolute inset-y-[-45%] left-[-70%] w-[42%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px] animate-[mobileLoginShine_2.8s_ease-in-out_infinite]" />
              </a>
            </div>
          </nav>
        </div>

        <style>{`
          @keyframes mobileLoginShine {
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
    </>
  );
}
