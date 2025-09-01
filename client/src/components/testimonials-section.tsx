export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Marina Santos",
      location: "Brasília-DF",
      review: "Os biscoitos do meu casamento ficaram perfeitos! Cada detalhe foi cuidadosamente pensado. A pasta de leite ninho é simplesmente divina. Recomendo de olhos fechados!"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      location: "Águas Claras-DF",
      review: "Encomendei para o aniversário da minha filha e foi um sucesso! Os biscoitos estavam lindos e deliciosos. A entrega foi pontual e o atendimento excepcional."
    },
    {
      id: 3,
      name: "Ana Beatriz",
      location: "Taguatinga-DF",
      review: "A pasta de leite ninho é viciante! Já encomendei várias vezes e sempre superam minhas expectativas. Qualidade impecável e sabor único."
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl font-bold text-primary mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-muted-foreground">Momentos especiais criados com amor</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-6 rounded-xl shadow-md border border-border" data-testid={`testimonial-${testimonial.id}`}>
              <div className="flex items-center mb-4">
                <div className="flex text-gold" data-testid={`rating-${testimonial.id}`}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic" data-testid={`review-${testimonial.id}`}>
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-user text-primary"></i>
                </div>
                <div>
                  <p className="font-semibold" data-testid={`name-${testimonial.id}`}>{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`location-${testimonial.id}`}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
