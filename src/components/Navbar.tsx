import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Brain className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">MedCode AI</span>
        </Link>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => handleNavigation('features')}
            className="hover:text-blue-200 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleNavigation('benefits')}
            className="hover:text-blue-200 transition-colors"
          >
            Benefits
          </button>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}