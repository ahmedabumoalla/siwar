import { Leaf, Cpu, ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-slate-50 to-emerald-50 py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* تأثيرات بصرية في الخلفية */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-siwar-dark flex items-center gap-2 border border-emerald-100">
            <Leaf size={16} className="text-siwar-green" />
            البيئة
          </span>
          <span className="text-slate-400">+</span>
          <span className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-siwar-dark flex items-center gap-2 border border-sky-100">
            <Cpu size={16} className="text-siwar-blue" />
            التقنية
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.3] md:leading-[1.65]">
  نحو جيل مستدام يصنع <br className="hidden md:block" />
  <span className="text-transparent bg-clip-text bg-linear-to-br from-siwar-green to-siwar-blue">أثراً إيجابياً</span>
</h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          سوار هي مبادرتك الرقمية لربط الابتكار التقني بحماية البيئة. انضم إلينا لنفهم كيف نوظف التكنولوجيا لترشيد الموارد وبناء مستقبل أفضل.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#register" className="bg-siwar-green hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
            انضم لعائلة سوار
            <ArrowLeft size={20} />
          </a>
          <a href="#about" className="bg-white text-slate-700 hover:text-siwar-blue px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md border border-slate-200 w-full sm:w-auto justify-center flex items-center">
            اكتشف المزيد
          </a>
        </div>
      </div>
    </section>
  );
}