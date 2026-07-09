"use client";

import { motion } from "framer-motion";

const branches = [
  {
    title: "สำนักงานใหญ่",
    address:
      "บริษัท อาร์แอนด์เค เทคโนโลยี วีพีเอส จำกัด เลขที่ 88/180 ม.6 ต.คูบางหลวง อ.ลาดหลุมแก้ว จ.ปทุมธานี 12140",
  },
  {
    title: "สาขา 2",
    address:
      "บริษัท อาร์แอนด์เค เทคโนโลยี วีพีเอส จำกัด เลขที่ 88/180 ม.6 ต.คูบางหลวง อ.ลาดหลุมแก้ว จ.ปทุมธานี 12140",
  },
  {
    title: "สาขา 3",
    address:
      "บริษัท อาร์แอนด์เค เทคโนโลยี วีพีเอส จำกัด เลขที่ 8/2 ม.7 ต.พระขาวนื้อ อ.ลาดบัวหลวง จ.พระนครศรีอยุธยา 13230",
  },
  {
    title: "สาขา 4",
    address:
      "บริษัท อาร์แอนด์เค เทคโนโลยี วีพีเอส จำกัด เลขที่ 220/7 ถ.นครวร อ.เมือง จ.ลพบุรี 15000",
  },
];

export default function Body() {
  return (
    <section className="bg-white px-6 pb-14 md:px-10 md:pb-16 lg:px-20 lg:pb-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[14px] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            >
              <p className="text-[15px] leading-8 text-[#222] md:text-[16px]">
                <span className="font-semibold">{item.title}</span> :{" "}
                {item.address}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
