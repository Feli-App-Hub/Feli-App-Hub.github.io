import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fb-header fixed top-0 left-0 right-0 z-50 h-14">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold text-white">
                FeliApps
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-1">
            <Link
              to="/apps"
              className="px-4 py-2 text-white hover:bg-[#3b55a0] rounded"
            >
              Apps
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-white hover:bg-[#3b55a0] rounded"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-white hover:bg-[#3b55a0] rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;