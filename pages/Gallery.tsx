
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif gold-text mb-4 uppercase tracking-[0.2em]">Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
            Browse through our portfolio of stunning nail designs and real transformations from our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] group cursor-pointer overflow-hidden border border-[#D4AF37]/20"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <span className="text-[#D4AF37] font-serif text-lg tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform">
                  {img.title}
                </span>
                <div className="mt-4 w-12 h-px bg-[#D4AF37]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-[#D4AF37]">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[85vh] object-contain border border-[#D4AF37]/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
