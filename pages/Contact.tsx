
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    dateTime: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a server or third-party service like Fresha/Square
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif gold-text mb-4 uppercase tracking-[0.2em]">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
            Book your next appointment or reach out to us for any inquiries. We look forward to seeing you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="bg-[#0a0a0a] border border-[#D4AF37]/10 p-10">
              <h3 className="text-2xl font-serif gold-text mb-8 uppercase tracking-widest">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center gold-text group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-1">Phone</h4>
                    <a href={`tel:${CONTACT_INFO.PHONE}`} className="text-xl text-white hover:text-[#D4AF37] transition-colors">
                      {CONTACT_INFO.PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center gold-text group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-1">Location</h4>
                    <p className="text-lg text-white leading-snug">
                      {CONTACT_INFO.ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center gold-text group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-1">Our Hours</h4>
                    {CONTACT_INFO.HOURS.map((h, i) => (
                      <p key={i} className="text-white">{h.day}: {h.time}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-[#D4AF37]/10">
                <a 
                  href={`tel:${CONTACT_INFO.PHONE}`}
                  className="block w-full text-center py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] gold-glow transition-all"
                >
                  Call Now To Book
                </a>
              </div>
            </div>

            {/* Embed Map Small */}
            <div className="h-[300px] grayscale invert brightness-50 contrast-125 border border-[#D4AF37]/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.0125890885144!2d-94.9452417!3d29.39423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f6087b7a8d9a7%3A0x6734c56e30b355d1!2sUSA's%20Nail%20Bar!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0a0a0a] border border-[#D4AF37]/10 p-10"
          >
            <h3 className="text-2xl font-serif gold-text mb-8 uppercase tracking-widest">Book Appointment</h3>
            
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center gold-text mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-serif text-white mb-2 uppercase">Request Sent!</h4>
                <p className="text-gray-400">We will call you shortly to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black border border-[#D4AF37]/20 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-black border border-[#D4AF37]/20 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="409-000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Service Type</label>
                  <select 
                    required
                    className="w-full bg-black border border-[#D4AF37]/20 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="acrylic">Acrylic Full Set</option>
                    <option value="dip">Dip Powder</option>
                    <option value="eyelash">Eyelash Extensions</option>
                    <option value="other">Other / Multi-Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Preferred Date & Time</label>
                  <input 
                    required
                    type="datetime-local" 
                    className="w-full bg-black border border-[#D4AF37]/20 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    value={formData.dateTime}
                    onChange={(e) => setFormData({...formData, dateTime: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Additional Notes (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black border border-[#D4AF37]/20 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="Tell us about special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.3em] gold-glow hover:bg-white transition-all"
                >
                  Confirm Request
                </button>
                <p className="text-[10px] text-gray-500 uppercase text-center tracking-widest">
                  * Note: This request is subject to technician availability. We will contact you to finalize.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
