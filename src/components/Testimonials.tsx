
import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Simplesmente incrível! O atendimento é excepcional e o resultado superou todas as minhas expectativas. Nunca me senti tão bem com meu cabelo!",
      service: "Coloração + Corte",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b691?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80"
    },
    {
      name: "Ana Costa",
      text: "Profissionais extremamente qualificados e um ambiente acolhedor. O Studio MR se tornou meu refúgio de beleza e bem-estar!",
      service: "Tratamento Complete",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80"
    },
    {
      name: "Carla Mendes",
      text: "Atendimento personalizado e resultado impecável. Recomendo de olhos fechados! É o melhor investimento que faço em mim mesma.",
      service: "Maquiagem para Casamento",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80"
    },
    {
      name: "Juliana Santos",
      text: "Desde que descobri o Studio MR, não consigo ir em outro lugar. A qualidade dos serviços e o carinho no atendimento são únicos!",
      service: "Manicure + Pedicure",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80"
    },
    {
      name: "Patricia Oliveira",
      text: "Equipe super profissional e ambiente muito aconchegante. Sempre saio de lá me sentindo uma nova mulher. Simplesmente perfeito!",
      service: "Escova + Hidratação",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              O Que Dizem Sobre Nós
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Depoimentos reais de clientes que transformaram sua beleza conosco
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 text-center border border-gray-100 dark:border-gray-700">
                    {/* Profile Image */}
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-yellow-400"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Name and Service */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-yellow-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-yellow-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => goToSlide((currentSlide + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-yellow-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
            Faça Parte Dessas Histórias
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
