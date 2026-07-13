import Image from "next/image";
import { Building2, Mail, MapPin, Phone, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 overflow-hidden bg-gradient-to-br from-[#ED002B] via-[#D91528] to-[#B70A1C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.2fr_1fr]">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="rounded-3xl bg-white p-6 shadow-2xl">
              <Image
                src="/navbar/logo.png"
                alt="R&K Technology GPS"
                width={220}
                height={110}
                className="h-auto w-[180px] object-contain"
                priority
              />
            </div>

            <h3 className="mt-6 text-center text-xl font-semibold tracking-wide lg:text-left">
              R&K TECHNOLOGY GPS
            </h3>

            <p className="mt-2 max-w-xs text-center text-sm leading-7 text-white/80 lg:text-left">
              ผู้นำด้านระบบติดตามยานพาหนะผ่านดาวเทียม GPS Tracking
              พร้อมโซลูชันสำหรับธุรกิจทุกประเภท
            </p>
          </div>

          {/* Company */}
          <div className="lg:border-l lg:border-white/20 lg:pl-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Company Information
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-relaxed">
              บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B]">
                  <MapPin size={20} />
                </div>

                <p className="leading-7 text-white/90">
                  เลขที่ 88/180 หมู่ 6 ตำบลคูบางหลวง
                  <br />
                  อำเภอลาดหลุมแก้ว จังหวัดปทุมธานี 12140
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#ED002B]">
                  <Building2 size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/70">เลขทะเบียนนิติบุคคล</p>

                  <p className="mt-1 text-lg font-semibold">0135557008976</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:border-l lg:border-white/20 lg:pl-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Contact Us
            </p>

            <div className="mt-8 space-y-6">
              <a href="tel:021980006" className="group flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#ED002B] transition group-hover:scale-110">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/70">โทรศัพท์สำนักงาน</p>

                  <p className="font-semibold">02-198-0006</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#ED002B]">
                  <Smartphone size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/70">โทรศัพท์มือถือ</p>

                  <div className="flex flex-wrap gap-x-2 font-semibold">
                    <a
                      href="tel:0863004117"
                      className="transition hover:text-white/70"
                    >
                      086-300-4117
                    </a>

                    <span>/</span>

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
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#ED002B] transition group-hover:scale-110">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/70">อีเมล</p>

                  <p className="font-semibold break-all">
                    info@r-ktechnologygps.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#ED002B]">
                  <Smartphone size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/70">LINE ID</p>

                  <p className="font-semibold">RKGPS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/15 bg-black/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/80 md:flex-row lg:px-8">
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
