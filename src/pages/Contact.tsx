import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="fb-card p-6">
        <h1 className="text-2xl font-bold text-[#1d4088] mb-4">Contato</h1>
        <p className="text-gray-600 mb-8">
          Adoraríamos ouvir você! Entre em contato conosco através de qualquer um dos canais abaixo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <Mail className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Email</h3>
            </div>
            <p className="text-gray-600">contato@feliapps.com</p>
          </div>
          
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <Phone className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Telefone</h3>
            </div>
            <p className="text-gray-600">(11) 99999-9999</p>
          </div>
          
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <MessageSquare className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Redes Sociais</h3>
            </div>
            <p className="text-gray-600">@feliapps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;