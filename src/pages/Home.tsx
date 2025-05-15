import React from 'react';
import Hero from '../components/Hero';
import AppGrid from '../components/AppGrid';
import Footer from '../components/Footer'; // ✅ Importação do footer
import { apps } from '../data/apps';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <AppGrid apps={apps} />
      </div>
    </div>
  );
};

export default Home;
