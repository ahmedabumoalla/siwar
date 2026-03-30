"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Sparkles } from "lucide-react";

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // دالة محاكاة إرسال البيانات
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // منع تحديث الصفحة الافتراضي
    setIsSubmitting(true);

    // محاكاة تأخير الإرسال للواقعية (ثانيتين) ثم إظهار رسالة النجاح
    // لاحقاً يمكنك ربط هذا الجزء بقاعدة البيانات الخاصة بك
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="register" className="py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">كن جزءاً من التغيير</h2>
          <p className="text-slate-600 text-lg">سجل الآن وانضم إلى عائلة سوار للمساهمة في بناء مستقبل مستدام.</p>
        </div>

        {/* نستخدم AnimatePresence للتبديل السلس بين الفورم ورسالة النجاح */}
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">الاسم الكامل</label>
                  <input type="text" id="name" placeholder="أدخل اسمك الثلاثي" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-siwar-green focus:border-transparent transition-all bg-white/50 backdrop-blur-sm" required disabled={isSubmitting} />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-bold text-slate-700 mb-2">العمر</label>
                  <input type="number" id="age" min="15" max="100" placeholder="مثال: 22" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-siwar-green focus:border-transparent transition-all bg-white/50 backdrop-blur-sm" required disabled={isSubmitting} />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-slate-700 mb-2">المدينة</label>
                  <input type="text" id="city" placeholder="مثال: الرياض" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-siwar-green focus:border-transparent transition-all bg-white/50 backdrop-blur-sm" required disabled={isSubmitting} />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                  <input type="email" id="email" placeholder="example@domain.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-siwar-green focus:border-transparent transition-all bg-white/50 backdrop-blur-sm text-left" dir="ltr" required disabled={isSubmitting} />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">رقم الجوال</label>
                  <div className="relative flex items-center rtl:flex-row-reverse">
                    <input type="tel" id="phone" placeholder="5X XXX XXXX" className="w-full px-4 py-3 rounded-l-xl border border-slate-200 border-r-0 focus:outline-none focus:ring-2 focus:ring-siwar-green focus:border-transparent transition-all bg-white/50 backdrop-blur-sm text-left" dir="ltr" required disabled={isSubmitting} />
                    <span className="bg-slate-100/80 backdrop-blur-sm border border-slate-200 border-l-0 px-4 py-3 rounded-r-xl text-slate-600 font-bold" dir="ltr">
                      +966
                    </span>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="experience" className="block text-sm font-bold text-slate-700 mb-2">
                    أهم المجالات التطوعية البيئية (إن وجدت)
                  </label>
                  <textarea id="experience" rows={4} placeholder="حدثنا عن المبادرات أو المشاريع البيئية والاستدامة التي كنت جزءاً منها..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-siwar-green focus:border-transparent transition-all bg-white/50 backdrop-blur-sm resize-none" disabled={isSubmitting}></textarea>
                </div>

              </div>

              <div className="mt-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-siwar-dark hover:bg-siwar-green text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      جاري إرسال طلبك...
                    </>
                  ) : (
                    "إرسال طلب الانضمام"
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            /* رسالة النجاح المنبثقة بدلاً من الفورم */
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
              className="bg-linear-to-br from-emerald-50 to-teal-100 p-10 md:p-14 rounded-3xl shadow-2xl border border-emerald-200 text-center relative overflow-hidden"
            >
              {/* تأثيرات بصرية خلفية لرسالة النجاح */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 text-emerald-200/50">
                <Sparkles size={120} />
              </div>

              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto w-24 h-24 bg-siwar-green rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-300"
              >
                <CheckCircle size={48} className="text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">مرحباً بك في عائلة سوار!</h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-lg mx-auto">
                تم إرسال طلب انضمامك بنجاح. نحن فخورون باهتمامك، وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن لنبدأ معاً رحلة صناعة الأثر البيئي والتقني.
              </p>

              <button 
                onClick={() => setIsSuccess(false)}
                className="bg-white text-siwar-dark hover:text-siwar-green px-8 py-3 rounded-xl font-bold transition-colors shadow-sm hover:shadow-md border border-emerald-100"
              >
                إرسال طلب آخر
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}