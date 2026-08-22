"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, MonitorPlay, Rocket, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#1d1d1f] dark:text-[#ededed] selection:bg-[#0066cc] selection:text-white flex flex-col font-sans overflow-hidden transition-colors">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full pt-20 pb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 w-full"
        >
          
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] dark:text-white mb-4">
              โครงสร้างหลักสูตร 3 ปี
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[#1d1d1f]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              เส้นทางการเรียนรู้ที่ถูกออกแบบมาเพื่อสร้างรากฐานที่แข็งแกร่ง ทั้งในด้านทฤษฎีวิทยาการคอมพิวเตอร์และการลงมือปฏิบัติจริง
            </p>
          </motion.div>

          {/* Curriculum Roadmap */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/10 dark:before:via-white/10 before:to-transparent">
            
            {/* Year 1 */}
            <motion.div variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#0066cc] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(0,102,204,0.1)] z-10 transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-[18px] border border-black/5 dark:border-white/10 bg-[#eef3fb] dark:bg-zinc-900 group-hover:bg-[#f8fbff] dark:group-hover:bg-zinc-800 group-hover:shadow-sm transition-all">
                <div className="text-[12px] font-semibold tracking-widest uppercase text-[#0066cc] mb-2">
                  มัธยมศึกษาปีที่ 4 (Year 1)
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white mb-3">พื้นฐานวิทยาศาสตร์-คณิตศาสตร์</h3>
                <p className="text-[15px] text-[#1d1d1f]/70 dark:text-white/70 font-light mb-4">
                  เรียนในแผนการเรียนวิทย์-คณิตทั่วไป ปูพื้นฐานกระบวนการคิดวิเคราะห์ ก่อนให้นักเรียนตัดสินใจเลือกสายการเรียนเฉพาะทางเมื่อขึ้น ม.5 (เทคโนโลยี, สาธารณสุข, วิศวกรรมศาสตร์ หรือ สถาปัตยกรรม)
                </p>
                <ul className="space-y-2 text-[14px] text-[#1d1d1f]/80 dark:text-white/80">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Intensive Science & Mathematics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Logical & Analytical Thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Basic Computer Skills & Problem Solving</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Year 2 */}
            <motion.div variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#eef3fb] dark:bg-zinc-900 text-[#1d1d1f]/50 dark:text-white/50 group-hover:bg-[#0066cc] dark:group-hover:bg-[#0066cc] group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <MonitorPlay className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-[18px] border border-black/5 dark:border-white/10 bg-[#eef3fb] dark:bg-zinc-900 group-hover:bg-[#f8fbff] dark:group-hover:bg-zinc-800 group-hover:shadow-sm transition-all">
                <div className="text-[12px] font-semibold tracking-widest uppercase text-[#1d1d1f]/50 dark:text-white/50 mb-2">
                  มัธยมศึกษาปีที่ 5 (Year 2)
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white mb-3">พื้นฐานการเขียนโปรแกรมและการพัฒนาเว็บ</h3>
                <p className="text-[15px] text-[#1d1d1f]/70 dark:text-white/70 font-light mb-4">
                  สำหรับสายเทคโนโลยี จะเจาะลึกการเขียนโปรแกรมด้วย Python และการพัฒนาเว็บไซต์ฝั่งหน้าบ้าน (Frontend) สร้างรากฐานการเป็นนักพัฒนา
                </p>
                <ul className="space-y-2 text-[14px] text-[#1d1d1f]/80 dark:text-white/80">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Programming with Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Web Fundamentals (HTML & CSS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Interactive Web with JavaScript</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Year 3 */}
            <motion.div variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#eef3fb] dark:bg-zinc-900 text-[#1d1d1f]/50 dark:text-white/50 group-hover:bg-[#0066cc] dark:group-hover:bg-[#0066cc] group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-[18px] border border-black/5 dark:border-white/10 bg-[#eef3fb] dark:bg-zinc-900 group-hover:bg-[#f8fbff] dark:group-hover:bg-zinc-800 group-hover:shadow-sm transition-all">
                <div className="text-[12px] font-semibold tracking-widest uppercase text-[#1d1d1f]/50 dark:text-white/50 mb-2">
                  มัธยมศึกษาปีที่ 6 (Year 3)
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white mb-3">การพัฒนาเว็บเซิร์ฟเวอร์และการสร้างนวัตกรรม</h3>
                <p className="text-[15px] text-[#1d1d1f]/70 dark:text-white/70 font-light mb-4">
                  เรียนรู้การพัฒนาเว็บไซต์ฝั่งเซิร์ฟเวอร์ด้วย PHP เพื่อทำงานกับฐานข้อมูล และรวบรวมทักษะทั้งหมดเพื่อทำโครงงานจบการศึกษา
                </p>
                <ul className="space-y-2 text-[14px] text-[#1d1d1f]/80 dark:text-white/80">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Server-Side Programming with PHP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Database Integration (MySQL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 shrink-0 mt-0.5" />
                    <span>Capstone Project & Portfolio Building</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
