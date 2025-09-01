export default function ProductsSection() {
  const leiteNinhoProducts = [
    {
      id: 1,
      name: "Leite Ninho Original",
      description: "Cremoso e irresistível",
      price: "R$ 15,00",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 2,
      name: "Leite Ninho com Chocolate",
      description: "Combinação perfeita de sabores",
      price: "R$ 18,00",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 3,
      name: "Leite Ninho com Morango",
      description: "Frescor e doçura em harmonia",
      price: "R$ 20,00",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 4,
      name: "Leite Ninho Gourmet",
      description: "Versão premium com ingredientes especiais",
      price: "R$ 25,00",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const cookieProducts = [
    {
      id: 1,
      name: "Biscoitos Florais",
      description: "Decoração delicada com flores",
      price: "R$ 8,00 unid.",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 2,
      name: "Chá de Bebê",
      description: "Tema personalizado para eventos",
      price: "R$ 10,00 unid.",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 3,
      name: "Casamento",
      description: "Elegância para o seu grande dia",
      price: "R$ 12,00 unid.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 4,
      name: "Aniversário",
      description: "Alegria colorida para comemorar",
      price: "R$ 9,00 unid.",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="produtos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl font-bold text-primary mb-4">Nossos Especialidades</h2>
          <p className="text-lg text-muted-foreground">Delícias irresistíveis feitas com ingredientes selecionados</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Leite Ninho Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                <i className="fas fa-ice-cream text-primary mr-2"></i>
                Pasta de Leite Ninho
              </h3>
              <p className="text-muted-foreground">Nossa especialidade mais amada, com sabor único e textura cremosa</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {leiteNinhoProducts.map((product) => (
                <div key={product.id} className="product-card bg-card rounded-xl shadow-md overflow-hidden border border-border" data-testid={`card-leite-ninho-${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                    data-testid={`img-leite-ninho-${product.id}`}
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2" data-testid={`text-name-${product.id}`}>{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3" data-testid={`text-description-${product.id}`}>{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold gold-text" data-testid={`text-price-${product.id}`}>{product.price}</span>
                      <button className="text-primary hover:text-primary/80" data-testid={`button-add-${product.id}`}>
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Custom Cookies Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                <i className="fas fa-cookie text-primary mr-2"></i>
                Biscoitos Personalizados
              </h3>
              <p className="text-muted-foreground">Biscoitos amanteigados decorados especialmente para você</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {cookieProducts.map((product) => (
                <div key={product.id} className="product-card bg-card rounded-xl shadow-md overflow-hidden border border-border" data-testid={`card-cookie-${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                    data-testid={`img-cookie-${product.id}`}
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2" data-testid={`text-cookie-name-${product.id}`}>{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3" data-testid={`text-cookie-description-${product.id}`}>{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold gold-text" data-testid={`text-cookie-price-${product.id}`}>{product.price}</span>
                      <button className="text-primary hover:text-primary/80" data-testid={`button-add-cookie-${product.id}`}>
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Customization Options */}
        <div className="bg-card rounded-2xl p-8 border border-border" data-testid="card-customization">
          <h3 className="text-2xl font-script font-bold text-primary mb-6 text-center">Personalize seu Pedido</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center" data-testid="customization-colors">
              <i className="fas fa-swatchbook text-3xl text-primary mb-3"></i>
              <h4 className="font-semibold mb-2">Cores</h4>
              <p className="text-sm text-muted-foreground">Escolha as cores do seu tema</p>
            </div>
            <div className="text-center" data-testid="customization-text">
              <i className="fas fa-font text-3xl text-primary mb-3"></i>
              <h4 className="font-semibold mb-2">Textos</h4>
              <p className="text-sm text-muted-foreground">Adicione nomes e mensagens</p>
            </div>
            <div className="text-center" data-testid="customization-shapes">
              <i className="fas fa-shapes text-3xl text-primary mb-3"></i>
              <h4 className="font-semibold mb-2">Formatos</h4>
              <p className="text-sm text-muted-foreground">Formatos únicos para cada ocasião</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
