import Image from "next/image";
import { Phone, Smartphone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2">
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
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
                  <Phone size={20} className="text-red-600" />
                </div>
                <span className="text-lg text-gray-700">02-1980006</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
                  <Smartphone size={20} className="text-red-600" />
                </div>
                <span className="text-lg text-gray-700">
                  086-3004117, 086-8898593
                </span>
              </div>

              {/* เปลี่ยนอีเมลเป็นอันใหม่ */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
                  <Mail size={20} className="text-red-600" />
                </div>

                <a
                  href="mailto:info@r-ktechnologygps.com"
                  className="text-lg text-gray-700 transition hover:text-red-600"
                >
                  info@r-ktechnologygps.com
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="text-[16px] leading-8 text-gray-700">
            <span className="font-bold text-gray-900">สำนักงานใหญ่ :</span>{" "}
            บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด เลขที่ 88/180 ม.6
            ต.คูบางหลวง อ.ลาดหลุมแก้ว จ.ปทุมธานี 12140
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
