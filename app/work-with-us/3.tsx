"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Handshake,
  Mail,
  Phone,
  Smartphone,
  Users,
} from "lucide-react";

const opportunities = [
  {
    icon: Handshake,
    title: "ตัวแทนจำหน่าย (Dealer)",
    desc: "ยินดีต้อนรับผู้สนใจร่วมทำธุรกิจเป็นตัวแทนจำหน่ายอุปกรณ์ GPS และระบบติดตามยานพาหนะผ่านดาวเทียม รองรับทุกฟังก์ชันการใช้งาน ตอบโจทย์ลูกค้าทุกกลุ่ม พร้อมให้คำปรึกษาและข้อมูลเพิ่มเติม",
    contact: "HOTLINE : 086-300-4117",
  },
  {
    icon: Users,
    title: "ตัวแทนขายอิสระ (Independent Sales)",
    desc: "เปิดรับผู้ที่สนใจเป็นตัวแทนขายอิสระอุปกรณ์ GPS รายได้สูง ไม่จำเป็นต้องทำงานประจำ สามารถสร้างรายได้ตามความสามารถ",
    contact: "สมัครได้ทันที",
  },
];

const contacts = [
  {
    icon: Phone,
    title: "โทรศัพท์",
    value: "02-198-0006",
  },
  {
    icon: Smartphone,
    title: "มือถือ",
    value: "086-300-4117 / 086-889-8593",
  },
  {
    icon: Mail,
    title: "อีเมล",
    value: "info@r-ktechnologygps.com",
  },
  {
    icon: Briefcase,
    title: "LINE ID",
    value: "RKGPS",
  },
];

export default function BenefitSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[20px] font-semibold text-black md:text-[24px]">
            ร่วมธุรกิจกับเรา
          </h2>

          <div className="mt-3 h-[3px] w-[70px] rounded-full bg-[#ED002B]" />
        </motion.div>

        {/* Dealer / Independent Sales */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F3]">
                  <Icon className="h-7 w-7 text-[#ED002B]" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">{item.desc}</p>

                <div className="mt-6 inline-flex rounded-full bg-[#ED002B]/10 px-4 py-2 text-sm font-medium text-[#ED002B]">
                  {item.contact}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* วิธีการสมัคร */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-gray-50 p-8 md:p-10"
        >
          <h3 className="text-2xl font-semibold text-black">
            วิธีการรับสมัครงาน / ต้องการร่วมธุรกิจกับเรา
          </h3>

          <div className="mt-4 h-[3px] w-[60px] rounded-full bg-[#ED002B]" />

          <p className="mt-6 leading-8 text-gray-600">
            ส่งประวัติส่วนตัว พร้อมรูปถ่าย และคุณสมบัติ หรือข้อมูลอื่น ๆ
            ที่ใช้ประกอบการพิจารณา หรือสามารถสมัครด้วยตนเองพร้อมสัมภาษณ์ได้ที่
            ฝ่ายบุคคล บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0F3]">
                    <Icon className="h-6 w-6 text-[#ED002B]" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold text-black">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
