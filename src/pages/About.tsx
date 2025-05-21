import React from 'react';
import { Heart, Star, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre o FeliAppsHub</h2>
          <p className="text-gray-600 mb-6">
            <strong>FeliAppsHub</strong> é uma coleção de aplicativos que idealizei e desenvolvi pensando em coisas que considero
            legais, divertidas e úteis, especialmente para ajudar as pessoas a se conhecerem melhor. Também inclui ferramentas
            que acredito serem necessárias no dia a dia. Estou feliz com o resultado, porque muitas vezes o perfeccionismo tenta
            nos sabotar e, para mim, esse processo também foi uma batalha contra o medo de errar. Depois de ler o livro
            <em> "Mostre Seu Trabalho"</em>, do Austin Kleon, resolvi investir meu tempo e mergulhar de cabeça nesses projetos.
            Tenho aprendido (e continuo aprendendo) muito com cada um deles. Espero que eles possam te ajudar ou, ao menos,
            arrancar um sorriso seu.
          </p>

          <p className="text-gray-800 font-medium mt-4 italic">Lucas Feliciano</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Criatividade em cada detalhe</h3>
            <p className="text-gray-600">
              Cada aplicativo nasce de uma tentativa de pensar fora da caixa, de transformar ideias curiosas e criativas em experiências reais.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Poderoso e simples</h3>
            <p className="text-gray-600">
              Acreditamos em criar aplicações potentes, porém simples e intuitivas, com funcionalidades úteis e interfaces agradáveis.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Star className="text-pink-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Em constante evolução</h3>
            <p className="text-gray-600">
              O ecossistema está sempre crescendo, com novos apps e recursos sendo desenvolvidos com base em ideias, feedback e necessidades reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
