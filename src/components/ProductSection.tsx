
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Kits Completos de Enxoval",
    description: "Kits completos para o enxoval do seu bebê, com tudo o que você precisa.",
    imageUrl: "https://rrlaserfoz.b-cdn.net/Design%20sem%20nome%20(20).png",
  },
  {
    name: "Toalhas de Banho",
    description: "Toalhas de banho personalizadas com bordados delicados.",
    imageUrl: "https://rrlaserfoz.b-cdn.net/472851997_18260939431261617_1287256395679865698_n.jpg",
  },
  {
    name: "Toalhas Bordadas",
    description: "Toalhas de alta qualidade bordadas com o nome do seu bebê.",
    imageUrl: "https://rrlaserfoz.b-cdn.net/Design%20sem%20nome%20(22).png",
  },
  {
    name: "Mantas Personalizadas",
    description: "Mantas macias e aconchegantes, personalizadas com o nome do bebê.",
    imageUrl: "https://rrlaserfoz.b-cdn.net/Design%20sem%20nome%20(23).png",
  },
  {
    name: "Temas Infantis",
    description: "Diversos modelos e temas para personalizar o enxoval do seu bebê.",
    imageUrl: "https://rrlaserfoz.b-cdn.net/473035239_18260939389261617_3984545922691494519_n.jpg",
  },
  {
    name: "Bordados Delicados",
    description: "Peças com acabamento refinado e detalhes exclusivos.",
    imageUrl: "https://rrlaserfoz.b-cdn.net/471576828_18260939413261617_89718166852552283_n.jpg",
  },
];

const ProductSection = () => {
  return (
    <section id="produtos" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-taisa-gold mb-8">
        Nossos Produtos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <Button 
                className="bg-taisa-gold hover:bg-taisa-light-gold text-white w-full mt-4"
                onClick={() => window.open("https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0", "_blank")}
              >
                Encomendar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
