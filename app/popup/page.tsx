"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import { FaFacebookMessenger, FaLine } from "react-icons/fa6";

import EmailPopup from "./email";
import LinePopup from "./line";
import TelPopup from "./tel";

type PopupType = "line" | "email" | "tel" | null;

type PopupContactItem = {
  title: string;
  color: string;
  icon: React.ReactNode;
  type: "popup";
  popup: Exclude<PopupType, null>;
};

type LinkContactItem = {
  title: string;
  color: string;
  icon: React.ReactNode;
  type: "link";
  href: string;
};

type ContactItem = PopupContactItem | LinkContactItem;

export default function PopupPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePopup, setActivePopup] = useState<PopupType>(null);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const contactItems: ContactItem[] = [
    {
      title: "Messenger",
      color: "bg-[#1687F8]",
      icon: <FaFacebookMessenger className="text-[23px] sm:text-[28px]" />,
      type: "link",
      href: "https://m.me/USERNAME",
    },
    {
      title: "LINE",
      color: "bg-[#06C755]",
      icon: <FaLine className="text-[23px] sm:text-[28px]" />,
      type: "popup",
      popup: "line",
    },
    {
      title: "Email",
      color: "bg-[#F97316]",
      icon: (
        <Mail size={21} strokeWidth={2} className="sm:h-[24px] sm:w-[24px]" />
      ),
      type: "popup",
      popup: "email",
    },
    {
      title: "โทรหาเรา",
      color: "bg-[#17B6AF]",
      icon: (
        <Phone size={21} strokeWidth={2} className="sm:h-[24px] sm:w-[24px]" />
      ),
      type: "popup",
      popup: "tel",
    },
  ];

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimer();
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimer();

    closeTimerRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 250);
  };

  const openPopup = (popup: Exclude<PopupType, null>) => {
    clearCloseTimer();
    setActivePopup(popup);
    setMenuOpen(false);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const toggleMenu = () => {
    clearCloseTimer();
    setMenuOpen((previous) => !previous);
  };

  return (
    <>
      <div
        className="fixed bottom-5 right-4 z-[9999] sm:bottom-8 sm:right-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* พื้นที่โปร่งเชื่อมระหว่างเมนูกับปุ่มหลัก */}
        <div
          aria-hidden="true"
          className={`absolute bottom-[52px] right-0 h-[34px] w-[70px] sm:bottom-[60px] sm:h-[40px] sm:w-[82px] ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        />

        {/* เมนูช่องทางติดต่อ */}
        <div
          className={`absolute bottom-[74px] right-0 flex flex-col items-end gap-3 transition-all duration-300 sm:bottom-[92px] sm:gap-4 ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {contactItems.map((item, index) => {
            const content = (
              <>
                <div className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[14px] font-normal text-[#222222] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover/item:-translate-x-1 group-hover/item:shadow-[0_14px_35px_rgba(0,0,0,0.16)] sm:px-7 sm:py-3 sm:text-[17px]">
                  {item.title}
                </div>

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-[0_10px_25px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:h-16 sm:w-16 ${item.color}`}
                >
                  {item.icon}
                </div>
              </>
            );

            if (item.type === "link") {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    clearCloseTimer();
                    setMenuOpen(false);
                  }}
                  className="group/item flex items-center gap-3 outline-none sm:gap-4"
                  style={{
                    transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                  }}
                >
                  {content}
                </a>
              );
            }

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => openPopup(item.popup)}
                className="group/item flex items-center gap-3 outline-none sm:gap-4"
                style={{
                  transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                }}
              >
                {content}
              </button>
            );
          })}
        </div>

        {/* ข้อความลอย */}
        <div
          className={`absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 sm:right-24 ${
            menuOpen
              ? "pointer-events-none translate-x-5 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <p className="rounded-full bg-white/95 px-5 py-3 text-[14px] font-normal text-[#333333] shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm sm:px-6 sm:text-[17px]">
            ติดต่อเราที่นี่ได้เลยค่ะ
          </p>
        </div>

        {/* แสงแดงแบบบาง */}
        <div className="pointer-events-none absolute inset-1 animate-pulse rounded-full bg-[#ED002B]/8 blur-xl" />

        {/* ปุ่มหลัก */}
        <button
          type="button"
          onClick={toggleMenu}
          onFocus={handleMouseEnter}
          aria-label={menuOpen ? "ปิดเมนูติดต่อ" : "เปิดเมนูติดต่อ"}
          aria-expanded={menuOpen}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#ED002B] text-white shadow-[0_0_20px_rgba(237,0,43,0.22)] transition duration-300 hover:scale-105 sm:h-16 sm:w-16"
        >
          <span className="pointer-events-none absolute inset-0 animate-[ping_3s_ease-out_infinite] rounded-full bg-[#ED002B]/10" />

          {menuOpen ? (
            <X
              size={25}
              strokeWidth={2}
              className="relative z-10 sm:h-[28px] sm:w-[28px]"
            />
          ) : (
            <FaFacebookMessenger className="relative z-10 text-[27px] sm:text-[30px]" />
          )}
        </button>
      </div>

      {/* Popup LINE */}
      <LinePopup open={activePopup === "line"} onClose={closePopup} />

      {/* Popup Email */}
      <EmailPopup open={activePopup === "email"} onClose={closePopup} />

      {/* Popup เบอร์โทรศัพท์ */}
      <TelPopup open={activePopup === "tel"} onClose={closePopup} />
    </>
  );
}
