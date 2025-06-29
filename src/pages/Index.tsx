
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import CookieBanner from '../components/CookieBanner';
import { ThemeProvider } from '../components/ThemeProvider';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
        <CookieBanner />
      </div>
    </ThemeProvider>
  );
};

export default Index;
