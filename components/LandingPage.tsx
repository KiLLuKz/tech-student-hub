"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Users, Briefcase, ArrowUpRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function LandingPage() {
  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollTarget");
    if (targetId) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex-1 flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center bg-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 bg-[#f5f5f7] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#1d1d1f]/70">
              โรงเรียนบางปะกอกวิทยาคม • แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tighter text-[#1d1d1f] mb-6 leading-[1.07]">
            สร้างสรรค์นวัตกรรม <br className="hidden md:block" /> สู่อนาคตแห่งเทคโนโลยี
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl text-[17px] md:text-xl text-[#1d1d1f]/70 mb-10 leading-relaxed font-light">
            เส้นทางการเรียนรู้ตลอด 3 ปี ที่จะพลิกโฉมการศึกษา สู่การเป็นนักพัฒนาซอฟต์แวร์ นักออกแบบ และวิศวกรระบบแห่งอนาคต ด้วยมาตรฐานการเรียนรู้ระดับสากล
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/curriculum"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0066cc] text-white text-[17px] font-medium hover:bg-[#0071e3] hover:scale-[0.98] transition-all w-full sm:w-auto"
            >
              ดูหลักสูตรของเรา
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/"
              onClick={(e) => handleScroll(e, "cohorts")}
              className="flex items-center justify-center px-6 py-3.5 rounded-full border border-black/10 bg-transparent text-[#1d1d1f] text-[17px] font-medium hover:bg-[#f5f5f7] hover:scale-[0.98] transition-all w-full sm:w-auto"
            >
              ดูรุ่นนักเรียนทั้งหมด
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction / Features Section */}
      <section id="curriculum" className="w-full bg-[#f5f5f7] py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">ทำไมต้องเลือกเรียนกับเรา?</h2>
            <p className="text-[17px] text-[#1d1d1f]/70 max-w-2xl mx-auto">
              แผนการเรียนของเราถูกออกแบบมาเพื่อตอบสนองต่อการเปลี่ยนแปลงของโลกเทคโนโลยี ผสมผสานทฤษฎีและการลงมือปฏิบัติจริง
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="group rounded-[18px] border border-black/5 bg-white p-8 hover:shadow-sm transition-all flex flex-col min-h-[320px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center mb-6 text-[#1d1d1f]">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[21px] font-semibold tracking-tight text-[#1d1d1f] mb-3">หลักสูตรที่ทันสมัย</h3>
                <p className="text-[17px] text-[#1d1d1f]/70 leading-relaxed font-light">
                  เรียนรู้เทคโนโลยีการพัฒนาเว็บ, วิศวกรรมซอฟต์แวร์, และการออกแบบระบบสถาปัตยกรรมแบบ Scalable ให้พร้อมสำหรับการทำงานในอนาคต
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="group rounded-[18px] border border-black/5 bg-white p-8 hover:shadow-sm transition-all flex flex-col min-h-[320px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center mb-6 text-[#1d1d1f]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[21px] font-semibold tracking-tight text-[#1d1d1f] mb-3">เครือข่ายนักเรียน</h3>
                <p className="text-[17px] text-[#1d1d1f]/70 leading-relaxed font-light">
                  สร้างคอนเนคชั่นและทำความรู้จักกับนักพัฒนา นักประดิษฐ์ และผู้นำทางด้านเทคโนโลยีจากหลากหลายรุ่นในโครงการ
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="group rounded-[18px] border border-black/5 bg-white p-8 hover:shadow-sm transition-all flex flex-col min-h-[320px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center mb-6 text-[#1d1d1f]">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[21px] font-semibold tracking-tight text-[#1d1d1f] mb-3">มาตรฐานระดับอุตสาหกรรม</h3>
                <p className="text-[17px] text-[#1d1d1f]/70 leading-relaxed font-light">
                  สัมผัสประสบการณ์จริงผ่านโปรเจกต์ การทำงานร่วมกันผ่าน Git และ Workflow ที่ใช้จริงในบริษัทชั้นนำ
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Portfolios Section */}
      <section id="portfolios" className="w-full bg-white py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">ผลงานและความสำเร็จ</h2>
              <p className="text-[17px] text-[#1d1d1f]/70 max-w-xl">
                ส่วนหนึ่งของโปรเจกต์และผลงานที่โดดเด่นจากนักเรียนในโครงการ ที่แสดงให้เห็นถึงศักยภาพและการประยุกต์ใช้ความรู้ในสถานการณ์จริง
              </p>
            </div>
            <Link href="/portfolios" className="text-[#0066cc] font-medium hover:underline text-[17px] inline-flex items-center gap-1">
              ดูผลงานทั้งหมด
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Portfolio 1 */}
            <motion.div variants={fadeUp} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-[18px] bg-[#f5f5f7] border border-black/5 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#1d1d1f]/30 font-medium">
                  [รูปภาพผลงาน: ระบบจัดการโรงเรียน]
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] mb-2 group-hover:text-[#0066cc] transition-colors">ระบบบริหารจัดการทรัพยากรโรงเรียน (School ERP)</h3>
              <p className="text-[17px] text-[#1d1d1f]/70 font-light">
                เว็บแอปพลิเคชันที่ช่วยให้คุณครูและบุคลากรจัดการข้อมูลนักเรียน ตารางสอน และผลการเรียนได้อย่างมีประสิทธิภาพ พัฒนาด้วย Next.js และ Prisma
              </p>
            </motion.div>

            {/* Portfolio 2 */}
            <motion.div variants={fadeUp} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-[18px] bg-[#f5f5f7] border border-black/5 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#1d1d1f]/30 font-medium">
                  [รูปภาพผลงาน: AI Science Project]
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] mb-2 group-hover:text-[#0066cc] transition-colors">โครงงานคัดแยกขยะด้วย AI (Smart Bin)</h3>
              <p className="text-[17px] text-[#1d1d1f]/70 font-light">
                การบูรณาการความรู้วิทยาศาสตร์และเทคโนโลยี สร้างระบบ Machine Learning บน Raspberry Pi สำหรับคัดแยกประเภทขยะอัตโนมัติ
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
