
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Heart, ThumbsUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 px-4 bg-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taisa-gold mb-4">Sobre Taisa Artesanatos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enxovais personalizados feitos com carinho para tornar cada momento mais especial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-dancing font-bold text-taisa-gold mb-4">
              Nossa História
            </h3>
            <p className="text-gray-700 mb-4">
              A Taisa Artesanatos nasceu da paixão por criar peças únicas e personalizadas que 
              levam carinho e exclusividade para as famílias. Com mais de 10 anos de experiência, 
              transformamos tecidos comuns em obras de arte através do bordado.
            </p>
            <p className="text-gray-700 mb-6">
              Cada peça é cuidadosamente confeccionada à mão, garantindo qualidade e atenção aos 
              mínimos detalhes. Trabalhamos com materiais de alta qualidade para assegurar conforto 
              e durabilidade.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-white/80 backdrop-blur-sm border-taisa-gold">
                <CardContent className="p-4 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-taisa-light-gold flex items-center justify-center mb-3">
                    <Heart className="text-white h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-taisa-gold mb-1">Feito à Mão</h4>
                  <p className="text-sm text-gray-600">Cada peça é única e especial</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border-taisa-gold">
                <CardContent className="p-4 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-taisa-light-gold flex items-center justify-center mb-3">
                    <BadgeCheck className="text-white h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-taisa-gold mb-1">Qualidade</h4>
                  <p className="text-sm text-gray-600">Materiais premium selecionados</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border-taisa-gold">
                <CardContent className="p-4 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-taisa-light-gold flex items-center justify-center mb-3">
                    <ThumbsUp className="text-white h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-taisa-gold mb-1">Personalizado</h4>
                  <p className="text-sm text-gray-600">Totalmente sob medida</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-full border-4 border-taisa-gold p-2 shadow-xl">
              <div className="rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80">
                <img 
                  src="/lovable-uploads/1d1757de-957a-4d08-82e8-61749a2f6f6b.png" 
                  alt="Taisa Artesanatos Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
