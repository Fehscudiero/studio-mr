
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleScheduleClick = () => {
    const chatWidget = document.querySelector('.chat-widget-button') as HTMLElement;
    if (chatWidget) {
      chatWidget.click();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/fe23e7bd-ba10-4cce-beb5-c10789635890.png" 
              alt="Studio MR" 
              className="w-20 h-20 object-contain"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Studio MR
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">Galeria</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Depoimentos</button>
            <div className="relative">
              <button 
                onClick={handleScheduleClick}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300"
              >
                Agende
              </button>
              {/* Pulse Animation Ring */}
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20" />
            </div>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contato</button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">Sobre</button>
            <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Serviços</button>
            <button onClick={() => scrollToSection('gallery')} className="mobile-nav-link">Galeria</button>
            <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Depoimentos</button>
            <div className="relative mx-4">
              <button 
                onClick={handleScheduleClick}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold max-w-[calc(100%-2rem)]"
              >
                Agende
              </button>
              {/* Pulse Animation Ring for Mobile */}
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20" />
            </div>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contato</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
