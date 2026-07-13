"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Users,
  Phone,
  Smartphone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function BenefitSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        {/* หัวข้อ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-black">
            ร่วมธุรกิจกับเรา
          </h2>

          <div className="mt-3 h-[3px] w-[70px] rounded-full bg-[#ED002B]" />
        </motion.div>

        {/* การร่วมธุรกิจ */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Dealer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F3]">
              <Handshake className="h-7 w-7 text-[#ED002B]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-black">
              ตัวแทนจำหน่าย
            </h3>

            <p className="mt-1 font-medium text-[#ED002B]">Dealer</p>

            <p className="mt-4 leading-8 text-gray-600">
              ยินดีต้อนรับผู้สนใจร่วมทำธุรกิจ ตัวแทนจำหน่ายอุปกรณ์จีพีเอส
              และระบบติดตามยานพาหนะผ่านดาวเทียม
              ที่สามารถตอบสนองทุกฟังก์ชันการใช้งานของทุก ๆ กลุ่มลูกค้า
              สอบถามข้อมูลเพิ่มเติมได้ที่ HOTLINE 086-3004117
            </p>

            <div className="mt-6 inline-flex rounded-full bg-[#ED002B]/10 px-4 py-2 text-sm font-medium text-[#ED002B]">
              HOTLINE : 086-3004117
            </div>
          </motion.div>

          {/* Independent Sales */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F3]">
              <Users className="h-7 w-7 text-[#ED002B]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-black">
              ตัวแทนขายอิสระ
            </h3>

            <p className="mt-1 font-medium text-[#ED002B]">Independent Sales</p>

            <p className="mt-4 leading-8 text-gray-600">
              เปิดรับสมัครผู้ที่สนใจเป็นตัวแทนอิสระขายอุปกรณ์จีพีเอส รายได้สูง /
              ไม่ต้องทำงานประจำ
            </p>
          </motion.div>
        </div>

        {/* วิธีสมัคร */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-gray-50 p-7 md:p-10"
        >
          <h3 className="text-xl font-semibold leading-relaxed text-black md:text-2xl">
            วิธีการรับสมัครงาน / ต้องการร่วมธุรกิจกับเรา
          </h3>

          <div className="mt-4 h-[3px] w-[60px] rounded-full bg-[#ED002B]" />

          <p className="mt-6 leading-8 text-gray-600">
            ส่งประวัติส่วนตัว พร้อมรูปถ่าย และคุณสมบัติ
            หรือสิ่งอื่นใดที่จะประกอบการพิจารณา
            หรือสมัครได้ด้วยตนเองพร้อมสัมภาษณ์ได้ที่ ฝ่ายบุคคล บริษัท
            อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด
          </p>

          {/* ข้อมูลติดต่อ */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0F3]">
                <Phone className="h-6 w-6 text-[#ED002B]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">โทรศัพท์</p>
                <p className="font-semibold text-black">02-1980006</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0F3]">
                <Smartphone className="h-6 w-6 text-[#ED002B]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">มือถือ</p>
                <p className="font-semibold text-black">
                  086-3004117 / 086-8898593
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0F3]">
                <Mail className="h-6 w-6 text-[#ED002B]" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">อีเมล</p>
                <p className="break-all font-semibold text-black">
                  info@r-ktechnologygps.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0F3]">
                <MessageCircle className="h-6 w-6 text-[#ED002B]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">ID LINE</p>
                <p className="font-semibold text-black">RKGPS</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
