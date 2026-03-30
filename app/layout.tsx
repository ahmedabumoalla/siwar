import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
// 1. استيراد المكون الجديد
import GlobalBackground from "@/components/GlobalBackground"; 

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "مبادرة سوار | نحو جيل مستدام",
  description: "مبادرة رقمية شبابية تهدف إلى ربط التقنية بالبيئة والاستدامة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} antialiased bg-slate-50 relative min-h-screen`}>
        {/* 2. وضع الخلفية العالمية هنا لتعمل خلف الـ children */}
        <GlobalBackground />
        
        {children}
      </body>
    </html>
  );
}