
import { useState, useEffect } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <button
          onClick={toggleChat}
          className="chat-widget-button group bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black rounded-full p-4 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-110 transition-all duration-300"
          aria-label="Abrir chat"
        >
          <div className="flex items-center space-x-3">
            <svg 
              className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              )}
            </svg>
            {!isOpen && (
              <span className="hidden md:block font-semibold whitespace-nowrap pr-2">
                Flowise Chat
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-300 scale-100">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fe23e7bd-ba10-4cce-beb5-c10789635890.png" 
                alt="Studio MR" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <h3 className="font-bold">Studio MR</h3>
                <p className="text-sm opacity-90">Atendente Virtual</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="hover:bg-black/10 rounded-full p-1 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Content */}
          <div className="h-full flex flex-col">
            {/* Welcome Message */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="text-gray-800 dark:text-white">
                  Olá! Bem-vinda(o) ao Studio MR! 💖
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Sou sua atendente virtual. Em que posso ajudar hoje?
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-2">
                <button className="w-full text-left bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 p-3 rounded-lg transition-colors">
                  <span className="text-gray-800 dark:text-white font-medium">📅 Agendar Horário</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Escolher data e serviço</p>
                </button>
                
                <button className="w-full text-left bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 p-3 rounded-lg transition-colors">
                  <span className="text-gray-800 dark:text-white font-medium">💰 Ver Preços</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Consultar valores dos serviços</p>
                </button>
                
                <button className="w-full text-left bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 p-3 rounded-lg transition-colors">
                  <span className="text-gray-800 dark:text-white font-medium">📍 Localização</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Ver endereço e como chegar</p>
                </button>
                
                <button className="w-full text-left bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 p-3 rounded-lg transition-colors">
                  <span className="text-gray-800 dark:text-white font-medium">💬 Falar com Atendente</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Atendimento personalizado</p>
                </button>
              </div>
            </div>

            {/* Integration Placeholder */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <p className="mb-2">🔧 Integração com Flowise</p>
                <p className="text-xs">
                  Configure seu chatflowid e apiHost para ativar o chat inteligente
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
