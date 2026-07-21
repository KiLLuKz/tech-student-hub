"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
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
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-semibold tracking-tight text-[17px] text-[#1d1d1f] transition-colors">
            Sci-Math-Technology Program
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]"></span>
        </Link>

        {/* Right: Links */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-[14px] text-[#1d1d1f]/70 font-medium">
            <Link href="/curriculum" className="hover:text-[#0066cc] transition-colors">
              หลักสูตร
            </Link>
            <Link href="/portfolios" className="hover:text-[#0066cc] transition-colors">
              ผลงาน
            </Link>
            <Link href="/" onClick={(e) => handleScroll(e, "cohorts")} className="hover:text-[#0066cc] transition-colors">
              รุ่นนักเรียน
            </Link>
          </div>
          <Link
            href="/admin"
            className="px-4 py-1.5 rounded-md bg-[#f5f5f7] border border-black/5 text-[14px] text-[#1d1d1f] font-medium hover:bg-[#e8e8ed] transition-all"
          >
            ระบบผู้ดูแล
          </Link>
        </div>
      </div>
    </nav>
  );
}
