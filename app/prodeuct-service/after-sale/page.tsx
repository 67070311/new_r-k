"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Database,
  Headphones,
  ShieldCheck,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const dataCenterItems = [
  {
    icon: Zap,
    title: "High Speed",
    desc: "รองรับปริมาณการรับส่งข้อมูลต่อเนื่อง และรองรับผู้ใช้งานจำนวนมาก",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "มีระบบรักษาความปลอดภัย ป้องกันการเข้าถึงจากผู้ไม่หวังดี",
  },
  {
    icon: Database,
    title: "Daily Backup",
    desc: "สำรองข้อมูลรายวัน ช่วยให้สามารถดูข้อมูลย้อนหลังได้อย่างมั่นใจ",
  },
  {
    icon: Clock,
    title: "24 Hours",
    desc: "ระบบพร้อมให้บริการตลอด 24 ชั่วโมง รองรับการใช้งานต่อเนื่อง",
  },
];

const customerServiceItems = [
  "ศูนย์ Call Center ให้บริการ 24 ชม.",
  "รับแจ้งปัญหาการใช้งาน",
  "Call Logging จดบันทึกและลงประวัติ",
  "Follow up ประสานงานทีม software และช่างจนจบ case",
  "Reply แจ้งกลับลูกค้าเมื่อดำเนินการแล้วเสร็จ",
];

const technicalItems = [
  "Technical Service ให้บริการ 7 วัน/สัปดาห์",
  "พร้อมเข้าบริการทุกสถานที่",
  "On site service บริการแก้ไขปัญหา ณ สถานที่ผู้ใช้บริการ",
  "On time เข้าถึงตามเวลาที่นัดหมาย",
  "Skill & Polite ทีมงานฝีมือดี ทักษะสูง และสุภาพ",
];

export default function AfterSalePage() {
  return (
    <main className="bg-white pt-[82px] text-black">
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[15px] font-semibold text-[#ED002B]">
            After Sale Service
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            บริการหลังการขายครบวงจร
          </h1>

          <p className="mt-5 text-[16px] leading-8 text-neutral-700 sm:text-[18px]">
            ดูแลระบบ GPS Tracking ตั้งแต่ศูนย์ข้อมูล ระบบสำรองข้อมูล Call Center
            ไปจนถึงทีมช่างเทคนิคที่พร้อมให้บริการหน้างาน
          </p>

          <div className="mx-auto mt-5 h-[2px] w-[74px] bg-[#ED002B]" />
        </motion.div>

        <DataCenterSection />

        <CustomerServiceSection />

        <TechnicalServiceSection />
      </section>
    </main>
  );
}

function DataCenterSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-14 overflow-hidden rounded-3xl bg-[#F7F8FA] p-5 sm:p-8 lg:p-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <Image
            src="/product/after-sale/1.png"
            alt="Internet Data Center"
            width={760}
            height={520}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-[15px] font-semibold text-neutral-600">
            Internet Data Center
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#ED002B] sm:text-4xl">
            ศูนย์ข้อมูล Internet ความเร็วสูง
          </h2>

          <p className="mt-4 text-[15px] leading-8 text-neutral-700 sm:text-[16px]">
            ระบบศูนย์ข้อมูลพร้อมรองรับการทำงานตลอด 24 ชั่วโมง
            เพื่อให้การรับส่งข้อมูลตำแหน่งรถเป็นไปอย่างต่อเนื่อง ปลอดภัย
            และสามารถตรวจสอบข้อมูลย้อนหลังได้
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {dataCenterItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
                    <Icon size={25} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-4 text-[17px] font-bold">{item.title}</h3>

                  <p className="mt-2 text-[14px] leading-7 text-neutral-700">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function CustomerServiceSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-12 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:order-2">
          <div className="overflow-hidden rounded-3xl bg-[#F7F8FA]">
            <Image
              src="/product/after-sale/2.png"
              alt="Customer Service"
              width={760}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:order-1">
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
            <Headphones size={30} strokeWidth={2.2} />
          </div>

          <p className="mt-5 text-[15px] font-semibold text-neutral-600">
            Customer Service
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
            บริการลูกค้า
          </h2>

          <p className="mt-4 text-[15px] leading-8 text-neutral-700 sm:text-[16px]">
            ทีมบริการลูกค้าพร้อมรับเรื่อง ประสานงาน และติดตามปัญหาการใช้งาน
            เพื่อให้ลูกค้าได้รับการช่วยเหลืออย่างต่อเนื่องจนจบเคส
          </p>

          <ServiceList items={customerServiceItems} />
        </div>
      </div>
    </motion.section>
  );
}

function TechnicalServiceSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-12 overflow-hidden rounded-3xl bg-[#F7F8FA] p-5 sm:p-8 lg:p-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ED002B]/10 text-[#ED002B]">
            <Truck size={30} strokeWidth={2.2} />
          </div>

          <p className="mt-5 text-[15px] font-semibold text-neutral-600">
            Technical Service
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#ED002B] sm:text-4xl">
            ทีมช่างเทคนิค
          </h2>

          <p className="mt-4 text-[15px] leading-8 text-neutral-700 sm:text-[16px]">
            ทีมช่างเทคนิคพร้อมให้บริการหน้างาน ดูแลการติดตั้ง ตรวจสอบระบบ
            และแก้ไขปัญหาให้กับลูกค้าด้วยความรวดเร็วและสุภาพ
          </p>

          <ServiceList items={technicalItems} />
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <Image
            src="/product/after-sale/3.png"
            alt="Technical Service Team"
            width={680}
            height={460}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

function ServiceList({ items }: { items: string[] }) {
  return (
    <div className="mt-7 space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={item}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
            delay: index * 0.05,
          }}
          className="flex gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-[14px] leading-7 text-neutral-700 sm:text-[15px]"
        >
          <CheckCircle2
            size={20}
            className="mt-[4px] shrink-0 text-[#22C55E]"
            strokeWidth={2.4}
          />
          <span>{item}</span>
        </motion.div>
      ))}
    </div>
  );
}
