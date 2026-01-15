
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | string>('all');
  const categories = ['all', ...Array.from(new Set(SERVICES.map(s => s.category)))];

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif gold-text mb-4 uppercase tracking-[0.2em]">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
            Explore our wide range of professional nail care treatments and beauty services designed to make you look and feel your absolute best.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-[#D4AF37]/20 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 uppercase tracking-[0.2em] text-sm transition-all border-b-2 ${
                activeTab === cat ? 'border-[#D4AF37] gold-text' : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={service.id}
              className="bg-[#0a0a0a] border border-[#D4AF37]/10 flex flex-col group hover:border-[#D4AF37]/40 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/80 px-4 py-1 border border-[#D4AF37]/30">
                  <span className="gold-text font-serif text-sm tracking-widest">{service.price}</span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-serif gold-text mb-4 uppercase tracking-widest">{service.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                <button className="w-full py-3 border border-[#D4AF37]/30 text-white uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#D4AF37] hover:text-black transition-all">
                  Book This Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
