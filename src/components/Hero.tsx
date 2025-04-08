
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/lovable-uploads/22a32601-836d-455d-b3d2-fdca3cd1c5d3.png",
    alt: "Kit completo Pedro com toalhas personalizadas",
    title: "Toalhas e Fraldas Personalizadas",
    description: "Peças delicadas bordadas à mão com o nome da criança"
  },
  {
    image: "/lovable-uploads/ee81ca66-991d-434d-aab5-b5b8183b447d.png",
    alt: "Kit Sofia Carolina com toalhas bordadas",
    title: "Arte em Cada Detalhe",
    description: "Bordados exclusivos que encantam e emocionam"
  },
  {
    image: "/lovable-uploads/b1fc1caf-59ba-46c5-acec-c96fc4cc16ad.png",
    alt: "Kit Asaph príncipe com toalhas personalizadas",
    title: "Enxoval Personalizado",
    description: "Peças únicas para momentos especiais"
  },
  {
    image: "/lovable-uploads/bdf34feb-e95a-4708-91cd-a8b037193768.png",
    alt: "Kit Alice Gabriely com toalhas personalizadas",
    title: "Kits Completos",
    description: "Todo o enxoval que seu bebê precisa"
  },
  {
    image: "/lovable-uploads/78d453d0-953f-46f3-b590-1ebbd1c50c06.png",
    alt: "Kit Eva com toalhas florais personalizadas",
    title: "Bordados Delicados",
    description: "Peças com acabamento refinado e detalhes exclusivos"
  },
  {
    image: "/lovable-uploads/05a59fe7-fac4-41e7-b5d2-ec65fd613cd6.png",
    alt: "Kit Asaph com toalhas de banho do príncipe",
    title: "Toalhas para Bebê",
    description: "Feitas com materiais de alta qualidade para a pele sensível do seu filho"
  },
  {
    image: "/lovable-uploads/775a6538-38ff-4dc4-ada7-556faee65c45.png",
    alt: "Kit Mariah com toalhas nuvem e sol personalizado",
    title: "Temas Infantis",
    description: "Diversos modelos e temas para personalizar o enxoval do seu bebê"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div id="inicio" className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${slide.image})`,
              filter: "brightness(0.7)",
            }}
            aria-label={slide.alt}
          />
        </div>
      ))}
      
      {/* Content overlay */}
      <div className="relative h-full w-full z-10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-taisa-gold mb-4 animate-fade-in">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              {slides[current].description}
            </p>
            <Button
              className="bg-taisa-gold hover:bg-taisa-light-gold text-white px-8 py-6 text-lg"
              onClick={() => window.open("https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0", "_blank")}
            >
              Faça seu Pedido
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 p-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrent(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-taisa-gold" : "bg-white/70"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Left/Right Arrows */}
      <button
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-taisa-gold hover:bg-white/50 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-taisa-gold hover:bg-white/50 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;
