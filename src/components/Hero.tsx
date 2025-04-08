
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/lovable-uploads/a8a4d00d-a75b-44b2-8ac2-ea3601bef350.png",
    alt: "Conjunto de toalhas personalizadas para bebê",
    title: "Toalhas e Fraldas Personalizadas",
    description: "Peças delicadas bordadas à mão com o nome da criança"
  },
  {
    image: "/lovable-uploads/51f957ff-a0b7-4f06-bb45-946c1f526dcc.png",
    alt: "Toalhas bordadas com nome Eva",
    title: "Arte em Cada Detalhe",
    description: "Bordados exclusivos que encantam e emocionam"
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
    <div id="inicio" className="relative h-screen w-full overflow-hidden bg-pattern pt-16">
      {/* Image Carousel */}
      <div className="relative h-3/4 w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transform transition-transform duration-500 ease-in-out ${
              index === current 
                ? "translate-x-0 opacity-100" 
                : index < current 
                  ? "-translate-x-full opacity-0" 
                  : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex h-full w-full flex-col items-center justify-center px-4 lg:flex-row lg:justify-between lg:px-20">
              <div className="mb-10 text-center lg:mb-0 lg:w-1/2 lg:text-left animate-fade-in">
                <h1 className="mb-4 text-4xl font-bold text-taisa-gold md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg text-gray-700 md:text-xl">
                  {slide.description}
                </p>
                <Button
                  className="bg-taisa-gold hover:bg-taisa-light-gold text-white px-8 py-6 text-lg"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Taisa%20Artesanatos!", "_blank")}
                >
                  Faça seu Pedido
                </Button>
              </div>
              <div className="relative h-full max-h-[500px] w-full lg:w-1/2 flex items-center justify-center p-4">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-contain max-h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 p-4">
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
              index === current ? "bg-taisa-gold" : "bg-gray-300"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Left/Right Arrows */}
      <button
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-taisa-gold hover:bg-white/50 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-taisa-gold hover:bg-white/50 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;
