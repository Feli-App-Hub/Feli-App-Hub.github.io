import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <Link to="/" className="text-blue-600 font-bold">
              FeliApps Hub
            </Link>
            <span className="text-gray-400 text-sm ml-2">
              © 2025 por{' '}
              <a
                href="https://www.linkedin.com/in/lucas-feliciano-software/"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucas Feliciano
              </a>
            </span>
          </div>

          <div className="flex space-x-4 text-sm text-blue-600 font-semibold">
            <Link to="/apps" className="hover:underline">Apps</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
