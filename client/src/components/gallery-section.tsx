export default function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Biscoitos Personalizados Variados"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Biscoitos de Casamento Elegantes"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Pasta de Leite Ninho Gourmet"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Biscoitos Infantis Divertidos"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Biscoitos Corporativos"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Biscoitos de Natal"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl font-bold text-primary mb-4">Galeria de Criações</h2>
          <p className="text-lg text-muted-foreground">Veja alguns dos nossos trabalhos mais especiais</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg" data-testid={`gallery-item-${image.id}`}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-gallery-${image.id}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
