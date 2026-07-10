import Image from "next/image";
import { Phone, Smartphone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <Image
              src="/navbar/logo.png"
              alt="R&K Technology GPS"
              width={180}
              height={80}
              className="h-auto w-[170px]"
              priority
            />

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
                  <Phone size={20} className="text-red-600" />
                </div>

                <a
                  href="tel:021980006"
                  className="text-lg text-gray-700 transition hover:text-red-600"
                >
                  02-1980006
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
                  <Smartphone size={20} className="text-red-600" />
                </div>

                <div className="flex flex-wrap items-center gap-x-2 text-lg text-gray-700">
                  <a
                    href="tel:0863004117"
                    className="transition hover:text-red-600"
                  >
                    086-3004117
                  </a>

                  <span>,</span>

                  <a
                    href="tel:0868898593"
                    className="transition hover:text-red-600"
                  >
                    086-8898593
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
                  <Mail size={20} className="text-red-600" />
                </div>

                <a
                  href="mailto:info@r-ktechnologygps.com"
                  className="break-all text-lg text-gray-700 transition hover:text-red-600"
                >
                  info@r-ktechnologygps.com
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="text-lg leading-8 text-gray-700 lg:pt-[88px]">
            <p>
              <span className="font-bold text-gray-900">สำนักงานใหญ่ :</span>{" "}
              บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด เลขที่ 88/180 ม.6
              ต.คูบางหลวง อ.ลาดหลุมแก้ว จ.ปทุมธานี 12140
            </p>

            <p className="mt-5">
              <span className="font-bold text-gray-900">
                ทะเบียนนิติบุคคลเลขที่ :
              </span>{" "}
              0135557008976
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-600">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-5 text-white">
          <p className="text-sm md:text-base">
            Copyright © 2015.&nbsp;
            <a
              href="https://www.r-ktechnologygps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition hover:opacity-80"
            >
              www.r-ktechnologygps.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
