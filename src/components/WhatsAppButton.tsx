
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20vim%20através%20do%20seu%20site.%20Gostaria%20de%20mais%20informações!", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
