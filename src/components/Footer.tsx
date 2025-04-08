
import { Heart, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/d0018f5e-c181-4e38-9761-fcea29458b46.png" 
              alt="Taisa Artesanatos" 
              className="h-24 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-600 max-w-xs mx-auto md:mx-0">
              Enxoval personalizado feito com amor e carinho para momentos únicos e especiais. Desde 2010.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-bold text-taisa-gold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-600 hover:text-taisa-gold transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-600 hover:text-taisa-gold transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-600 hover:text-taisa-gold transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-600 hover:text-taisa-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-bold text-taisa-gold text-lg mb-4">Redes Sociais</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/taisa.artesanatos/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-taisa-light-gold flex items-center justify-center text-white hover:bg-taisa-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-taisa-light-gold flex items-center justify-center text-white hover:bg-taisa-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:contato@taisaartesanatos.com" 
                className="h-10 w-10 rounded-full bg-taisa-light-gold flex items-center justify-center text-white hover:bg-taisa-gold transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-600">
              Entre em contato para encomendas
            </p>
            <p className="text-gray-600 mt-2">
              Foz do Iguaçu - Paraná
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            &copy; {currentYear} Taisa Artesanatos. Desde 2010. Todos os direitos reservados.
            <Heart size={14} className="text-taisa-deep-pink mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
