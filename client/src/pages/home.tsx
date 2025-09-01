import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ProductsSection from "@/components/products-section";
import GallerySection from "@/components/gallery-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingWhatsApp />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-cookie-bite text-2xl text-primary"></i>
                <span className="font-script text-2xl font-bold text-primary">Donna Onça</span>
              </div>
              <p className="text-background/80 mb-6">
                Confeitaria Afetiva especializada em doces personalizados, 
                criando momentos doces e inesquecíveis em Brasília-DF.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-primary transition-colors" data-testid="link-instagram-footer">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors" data-testid="link-facebook-footer">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors" data-testid="link-whatsapp-footer">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-background">Links Rápidos</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#inicio" className="hover:text-primary transition-colors" data-testid="link-inicio">Início</a></li>
                <li><a href="#produtos" className="hover:text-primary transition-colors" data-testid="link-produtos">Produtos</a></li>
                <li><a href="#galeria" className="hover:text-primary transition-colors" data-testid="link-galeria">Galeria</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors" data-testid="link-sobre">Sobre</a></li>
                <li><a href="#contato" className="hover:text-primary transition-colors" data-testid="link-contato">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-background">Especialidades</h4>
              <ul className="space-y-2 text-background/80">
                <li>Pasta de Leite Ninho</li>
                <li>Biscoitos Decorados</li>
                <li>Eventos Corporativos</li>
                <li>Casamentos</li>
                <li>Aniversários</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2024 Donna Onça Confeitaria Afetiva. Todos os direitos reservados. | Brasília-DF
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
