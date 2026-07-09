"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Car,
  ChevronDown,
  Headphones,
  LogIn,
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

type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
};

const trackingItems: MenuItem[] = [
  {
    label: "GPS ติดตามรถ Real Time",
    href: "/prodeuct-service/car-program/real-time",
  },
  {
    label: "GPS ติดตามรถ ไม่มีรายเดือน",
    href: "/prodeuct-service/car-program/no-month",
  },
  {
    label: "GPS ติดตามรถ ตาม Function การใช้งาน",
    href: "/prodeuct-service/car-program/function",
    children: [
      {
        label: "GPS Tracking ติดตามรถยนต์ทั่วไป",
        href: "/prodeuct-service/car-program/function/tracking1",
      },
      {
        label: "GPS Tracking ติดตามรถ Sensor ปริมาณน้ำมัน",
        href: "/prodeuct-service/car-program/function/tracking2",
      },
    ],
  },
  {
    label: "GPS Tracking ติดตามรถยนต์ทั่วไป",
    href: "/prodeuct-service/car-program/tracking",
    children: [
      {
        label: "GPS ติดตามรถขนส่ง",
        href: "/prodeuct-service/car-program/tracking/gps1",
      },
      {
        label: "GPS Tracker ติดตามรถเช่า รถ Taxi",
        href: "/prodeuct-service/car-program/tracking/gps2",
      },
      {
        label: "GPS Tracker ติดตามรถมอเตอร์ไซค์",
        href: "/prodeuct-service/car-program/tracking/gps3",
      },
    ],
  },
  {
    label: "Tracking Server",
    href: "/prodeuct-service/car-program/tracking-sever",
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

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [deviceOpen, setDeviceOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [openTrackingChildren, setOpenTrackingChildren] = useState<
    Record<string, boolean>
  >({});

  const closeMenu = () => {
    setOpen(false);
    setAboutOpen(false);
    setServiceOpen(false);
    setDeviceOpen(false);
    setTrackingOpen(false);
    setLoginOpen(false);
    setOpenTrackingChildren({});
  };

  const toggleTrackingChild = (href: string) => {
    setOpenTrackingChildren((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  return (
    <>
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-md lg:hidden"
        />
      )}

      <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)] lg:hidden">
        <div className="flex h-[72px] items-center justify-between px-5">
          <Link href="/" onClick={closeMenu}>
            <img
              src="/navbar/logo.png"
              alt="R&K Logo"
              className="h-[34px] w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-black"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100 bg-white px-5 pb-8 pt-4">
            <div className="space-y-2 text-[16px] font-medium text-black">
              <Link
                href="/"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                หน้าหลัก
              </Link>

              <button
                type="button"
                onClick={() => setAboutOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                <span>เกี่ยวกับเรา</span>
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="ml-4 space-y-1 border-l border-gray-100 pl-3">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-2.5 text-[15px] font-normal text-gray-600 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setServiceOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                <span>สินค้าและบริการ</span>
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceOpen && (
                <div className="ml-4 space-y-2 border-l border-gray-100 pl-3">
                  <button
                    type="button"
                    onClick={() => setDeviceOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[15px] font-normal transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                  >
                    <span className="flex items-center gap-3">
                      <Monitor className="h-5 w-5" />
                      อุปกรณ์
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        deviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {deviceOpen && (
                    <div className="ml-6 space-y-1">
                      {deviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="block rounded-lg px-4 py-2.5 text-[14px] font-normal text-gray-600 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setTrackingOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[15px] font-normal transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                  >
                    <span className="flex items-center gap-3">
                      <Car className="h-5 w-5" />
                      โปรแกรมติดตามรถ
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        trackingOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {trackingOpen && (
                    <div className="ml-6 space-y-1">
                      {trackingItems.map((item) => (
                        <div key={item.href}>
                          <div className="flex items-center gap-2">
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="min-w-0 flex-1 rounded-lg px-4 py-2.5 text-[14px] font-normal text-gray-600 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                            >
                              {item.label}
                            </Link>

                            {item.children ? (
                              <button
                                type="button"
                                onClick={() => toggleTrackingChild(item.href)}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition ${
                                    openTrackingChildren[item.href]
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                            ) : null}
                          </div>

                          {item.children && openTrackingChildren[item.href] ? (
                            <div className="ml-4 space-y-1 border-l border-gray-100 pl-3">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="block rounded-lg px-4 py-2.5 text-[13px] font-normal leading-6 text-gray-500 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href="/after-sale"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-normal transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                  >
                    <Headphones className="h-5 w-5" />
                    <span>บริการหลังการขาย</span>
                  </Link>
                </div>
              )}

              <Link
                href="/work-with-us"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                สมัครงานกับเรา
              </Link>

              <Link
                href="/faq"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                ถามตอบ
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                ติดต่อเรา
              </Link>

              <button
                type="button"
                onClick={() => setLoginOpen((prev) => !prev)}
                className="mt-4 flex w-full items-center justify-between rounded-2xl bg-[#ED002B] px-5 py-4 text-white transition hover:bg-[#D90027]"
              >
                <span>Login</span>
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    loginOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {loginOpen && (
                <div className="space-y-2 pt-2">
                  {loginItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex gap-3 rounded-2xl border border-gray-100 p-4 transition hover:bg-[#F5FBF7]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#108C2E]">
                        <LogIn className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-[14px] font-medium text-black">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[13px] leading-6 text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
