
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/20 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col mb-8">
            <span className="text-3xl font-serif tracking-widest gold-text font-bold">USA'S</span>
            <span className="text-sm tracking-[0.4em] text-white">NAIL BAR</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Premier luxury nail salon in Texas City. Professional technicians, sanitary equipment, and high-quality products.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center gold-text hover:bg-[#D4AF37] hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center gold-text hover:bg-[#D4AF37] hover:text-black transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Home</Link></li>
            <li><Link to="/services" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Services</Link></li>
            <li><Link to="/gallery" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Gallery</Link></li>
            <li><Link to="/about" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Booking</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest">Our Services</h4>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Manicures</Link></li>
            <li><Link to="/services" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Pedicures</Link></li>
            <li><Link to="/services" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Acrylic Nails</Link></li>
            <li><Link to="/services" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Dip Powder</Link></li>
            <li><Link to="/services" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Waxing</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin size={18} className="gold-text flex-shrink-0" />
              <span className="text-gray-500 text-sm">{CONTACT_INFO.ADDRESS}</span>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="gold-text flex-shrink-0" />
              <a href={`tel:${CONTACT_INFO.PHONE}`} className="text-gray-500 hover:text-[#D4AF37] text-sm">{CONTACT_INFO.PHONE}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} USA'S Nail Bar. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-gray-600 text-[10px] uppercase tracking-widest hover:text-[#D4AF37]">Privacy Policy</a>
          <a href="#" className="text-gray-600 text-[10px] uppercase tracking-widest hover:text-[#D4AF37]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
