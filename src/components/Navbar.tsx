
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
            src="/lovable-uploads/d0018f5e-c181-4e38-9761-fcea29458b46.png" 
            alt="Taisa Artesanatos" 
            className="h-16 w-auto"
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="font-medium text-taisa-gold hover:text-white transition-colors">
            Início
          </a>
          <a href="#produtos" className="font-medium text-taisa-gold hover:text-white transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="font-medium text-taisa-gold hover:text-white transition-colors">
            Sobre Nós
          </a>
          <a href="#contato" className="font-medium text-taisa-gold hover:text-white transition-colors">
            Contato
          </a>
        </div>
        
        <Button 
          className="hidden md:inline-flex bg-taisa-gold hover:bg-taisa-light-gold text-white"
          onClick={() => window.open("https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0", "_blank")}
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
              className="font-medium text-taisa-gold py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#produtos" 
              className="font-medium text-taisa-gold py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#sobre" 
              className="font-medium text-taisa-gold py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#contato" 
              className="font-medium text-taisa-gold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              className="bg-taisa-gold hover:bg-taisa-light-gold text-white mt-2"
              onClick={() => window.open("https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0", "_blank")}
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
