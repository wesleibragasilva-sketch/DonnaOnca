export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl font-bold text-primary mb-4">Por que escolher a Donna Onça?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada doce é uma expressão de carinho, criado especialmente para tornar seus momentos únicos e inesquecíveis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6" data-testid="card-personalizado">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-palette text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">100% Personalizado</h3>
            <p className="text-muted-foreground">Cada biscoito é único, decorado especialmente para você com designs exclusivos e detalhes artesanais.</p>
          </div>
          
          <div className="text-center p-6" data-testid="card-amor">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-heart text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Feito com Amor</h3>
            <p className="text-muted-foreground">Nossa confeitaria afetiva coloca amor em cada receita, criando memórias doces para toda família.</p>
          </div>
          
          <div className="text-center p-6" data-testid="card-entrega">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shipping-fast text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Entrega em Brasília</h3>
            <p className="text-muted-foreground">Entregamos fresquinhos em todo o Distrito Federal, mantendo a qualidade e sabor únicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
