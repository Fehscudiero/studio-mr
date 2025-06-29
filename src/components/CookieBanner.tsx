
import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookies-accepted');
    if (!hasAcceptedCookies) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm text-gray-600 dark:text-gray-400">
            <p>
              🍪 Utilizamos cookies para melhorar sua experiência em nosso site. 
              <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline ml-1">
                Saiba mais sobre nossa Política de Privacidade
              </a>
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-medium hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
