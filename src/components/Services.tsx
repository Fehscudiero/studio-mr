
import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: 'Corte & Escova',
      price: 'R$ 80',
      description: 'Corte personalizado e escova profissional para valorizar seu estilo',
      icon: '✂️',
      popular: true
    },
    {
      title: 'Colorimetria',
      price: 'R$ 120',
      description: 'Coloração profissional com produtos de alta qualidade',
      icon: '🎨',
      popular: true
    },
    {
      title: 'Manicure',
      price: 'R$ 50',
      description: 'Cuidado completo para suas unhas das mãos',
      icon: '💅',
      popular: false
    },
    {
      title: 'Pedicure',
      price: 'R$ 60',
      description: 'Tratamento relaxante e cuidado para os pés',
      icon: '🦶',
      popular: false
    },
    {
      title: 'Maquiagem',
      price: 'R$ 150',
      description: 'Make profissional para eventos especiais',
      icon: '💄',
      popular: true
    },
    {
      title: 'Tratamentos Capilares',
      price: 'A partir de R$ 90',
      description: 'Hidratação, reconstrução e nutrição dos fios',
      icon: '✨',
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Descubra nossa gama completa de serviços premium para sua beleza e bem-estar
            </p>
          </div>
        </div>

        {/* Popular Services Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-sm font-semibold rounded-full">
            ⭐ Serviços Mais Populares
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                service.popular ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {service.price}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const chatWidget = document.querySelector('.chat-widget-button') as HTMLElement;
              if (chatWidget) chatWidget.click();
            }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
          >
            Agende Seu Horário
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
