import React from 'react';
import Hero from '../components/Hero';
import AppGrid from '../components/AppGrid';
import Footer from '../components/Footer'; // ✅ Importação do footer
import { apps } from '../data/apps';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
 
    </div>
  );
};

export default Home;
