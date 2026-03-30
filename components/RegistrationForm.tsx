"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Sparkles, X, UserPlus } from "lucide-react";

export default function RegistrationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const closeForm = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 500);
  };

  return (
    <section id="register" className="py-24 relative z-10 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4">
        {/* الجزء الظاهر في الصفحة */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-6">جاهز لتترك أثراً؟</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            انضم الآن إلى مبادرة سوار وكن جزءاً من مجتمع شبابي طموح يسعى لبناء مستقبل مستدام بالتقنية.
          </p>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="group relative bg-siwar-dark text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-siwar-green/20 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-siwar-green translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              <UserPlus size={24} />
              انضم لعائلة سوار
            </span>
          </button>
        </motion.div>

        {/* النافذة المنبثقة (Modal) */}
        <AnimatePresence>
          {isOpen && (
            // التعديل هنا: items-start لتبدأ من الأعلى، و pt-32 لتنزل تحت الهيدر
            <div className="fixed inset-0 z-100 flex items-start justify-center p-4 overflow-y-auto scrollbar-hide pt-32 pb-10">
              
              {/* الخلفية المظلمة ثابتة خلف النموذج */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeForm}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[-1]"
              />

              {/* محتوى النافذة */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden z-110"
              >
                {/* زر الإغلاق */}
                <button 
                  onClick={closeForm}
                  className="absolute top-6 left-6 text-slate-400 hover:text-slate-900 transition-colors z-120 p-2 bg-slate-50 rounded-full shadow-sm"
                >
                  <X size={24} />
                </button>

                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div 
                      key="form-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      className="p-8 md:p-12"
                    >
                      <div className="mb-8 text-right">
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">بيانات الانضمام</h3>
                        <p className="text-slate-500">أهلاً بك! نحتاج لبعض المعلومات الأساسية للبدء.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-right">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-slate-700 mb-2">الاسم الكامل</label>
                          <input type="text" placeholder="أدخل اسمك الثلاثي" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-siwar-green transition-all outline-none" required disabled={isSubmitting} />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">العمر</label>
                          <input type="number" placeholder="مثال: 22" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-siwar-green transition-all outline-none" required disabled={isSubmitting} />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">المدينة</label>
                          <input type="text" placeholder="مثال: الرياض" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-siwar-green transition-all outline-none" required disabled={isSubmitting} />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                          <input type="email" placeholder="example@domain.com" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-siwar-green transition-all outline-none text-left" dir="ltr" required disabled={isSubmitting} />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-slate-700 mb-2">رقم الجوال</label>
                          <div className="flex items-center gap-2" dir="ltr">
                            <span className="bg-slate-100 px-4 py-4 rounded-2xl font-bold text-slate-600 border border-slate-100 shrink-0">+966</span>
                            <input type="tel" placeholder="5X XXX XXXX" className="flex-1 px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-siwar-green transition-all outline-none" required disabled={isSubmitting} />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-slate-700 mb-2">مجالات تطوعك في البيئة ( إن وجدت )</label>
                          <textarea rows={3} placeholder="أخبرنا عن تجاربك..." className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-siwar-green transition-all outline-none resize-none" disabled={isSubmitting}></textarea>
                        </div>
                        <div className="md:col-span-2 mt-4">
                          <button 
                            type="submit" 
                            className="w-full bg-siwar-green text-white font-bold py-5 rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-100"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? <><Loader2 className="animate-spin" /> جاري الإرسال...</> : "إرسال البيانات"}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success-content"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-12 md:p-16 text-center"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="w-24 h-24 bg-siwar-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100"
                      >
                        <CheckCircle size={50} className="text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 text-center">مرحباً بك معنا!</h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-10 text-center">
                        تم استلام بياناتك بنجاح. فريق سوار متحمس جداً لانضمامك، وسنتواصل معك قريباً جداً عبر الجوال أو البريد الإلكتروني.
                      </p>
                      <button 
                        onClick={closeForm}
                        className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                      >
                        إغلاق النافذة
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}