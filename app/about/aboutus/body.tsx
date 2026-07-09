"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2547",
    text: "จดทะเบียนบริษัทในนาม อาร์แอนด์เคเทคโนโลยี เลือกสรรค์ผลิตภัณฑ์ และพัฒนาระบบ ติดตามยานพาหนะแบบ Offline",
  },
  {
    year: "2549",
    text: "เลือกสรรค์ผลิตภัณฑ์ และพัฒนาระบบ ติดตามยานพาหนะแบบ Online เปิดตัวสินค้าและโปรแกรมติดตามยานพาหนะแบบ Online ด้วย web base application ยกเลิกการพัฒนา และการขยายระบบ Offline ทดแทนลูกค้าด้วยระบบ Online",
  },
  {
    year: "2550",
    text: 'เพิ่มความสะดวก การใช้งานนอกสถานที่ด้วยโทรศัพท์มือถือ Mobile Tracking พัฒนาเชื่อมต่อระบบแผนที่ Google ได้สำเร็จเป็นรายต้นๆ ยอดขายโตกว่า 100% ได้รับการตอบรับ และการบอกต่อจากกลุ่มผู้ใช้อย่างมากมาย พัฒนาปรับเพิ่ม function ใหม่ๆ เช่น การแนะนำเส้นทาง "Navigator" และอื่นๆ',
  },
  {
    year: "2551",
    text: "ร่วมพัฒนาระบบงานเฉพาะด้าน เช่น ระบบการติดตามสินค้าด้วย barcode การรายงานจำนวน และยืนยันตัวตนพนักงานที่โดยสารรถ Shutter bus ด้วยบัตร RFID ระบบการรับงาน Job Order ของพนักงานขับรถ Limousine",
  },
  {
    year: "2552",
    text: "เปิดตัวสินค้าทางเลือกใหม่ 2 รุ่นคือ รุ่นติดตามรถแบบประหยัด และรุ่นติดตามแบบมาตรฐาน พร้อมระบบสั่งดับเครื่องยนต์อัจฉริยะ จากโปรแกรมและโทรศัพท์มือถือ",
  },
  {
    year: "2553",
    text: "นำเข้าสินค้าใหม่ 1 รุ่นคือรุ่นติดตามแบบพื้นฐานราคาเหมาะกับเศรษฐกิจ ณ.ปัจจุบันเพื่อเป็นทางเลือกให้กับลูกค้ามากยิ่งขึ้น",
  },
  {
    year: "2554",
    text: "ขยายสาขาเพิ่มที่ จ.พระนครศรีอยุธยา เพื่อการบริการหลังการขายให้ครอบคลุมมากยิ่งขึ้น และสามารถเข้าถึงสถานที่ลูกค้าในบริเวณใกล้เคียงได้รวดเร็วกว่าเดิม",
  },
  {
    year: "2556",
    text: "เปิดสำนักงานแห่งใหม่ที่ จ.ปทุมธานี รองรับลูกค้าในเขตปริมณฑลกระจายให้กลุ่มลูกค้าทุกประเภท ทั้งกลุ่มอุตสาหกรรมขนาดเล็ก และกลุ่มรถการเกษตรทุกชนิด ฯลฯ",
  },
  {
    year: "2557",
    text: "เปิดสาขาใหม่ที่ จ.ลพบุรี เพื่อเพิ่มศักยภาพในการดูแลหลังการขายของลูกค้าในภาคกลางได้ครอบคลุมมากยิ่งขึ้น และมีการแก้ไขเปลี่ยนแปลงโปรแกรมใหม่เพื่อตอบสนองความต้องการของลูกค้าทุกธุรกิจได้ดียิ่งขึ้น",
  },
  {
    year: "2558",
    text: "เปิดรับบุคลากรรุ่นใหม่ เพื่อรองรับการเติบโตขององค์กรในอนาคต เปิดรับสมัครพนักงานขายทั่วประเทศเพื่อรองรับความต้องการของลูกค้าให้ครอบคลุมมากขึ้น",
  },
];

export default function Body() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="relative">
          <motion.div
            className="absolute bottom-0 left-[132px] top-0 w-px origin-top bg-[#ED002B]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <div className="space-y-[72px]">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="grid grid-cols-[92px_80px_1fr] items-start"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="rounded-[8px] bg-[#ED002B] px-3 py-2 text-center text-[20px] font-bold leading-none text-white">
                    {item.year}
                  </div>
                </motion.div>

                <div className="relative flex h-[40px] items-center justify-center">
                  <motion.span
                    className="relative z-10 h-[16px] w-[16px] rounded-full bg-[#ED002B]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08 + 0.15,
                      ease: "backOut",
                    }}
                  />
                </div>

                <motion.p
                  className="pt-[4px] text-[16px] leading-[1.9] text-[#111]"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08 + 0.05,
                    ease: "easeOut",
                  }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
