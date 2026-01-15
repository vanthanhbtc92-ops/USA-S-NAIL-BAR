
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      {/* Heritage Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37]/50 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Story" 
              className="relative z-10 border border-[#D4AF37]/30 shadow-2xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="gold-text font-serif text-lg uppercase tracking-widest mb-4">Our Heritage</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tighter uppercase leading-tight">USA'S NAIL BAR <br /> THE STANDARD OF LUXURY</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Located in the heart of Texas City, USA'S Nail Bar has been the premier destination for those who seek more than just a nail service. We offer a lifestyle of luxury and self-care.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our journey started with a simple vision: to create a space where hygiene meets high art. Our team of master technicians is trained in the latest techniques, from the most intricate nail art to restorative paraffin treatments.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#D4AF37]/20">
              <div>
                <span className="text-3xl font-serif gold-text block mb-2">15+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years Experience</span>
              </div>
              <div>
                <span className="text-3xl font-serif gold-text block mb-2">10k+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="gold-text font-serif text-lg mb-4 uppercase tracking-[0.2em]">Our Core Values</h2>
          <h3 className="text-4xl font-serif text-white uppercase tracking-widest">Our Promise To You</h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck size={40} />, title: "Clean Tools", desc: "Every instrument is sterilized using medical-grade autoclaves for your absolute safety." },
            { icon: <Award size={40} />, title: "Quality Products", desc: "We use only top-tier brands like OPI, CND, and SNS to ensure healthy, vibrant nails." },
            { icon: <Sparkles size={40} />, title: "Modern Designs", desc: "Our artists stay ahead of trends to bring you the latest in fashion and art." },
            { icon: <Heart size={40} />, title: "Client Focus", desc: "Your comfort and satisfaction are our primary metrics for success." }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-black border border-[#D4AF37]/10 text-center hover:border-[#D4AF37] transition-all duration-300"
            >
              <div className="gold-text mb-6 flex justify-center">{val.icon}</div>
              <h4 className="text-xl font-serif text-white mb-4 uppercase tracking-widest">{val.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D4AF37]/5 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 uppercase tracking-widest">Experience The Difference</h3>
          <p className="text-gray-400 mb-12 text-lg">Ready for a touch of luxury? Join us at USA'S Nail Bar and discover the new standard in nail care.</p>
          <a href="#/contact" className="inline-block px-12 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.3em] gold-glow transition-all">
            Book Your Seat
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
