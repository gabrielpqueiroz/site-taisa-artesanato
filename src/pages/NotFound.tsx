
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern py-12 px-4">
      <div className="text-center max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <img 
          src="/lovable-uploads/1d1757de-957a-4d08-82e8-61749a2f6f6b.png" 
          alt="Taisa Artesanatos" 
          className="h-24 w-auto mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-2 text-taisa-gold font-dancing">Página não encontrada</h1>
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Button 
          className="bg-taisa-gold hover:bg-taisa-light-gold text-white flex items-center mx-auto"
          onClick={() => window.location.href = "/"}
        >
          <Home className="mr-2 h-5 w-5" /> Voltar para o início
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
