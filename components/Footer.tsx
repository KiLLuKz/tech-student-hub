"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };

  return (
    <footer className="w-full bg-[#f5f5f7] pt-16 pb-8 border-t border-black/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[17px] font-semibold text-[#1d1d1f] mb-4">โรงเรียนบางปะกอกวิทยาคม</h4>
            <p className="text-[14px] text-[#1d1d1f]/70 font-light leading-relaxed max-w-sm mb-4">
              โครงการห้องเรียนพิเศษวิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี มุ่งมั่นพัฒนาศักยภาพนักเรียน สู่การเป็นผู้นำทางนวัตกรรมในยุคดิจิทัล
            </p>
            <div className="text-[14px] text-[#1d1d1f]/70 font-light space-y-1">
              <p>ถนนสุขสวัสดิ์ แขวงบางปะกอก เขตราษฎร์บูรณะ</p>
              <p>กรุงเทพมหานคร 10140</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">เมนูด่วน</h4>
            <ul className="space-y-3 text-[14px] text-[#1d1d1f]/70">
              <li><Link href="/" className="hover:text-[#0066cc] transition-colors">หน้าหลัก</Link></li>
              <li><Link href="/curriculum" className="hover:text-[#0066cc] transition-colors">โครงสร้างหลักสูตร</Link></li>
              <li><Link href="/portfolios" className="hover:text-[#0066cc] transition-colors">ผลงานนักเรียน</Link></li>
              <li><Link href="/" onClick={(e) => handleScroll(e, "cohorts")} className="hover:text-[#0066cc] transition-colors">ทำเนียบนักเรียน</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">ติดต่อเรา</h4>
            <ul className="space-y-3 text-[14px] text-[#1d1d1f]/70">
              <li><a href="tel:02-xxx-xxxx" className="hover:text-[#0066cc] transition-colors">โทร: 02-XXX-XXXX</a></li>
              <li><a href="mailto:info@bpk.ac.th" className="hover:text-[#0066cc] transition-colors">อีเมล: info@bpk.ac.th</a></li>
              <li><a href="https://www.bpk.ac.th" target="_blank" rel="noreferrer" className="hover:text-[#0066cc] transition-colors">เว็บไซต์: www.bpk.ac.th</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#1d1d1f]/50 font-light">
            &copy; {new Date().getFullYear()} โครงการวิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี โรงเรียนบางปะกอกวิทยาคม. สงวนลิขสิทธิ์.
          </p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 text-[12px] text-[#1d1d1f]/60 font-medium shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            ขับเคลื่อนด้วย Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
