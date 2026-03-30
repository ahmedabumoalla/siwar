import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Community from "@/components/Community";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* القسم التعريفي الأول - خطف انتباه الزائر */}
      <Hero />
      
      {/* من نحن وما هي رسالتنا */}
      <About />
      
      {/* ما الذي نقدمه (المحتوى التفاعلي) */}
      <Features />
      
      {/* مجتمع سوار (المواضيع الساخنة) */}
      <Community />
      
      {/* نموذج الانضمام لعائلة سوار */}
      <RegistrationForm />
      
      <Footer />
    </main>
  );
}