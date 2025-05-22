import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Mic className="h-8 w-8 text-indigo-900" />
            <span className="text-xl font-bold text-indigo-900">SalesPitch Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/role-play" label="Practice" currentPath={location.pathname} />
            <NavLink to="/dashboard" label="Dashboard" currentPath={location.pathname} />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors duration-300">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-full bg-indigo-900 text-white font-medium hover:bg-indigo-800 transition-colors duration-300">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-indigo-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/role-play" label="Practice" />
              <MobileNavLink to="/dashboard" label="Dashboard" />
              <div className="pt-4 flex flex-col space-y-2">
                <button className="w-full py-2 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors duration-300">
                  Sign In
                </button>
                <button className="w-full py-2 rounded-full bg-indigo-900 text-white font-medium hover:bg-indigo-800 transition-colors duration-300">
                  Start Free Trial
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, label, currentPath }: { to: string; label: string; currentPath: string }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-indigo-900 font-semibold' : 'text-gray-600 hover:text-indigo-900'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="text-base font-medium text-gray-800 hover:text-indigo-900 transition-colors duration-300">
    {label}
  </Link>
);

export default Header;