import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Code, Terminal, Bot } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "ผลงานนักเรียน | Tech-Gen 8",
  description: "รวมผลงานและโครงงานที่โดดเด่นของนักเรียน โครงการวิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี",
};

export default function PortfoliosPage() {
  const portfolios = [
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
    <div className="min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0066cc] selection:text-white flex flex-col font-sans overflow-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] mb-4">
              ผลงานและความสำเร็จ
            </h1>
            <p className="text-[17px] text-[#1d1d1f]/70 max-w-2xl mx-auto leading-relaxed font-light">
              รวบรวมโปรเจกต์ โครงงานวิทยาศาสตร์ และซอฟต์แวร์ที่พัฒนาโดยนักเรียนในโครงการ เพื่อแก้ปัญหาและสร้างสรรค์นวัตกรรมใหม่ๆ
            </p>
          </div>

          {/* Portfolios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="group flex flex-col">
                <div className="w-full aspect-[16/9] rounded-[18px] bg-[#f5f5f7] border border-black/5 mb-6 overflow-hidden relative flex items-center justify-center">
                  <div className="text-[#1d1d1f]/30 font-medium flex flex-col items-center gap-2">
                    {portfolio.icon}
                    <span>[ภาพผลงาน: {portfolio.title}]</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors cursor-pointer"></div>
                  
                  {/* Hover View Project Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#1d1d1f] text-[14px] font-medium shadow-sm border border-black/5 hover:scale-[0.98] transition-transform">
                      ดูรายละเอียด
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors cursor-pointer">
                    {portfolio.title}
                  </h3>
                  <span className="text-[14px] font-medium text-[#1d1d1f]/40 px-3 py-1 bg-[#f5f5f7] rounded-full">
                    {portfolio.year}
                  </span>
                </div>
                
                <p className="text-[17px] text-[#1d1d1f]/70 font-light mb-6 flex-1">
                  {portfolio.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {portfolio.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-md border border-black/5 bg-[#f5f5f7] text-[13px] text-[#1d1d1f]/70 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
