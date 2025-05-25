import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="fb-header fixed top-0 left-0 right-0 z-50 h-14 bg-black shadow-md">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo / Marca */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white">FeliAppsHub</span>
        </Link>

        {/* Ícone de Hamburger (só no mobile) */}
        <button
          className="block md:hidden text-xl font-bold text-white"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links do menu (apenas no desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/apps"
            className="px-4 py-2 text-white hover:underline rounded transition-colors"
          >
            Apps
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-white hover:underline rounded transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-white hover:underline rounded transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Menu móvel (apenas no mobile) */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white/90 backdrop-blur-md md:hidden border-b border-gray-200 shadow-md">
            <nav className="flex flex-col px-4 py-2 space-y-2">
              <Link
                to="/apps"
                className="block px-4 py-2 text-[#4c69ba] hover:bg-[#e1e8f7] rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Apps
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-[#4c69ba] hover:bg-[#e1e8f7] rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-[#4c69ba] hover:bg-[#e1e8f7] rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
