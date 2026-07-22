import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // บังคับให้ Next.js ส่งออกเป็น Static HTML เพื่อใช้วางบน GitHub Pages
  output: "export",

  // สำคัญมาก: เปลี่ยน 'tech-student-hub' เป็นชื่อ Repository บน GitHub ของคิวเอง
  basePath: "/tech-student-hub",
  assetPrefix: "/tech-student-hub/",

  // ปิดการใช้งาน Image Optimization ชั่วคราวเพราะ GitHub Pages ไม่รองรับ Server Image Optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
