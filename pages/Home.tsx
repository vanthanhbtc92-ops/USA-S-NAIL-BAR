
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MapPin, Phone, Star } from 'lucide-react';
import { SERVICES, CONTACT_INFO, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Nails"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#D4AF37] text-xl md:text-2xl font-serif tracking-widest mb-4">Welcome to USA's Nail Bar</h2>
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 tracking-tighter leading-tight">
              LUXURY NAIL CARE <br /> YOU DESERVE
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest gold-glow hover:bg-white transition-all"
              >
                Book Appointment
              </Link>
              <a 
                href={`tel:${CONTACT_INFO.PHONE}`}
                className="w-full sm:w-auto px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black border-y border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center mb-6 gold-text">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-serif gold-text mb-4 uppercase tracking-widest">Professional Technicians</h3>
              <p className="text-gray-400 leading-relaxed">Highly skilled artists with years of experience in modern nail trends and classic care.</p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center mb-6 gold-text">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-serif gold-text mb-4 uppercase tracking-widest">Clean & Relaxing Space</h3>
              <p className="text-gray-400 leading-relaxed">Hospital-grade sanitation protocols in a serene, luxurious environment for your peace of mind.</p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center mb-6 gold-text">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-serif gold-text mb-4 uppercase tracking-widest">High-Quality Products</h3>
              <p className="text-gray-400 leading-relaxed">We only use premium brands and long-lasting polishes that are safe for your natural nails.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-[#D4AF37] text-lg font-serif mb-4 uppercase tracking-widest">Our Specialties</h2>
          <h3 className="text-4xl font-serif text-white uppercase">Premium Services</h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, idx) => (
            <motion.div 
              key={service.id}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] border border-[#D4AF37]/20"
            >
              <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-2xl font-serif gold-text mb-2 uppercase tracking-widest">{service.name}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                <Link to="/services" className="text-white text-xs uppercase font-bold tracking-[0.3em] hover:text-[#D4AF37] transition-colors">
                  View Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-block border-b-2 border-[#D4AF37] text-[#D4AF37] pb-1 uppercase font-bold tracking-widest hover:text-white hover:border-white transition-all">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif gold-text mb-8 uppercase tracking-widest">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="gold-text flex-shrink-0" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-1">Our Address</h4>
                  <p className="text-gray-400">{CONTACT_INFO.ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="gold-text flex-shrink-0" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-1">Business Hours</h4>
                  {CONTACT_INFO.HOURS.map((h, i) => (
                    <p key={i} className="text-gray-400">{h.day}: {h.time}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="gold-text flex-shrink-0" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-gray-400">{CONTACT_INFO.PHONE}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=3109+Palmer+Hwy,+Texas+City,+TX+77590" 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px] border border-[#D4AF37]/30 grayscale invert brightness-75">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.0125890885144!2d-94.9452417!3d29.39423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f6087b7a8d9a7%3A0x6734c56e30b355d1!2sUSA's%20Nail%20Bar!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#D4AF37] font-serif text-3xl mb-16 uppercase tracking-widest">Client Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-black border border-[#D4AF37]/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" className="gold-text" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold tracking-widest">{t.name}</span>
                  <span className="text-xs font-bold text-gray-500 uppercase">{t.platform}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
