import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai, Sarabun, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  display: "swap",
});

const sarabun = Sarabun({
  weight: ["300", "400", "500", "600"],
  variable: "--font-sarabun",
  subsets: ["thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sci-Math-Technology Program",
  description: "โรงเรียนบางปะกอกวิทยาคม - แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", inter.variable, notoSansThai.variable, "font-sans", geist.variable)}
    >
      <body className={cn("min-h-full flex flex-col bg-[#f8fbff] dark:bg-[#0a0a0a] text-[#1d1d1f] dark:text-[#ededed] text-[1.0625rem] leading-[1.47] font-sans tracking-[-0.022rem] transition-colors duration-300", sarabun.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
