"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Target, Users } from "lucide-react";

// إعدادات حركة ظهور المحتوى (Fade In Up)
const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  const cards = [
    { icon: Zap, title: "رسالتنا", desc: "ربط جيل الشباب بالتقنية لصناعة أثر بيئي مستدام.", color: "text-siwar-green" },
    { icon: Target, title: "هدفنا", desc: "توعية وتمكين الشباب لفهم توظيف الابتكار لحماية الكوكب.", color: "text-siwar-blue" },
    { icon: Users, title: "فئتنا", desc: "الشباب الطموح، الطلاب، ورواد الأعمال المهتمين بالمستقبل.", color: "text-siwar-dark" },
  ];

  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      {/* تم حذف دالة EcoNeuralBackground من هنا */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          {/* العمود الأول: النص التعريفي (مع حركة الظهور المعتادة) */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span custom={0} variants={fadeInVariant} className="inline-block bg-emerald-50 text-siwar-green px-4 py-1 rounded-full text-sm font-bold mb-4 border border-emerald-100">
              من نحن
            </motion.span>
            <motion.h2 custom={1} variants={fadeInVariant} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              سوار: ملتقى <span className="text-siwar-green">الابتكار الرقمي</span> والوعي البيئي
            </motion.h2>
            <motion.p custom={2} variants={fadeInVariant} className="text-lg text-slate-600 mb-8 leading-relaxed">
              سوار هي مبادرة رقمية شبابية تهدف إلى تبسيط مفاهيم الاستدامة وربطها بالتقنيات الحديثة. تركّز المبادرة على تمكين جيل مستدام يفهم كيف يمكن للابتكار التكنولوجي أن يساهم فعالياً في حماية البيئة وترشيد الموارد.
            </motion.p>
          </motion.div>

          {/* العمود الثاني: البطاقات (مع حركة الظهور المعتادة) */}
          <motion.div 
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                custom={index + 3}
                variants={fadeInVariant}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow hover:bg-white"
              >
                <div className={`p-3 rounded-xl bg-white ${card.color} shadow-inner shrink-0`}>
                  <card.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}