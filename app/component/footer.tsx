import Image from "next/image";
import {
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
} from "lucide-react";
import VisitorCounter from "./visitor-counter";

export default function Footer() {
  return (
    <footer className="mt-14 overflow-hidden bg-gradient-to-br from-[#ED002B] via-[#D91528] to-[#B70A1C] text-white sm:mt-16 lg:mt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[0.85fr_1.25fr_1fr] lg:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1 lg:items-start lg:text-left">
            <div className="rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6">
              <Image
                src="/navbar/logo.png"
                alt="R&K Technology GPS"
                width={220}
                height={110}
                className="h-auto w-[145px] object-contain sm:w-[180px]"
                priority
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold tracking-wide sm:mt-6 sm:text-xl">
              R&amp;K TECHNOLOGY GPS
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-7 text-white/80">
              ผู้นำด้านระบบติดตามยานพาหนะผ่านดาวเทียม GPS Tracking
              พร้อมโซลูชันสำหรับธุรกิจทุกประเภท
            </p>
          </div>

          {/* Company */}
          <div className="border-t border-white/20 pt-8 md:border-t-0 md:pt-0 lg:border-l lg:pl-10 xl:pl-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm sm:tracking-[0.25em]">
              Company Information
            </p>

            <h2 className="mt-4 text-xl font-bold leading-relaxed sm:text-2xl lg:whitespace-nowrap">
              บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด
            </h2>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B] sm:h-11 sm:w-11">
                  <MapPin size={20} />
                </div>

                <p className="min-w-0 text-sm leading-7 text-white/90 sm:text-base">
                  เลขที่ 88/180 หมู่ 6 ตำบลคูบางหลวง
                  <br className="hidden sm:block" />
                  <span className="sm:ml-1">
                    อำเภอลาดหลุมแก้ว จังหวัดปทุมธานี 12140
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B] sm:h-11 sm:w-11">
                  <Building2 size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-white/70">เลขทะเบียนนิติบุคคล</p>

                  <p className="mt-1 text-base font-semibold sm:text-lg">
                    0135557008976
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-white/20 pt-8 md:border-t-0 md:pt-0 lg:border-l lg:pl-10 xl:pl-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm sm:tracking-[0.25em]">
              Contact Us
            </p>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
              <a
                href="tel:021980006"
                className="group flex items-center gap-3 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B] transition duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                  <Phone size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-white/70">โทรศัพท์สำนักงาน</p>
                  <p className="font-semibold">02-198-0006</p>
                </div>
              </a>

              <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B] sm:h-11 sm:w-11">
                  <Smartphone size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-white/70">โทรศัพท์มือถือ</p>

                  <div className="mt-1 flex flex-col font-semibold sm:flex-row sm:flex-wrap sm:gap-x-2">
                    <a
                      href="tel:0863004117"
                      className="transition hover:text-white/70"
                    >
                      086-300-4117
                    </a>

                    <span className="hidden sm:inline">/</span>

                    <a
                      href="tel:0868898593"
                      className="transition hover:text-white/70"
                    >
                      086-889-8593
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:info@r-ktechnologygps.com"
                className="group flex items-start gap-3 sm:items-center sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B] transition duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-white/70">อีเมล</p>

                  <p className="break-all text-sm font-semibold sm:break-normal sm:text-base">
                    info@r-ktechnologygps.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B] sm:h-11 sm:w-11">
                  <MessageCircle size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-white/70">LINE ID</p>
                  <p className="font-semibold">RKGPS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <VisitorCounter />
      </div>

      {/* Bottom */}
      <div className="border-t border-white/15 bg-black/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/80 sm:px-6 sm:text-sm md:flex-row md:text-left lg:px-8">
          <p>Copyright © 2015 R&amp;K Technology GPS. All rights reserved.</p>

          <a
            href="https://www.r-ktechnologygps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition hover:text-white"
          >
            www.r-ktechnologygps.com
          </a>
        </div>
      </div>
    </footer>
  );
}
