import React from 'react';
import { Heart, Star, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="fb-card p-6">
        <h1 className="text-2xl font-bold text-[#1d4088] mb-4">Sobre o FeliApps</h1>
        <p className="text-gray-600 mb-8">
          FeliApps é uma coleção de aplicativos inspirada na era de ouro das redes sociais,
          trazendo de volta a sensação familiar e confortável do início dos anos 2010,
          enquanto oferece funcionalidades modernas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <Heart className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Feito com Amor</h3>
            </div>
            <p className="text-gray-600">
              Cada aplicativo é criado com atenção aos detalhes e nostalgia em mente.
            </p>
          </div>
          
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <Zap className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Simples e Poderoso</h3>
            </div>
            <p className="text-gray-600">
              Acreditamos em criar aplicativos poderosos que permanecem simples e intuitivos de usar.
            </p>
          </div>
          
          <div className="fb-card p-4">
            <div className="flex items-center mb-4">
              <Star className="text-[#1d4088] w-6 h-6" />
              <h3 className="text-lg font-semibold text-[#1d4088] ml-2">Coleção Crescente</h3>
            </div>
            <p className="text-gray-600">
              Nosso ecossistema está em constante expansão com novos aplicativos e recursos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;