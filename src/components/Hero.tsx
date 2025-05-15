import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apps } from '../data/apps';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const launchedApps = apps.filter(app => !app.comingSoon);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#f7f7f7] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1d4088] mb-8">
            Bem-vindo ao FeliApps Hub
          </h1>
          
          {/* TV Container */}
          <div className="relative mx-auto mb-8 w-full max-w-2xl aspect-video">
            {/* TV Frame */}
            <div className="absolute inset-0 fb-card p-4 rounded-lg overflow-hidden">
              {/* TV Screen */}
              <div className="relative w-full h-full rounded overflow-hidden">
                {/* Universe Animation */}
                <div className="absolute inset-0 bg-black">
                  {/* Stars */}
                  <div className="absolute inset-0 stars"></div>
                  {/* Nebula */}
                  <div className="absolute inset-0 nebula"></div>
                  {/* Planets for Launched Apps */}
                  {launchedApps.map((app, index) => (
                    <div
                      key={app.id}
                      onClick={() => window.location.href = app.url}
                      className={`absolute w-16 h-16 rounded-full cursor-pointer hover:scale-110 transition-transform ${
                        index === 0 ? 'planet-1' : 'planet-2'
                      }`}
                      title={app.title}
                    />
                  ))}
                </div>
              </div>
              
              {/* TV Controls */}
              <div className="absolute bottom-2 right-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Descubra nossa coleção de aplicativos cuidadosamente projetados que melhoram sua experiência digital,
            trazendo de volta a sensação familiar do início dos anos 2010.
          </p>
          
          <div className="mt-8">
            <a
              href="#apps"
              className="fb-button text-white px-6 py-3 rounded text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explorar Aplicativos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;