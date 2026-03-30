"use client";

import { motion, Variants } from "framer-motion";
import { Flame, MessageCircle, Heart, Share2, TrendingUp } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function Community() {
  // بيانات وهمية للمواضيع الساخنة لتعطي إحساساً بواقعية المنصة
  const hotTopics = [
    {
      id: 1,
      author: "سارة خالد",
      role: "طالبة علوم حاسب",
      avatarColor: "bg-emerald-100 text-emerald-700",
      time: "قبل ساعتين",
      title: "كيف نستخدم الذكاء الاصطناعي لتقليل الهدر الغذائي؟ 🍏🤖",
      content: "قاعدة أشتغل على نموذج AI يحلل الاستهلاك وينبه قبل انتهاء الصلاحية. مين جرب يشتغل على مشاريع مشابهة يفيدني؟",
      likes: 124,
      comments: 32,
    },
    {
      id: 2,
      author: "عبدالله الفهد",
      role: "رائد أعمال",
      avatarColor: "bg-sky-100 text-sky-700",
      time: "قبل 5 ساعات",
      title: "تحدي الألواح الشمسية في المناطق الحارة ☀️",
      content: "كفاءة الألواح تقل مع الحرارة العالية جداً، هل فيه تقنيات تبريد ذاتية اقتصادية ممكن نطبقها في مشاريعنا المحلية؟ نقاش مفتوح!",
      likes: 89,
      comments: 45,
    },
    {
      id: 3,
      author: "ديمة عبدالرحمن",
      role: "مهتمة بالاستدامة",
      avatarColor: "bg-orange-100 text-orange-700",
      time: "قبل يوم",
      title: "تطبيق يحسب البصمة الكربونية لمشترياتك 🛒♻️",
      content: "تخيل لو تطبيق البنك حقك يعلمك كم البصمة الكربونية لكل عملية شراء تسويها! هل تتوقعون هذا بيغير عاداتنا الاستهلاكية؟",
      likes: 210,
      comments: 67,
    },
  ];

  return (
    <section id="community" className="py-24 bg-slate-50 relative z-10 border-t border-slate-200/50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* عنوان القسم */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="bg-red-100 text-red-600 p-2 rounded-xl flex items-center justify-center animate-pulse">
                <Flame size={20} />
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                مجتمع سوار
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg"
            >
              أهم المواضيع والأفكار اللي تدور الآن على طبق ساخن.
            </motion.p>
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 text-slate-700 hover:text-siwar-blue hover:border-siwar-blue px-6 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <TrendingUp size={18} />
            تصفح كل النقاشات
          </motion.button>
        </div>

        {/* شبكة المواضيع الساخنة */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hotTopics.map((topic) => (
            <motion.div 
              key={topic.id}
              variants={cardVariants}
              className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* رأس البطاقة (الكاتب والوقت) */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${topic.avatarColor}`}>
                    {topic.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{topic.author}</h4>
                    <p className="text-xs text-slate-500">{topic.role}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{topic.time}</span>
              </div>

              {/* محتوى الموضوع */}
              <div className="mb-6 grow">
                <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight">
                  {topic.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {topic.content}
                </p>
              </div>

              {/* أزرار التفاعل */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-slate-500">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors group">
                    <Heart size={18} className="group-hover:fill-red-500 transition-colors" />
                    <span className="text-sm font-medium">{topic.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-siwar-blue transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm font-medium">{topic.comments}</span>
                  </button>
                </div>
                <button className="hover:text-siwar-green transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}