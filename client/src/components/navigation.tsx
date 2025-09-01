import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <i className="fas fa-cookie-bite text-2xl text-primary"></i>
            <span className="font-script text-2xl font-bold text-primary">Donna Onça</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, "#inicio")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-inicio">Início</a>
            <a href="#produtos" onClick={(e) => handleSmoothScroll(e, "#produtos")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-produtos">Produtos</a>
            <a href="#galeria" onClick={(e) => handleSmoothScroll(e, "#galeria")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-galeria">Galeria</a>
            <a href="#sobre" onClick={(e) => handleSmoothScroll(e, "#sobre")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-sobre">Sobre</a>
            <a href="#contato" onClick={(e) => handleSmoothScroll(e, "#contato")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-contato">Contato</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-primary`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" onClick={(e) => handleSmoothScroll(e, "#inicio")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-mobile-inicio">Início</a>
              <a href="#produtos" onClick={(e) => handleSmoothScroll(e, "#produtos")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-mobile-produtos">Produtos</a>
              <a href="#galeria" onClick={(e) => handleSmoothScroll(e, "#galeria")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-mobile-galeria">Galeria</a>
              <a href="#sobre" onClick={(e) => handleSmoothScroll(e, "#sobre")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-mobile-sobre">Sobre</a>
              <a href="#contato" onClick={(e) => handleSmoothScroll(e, "#contato")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-mobile-contato">Contato</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
