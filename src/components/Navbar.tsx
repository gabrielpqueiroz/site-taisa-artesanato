
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1d1757de-957a-4d08-82e8-61749a2f6f6b.png" 
            alt="Taisa Artesanatos" 
            className="h-16 w-auto"
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="font-medium text-taisa-gold hover:text-taisa-deep-pink transition-colors">
            Início
          </a>
          <a href="#produtos" className="font-medium text-taisa-gold hover:text-taisa-deep-pink transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="font-medium text-taisa-gold hover:text-taisa-deep-pink transition-colors">
            Sobre Nós
          </a>
          <a href="#contato" className="font-medium text-taisa-gold hover:text-taisa-deep-pink transition-colors">
            Contato
          </a>
        </div>
        
        <Button 
          className="hidden md:inline-flex bg-taisa-gold hover:bg-taisa-light-gold text-white"
          onClick={() => window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Taisa%20Artesanatos!", "_blank")}
        >
          Fale Conosco
        </Button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-taisa-gold"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 py-4 space-y-3">
            <a 
              href="#inicio" 
              className="font-medium text-taisa-gold hover:text-taisa-deep-pink py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#produtos" 
              className="font-medium text-taisa-gold hover:text-taisa-deep-pink py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#sobre" 
              className="font-medium text-taisa-gold hover:text-taisa-deep-pink py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#contato" 
              className="font-medium text-taisa-gold hover:text-taisa-deep-pink py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              className="bg-taisa-gold hover:bg-taisa-light-gold text-white mt-2"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Taisa%20Artesanatos!", "_blank")}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
