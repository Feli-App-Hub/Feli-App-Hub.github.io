import React from 'react';
import AppGrid from '../components/AppGrid';
import { apps } from '../data/apps';

const Apps: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="fb-card p-6 mb-8">
        <h1 className="text-2xl font-bold text-[#1d4088] mb-4">Nossos Aplicativos</h1>
        <p className="text-gray-600">
          Explore nossa coleção de aplicativos projetados para melhorar sua experiência digital,
          inspirados na era clássica das redes sociais.
        </p>
      </div>
      <AppGrid apps={apps} />
    </div>
  );
};

export default Apps;