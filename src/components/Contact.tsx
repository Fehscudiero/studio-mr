
import { useState, useEffect, useRef } from 'react';

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
    if (chatWidget) {
      chatWidget.click();
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Agende Sua Transformação
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sua jornada de beleza e bem-estar começa com um simples clique
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Chat Integration CTA */}
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/7bea0c57-deef-419a-a5a9-2b3db27ce864.png" 
                    alt="Studio MR" 
                    className="w-16 h-16 object-contain mr-4"
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
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Agendamento Rápido</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Escolha data, horário e serviço em segundos
                  </p>
                </div>

                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Atendimento Personalizado</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Tire dúvidas e receba orientações especializadas
                  </p>
                </div>

                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Experiência Premium</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Do agendamento ao resultado final
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
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

              <div className="text-center md:text-right">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Nos Siga nas Redes
                </h4>
                <div className="flex justify-center md:justify-end space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.73.333 4.058.63a5.858 5.858 0 00-2.126 1.384A5.858 5.858 0 00.63 4.058C.333 4.73.131 5.493.072 6.711.013 7.929 0 8.396 0 12.017c0 3.624.013 4.09.072 5.311.059 1.217.261 1.98.558 2.65.306.84.717 1.553 1.384 2.126.573.667 1.286 1.078 2.126 1.384.67.297 1.433.499 2.65.558C7.929 23.987 8.396 24 12.017 24c3.624 0 4.09-.013 5.311-.072 1.217-.059 1.98-.261 2.65-.558a5.858 5.858 0 002.126-1.384 5.858 5.858 0 001.384-2.126c.297-.67.499-1.433.558-2.65.059-1.22.072-1.687.072-5.311 0-3.621-.013-4.088-.072-5.309-.059-1.217-.261-1.98-.558-2.65a5.858 5.858 0 00-1.384-2.126A5.858 5.858 0 0020.067.63c-.67-.297-1.433-.499-2.65-.558C16.197.013 15.73 0 12.017 0zm0 2.158c3.556 0 3.977.012 5.38.071 1.298.059 2.003.276 2.474.46.622.242 1.066.532 1.533.998.467.467.756.911.998 1.533.184.471.401 1.176.46 2.474.059 1.403.071 1.824.071 5.38 0 3.556-.012 3.977-.071 5.38-.059 1.298-.276 2.003-.46 2.474a4.127 4.127 0 01-.998 1.533c-.467.467-.911.756-1.533.998-.471.184-1.176.401-2.474.46-1.403.059-1.824.071-5.38.071-3.556 0-3.977-.012-5.38-.071-1.298-.059-2.003-.276-2.474-.46a4.127 4.127 0 01-1.533-.998 4.127 4.127 0 01-.998-1.533c-.184-.471-.401-1.176-.46-2.474-.059-1.403-.071-1.824-.071-5.38 0-3.556.012-3.977.071-5.38.059-1.298.276-2.003.46-2.474.242-.622.532-1.066.998-1.533.467-.467.911-.756 1.533-.998.471-.184 1.176-.401 2.474-.46 1.403-.059 1.824-.071 5.38-.071z"/>
                      <path d="M12.017 5.8a6.217 6.217 0 100 12.434 6.217 6.217 0 000-12.434zm0 10.25a4.033 4.033 0 110-8.067 4.033 4.033 0 010 8.067zM18.967 5.594a1.455 1.455 0 11-2.91 0 1.455 1.455 0 012.91 0z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
                    </svg>
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
