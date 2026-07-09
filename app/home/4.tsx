import Image from "next/image";

type CardItem =
  | {
      type: "text";
      title: string;
      desc: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

const items: CardItem[] = [
  {
    type: "text",
    title: "ประสบการณ์กว่า 20 ปี",
    desc: "ให้บริการระบบ GPS Tracking มาอย่างยาวนาน ดูแลลูกค้าทั่วประเทศ พร้อมทีมผู้เชี่ยวชาญคอยให้คำแนะนำและบริการอย่างมืออาชีพ",
  },
  {
    type: "image",
    src: "/home/4/first.png",
    alt: "ช่างกำลังตรวจเช็ครถ",
  },
  {
    type: "text",
    title: "เทคโนโลยีทันสมัย",
    desc: "ติดตามแม่นยำแบบ Real-Time รองรับการติดตามตำแหน่ง แจ้งเตือนเหตุการณ์สำคัญ และอัปเดตข้อมูลอย่างต่อเนื่อง",
  },
  {
    type: "image",
    src: "/home/4/second.png",
    alt: "ทีมช่างผู้เชี่ยวชาญ",
  },
  {
    type: "text",
    title: "ได้รับมาตรฐานจากกรมการขนส่งทางบก",
    desc: "ถูกต้องตามข้อกำหนดทุกประการ อุปกรณ์และระบบได้รับการรับรอง พร้อมรองรับการใช้งานตามกฎหมาย",
  },
  {
    type: "image",
    src: "/home/4/3.png",
    alt: "ระบบ GPS Tracking",
  },
];

export default function HomeWhyUsSection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-8 text-center lg:mb-10">
          <h2 className="text-[22px] font-bold text-black sm:text-[24px] lg:text-[26px]">
            ทำไมต้องเรา?
          </h2>

          <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-[#ED002B]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item, index) => {
            if (item.type === "image") {
              return (
                <div
                  key={index}
                  className="relative min-h-[170px] overflow-hidden rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.07)] sm:min-h-[190px] lg:min-h-[205px]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              );
            }

            return (
              <div
                key={index}
                className="flex min-h-[170px] flex-col justify-center rounded-xl bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.07)] sm:min-h-[190px] sm:p-6 lg:min-h-[205px]"
              >
                <h3 className="text-[17px] font-bold leading-snug text-black sm:text-[18px] lg:text-[19px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] font-normal leading-[1.75] text-black sm:text-[14px] lg:text-[15px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
