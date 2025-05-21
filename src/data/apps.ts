import { AppData } from '../types';
import {
  BrainCog,
  Map,
  FileCode,
  CreditCard,
  Music,
  Heart,
} from 'lucide-react';

export const iconMap = {
  BrainCog,
  Map,
  FileCode,
  CreditCard,
  Music,
  Heart,
};

export const apps: AppData[] = [
  {
    id: 'feliquiz',
    title: 'FeliQuiz',
    description: 'Teste seus conhecimentos com nossa plataforma interativa de quiz. Desafie-se com vários tópicos e compartilhe seus resultados!',
    icon: 'BrainCog',
    url: 'https://feliquizz.vercel.app/',
    color: 'bg-indigo-500',
  },
  {
    id: 'felihappinesshunter',
    title: 'FeliHappinessHunter',
    description: 'Marque locais onde você experimentou emoções específicas e explore um mapa dos seus sentimentos.',
    icon: 'Map',
    url: '#',
    color: 'bg-rose-500',
    comingSoon: true,
  },/*
{
  id: 'felipay',
  title: 'FeliPay',
  description: 'Banco digital com design inteligente baseado em grafos para facilitar sua organização financeira.',
  icon: 'CreditCard',
  url: '#',
  color: 'bg-green-500',
  comingSoon: true,
},
*/
  {
    id: 'feliscoreai',
    title: 'FeliScore AI',
    description: 'Inteligência Artificial que gera e analisa partituras com uma nova notação baseada em matemática.',
    icon: 'Music',
    url: '#',
    color: 'bg-yellow-500',
    comingSoon: true,
  },
  {
    id: 'felimatch',
    title: 'FeliMatch',
    description: 'Plataforma de correio elegante para criar conexões especiais com privacidade e diversão.',
    icon: 'Heart',
    url: '#',
    color: 'bg-pink-500',
    comingSoon: true,
  },
  {
    id: 'feliconvert',
    title: 'FeliConvert',
    description: 'Converta arquivos de diversos formatos com facilidade e rapidez em uma única plataforma.',
    icon: 'FileCode',
    url: '#',
    color: 'bg-orange-500',
    comingSoon: true,
  },{
  id: 'felidreamsync',
  title: 'FeliDreamSync',
  description: 'Transforme seus sonhos em conexões reais. Registre experiências oníricas, descubra significados ocultos e conecte-se com quem sonhou parecido.',
  icon: 'BrainCog',
  url: '#',
  color: 'bg-purple-600',
  comingSoon: true,
}

];
