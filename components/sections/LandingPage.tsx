"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Users, Briefcase, ArrowUpRight } from "lucide-react";
import Orb from "@/components/effects/Orb";
import ScrollExpand from "@/components/effects/ScrollExpand";
import Topography from "@/components/effects/Topography";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function LandingPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    <main className="flex-1 w-full transition-colors">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[105vh] flex flex-col items-center justify-center text-center bg-transparent transition-colors overflow-hidden">
        
        {/* Orb Background */}
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-70 z-0 transition-colors"
          style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
        >
          <div style={{ width: '850px', height: '850px', position: 'relative' }}>
            {mounted && (
              <Orb
                hue={312}
                hoverIntensity={0.4}
                rotateOnHover
                forceHoverState={false}
                backgroundColor={resolvedTheme === 'dark' ? '#0a0a0a' : '#f8fbff'}
              />
            )}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-6 w-full pointer-events-none"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eef3fb] dark:bg-zinc-900/80 backdrop-blur-md mb-8 transition-colors pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
            <span className="text-[0.75rem] sm:text-[0.875rem] font-semibold tracking-widest uppercase text-[#1d1d1f]/70 dark:text-zinc-400">
              SMT Program • โรงเรียนบางปะกอกวิทยาคม
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl text-[2.25rem] sm:text-[3.5rem] md:text-[4.5rem] font-semibold tracking-[-0.04em] text-[#1d1d1f] dark:text-zinc-50 mb-6 leading-[1.1] transition-colors pointer-events-auto">
            สร้างสรรค์นวัตกรรม <br /> สู่อนาคตแห่งเทคโนโลยี
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl text-[0.9375rem] sm:text-[1.125rem] md:text-[1.25rem] text-[#1d1d1f]/80 dark:text-zinc-300 mb-10 leading-[1.6] font-normal font-sarabun transition-colors pointer-events-auto">
            เส้นทางการเรียนรู้เข้มข้น 2 ปี ที่จะเตรียมความพร้อมสู่การเป็นนักพัฒนาซอฟต์แวร์ นักออกแบบ และวิศวกรระบบแห่งอนาคต ด้วยทักษะที่นำไปใช้ได้จริง
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
            <Link
              href="/curriculum"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0066cc] text-white text-[1.0625rem] font-medium hover:bg-[#0071e3] hover:scale-[0.98] transition-all w-full sm:w-auto"
            >
              ดูหลักสูตรของเรา
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/cohorts"
              className="flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-[#0066cc] dark:text-[#2997ff] text-[1.0625rem] font-medium hover:underline transition-all w-full sm:w-auto"
            >
              ดูรุ่นนักเรียนทั้งหมด
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ScrollExpand Section replacing first two pillars */}
      <div className="w-full relative z-10 bg-[#f8fbff] dark:bg-[#0a0a0a] transition-colors">
        <ScrollExpand
          customMedia={
            <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
              <Topography
                lowColor="#5227FF"
                midColor="#FF9FFC"
                highColor={resolvedTheme === 'dark' ? '#1d1d1f' : '#f8fbff'}
                speed={0.35}
                morphAmount={3}
                morphSpeed={0.05}
                bands={2}
                thickness={0.01}
                scale={2}
                pixelSize={1}
                glow={0.5}
                colorMode="elevation"
                contrast={3}
                brightness={1}
                fillBands={false}
                opacity={1}
                grain
                grainIntensity={0.05}
                mouseInteraction
                mouseRadius={0.3}
                mouseStrength={0.4}
              />
            </div>
          }
          title={
            <div className="flex flex-col items-center gap-4 px-4 w-full">
              <span className="font-semibold text-[#1d1d1f] dark:text-white">มาตรฐานระดับอุตสาหกรรม</span>
              <p className="font-normal font-sarabun max-w-2xl text-[#1d1d1f]/90 dark:text-white/90 whitespace-normal hidden md:block" style={{ fontSize: "1.25rem", lineHeight: "1.6", letterSpacing: "normal" }}>
                สัมผัสประสบการณ์จริงผ่านการทำโปรเจกต์ และการใช้งาน Git ในการจัดเก็บซอร์สโค้ดอย่างเป็นระบบ เพื่อเตรียมพร้อมสู่การทำงาน
              </p>
            </div>
          }
          scrollHint="เลื่อนเพื่อสำรวจหลักสูตร"
          useWindowScroll
          overlayScrim={0}
          startWidth={42}
          startHeight={58}
          mediaZoom={1.25}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-left max-w-5xl mx-auto mt-12 px-6">
            <div className="flex-1 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 rounded-[24px] border border-black/10 dark:border-white/10 shadow-2xl transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1d1d1f]/10 dark:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                <Code className="w-6 h-6 text-[#1d1d1f] dark:text-white transition-colors" />
              </div>
              <h3 className="text-[1.75rem] font-semibold tracking-tight mb-4 text-[#1d1d1f] dark:text-white transition-colors">หลักสูตรที่ทันสมัย</h3>
              <p className="text-[0.875rem] sm:text-[1.125rem] text-[#1d1d1f]/80 dark:text-white/80 font-sarabun font-normal leading-[1.6] transition-colors line-clamp-3 sm:line-clamp-none">
                เรียนรู้ภาษาการเขียนโปรแกรมที่ทันสมัย เช่น Python, JavaScript, และ PHP พร้อมพื้นฐาน Computer Science ที่แข็งแกร่ง
              </p>
            </div>
            <div className="flex-1 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 rounded-[24px] border border-black/10 dark:border-white/10 shadow-2xl transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1d1d1f]/10 dark:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                <Users className="w-6 h-6 text-[#1d1d1f] dark:text-white transition-colors" />
              </div>
              <h3 className="text-[1.75rem] font-semibold tracking-tight mb-4 text-[#1d1d1f] dark:text-white transition-colors">เครือข่ายนักเรียนที่แข็งแกร่ง</h3>
              <p className="text-[0.875rem] sm:text-[1.125rem] text-[#1d1d1f]/80 dark:text-white/80 font-sarabun font-normal leading-[1.6] transition-colors line-clamp-3 sm:line-clamp-none">
                สร้างผลงานจริงตั้งแต่ยังเรียน พร้อมแฟ้มสะสมผลงาน (Portfolio) ที่โดดเด่น สำหรับยื่นเข้าศึกษาต่อในมหาวิทยาลัยชั้นนำ
              </p>
            </div>
          </div>
        </ScrollExpand>
      </div>

      {/* Activities Section */}
      <section id="activities" className="w-full py-[120px] bg-[#f8fbff] dark:bg-[#0a0a0a] transition-colors">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center mb-[80px]">
            <h2 className="text-[2.5rem] md:text-[3.25rem] font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-zinc-50 mb-4 transition-colors">กิจกรรมและผลงาน</h2>
            <p className="text-[0.9375rem] sm:text-[1.25rem] text-[#1d1d1f]/70 dark:text-zinc-400 max-w-2xl font-light font-sarabun transition-colors mb-6 line-clamp-2 sm:line-clamp-none">
              ส่วนหนึ่งของโปรเจกต์และผลงานที่โดดเด่นจากนักเรียนในโครงการ ที่แสดงให้เห็นถึงศักยภาพและการประยุกต์ใช้ความรู้ในสถานการณ์จริง
            </p>
            <Link href="/activities" className="text-[#0066cc] dark:text-[#2997ff] font-medium hover:underline text-[1.0625rem] inline-flex items-center gap-1">
              ดูกิจกรรมทั้งหมด
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div variants={fadeUp} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-[18px] bg-[#eef3fb] dark:bg-[#1d1d1f] mb-6 overflow-hidden relative transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-[#1d1d1f]/30 dark:text-white/30 font-medium font-sarabun">
                  [รูปภาพผลงาน: ระบบจัดการโรงเรียน]
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500"></div>
              </div>
              <h3 className="text-[1.5rem] font-semibold tracking-tight text-[#1d1d1f] dark:text-zinc-50 mb-2 transition-colors">ระบบบริหารจัดการทรัพยากรโรงเรียน (School ERP)</h3>
              <p className="text-[0.875rem] sm:text-[1.0625rem] text-[#1d1d1f]/70 dark:text-zinc-400 font-light font-sarabun transition-colors line-clamp-2 sm:line-clamp-none">
                เว็บแอปพลิเคชันที่ช่วยให้คุณครูและบุคลากรจัดการข้อมูลนักเรียน ตารางสอน และผลการเรียนได้อย่างมีประสิทธิภาพ พัฒนาด้วย Next.js และ Prisma
              </p>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeUp} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-[18px] bg-[#eef3fb] dark:bg-[#1d1d1f] mb-6 overflow-hidden relative transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-[#1d1d1f]/30 dark:text-white/30 font-medium font-sarabun">
                  [รูปภาพผลงาน: AI Science Project]
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500"></div>
              </div>
              <h3 className="text-[1.5rem] font-semibold tracking-tight text-[#1d1d1f] dark:text-zinc-50 mb-2 transition-colors">โครงงานคัดแยกขยะด้วย AI (Smart Bin)</h3>
              <p className="text-[0.875rem] sm:text-[1.0625rem] text-[#1d1d1f]/70 dark:text-zinc-400 font-light font-sarabun transition-colors line-clamp-2 sm:line-clamp-none">
                การบูรณาการความรู้วิทยาศาสตร์และเทคโนโลยี สร้างระบบ Machine Learning บน Raspberry Pi สำหรับคัดแยกประเภทขยะอัตโนมัติ
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
