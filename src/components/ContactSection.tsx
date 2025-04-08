
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=55SEUNUMEROAQUI&text=Olá,%20vim%20através%20do%20seu%20site.%20Gostaria%20de%20mais%20informações!", "_blank");
  };

  return (
    <section id="contato" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taisa-gold mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para atender o seu pedido com todo carinho e dedicação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-taisa-pink rounded-full h-14 w-14 mx-auto flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-taisa-gold" />
              </div>
              <h3 className="font-bold text-xl text-taisa-gold mb-2">Telefone</h3>
              <p className="text-gray-600">Entre em contato por telefone ou WhatsApp</p>
              <Button 
                className="mt-4 bg-taisa-gold hover:bg-taisa-light-gold text-white"
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-taisa-pink rounded-full h-14 w-14 mx-auto flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-taisa-gold" />
              </div>
              <h3 className="font-bold text-xl text-taisa-gold mb-2">Email</h3>
              <p className="text-gray-600">Envie suas dúvidas ou pedidos por email</p>
              <Button 
                className="mt-4 bg-taisa-gold hover:bg-taisa-light-gold text-white"
                onClick={() => window.location.href = "mailto:contato@taisaartesanatos.com"}
              >
                Enviar Email
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-taisa-pink rounded-full h-14 w-14 mx-auto flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-taisa-gold" />
              </div>
              <h3 className="font-bold text-xl text-taisa-gold mb-2">Endereço</h3>
              <p className="text-gray-600">Atendemos em todas as regiões com entrega</p>
              <Button 
                className="mt-4 bg-taisa-gold hover:bg-taisa-light-gold text-white"
                onClick={handleWhatsAppClick}
              >
                Consultar Entrega
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-6 md:p-10 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-dancing font-bold text-taisa-gold mb-4">
                Horário de Atendimento
              </h3>
              <div className="flex items-start mb-4">
                <Clock className="h-5 w-5 text-taisa-gold mr-3 mt-1" />
                <div>
                  <p className="font-bold text-gray-800">Segunda a Sexta</p>
                  <p className="text-gray-600">09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-taisa-gold mr-3 mt-1" />
                <div>
                  <p className="font-bold text-gray-800">Sábados</p>
                  <p className="text-gray-600">09:00 - 13:00</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-700 mb-4">
                  Fazemos produtos personalizados de acordo com suas preferências. 
                  Entre em contato para sabermos suas necessidades!
                </p>
                <Button 
                  className="bg-taisa-gold hover:bg-taisa-light-gold text-white px-8"
                  onClick={handleWhatsAppClick}
                >
                  Fale com a Taisa
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-taisa-pink">
              <h4 className="font-bold text-taisa-gold text-xl mb-4 text-center">Produtos Especiais</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-taisa-gold mr-3"></div>
                  <span className="text-gray-700">Toalhas personalizadas</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-taisa-gold mr-3"></div>
                  <span className="text-gray-700">Fraldas de boca bordadas</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-taisa-gold mr-3"></div>
                  <span className="text-gray-700">Kits para bebê</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-taisa-gold mr-3"></div>
                  <span className="text-gray-700">Lençóis e colchas</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-taisa-gold mr-3"></div>
                  <span className="text-gray-700">Peças para enxoval</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <p className="text-taisa-gold font-dancing text-xl font-bold">
                  Enxoval Personalizado
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Feito com amor e carinho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
