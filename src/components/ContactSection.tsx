
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Instagram, Mail, Clock, CreditCard, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/message/AITKRRQCRE7YO1?autoload=1&app_absent=0", "_blank");
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
              <div className="bg-taisa-gold/10 rounded-full h-14 w-14 mx-auto flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-taisa-gold" />
              </div>
              <h3 className="font-bold text-xl text-taisa-gold mb-2">WhatsApp</h3>
              <p className="text-gray-600">Atendimento rápido e personalizado</p>
              <Button 
                className="mt-4 bg-taisa-gold hover:bg-taisa-light-gold text-white"
                onClick={handleWhatsAppClick}
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-taisa-gold/10 rounded-full h-14 w-14 mx-auto flex items-center justify-center mb-4">
                <Instagram className="h-6 w-6 text-taisa-gold" />
              </div>
              <h3 className="font-bold text-xl text-taisa-gold mb-2">Instagram</h3>
              <p className="text-gray-600">Siga-nos e veja as novidades</p>
              <Button 
                className="mt-4 bg-taisa-gold hover:bg-taisa-light-gold text-white"
                onClick={() => window.location.href = "https://www.instagram.com/taisa.artesanatos/"}
              >
                Ver Perfil
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-taisa-gold/10 rounded-full h-14 w-14 mx-auto flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-taisa-gold" />
              </div>
              <h3 className="font-bold text-xl text-taisa-gold mb-2">Localização</h3>
              <p className="text-gray-600">Foz do Iguaçu - Paraná</p>
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
              <h3 className="text-3xl font-cormorant font-bold text-taisa-gold mb-4">
                Informações Adicionais
              </h3>
              <div className="flex items-start mb-4">
                <Clock className="h-5 w-5 text-taisa-gold mr-3 mt-1" />
                <div>
                  <p className="font-bold text-gray-800">Desde 2010</p>
                  <p className="text-gray-600">Tradição e qualidade em artesanato</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-taisa-gold mr-3 mt-1" />
                <div>
                  <p className="font-bold text-gray-800">Envio para Todo Brasil</p>
                  <p className="text-gray-600">Entregamos em qualquer região</p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCard className="h-5 w-5 text-taisa-gold mr-3 mt-1" />
                <div>
                  <p className="font-bold text-gray-800">Formas de Pagamento</p>
                  <p className="text-gray-600">Aceitamos cartões de crédito e débito</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-700 mb-4">
                  Enxoval bordado personalizado para seu bebê, cama, mesa e banho.
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
