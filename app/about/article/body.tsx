"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    image: "/about/artical/1.png",
    title: "กลยุทธ์ในการลดต้นทุนการขนส่ง",
    description:
      "ปัจจุบันการขนส่งมีความสำคัญต่อธุรกิจเกือบทุกประเภท ทั้งในส่วนการจัดหาวัตถุดิบ การผลิต การขาย และการจัดจำหน่าย ต้นทุนการขนส่งถือเป็นต้นทุนหลักของหลายองค์กร การวางแผนเส้นทาง การบริหารยานพาหนะ และการควบคุมค่าใช้จ่ายอย่างมีประสิทธิภาพ จะช่วยลดต้นทุนและเพิ่มความสามารถในการแข่งขันได้อย่างยั่งยืน",
  },
  {
    image: "/about/artical/2.png",
    title: "การวิเคราะห์ต้นทุนและการลดต้นทุนโลจิสติกส์",
    description:
      "การบริหารต้นทุนที่มีประสิทธิภาพช่วยให้องค์กรสามารถแข่งขันได้ในระยะยาว การวิเคราะห์ต้นทุนของกิจกรรมต่าง ๆ เช่น การขนส่ง การจัดเก็บสินค้า และการบริหารคลังสินค้า ช่วยให้สามารถค้นหาจุดที่ควรปรับปรุง ลดค่าใช้จ่าย และเพิ่มประสิทธิภาพของระบบโลจิสติกส์ได้",
  },
  {
    image: "/about/artical/3.png",
    title: "ไทยพร้อมเป็นศูนย์กลางโลจิสติกส์อาเซียน",
    description:
      "การเติบโตของประชาคมเศรษฐกิจอาเซียน (AEC) เปิดโอกาสให้ประเทศไทยพัฒนาศักยภาพด้านโลจิสติกส์ ทั้งการขนส่ง การกระจายสินค้า และการค้าระหว่างประเทศ ด้วยทำเลที่ตั้งเชื่อมโยงภูมิภาค ทำให้ไทยมีศักยภาพในการเป็นศูนย์กลางการขนส่งของอาเซียนในอนาคต",
  },
  {
    image: "/about/artical/4.png",
    title: "โลจิสติกส์ หมายถึงอะไร",
    description:
      "โลจิสติกส์ (Logistics) คือการบริหารจัดการการเคลื่อนย้ายสินค้า ข้อมูล และทรัพยากร ตั้งแต่ต้นทางจนถึงปลายทางอย่างมีประสิทธิภาพ ครอบคลุมการขนส่ง คลังสินค้า การจัดซื้อ และการกระจายสินค้า เพื่อให้ลูกค้าได้รับสินค้าถูกต้อง รวดเร็ว และมีต้นทุนต่ำที่สุด",
  },
];

export default function Body() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-24">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="grid items-start gap-10 lg:grid-cols-[520px_1fr]"
            >
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                className="relative h-[320px] overflow-hidden border border-neutral-200"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.1,
                }}
                className="pt-1"
              >
                <h2 className="text-[28px] font-semibold leading-snug text-[#111]">
                  {article.title}
                </h2>

                <p className="mt-5 text-[16px] font-normal leading-8 text-neutral-600">
                  {article.description}
                </p>

                <Link
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-[18px] font-medium text-[#E60012] transition-all duration-300 hover:gap-4"
                >
                  อ่านเพิ่มเติม
                  <ArrowRight size={22} strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
