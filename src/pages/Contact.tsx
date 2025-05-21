import React from 'react';
import { MessageSquare } from 'lucide-react';
const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="fb-card p-6">
        <h1 className="text-2xl font-bold text-[#1d4088] mb-4">Contato</h1>
        <p className="text-gray-600 mb-8">
          Adoraríamos ouvir você! Entre em contato conosco através de qualquer um dos canais abaixo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Redes Sociais */}
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <MessageSquare className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Redes Sociais</h3>
            </div>
            <a
              href="https://www.linkedin.com/in/lucas-feliciano-software/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Lucas Feliciano"
              className="text-[#1d4088] hover:underline block mb-1"
            >
              LinkedIn
            </a>
          </div>
          {/* GitHub */} 
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <MessageSquare className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Projeto no GitHub</h3>
            </div>
            <a
              href="https://github.com/Feli-App-Hub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#1d4088] hover:underline block mb-1"
            >
              github.com/Feli-App-Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
