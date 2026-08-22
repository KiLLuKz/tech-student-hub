"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GraduationCap, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types for future Database integration ---
type Student = {
  id: string;
  fullName: string;
  nickname: string;
  imageUrl: string | null;
  university: string | null; // e.g., null for currently studying
};

type Cohort = {
  generation: number;
  year: string;
  students: Student[];
};

// --- Mock Data (Placeholder until DB is connected) ---
const MOCK_COHORTS: Cohort[] = [
  {
    generation: 6,
    year: "2566",
    students: Array.from({ length: 40 }).map((_, i) => ({
      id: `gen6-${i}`,
      fullName: `นาย/นางสาว นักเรียนสมมติ ${i + 1}`,
      nickname: `เล่น${i + 1}`,
      imageUrl: null,
      university: i % 3 === 0 ? "วิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย" : i % 3 === 1 ? "วิทยาศาสตร์ มหาวิทยาลัยมหิดล" : "คณะเทคโนโลยีสารสนเทศ สจล.",
    })),
  },
  {
    generation: 7,
    year: "2567",
    students: Array.from({ length: 40 }).map((_, i) => ({
      id: `gen7-${i}`,
      fullName: `นาย/นางสาว นักเรียนสมมติ ${i + 1}`,
      nickname: `เล่น${i + 1}`,
      imageUrl: null,
      university: i % 2 === 0 ? "สถาปัตยกรรมศาสตร์ มหาวิทยาลัยศิลปากร" : "กำลังศึกษาอยู่ (ม.6)",
    })),
  },
  {
    generation: 8,
    year: "2568",
    students: Array.from({ length: 40 }).map((_, i) => ({
      id: `gen8-${i}`,
      fullName: `นาย/นางสาว นักเรียนสมมติ ${i + 1}`,
      nickname: `เล่น${i + 1}`,
      imageUrl: null,
      university: "กำลังศึกษาอยู่ (ม.5)",
    })),
  },
];

export default function CohortsPage() {
  const [activeGen, setActiveGen] = useState<number>(MOCK_COHORTS[0].generation);

  const activeCohort = MOCK_COHORTS.find((c) => c.generation === activeGen);

  return (
    <div className="min-h-screen bg-transparent text-[#1d1d1f] dark:text-[#ededed] selection:bg-[#0066cc] selection:text-white flex flex-col font-sans overflow-hidden transition-colors">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] dark:text-zinc-50 mb-4 transition-colors">
              ทำเนียบนักเรียน
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[#1d1d1f]/70 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light transition-colors">
              รายชื่อนักเรียนและศิษย์เก่าในโครงการวิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {MOCK_COHORTS.map((cohort) => (
              <button
                key={cohort.generation}
                onClick={() => setActiveGen(cohort.generation)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all ${
                  activeGen === cohort.generation
                    ? "bg-[#0066cc] text-white shadow-md shadow-[#0066cc]/20"
                    : "bg-[#f8fbff] dark:bg-zinc-900 text-[#1d1d1f]/70 dark:text-zinc-400 border border-black/5 dark:border-white/10 hover:bg-[#e3eaf6] dark:hover:bg-zinc-800"
                }`}
              >
                รุ่นที่ {cohort.generation} ({cohort.year})
              </button>
            ))}
          </div>

          {/* Student Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {activeCohort?.students.map((student) => (
                <div
                  key={student.id}
                  className="bg-[#f8fbff] dark:bg-zinc-950 rounded-[18px] p-6 border border-black/5 dark:border-white/10 hover:shadow-sm transition-all flex flex-col items-center text-center group"
                >
                  {/* Profile Picture Placeholder */}
                  <div className="w-24 h-24 rounded-full bg-[#eef3fb] dark:bg-zinc-900 border border-black/5 dark:border-white/10 mb-4 flex items-center justify-center text-[#1d1d1f]/20 dark:text-white/20 group-hover:bg-[#0066cc]/5 dark:group-hover:bg-[#0066cc]/10 group-hover:text-[#0066cc] dark:group-hover:text-[#0066cc] transition-colors">
                    {student.imageUrl ? (
                      <img
                        src={student.imageUrl}
                        alt={student.fullName}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <User className="w-10 h-10" />
                    )}
                  </div>

                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] dark:text-zinc-50 leading-tight mb-1 transition-colors">
                    {student.fullName}
                  </h3>
                  <p className="text-[14px] text-[#1d1d1f]/50 dark:text-zinc-500 font-medium mb-4 transition-colors">
                    น้อง{student.nickname}
                  </p>

                  <div className="mt-auto w-full pt-4 border-t border-black/5 dark:border-white/10 flex items-start justify-center gap-2 text-[#1d1d1f]/70 dark:text-zinc-400 transition-colors">
                    <GraduationCap className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="text-[13px] leading-snug">
                      {student.university || "กำลังศึกษาอยู่"}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  );
}
