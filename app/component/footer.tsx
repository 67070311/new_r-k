import Image from "next/image";
import { Mail, MapPin, Phone, Smartphone, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 overflow-hidden bg-gradient-to-b from-[#E60012] via-[#D91925] to-[#E8787E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.25fr_1fr] lg:items-center lg:gap-14">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex h-[150px] w-[210px] items-center justify-center rounded-[28px] bg-white/10 px-6 py-5 backdrop-blur-sm ring-1 ring-white/15">
                <Image
                  src="/navbar/logo.png"
                  alt="R&K Technology GPS"
                  width={220}
                  height={100}
                  className="h-auto w-[180px] object-contain brightness-0 invert"
                  priority
                />
              </div>

              <p className="mt-5 text-center text-sm font-medium tracking-[0.2em] text-white/85 lg:text-left">
                R&K TECHNOLOGY GPS
              </p>
            </div>
          </div>

          {/* Company Information */}
          <div className="lg:border-l lg:border-white/20 lg:pl-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/65">
              Company Information
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
              บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด
            </h2>

            <div className="mt-6 flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#E60012]">
                <MapPin size={19} strokeWidth={1.9} />
              </div>

              <p className="text-[15px] leading-7 text-white/90 sm:text-base">
                เลขที่ 88/180 หมู่ 6 ตำบลคูบางหลวง อำเภอลาดหลุมแก้ว
                จังหวัดปทุมธานี 12140
              </p>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#E60012]">
                <Building2 size={19} strokeWidth={1.9} />
              </div>

              <div>
                <p className="text-sm text-white/65">เลขทะเบียนนิติบุคคล</p>
                <p className="mt-1 text-base font-medium tracking-[0.04em] text-white">
                  0135557008976
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:border-l lg:border-white/20 lg:pl-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/65">
              Contact Us
            </p>

            <div className="mt-6 space-y-5">
              <a href="tel:021980006" className="group flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#E60012] transition duration-300 group-hover:scale-110">
                  <Phone size={19} strokeWidth={1.9} />
                </div>

                <div>
                  <p className="text-sm text-white/65">โทรศัพท์สำนักงาน</p>
                  <p className="mt-0.5 text-base font-medium text-white">
                    02-1980006
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#E60012]">
                  <Smartphone size={19} strokeWidth={1.9} />
                </div>

                <div>
                  <p className="text-sm text-white/65">โทรศัพท์มือถือ</p>

                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2">
                    <a
                      href="tel:0863004117"
                      className="text-base font-medium text-white transition hover:text-white/75"
                    >
                      086-3004117
                    </a>

                    <span className="text-white/40">/</span>

                    <a
                      href="tel:0868898593"
                      className="text-base font-medium text-white transition hover:text-white/75"
                    >
                      086-8898593
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:info@r-ktechnologygps.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#E60012] transition duration-300 group-hover:scale-110">
                  <Mail size={19} strokeWidth={1.9} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-white/65">อีเมล</p>
                  <p className="mt-0.5 break-all text-base font-medium text-white">
                    info@r-ktechnologygps.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>Copyright © 2015 R&K Technology GPS. All rights reserved.</p>

          <a
            href="https://www.r-ktechnologygps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white transition hover:text-white/70"
          >
            www.r-ktechnologygps.com
          </a>
        </div>
      </div>
    </footer>
  );
}
