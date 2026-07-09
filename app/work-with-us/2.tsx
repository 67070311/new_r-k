import { BatteryCharging, MapPin, RadioTower, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: RadioTower,
    title: "รองรับ 3G",
    desc: "เชื่อมต่อเสถียร",
  },
  {
    icon: MapPin,
    title: "ติดตามแม่นยำ",
    desc: "เรียลไทม์",
  },
  {
    icon: BatteryCharging,
    title: "แบตเตอรี่สำรอง",
    desc: "ในตัว",
  },
  {
    icon: ShieldCheck,
    title: "ติดตั้งง่าย",
    desc: "ใช้งานได้ทันที",
  },
];

export default function BenefitSection() {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <h2 className="text-[18px] font-semibold text-black md:text-[20px]">
          สวัสดิการ
        </h2>

        <div className="mt-3 h-[2px] w-[70px] bg-[#ED002B]" />

        <div className="mt-8 grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FFF0F3] md:h-[62px] md:w-[62px] lg:h-[66px] lg:w-[66px]">
                  <Icon className="h-[27px] w-[27px] text-[#ED002B] md:h-[29px] md:w-[29px]" />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold leading-tight text-black md:text-[16px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[13px] font-normal leading-relaxed text-[#333] md:text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
