
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://rrlaserfoz.b-cdn.net/471576828_18260939413261617_89718166852552283_n.jpg",
    alt: "Kit com bordados delicados",
    title: "Arte em Cada Detalhe",
    description: "Bordados exclusivos que encantam e emocionam"
  },
  {
    image: "https://rrlaserfoz.b-cdn.net/472506212_18260939434261617_9076721055187040155_n.jpg",
    alt: "Toalha Unicórnio",
    title: "Enxoval Personalizado",
    description: "Peças únicas para momentos especiais"
  },
  {
    image: "https://rrlaserfoz.b-cdn.net/473035239_18260939389261617_3984545922691494519_n.jpg",
    alt: "Toalhas Stitch Alice",
    title: "Temas Infantis",
    description: "Diversos modelos e temas para personalizar o enxoval do seu bebê"
  },
  {
    image: "https://rrlaserfoz.b-cdn.net/472769890_18260939398261617_7030517437681889939_n.jpg",
    alt: "Toalhas de Personagens Disney",
    title: "Bordados Delicados",
    description: "Peças com acabamento refinado e detalhes exclusivos"
  },
  {
    image: "https://rrlaserfoz.b-cdn.net/472947876_18260939443261617_5982154756844040483_n.jpg",
    alt: "Toalhas de Dinossauros",
    title: "Toalhas para Bebê",
    description: "Feitas com materiais de alta qualidade para a pele sensível do seu filho"
  },
  {
    image: "https://rrlaserfoz.b-cdn.net/473132327_18260939416261617_7117030071976506854_n.jpg",
    alt: "Toalha Lara com nuvem e corações",
    title: "Kits Completos",
    description: "Todo o enxoval que seu bebê precisa"
  },
  {
    image: "https://rrlaserfoz.b-cdn.net/472851997_18260939431261617_1287256395679865698_n.jpg",
    alt: "Toalha Mariah com nuvens e arco-íris",
    title: "Toalhas Personalizadas",
    description: "Peças delicadas bordadas à mão com o nome da criança"
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
          <div className="max-w-xl bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-taisa-gold mb-3 animate-fade-in">
              {slides[current].title}
            </h1>
            <p className="text-base md:text-lg text-gray-800 mb-4">
              {slides[current].description}
            </p>
            <Button
              className="bg-taisa-gold hover:bg-taisa-light-gold text-white px-6 py-4 text-base"
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
