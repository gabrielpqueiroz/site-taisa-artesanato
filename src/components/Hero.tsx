
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/lovable-uploads/8fc65d61-2cdb-47e9-bcba-1c32d0951270.png",
    alt: "Toalha Mariah com nuvens e arco-íris",
    title: "Toalhas e Fraldas Personalizadas",
    description: "Peças delicadas bordadas à mão com o nome da criança"
  },
  {
    image: "/lovable-uploads/bd46de7b-d576-4e8b-abbd-1a41d00671fc.png",
    alt: "Kit Nicolas com Super-heróis",
    title: "Arte em Cada Detalhe",
    description: "Bordados exclusivos que encantam e emocionam"
  },
  {
    image: "/lovable-uploads/800a6ec3-b3ac-4b79-8f26-abfe42a293e4.png",
    alt: "Toalha Unicórnio",
    title: "Enxoval Personalizado",
    description: "Peças únicas para momentos especiais"
  },
  {
    image: "/lovable-uploads/d47c6100-3f22-486b-8a19-5bbe51d03c56.png",
    alt: "Toalha Lara com nuvem e corações",
    title: "Kits Completos",
    description: "Todo o enxoval que seu bebê precisa"
  },
  {
    image: "/lovable-uploads/51b10903-fb71-4c82-8ce5-3e0166356f25.png",
    alt: "Toalhas de Personagens Disney",
    title: "Bordados Delicados",
    description: "Peças com acabamento refinado e detalhes exclusivos"
  },
  {
    image: "/lovable-uploads/9b75c1cc-d8d9-47f1-b0f2-b2835d12e033.png",
    alt: "Toalhas de Dinossauros Bernardo Correia",
    title: "Toalhas para Bebê",
    description: "Feitas com materiais de alta qualidade para a pele sensível do seu filho"
  },
  {
    image: "/lovable-uploads/85c6e011-6334-4285-97ec-4d2f52d9fc1d.png",
    alt: "Toalhas Stitch Alice",
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
