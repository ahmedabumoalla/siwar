export default function Footer() {
  return (
    <footer className="bg-siwar-dark py-10 text-white text-center">
      <div className="container mx-auto px-4">
        <p>جميع الحقوق محفوظة لمبادرة سوار &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}