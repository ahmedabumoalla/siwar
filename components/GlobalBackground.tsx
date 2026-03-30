"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// واجهة لتعريف خصائص كل نقطة
interface Dot {
  id: number;
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  color: string;
}

export default function GlobalBackground() {
  // تم تصحيح هذا السطر ✔️
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generatedDots = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, 
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 20, 
      color: Math.random() > 0.5 ? "bg-siwar-green" : "bg-siwar-blue",
    }));
    setDots(generatedDots);
  }, []);

  return (
<div className="fixed inset-0 overflow-hidden pointer-events-none z-30 opacity-20">
        {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute rounded-full ${dot.color} shadow-lg`}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: dot.x,
            top: dot.y,
          }}
          animate={{
            y: ["0%", "20%", "-20%", "0%"],
            x: ["0%", "5%", "-5%", "0%"],
            opacity: [0.1, 0.4, 0.2, 0.1],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}