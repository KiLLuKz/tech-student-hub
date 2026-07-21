import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, MonitorPlay, Rocket, ArrowRight } from "lucide-react";

export const metadata = {
  title: "โครงสร้างหลักสูตร | Tech-Gen 8",
  description: "เส้นทางการเรียนรู้ตลอด 3 ปี ของโครงการวิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี",
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0066cc] selection:text-white flex flex-col font-sans overflow-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6 w-full">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] mb-4">
              โครงสร้างหลักสูตร 3 ปี
            </h1>
            <p className="text-[17px] text-[#1d1d1f]/70 max-w-2xl mx-auto leading-relaxed font-light">
              เส้นทางการเรียนรู้ที่ถูกออกแบบมาเพื่อสร้างรากฐานที่แข็งแกร่ง ทั้งในด้านทฤษฎีวิทยาการคอมพิวเตอร์และการลงมือปฏิบัติจริง
            </p>
          </div>

          {/* Curriculum Roadmap */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/10 before:to-transparent">
            
            {/* Year 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#0066cc] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(0,102,204,0.1)] z-10">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-[18px] border border-black/5 bg-[#f5f5f7] group-hover:bg-white group-hover:shadow-sm transition-all">
                <div className="text-[12px] font-semibold tracking-widest uppercase text-[#0066cc] mb-2">
                  มัธยมศึกษาปีที่ 4 (Year 1)
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] mb-3">พื้นฐานวิทยาการคอมพิวเตอร์</h3>
                <p className="text-[15px] text-[#1d1d1f]/70 font-light mb-4">
                  สร้างความเข้าใจที่ถูกต้องเกี่ยวกับการคิดเชิงตรรกะและอัลกอริทึม การเขียนโปรแกรมเบื้องต้น และโครงสร้างข้อมูล
                </p>
                <ul className="space-y-2 text-[14px] text-[#1d1d1f]/80">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Programming Fundamentals (C/C++ & Python)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Data Structures & Basic Algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Web Foundations (HTML, CSS, Vanilla JS)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#f5f5f7] text-[#1d1d1f]/50 group-hover:bg-[#0066cc] group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <MonitorPlay className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-[18px] border border-black/5 bg-[#f5f5f7] group-hover:bg-white group-hover:shadow-sm transition-all">
                <div className="text-[12px] font-semibold tracking-widest uppercase text-[#1d1d1f]/50 mb-2">
                  มัธยมศึกษาปีที่ 5 (Year 2)
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] mb-3">วิศวกรรมซอฟต์แวร์ประยุกต์</h3>
                <p className="text-[15px] text-[#1d1d1f]/70 font-light mb-4">
                  ต่อยอดสู่การพัฒนาแอปพลิเคชันจริง เรียนรู้การจัดการฐานข้อมูล และเครื่องมือสมัยใหม่ที่ใช้ในอุตสาหกรรม
                </p>
                <ul className="space-y-2 text-[14px] text-[#1d1d1f]/80">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Modern Web Development (React / Next.js)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Database Systems (SQL & NoSQL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Version Control & Agile Workflow (Git)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#f5f5f7] text-[#1d1d1f]/50 group-hover:bg-[#0066cc] group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-[18px] border border-black/5 bg-[#f5f5f7] group-hover:bg-white group-hover:shadow-sm transition-all">
                <div className="text-[12px] font-semibold tracking-widest uppercase text-[#1d1d1f]/50 mb-2">
                  มัธยมศึกษาปีที่ 6 (Year 3)
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] mb-3">โครงงานนวัตกรรมขั้นสูง</h3>
                <p className="text-[15px] text-[#1d1d1f]/70 font-light mb-4">
                  บูรณาการความรู้ทั้งหมดเพื่อสร้างสรรค์นวัตกรรมที่แก้ปัญหาได้จริง และเตรียมความพร้อมสู่ระดับอุดมศึกษา
                </p>
                <ul className="space-y-2 text-[14px] text-[#1d1d1f]/80">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Capstone Project & Portfolio Building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>Introduction to AI & Machine Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0 mt-0.5" />
                    <span>System Architecture & Deployment</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
