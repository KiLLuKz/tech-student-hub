"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

function MobileMenuOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 top-[57px] z-[9999]"
      style={{
        background: isDark
          ? "rgba(10, 10, 10, 0.3)"
          : "rgba(248, 251, 255, 0.3)",
        backdropFilter: "blur(48px) saturate(1.8) brightness(1.05)",
        WebkitBackdropFilter: "blur(48px) saturate(1.8) brightness(1.05)",
      }}
    >
      {/* Glass inner highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderTop: isDark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.6)",
          boxShadow: isDark
            ? "inset 0 1px 0 rgba(255,255,255,0.04)"
            : "inset 0 1px 0 rgba(255,255,255,0.5)",
        }}
      />

      {/* Menu items */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="flex flex-col items-center pt-10 px-8 gap-0"
      >
        {[
          { href: "/curriculum", label: "หลักสูตร" },
          { href: "/activities", label: "กิจกรรม" },
          { href: "/cohorts", label: "รุ่นนักเรียน" },
        ].map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.08 + i * 0.06,
            }}
            className="w-full"
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block w-full text-center py-5 text-[1.15rem] font-medium text-[#1d1d1f] dark:text-zinc-100 hover:text-[#0066cc] dark:hover:text-[#4da3ff] transition-colors border-b border-black/[0.04] dark:border-white/[0.06]"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.08 + 3 * 0.06,
          }}
          className="pt-8 w-full flex justify-center sm:hidden"
        >
          <Link
            href="/admin"
            onClick={onClose}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0066cc] text-white text-[1rem] font-medium hover:bg-[#0055b3] active:scale-[0.97] transition-all shadow-lg shadow-blue-500/20"
          >
            ระบบผู้ดูแล
          </Link>
        </motion.div>
      </motion.nav>
    </motion.div>,
    document.body
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/10 bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-2xl backdrop-saturate-150 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-semibold tracking-tight text-[17px] text-[#1d1d1f] dark:text-zinc-50 transition-colors hidden sm:block">
            Sci-Math-Technology Program
          </span>
          <span className="font-semibold tracking-tight text-[17px] text-[#1d1d1f] dark:text-zinc-50 transition-colors sm:hidden">
            SMT Program
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]"></span>
        </Link>

        {/* Right: Links */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center gap-6 text-[14px] text-[#1d1d1f]/70 dark:text-zinc-400 font-medium">
            <Link href="/curriculum" className="hover:text-[#0066cc] dark:hover:text-[#0066cc] transition-colors">
              หลักสูตร
            </Link>
            <Link href="/activities" className="hover:text-[#0066cc] dark:hover:text-[#0066cc] transition-colors">
              กิจกรรม
            </Link>
            <Link href="/cohorts" className="hover:text-[#0066cc] dark:hover:text-[#0066cc] transition-colors">
              รุ่นนักเรียน
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/admin"
              className="hidden sm:flex px-4 py-1.5 rounded-md bg-[#eef3fb] dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-[14px] text-[#1d1d1f] dark:text-zinc-100 font-medium hover:bg-[#e3eaf6] dark:hover:bg-zinc-800 transition-colors"
            >
              ระบบผู้ดูแล
            </Link>
            <button
              className="md:hidden p-1.5 rounded-md text-[#1d1d1f] dark:text-zinc-50 hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative z-[10000]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Portal - rendered outside nav for proper backdrop-filter */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenuOverlay onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
}
