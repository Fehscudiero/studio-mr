import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Injeta o script do Flowise Embed ao montar
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
      Chatbot.init({
        chatflowid: "f507113b-238c-4e11-b211-484717d9ad13",
        apiHost: "https://SEU_TUNNEL_NGROK.ngrok-free.app",
        container: "#chat-container",
        theme: {
          button: {
            size: 64,
            customIconSrc: "/lovable-uploads/logo.png",
            size: 80,
            iconColor: "white",
            backgroundColor: "#000"
          },
          chatWindow: {
            welcomeMessage: "Olá! Bem-vinda(o) ao Studio MR! 💖 Em que posso ajudar hoje?"
          }
        }
      });
    `;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Renderiza apenas o container; o Flowise-Embed cuida do botão e da janela
  return <div id="chat-container" style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }} />;
};

export default ChatWidget;
