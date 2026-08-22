"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight, Code, Terminal, Bot } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      title: "ระบบบริหารจัดการทรัพยากรโรงเรียน (School ERP)",
      description: "เว็บแอปพลิเคชันที่ช่วยให้คุณครูและบุคลากรจัดการข้อมูลนักเรียน ตารางสอน และผลการเรียนได้อย่างมีประสิทธิภาพ",
      tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      icon: <Code className="w-5 h-5" />,
      year: "2025",
    },
    {
      id: 2,
      title: "โครงงานคัดแยกขยะด้วย AI (Smart Bin)",
      description: "การบูรณาการความรู้วิทยาศาสตร์และเทคโนโลยี สร้างระบบ Machine Learning บน Raspberry Pi สำหรับคัดแยกประเภทขยะอัตโนมัติ",
      tags: ["Python", "TensorFlow", "Raspberry Pi", "OpenCV"],
      icon: <Bot className="w-5 h-5" />,
      year: "2025",
    },
    {
      id: 3,
      title: "แอปพลิเคชันแจ้งเตือนฝุ่น PM 2.5",
      description: "แอปพลิเคชันมือถือที่ดึงข้อมูลจากเซ็นเซอร์ IoT ในโรงเรียน เพื่อแจ้งเตือนคุณภาพอากาศแบบ Real-time ให้แก่นักเรียน",
      tags: ["Flutter", "Dart", "Firebase", "IoT"],
      icon: <Terminal className="w-5 h-5" />,
      year: "2024",
    },
    {
      id: 4,
      title: "ระบบยืม-คืนอุปกรณ์วิทยาศาตร์",
      description: "แพลตฟอร์มสำหรับจัดการสต๊อกและการยืมคืนอุปกรณ์ห้องทดลอง ลดปัญหาของหายและตรวจสอบสถานะได้ง่ายขึ้น",
      tags: ["React", "Node.js", "MongoDB"],
      icon: <Code className="w-5 h-5" />,
      year: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#1d1d1f] dark:text-[#ededed] selection:bg-[#0066cc] selection:text-white flex flex-col font-sans overflow-hidden transition-colors">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full pt-20 pb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 w-full"
        >
          
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] dark:text-white mb-4">
              กิจกรรมและผลงาน
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[#1d1d1f]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              รวบรวมโปรเจกต์ โครงงานวิทยาศาสตร์ และซอฟต์แวร์ที่พัฒนาโดยนักเรียนในโครงการ เพื่อแก้ปัญหาและสร้างสรรค์นวัตกรรมใหม่ๆ
            </p>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <motion.div key={activity.id} variants={fadeUp} className="group flex flex-col">
                <div className="w-full aspect-[16/9] rounded-[18px] bg-[#eef3fb] dark:bg-zinc-900 border border-black/5 dark:border-white/10 mb-6 overflow-hidden relative flex items-center justify-center transition-colors">
                  <div className="text-[#1d1d1f]/30 dark:text-white/20 font-medium flex flex-col items-center gap-2">
                    {activity.icon}
                    <span>[ภาพผลงาน: {activity.title}]</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors cursor-pointer"></div>
                  
                  {/* Hover View Project Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8fbff] dark:bg-zinc-800 text-[#1d1d1f] dark:text-zinc-50 text-[14px] font-medium shadow-sm border border-black/5 dark:border-white/10 hover:scale-[0.98] transition-transform">
                      ดูรายละเอียด
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-zinc-50 group-hover:text-[#0066cc] dark:group-hover:text-[#0066cc] transition-colors cursor-pointer">
                    {activity.title}
                  </h3>
                  <span className="text-[14px] font-medium text-[#1d1d1f]/40 dark:text-zinc-500 px-3 py-1 bg-[#eef3fb] dark:bg-zinc-900 rounded-full transition-colors">
                    {activity.year}
                  </span>
                </div>
                
                <p className="text-[15px] sm:text-[17px] text-[#1d1d1f]/70 dark:text-zinc-400 font-light mb-6 flex-1 transition-colors line-clamp-2 sm:line-clamp-none">
                  {activity.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {activity.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-md border border-black/5 dark:border-white/10 bg-[#eef3fb] dark:bg-zinc-900 text-[13px] text-[#1d1d1f]/70 dark:text-zinc-400 font-medium transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
