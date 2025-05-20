import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apps } from '../data/apps';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const launchedApps = apps.filter(app => !app.comingSoon);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Fullscreen Universe Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 stars"></div>
        <div className="absolute inset-0 nebula"></div>
        {launchedApps.map((app, index) => (
          <div
            key={app.id}
            onClick={() => window.location.href = app.url}
            className={`absolute w-16 h-16 rounded-full cursor-pointer hover:scale-110 transition-transform flex items-center justify-center text-white text-xs text-center z-10 ${
              index === 0 ? 'planet-1' : 'planet-2'
            }`}
            title={app.title}
          >
            {index === 0 && <span className="pointer-events-none">FeliQuiz</span>}
          </div>
        ))}

      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Optional: TV Frame or Remove if not needed */}
          {/* <div className="relative mx-auto mb-8 w-full max-w-2xl aspect-video">
            <div className="absolute inset-0 fb-card p-4 rounded-lg overflow-hidden"></div>
          </div> */}

          {/* Optional: Button */}
          {/* <div className="mt-8">
            <a
              href="/apps"
              className="fb-button text-white px-6 py-3 rounded text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explorar Aplicativos
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
