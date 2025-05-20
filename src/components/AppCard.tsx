import React from 'react';
import { AppData } from '../types';

import {
  BrainCog,
  Map,
  ListChecks,
  Sparkles,
  MessagesSquare,
  Palette,
  ExternalLink,
  CreditCard,
  FileCode,
  Music,
  Heart
} from 'lucide-react';




interface AppCardProps {
  app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const iconMap = {
  BrainCog,
  Map,
  ListChecks,
  Sparkles,
  MessagesSquare,
  Palette,
  CreditCard,
  FileCode,
  Music,
  Heart,
};


  const IconComponent = iconMap[app.icon as keyof typeof iconMap];

  return (
    <div className="fb-card h-full flex flex-col">
      <div className={`${app.color} p-4`}>
        {IconComponent && <IconComponent className="text-white" size={24} />}
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-[#1d4088] mb-2">{app.title}</h3>
        <p className="text-gray-600 mb-4">{app.description}</p>
        
        {app.comingSoon ? (
          <button disabled className="fb-button opacity-50 cursor-not-allowed px-4 py-2 text-white w-full">
            Em Breve
          </button>
        ) : (
          <a
            href={app.url}
            className="fb-button inline-flex items-center justify-center px-4 py-2 text-white w-full"
          >
            Abrir App <ExternalLink className="ml-2" size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default AppCard;
