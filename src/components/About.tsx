
import { useState, useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Sobre o Studio MR
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-xl mb-6">
                Com anos de experiência e paixão pela arte da beleza, o <strong className="text-yellow-600 dark:text-yellow-400">Studio MR</strong> é mais do que um salão – é o seu refúgio de transformação e bem-estar.
              </p>
              
              <p className="text-lg mb-6">
                Nossa missão é elevar sua autoestima através de serviços de excelência, em um ambiente acolhedor e sofisticado, onde cada cliente é tratado com o carinho e atenção que merece.
              </p>
              
              <p className="text-lg">
                Aqui, sua beleza natural encontra o cuidado profissional que ela precisa para brilhar ainda mais.
              </p>
            </div>
            
            {/* Video Placeholder */}
            <div className="mt-12 relative">
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center justify-center h-64 bg-gray-200 dark:bg-gray-700 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Vídeo Institucional
                      <br />
                      <span className="text-sm opacity-75">(Em breve)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
