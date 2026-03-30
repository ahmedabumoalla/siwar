"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Leaf, Gamepad2, Map, Coffee, Users, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-sky-50 text-siwar-blue px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-sky-100"
          >
            <Sparkles size={16} />
            ماذا نقدم
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            محتوى يصنع <span className="text-transparent bg-clip-text bg-linear-to-r from-siwar-green to-siwar-blue">التغيير</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            في سوار، نحول المفاهيم البيئية المعقدة إلى محتوى تفاعلي، ممتع، وملهم للشباب.
          </motion.p>
        </div>

        {/* الشبكة الرياضية المغلقة (Bento Grid):
          - الجوال: عمود واحد (grid-cols-1)
          - التابلت: عمودين (md:grid-cols-2)
          - الكمبيوتر: 3 أعمدة (lg:grid-cols-3)
          - grid-flow-dense: السر الذي يمنع أي فراغات في الشبكة!
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px] grid-flow-dense"
        >
          
          {/* البطاقة 1: حلول وتقنيات (عريضة للكمبيوتر والتابلت) */}
          <motion.div variants={cardVariants} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-linear-to-br from-emerald-50 to-teal-100 p-8 rounded-4xl border border-emerald-200/50 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative flex flex-col justify-center">
            <div className="absolute -left-10 -top-10 text-emerald-500/10 group-hover:scale-110 transition-transform duration-500">
              <Cpu size={180} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm text-siwar-green">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">حلول وتقنيات حديثة</h3>
              <p className="text-slate-700 max-w-md">نستعرض أحدث الابتكارات التكنولوجية وكيف تُستخدم عالمياً ومحلياً لحماية البيئة.</p>
            </div>
          </motion.div>

          {/* البطاقة 2: تحديات تفاعلية (طويلة للكمبيوتر فقط، مربعة للباقي) */}
          <motion.div variants={cardVariants} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 lg:row-span-2 bg-siwar-dark text-white p-8 rounded-4xl border border-emerald-900 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40 z-0"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 text-emerald-300">
                <Gamepad2 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">تحديات تفاعلية</h3>
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-emerald-50 text-opacity-90 leading-relaxed">
                شارك في أسئلة وتحديات دورية، وحوّل معرفتك البيئية إلى لعبة تنافسية ممتعة.
              </p>
            </div>
          </motion.div>

          {/* البطاقة 3: معلومات مبسطة (مربعة دائماً) */}
          <motion.div variants={cardVariants} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-center">
            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-4 text-siwar-blue">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">معلومات مبسطة</h3>
            <p className="text-slate-600 text-sm">محتوى بيئي خفيف، مباشر، وخالٍ من التعقيد.</p>
          </motion.div>

          {/* البطاقة 4: عادات مستدامة (مربعة دائماً) */}
          <motion.div variants={cardVariants} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-center">
             <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 text-orange-500">
              <Coffee size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">عادات مستدامة</h3>
            <p className="text-slate-600 text-sm">خطوات يومية بسيطة تصنع فارقاً ضخماً لكوكبك.</p>
          </motion.div>

          {/* البطاقة 5: مشاريع وطنية (عريضة للكمبيوتر، مربعة للتابلت) */}
          <motion.div variants={cardVariants} className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bg-sky-50 p-8 rounded-4xl border border-sky-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex shrink-0 items-center justify-center shadow-sm text-siwar-blue">
                <Map size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">مشاريع وطنية ملهمة</h3>
                <p className="text-slate-700">نسلط الضوء على جهود المملكة ومشاريعها الرائدة التي تدمج بين التقنية والاستدامة.</p>
              </div>
            </div>
          </motion.div>

          {/* البطاقة 6: مجتمع شبابي (عريضة للتابلت، مربعة للكمبيوتر) */}
          <motion.div variants={cardVariants} className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 bg-linear-to-br from-slate-800 to-slate-900 text-white p-8 rounded-4xl border border-slate-700 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-center text-center items-center">
             <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <Users size={28} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">مجتمع شبابي</h3>
            <p className="text-slate-400 text-sm">بيئة تجمع الشغوفين بالابتكار.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}