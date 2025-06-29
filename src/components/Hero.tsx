
import { ArrowRight, Clock } from 'lucide-react';

const Hero = () => {
  const handleScheduleClick = () => {
    const chatWidget = document.querySelector('.chat-widget-button') as HTMLElement;
    if (chatWidget) {
      chatWidget.click();
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 font-serif">
            Beleza & Bem-Estar
            <span className="block text-gradient">Premium</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Sua transformação começa aqui, no Studio MR
          </p>

          {/* Feature Highlight */}
          <div className="flex items-center justify-center space-x-3 mb-8 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 inline-flex">
            <Clock className="w-8 h-8 text-yellow-400" />
            <span className="text-lg font-medium">Atendimento Personalizado 24/7</span>
          </div>

          <button 
            onClick={handleScheduleClick}
            className="btn-primary inline-flex items-center space-x-3 text-lg group"
          >
            <span>Agende Agora</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
