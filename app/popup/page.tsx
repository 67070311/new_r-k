"use client";

import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import { FaFacebookMessenger, FaLine } from "react-icons/fa6";
import TelPopup from "./tel";
import LinePopup from "./line";

const contactItems = [
  {
    title: "Messenger",
    href: "https://m.me/USERNAME",
    color: "bg-[#1687F8]",
    icon: <FaFacebookMessenger className="text-[27px] sm:text-[30px]" />,
    external: true,
    type: "link",
  },
  {
    title: "LINE",
    href: "",
    color: "bg-[#06C755]",
    icon: <FaLine className="text-[27px] sm:text-[30px]" />,
    external: false,
    type: "line-popup",
  },
  {
    title: "Email",
    href: "mailto:info@r-ktechnologygps.com",
    color: "bg-[#FF7A17]",
    icon: <Mail size={24} strokeWidth={2} />,
    external: false,
    type: "link",
  },
  {
    title: "โทรหาเรา",
    href: "",
    color: "bg-[#17B6AF]",
    icon: <Phone size={24} strokeWidth={2} />,
    external: false,
    type: "tel-popup",
  },
];

export default function PopupPage() {
  const [open, setOpen] = useState(false);
  const [telOpen, setTelOpen] = useState(false);
  const [lineOpen, setLineOpen] = useState(false);

  const handleTelOpen = () => {
    setOpen(false);
    setTelOpen(true);
  };

  const handleLineOpen = () => {
    setOpen(false);
    setLineOpen(true);
  };

  return (
    <>
      <div
        className="fixed bottom-5 right-5 z-[9999] sm:bottom-8 sm:right-8"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* พื้นที่เชื่อมระหว่างปุ่มกับเมนู */}
        <div
          className={`absolute bottom-12 right-0 h-[390px] w-[310px] ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
        />

        {/* รายการช่องทางติดต่อ */}
        <div
          className={`absolute bottom-[80px] right-0 flex flex-col items-end gap-3 transition-all duration-300 sm:bottom-[92px] sm:gap-4 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          {contactItems.map((item, index) => {
            const itemClassName = `group flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 transition-all duration-300 sm:gap-4 ${
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-90 opacity-0"
            }`;

            const itemStyle = {
              transitionDelay: open
                ? `${(contactItems.length - index - 1) * 65}ms`
                : "0ms",
            };

            const content = (
              <>
                <div className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[15px] font-normal text-[#222] shadow-[0_8px_30px_rgba(0,0,0,0.14)] transition-all duration-200 group-hover:-translate-x-1 group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:px-7 sm:py-3 sm:text-[17px]">
                  {item.title}
                </div>

                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_14px_32px_rgba(0,0,0,0.24)] sm:h-16 sm:w-16 ${item.color}`}
                >
                  {item.icon}
                </div>
              </>
            );

            if (item.type === "line-popup") {
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={handleLineOpen}
                  aria-label="เปิด QR Code LINE"
                  className={itemClassName}
                  style={itemStyle}
                >
                  {content}
                </button>
              );
            }

            if (item.type === "tel-popup") {
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={handleTelOpen}
                  aria-label="เปิดข้อมูลเบอร์โทรศัพท์"
                  className={itemClassName}
                  style={itemStyle}
                >
                  {content}
                </button>
              );
            }

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.title}
                className={itemClassName}
                style={itemStyle}
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* ข้อความข้างปุ่ม */}
        <div
          className={`pointer-events-none absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 sm:right-[92px] ${
            open
              ? "translate-x-5 scale-95 opacity-0"
              : "translate-x-0 scale-100 opacity-100"
          }`}
        >
          <div className="rounded-full bg-white px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <p className="text-[14px] font-normal text-[#333] sm:text-[17px]">
              ติดต่อเราที่นี่ได้เลยค่ะ
            </p>
          </div>
        </div>

        {/* แสงรอบปุ่มหลัก */}
        <div className="pointer-events-none absolute inset-0 animate-pulse rounded-full bg-[#ED002B]/20 blur-xl" />

        {/* ปุ่มหลัก */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "ปิดเมนูติดต่อ" : "เปิดเมนูติดต่อ"}
          aria-expanded={open}
          className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#ED002B] text-white shadow-[0_8px_28px_rgba(237,0,43,0.32)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#D90027] hover:shadow-[0_14px_35px_rgba(237,0,43,0.42)] sm:h-16 sm:w-16 ${
            open ? "-translate-y-1 scale-105" : ""
          }`}
        >
          {!open && (
            <span className="pointer-events-none absolute inset-0 animate-[ping_2.5s_ease-out_infinite] rounded-full bg-[#ED002B]" />
          )}

          <span
            className={`absolute z-10 transition-all duration-300 ${
              open
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-50 opacity-0"
            }`}
          >
            <X size={28} strokeWidth={2.2} />
          </span>

          <span
            className={`absolute z-10 transition-all duration-300 ${
              open
                ? "-rotate-90 scale-50 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <FaFacebookMessenger className="text-[27px] sm:text-[30px]" />
          </span>
        </button>
      </div>

      <LinePopup open={lineOpen} onClose={() => setLineOpen(false)} />

      <TelPopup open={telOpen} onClose={() => setTelOpen(false)} />
    </>
  );
}
