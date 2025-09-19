export default function HeroSection() {
  const handleScrollToProdutos = () => {
    const target = document.querySelector("#produtos");
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleScrollToContato = () => {
    const target = document.querySelector("#contato");
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="font-script text-5xl lg:text-7xl font-bold text-primary mb-4">
                Donna Onça
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Confeitaria Afetiva
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Doces personalizados feitos com amor em Brasília. Especialistas em pasta de Leite Ninho e biscoitos amanteigados únicos para seus momentos especiais.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScrollToProdutos}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-ver-produtos"
              >
                Ver Produtos
              </button>
              <button 
                onClick={handleScrollToContato}
                className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="button-fazer-pedido"
              >
                Fazer Pedido
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Brasília-DF</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-heart text-primary"></i>
                <span>Feito com Amor</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Biscoitos decorados artesanais" 
              className="rounded-2xl shadow-2xl w-full floating-animation"
              data-testid="img-hero-cookies"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <i className="fas fa-star text-primary-foreground"></i>
                </div>
                <div>
                  <p className="font-semibold text-sm" data-testid="text-rating">5.0 estrelas</p>
                  <p className="text-xs text-muted-foreground" data-testid="text-customers">+ de 600 clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
