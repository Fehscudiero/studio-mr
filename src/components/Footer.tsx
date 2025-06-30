import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/fe23e7bd-ba10-4cce-beb5-c10789635890.png" 
              alt="Studio MR" 
              className="w-20 h-20 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Studio MR
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright and Address */}
          <div className="text-center md:text-right text-sm text-gray-400">
            <p className="mb-2">
              © 2024 Studio MR. Todos os direitos reservados.
            </p>
            <p>
              Rua da Beleza, 123 - Centro | (11) 9999-9999
            </p>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <a 
            href="#" 
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
