import {
  Car,
  CheckCircle2,
  Gift,
  Laptop,
  Phone,
  ShieldCheck,
  User,
  Users,
  GraduationCap,
  Briefcase,
  Home,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "ประกันสังคม",
    desc: "หรือสวัสดิการอื่น ๆ ตามที่กฎหมายแรงงานกำหนด",
  },
  {
    icon: Phone,
    title: "ค่าโทรศัพท์",
    desc: "เงินช่วยค่าโทรศัพท์ (สำหรับตำแหน่งพนักงานขาย)",
  },
  {
    icon: Car,
    title: "ค่าน้ำมันและค่าสึกหรอรถ",
    desc: "เงินช่วยค่าน้ำมันรถ และค่าสึกหรอรถ",
  },
  {
    icon: Gift,
    title: "โบนัสและคอมมิชชั่น",
    desc: "โบนัส คอมมิชชั่น หรือเงินอัดฉีดพิเศษ ฯลฯ",
  },
];

const qualifications = [
  {
    icon: User,
    text: "ชาย / หญิง",
  },
  {
    icon: Users,
    text: "อายุ 28 - 40 ปี",
  },
  {
    icon: Home,
    text: "มีที่พักอาศัยในจังหวัดที่ต้องการสมัคร",
  },
  {
    icon: Car,
    text: "หากมียานพาหนะและคอมพิวเตอร์ส่วนตัว จะพิจารณาเป็นพิเศษ",
  },
  {
    icon: Laptop,
    text: "มีความสามารถใช้คอมพิวเตอร์ได้ดี",
  },
  {
    icon: GraduationCap,
    text: "วุฒิการศึกษาขั้นต่ำ ปวช. ขึ้นไป",
  },
  {
    icon: Briefcase,
    text: "มีประสบการณ์ด้านการขายมาก่อน",
  },
  {
    icon: CheckCircle2,
    text: "บุคลิกภาพดี มีความมั่นใจ ทำงานคล่องแคล่ว และมีมนุษยสัมพันธ์ดี",
  },
  {
    icon: CheckCircle2,
    text: "เหมาะสมกับตำแหน่งงานและสถานะภาพการทำงาน",
  },
  {
    icon: Wallet,
    text: "อัตราฐานเงินเดือนและคอมมิชชั่น ขึ้นอยู่กับความสามารถ พร้อมเงินอัดฉีดพิเศษ เบี้ยขยัน โบนัสประจำปี และสวัสดิการอื่น ๆ",
  },
];

export default function BenefitSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        {/* สวัสดิการ */}
        <div>
          <h2 className="text-[18px] font-semibold text-black md:text-[22px]">
            สวัสดิการ
          </h2>

          <div className="mt-3 h-[3px] w-[70px] rounded-full bg-[#ED002B]" />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F3]">
                    <Icon className="h-7 w-7 text-[#ED002B]" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* คุณสมบัติผู้สมัคร */}
        <div className="mt-20">
          <h2 className="text-[18px] font-semibold text-black md:text-[22px]">
            คุณสมบัติผู้สมัคร
          </h2>

          <div className="mt-3 h-[3px] w-[70px] rounded-full bg-[#ED002B]" />

          <div className="mt-10 rounded-3xl bg-gray-50 p-6 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              {qualifications.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0F3]">
                      <Icon className="h-5 w-5 text-[#ED002B]" />
                    </div>

                    <p className="text-[15px] leading-7 text-gray-700">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
