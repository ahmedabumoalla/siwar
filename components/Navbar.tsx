import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    // تم تغيير z-index إلى 40 و sticky إلى fixed
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* قسم الشعار */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 h-16 md:w-40 md:h-20">
              <Image 
                src="/siwar-logo.png" 
                alt="شعار مبادرة سوار" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* روابط التصفح */}
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <Link href="#about" className="hover:text-siwar-green transition-colors">من نحن</Link>
            <Link href="#features" className="hover:text-siwar-green transition-colors">ماذا نقدم</Link>
            <Link href="#community" className="hover:text-siwar-green transition-colors">مجتمع سوار</Link>
          </div>

          {/* زر الانضمام السريع */}
          <div className="hidden md:block">
            <Link href="#register" className="bg-siwar-blue hover:bg-sky-600 text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-md">
              سجل الآن
            </Link>
          </div>

          {/* زر القائمة للموبايل */}
          <button className="md:hidden text-slate-700 p-2">
            <Menu size={28} />
          </button>

        </div>
      </div>
    </nav>
  );
}