import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleScheduleClick = () => {
    const chatWidget = document.querySelector('.chat-widget-button') as HTMLElement;
    if (chatWidget) chatWidget.click();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Agende Sua Transformação
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sua jornada de beleza e bem-estar começa com um simples clique
            </p>
          </div>
        </div>

        {/* Chat CTA */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src="/lovable-uploads/fe23e7bd-ba10-4cce-beb5-c10789635890.png"
                    alt="Studio MR"
                    className="w-28 h-28 object-contain mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Atendimento Personalizado 24/7
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nossa assistente virtual está pronta para ajudar você
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleScheduleClick}
                  className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>💬 Iniciar Conversa</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Feature Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { icon: '⚡', title: 'Agendamento Rápido', text: 'Escolha data, horário e serviço em segundos' },
                  { icon: '💬', title: 'Atendimento Personalizado', text: 'Tire dúvidas e receba orientações especializadas' },
                  { icon: '✨', title: 'Experiência Premium', text: 'Do agendamento ao resultado final' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Informações de Contato
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Endereço:</strong> Rua da Beleza, 123 - Centro
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Horário:</strong> Seg-Sex: 9h-19h | Sáb: 8h-17h
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Telefone:</strong> (11) 9999-9999
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Nos Siga nas Redes
                </h4>
                <div className="flex justify-center space-x-12">
                  <a
                    href="https://www.instagram.com/studiomr_24/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=5511946102300&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
