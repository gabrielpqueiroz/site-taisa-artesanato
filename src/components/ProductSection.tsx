
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Toalha Personalizada Benjamin",
    image: "/lovable-uploads/1740b0d6-95dd-4f56-8c0e-a8c48e04f043.png",
    description: "Toalha bordada com nome e personagem, perfeita para o banho do seu bebê."
  },
  {
    id: 2,
    name: "Kit Completo Pedro",
    image: "/lovable-uploads/9ee41607-256f-445c-991f-6d2d90fff1c0.png", 
    description: "Kit completo com toalhas, fraldas, body e itens para o enxoval do bebê."
  },
  {
    id: 3,
    name: "Kit Sofia Carolina",
    image: "/lovable-uploads/6f17dc70-6ee2-4b63-bf22-eed752931d0d.png",
    description: "Conjunto de toalhas bordadas em tons de rosa com coroa e nome personalizado."
  },
  {
    id: 4,
    name: "Kit Ahmad Aviador",
    image: "/lovable-uploads/0c0572ef-42aa-45e3-81ab-0b734439ade1.png",
    description: "Conjunto de toalhas com bordado temático de aviador, personalizado com nome."
  },
  {
    id: 5,
    name: "Kit Ahmad Urso Real",
    image: "/lovable-uploads/a77e630e-7c49-41b7-8b21-ca7f47dce9f2.png", 
    description: "Conjunto de toalhas em tons dourados com bordado de urso e coroa real."
  },
  {
    id: 6,
    name: "Kit Asaph Príncipe",
    image: "/lovable-uploads/2f306823-d5a8-4015-80f1-b9ac7105fa1e.png",
    description: "Conjunto completo para o príncipe com toalha de banho, babadores e fraldas."
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
                  className="w-full bg-taisa-gold hover:bg-taisa-light-gold text-white"
                  onClick={() => window.open("https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0", "_blank")}
                >
                  Encomendar <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-taisa-gold hover:bg-taisa-light-gold text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0", "_blank")}
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
