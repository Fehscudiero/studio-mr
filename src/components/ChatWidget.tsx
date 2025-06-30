// src/components/ChatWidget.tsx
import { useEffect } from 'react';

declare global {
  interface Window {
    Chatbot: {
      init: (options: {
        chatflowid: string;
        apiHost: string;
        container: string;
        theme: any;
      }) => void;
    };
  }
}

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.async = true;

    script.onload = () => {
      if (window.Chatbot && typeof window.Chatbot.init === 'function') {
        window.Chatbot.init({
          chatflowid: 'f507113b-238c-4e11-b211-484717d9ad13',
          apiHost: 'https://SEU_TUNNEL_NGROK.ngrok-free.app',
          container: '#chat-container',
          theme: {
            button: {
              size: 80,
              customIconSrc: '/lovable-uploads/logo.png',
              iconColor: 'white',
              backgroundColor: '#000',
            },
            chatWindow: {
              welcomeMessage:
                'Olá! Bem-vinda(o) ao Studio MR! 💖 Em que posso ajudar hoje?',
            },
          },
        });
      } else {
        console.error('Flowise-Embed não carregou corretamente.');
      }
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="chat-container"
      style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}
    />
  );
};

export default ChatWidget;
