export default function AboutSection() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-script text-4xl font-bold text-primary">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-testid="text-story-1">
                A Donna Onça nasceu do amor pela confeitaria e da paixão por criar momentos especiais. 
                Somos uma <strong>Confeitaria Afetiva</strong> porque acreditamos que cada doce carrega 
                uma história, uma emoção, um carinho.
              </p>
              <p data-testid="text-story-2">
                Especializados em pasta de Leite Ninho e biscoitos amanteigados personalizados, 
                trabalhamos com dedicação para transformar suas celebrações em memórias doces e inesquecíveis.
              </p>
              <p data-testid="text-story-3">
                Localizados em Brasília-DF, atendemos todo o Distrito Federal com produtos frescos, 
                feitos sob encomenda e entregues com todo cuidado que seus momentos especiais merecem.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3" data-testid="feature-artesanal">
                <i className="fas fa-award text-primary text-xl"></i>
                <span className="font-medium">Produtos Artesanais</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="feature-frescos">
                <i className="fas fa-clock text-primary text-xl"></i>
                <span className="font-medium">Sempre Fresquinhos</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
              alt="Confeitaria artesanal em ação" 
              className="rounded-2xl shadow-xl w-full"
              data-testid="img-about-workshop"
            />
            
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold" data-testid="text-experience-years">+ de 8</p>
                <p className="text-sm" data-testid="text-experience-label">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
