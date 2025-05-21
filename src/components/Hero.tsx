import React from 'react';
import { apps } from '../data/apps';

const Hero: React.FC = () => {
  const launchedApps = apps.filter(app => !app.comingSoon);

  // Cria um array fixo de 200 estrelas com configurações randômicas
  const stars = React.useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => {
      // Tamanho aleatório entre 1px e 3px
      const size = Math.random() * 2 + 1;
      // Posição inicial aleatória
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      // Duração da animação entre 10s e 30s
      const duration = Math.random() * 20 + 10;
      // Delay negativo para espalhar as estrelas no loop
      const delay = -Math.random() * duration;

      return { id: i, size, top, left, duration, delay };
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Fundo do universo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 nebula"></div>

        {/* Renderiza cada estrela */}
        {stars.map(star => (
          <div
            key={star.id}
            className="star rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {/* Planetas/livros (apps lançados) */}
        {launchedApps.map((app, index) => (
          <div
            key={app.id}
            onClick={() => (window.location.href = app.url)}
            className={`absolute w-16 h-16 rounded-full cursor-pointer hover:scale-110 transition-transform flex items-center justify-center text-white text-xs text-center z-10 ${
              index === 0 ? 'planet-1' : 'planet-2'
            }`}
            title={app.title}
          >
            {index === 0 && <span className="pointer-events-none">FeliQuiz</span>}
          </div>
        ))}
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center max-w-4xl mx-auto">
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
