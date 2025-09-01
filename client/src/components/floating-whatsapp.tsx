export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os doces da Donna Onça Confeitaria Afetiva.");
    const phoneNumber = "5561999999999"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors floating-animation"
        data-testid="button-floating-whatsapp"
        aria-label="Entrar em contato via WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </button>
    </div>
  );
}
