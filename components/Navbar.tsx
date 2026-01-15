
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-[#D4AF37]/30' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-2xl font-serif tracking-widest gold-text font-bold">USA'S</span>
            <span className="text-xs tracking-[0.3em] text-white">NAIL BAR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors ${
                  location.pathname === link.path ? 'gold-text' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-[#D4AF37] text-black text-sm uppercase font-bold tracking-widest gold-glow transition-all hover:bg-white"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="tel:4099489077" className="gold-text">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-black/95 transition-all duration-300 ease-in-out border-b border-[#D4AF37]/20 ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg uppercase tracking-widest ${
                location.pathname === link.path ? 'gold-text' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-3/4 text-center px-6 py-3 bg-[#D4AF37] text-black text-sm uppercase font-bold tracking-widest"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
