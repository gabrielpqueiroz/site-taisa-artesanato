
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Kit Toalhas Personalizadas",
    image: "/lovable-uploads/a8a4d00d-a75b-44b2-8ac2-ea3601bef350.png",
    description: "Conjunto de toalhas delicadamente bordadas com o nome da criança."
  },
  {
    id: 2,
    name: "Toalhas Floral com Nome",
    image: "/lovable-uploads/51f957ff-a0b7-4f06-bb45-946c1f526dcc.png", 
    description: "Toalhas com bordado floral e nome personalizado."
  }
];

const categories = [
  "Todos",
  "Toalhas",
  "Fraldas",
  "Kits Bebê",
  "Lençóis"
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  return (
    <section id="produtos" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taisa-gold mb-4">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Peças artesanais feitas com muito amor e dedicação para proporcionar 
            conforto e beleza. Todos os produtos são personalizáveis.
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category
                    ? "bg-taisa-gold hover:bg-taisa-light-gold text-white" 
                    : "border-taisa-gold text-taisa-gold hover:bg-taisa-gold hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-dancing font-bold text-taisa-gold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button 
                  className="w-full bg-taisa-pink hover:bg-taisa-deep-pink text-white"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20" + product.name, "_blank")}
                >
                  Encomendar <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Placeholder cards for future products */}
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={`placeholder-${index}`} className="overflow-hidden border-none shadow-lg">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src="/lovable-uploads/1d1757de-957a-4d08-82e8-61749a2f6f6b.png"
                  alt="Taisa Artesanatos Logo"
                  className="w-1/2 opacity-30"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-dancing font-bold text-taisa-gold mb-2">Personalização Exclusiva</h3>
                <p className="text-gray-600 mb-4">
                  Criamos produtos sob medida com o nome e as cores que você desejar.
                </p>
                <Button 
                  className="w-full bg-taisa-pink hover:bg-taisa-deep-pink text-white"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20gostaria%20de%20fazer%20uma%20encomenda%20personalizada", "_blank")}
                >
                  Consultar <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-taisa-gold hover:bg-taisa-light-gold text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20gostaria%20de%20conhecer%20todos%20os%20produtos%20disponíveis", "_blank")}
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
