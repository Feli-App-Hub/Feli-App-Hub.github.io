import React from 'react';
import { AppData } from '../types';
import AppCard from './AppCard';
import { Sparkles } from 'lucide-react';

interface AppGridProps {
  apps: AppData[];
}

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  return (
    <section id="apps" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-[#1d4088] mr-2" />
            <span className="text-sm font-semibold text-[#1d4088] uppercase tracking-wide">Descubra</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4088] mb-4">Nossa Coleção de Apps</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore nosso crescente ecossistema de aplicativos projetados para melhorar diferentes aspectos da sua vida digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {apps.map((app) => (
            <div 
              key={app.id} 
              className="transform transition-transform duration-300 hover:-translate-y-1"
            >
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppGrid;