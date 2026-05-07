import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Heart, Clock, Moon, Zap, ShieldCheck } from 'lucide-react';

const Services = () => {
  // Scroll reveal variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="services" className="relative py-28 px-6 md:px-16 bg-[#FAF9F7] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="block text-[0.68rem] tracking-[0.3em] uppercase text-gold font-medium mb-4"
          >
            ✦ Signature Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-normal leading-[1.1] text-charcoal font-serif"
          >
            Luxury Bridal & Beauty Services
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[50px] h-[1px] bg-gold mx-auto mt-[1.8rem]"
          />
        </div>

        {/* Asymmetrical Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          
          {/* LEFT: Featured Bridal Card (7 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 1, rotateY: -1 }}
              className="relative rounded-3xl p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] gpu-accelerate"
              style={{ background: 'linear-gradient(145deg, #4A4A4A 0%, #1C1C1C 100%)' }}
            >
              {/* Gold Gradient Border Wrapper */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-gold/10 opacity-50"></div>
              
              <div className="relative bg-[#1a1a1a] rounded-[23px] overflow-hidden flex flex-col md:flex-row h-full">
                {/* Badge */}
                <div className="absolute top-6 left-6 z-20 bg-gold text-white text-[0.65rem] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full shadow-lg font-medium">
                  Most Booked
                </div>

                {/* Image Area */}
                <div className="md:w-1/2 h-[300px] md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a] z-10 hidden md:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10 md:hidden"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fm=webp" 
                    alt="Bridal Makeup" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-20">
                  <h3 className="font-serif text-[2.2rem] text-white mb-6 leading-tight">
                    Bridal <br/><span className="italic text-gold-light">Makeup</span>
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-white/80 text-[0.95rem]">
                      <Sparkles size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>HD flawless long-lasting finish</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-[0.95rem]">
                      <ShieldCheck size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>12+ hour tear-proof wear</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-[0.95rem]">
                      <Camera size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>Camera-ready radiant glow</span>
                    </li>
                  </ul>

                  <div className="font-serif text-[1.4rem] text-gold-light mb-8">
                    <span className="text-[0.8rem] font-sans text-white/50 uppercase tracking-widest mr-2">From</span> 
                    ₹10,000
                  </div>

                  <a 
                    href="https://wa.me/919XXXXXXXXX" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-4 bg-gradient-to-r from-gold to-[#b8924f] text-white rounded-full text-[0.8rem] tracking-[0.15em] uppercase font-semibold text-center transition-all duration-300 shadow-[0_8px_25px_rgba(201,169,110,0.3)] hover:shadow-[0_12px_35px_rgba(201,169,110,0.5)] hover:-translate-y-1"
                  >
                    Book Bridal Package
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Secondary Stacked Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 h-full justify-between">
            
            {/* Engagement Card */}
            <motion.div variants={itemVariants} className="w-full h-full">
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300 gpu-accelerate flex flex-col sm:flex-row h-full"
              >
                {/* Image */}
                <div className="w-full sm:w-[40%] h-[180px] sm:h-auto overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-black/5 z-10 transition-colors group-hover:bg-transparent"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=500&q=80&fm=webp" 
                    alt="Engagement Look" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="w-full sm:w-[60%] p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-[1.6rem] text-charcoal leading-tight">Engagement</h3>
                    <div className="font-serif text-[1.1rem] text-gold mt-1">₹8k</div>
                  </div>
                  
                  <ul className="space-y-2.5 mb-6">
                    <li className="flex items-start gap-2.5 text-text-muted text-[0.85rem]">
                      <span className="text-gold text-[0.65rem] mt-1">✦</span> Soft glam or bold look
                    </li>
                    <li className="flex items-start gap-2.5 text-text-muted text-[0.85rem]">
                      <span className="text-gold text-[0.65rem] mt-1">✦</span> Picture-perfect finish
                    </li>
                    <li className="flex items-start gap-2.5 text-text-muted text-[0.85rem]">
                      <span className="text-gold text-[0.65rem] mt-1">✦</span> 2–3 hour session
                    </li>
                  </ul>

                  <a 
                    href="https://wa.me/919XXXXXXXXX" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full py-3 border border-gold text-gold rounded-full text-[0.7rem] tracking-[0.15em] uppercase font-semibold text-center transition-all duration-300 hover:bg-gold hover:text-white"
                  >
                    Book Engagement
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Party Card */}
            <motion.div variants={itemVariants} className="w-full h-full">
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300 gpu-accelerate flex flex-col sm:flex-row h-full"
              >
                {/* Image */}
                <div className="w-full sm:w-[40%] h-[180px] sm:h-auto overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-black/5 z-10 transition-colors group-hover:bg-transparent"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80&fm=webp" 
                    alt="Party & Event" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="w-full sm:w-[60%] p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-[1.6rem] text-charcoal leading-tight">Party & Event</h3>
                    <div className="font-serif text-[1.1rem] text-gold mt-1">₹5k</div>
                  </div>
                  
                  <ul className="space-y-2.5 mb-6">
                    <li className="flex items-start gap-2.5 text-text-muted text-[0.85rem]">
                      <span className="text-gold text-[0.65rem] mt-1">✦</span> Trendy editorial styles
                    </li>
                    <li className="flex items-start gap-2.5 text-text-muted text-[0.85rem]">
                      <span className="text-gold text-[0.65rem] mt-1">✦</span> Night-proof base
                    </li>
                    <li className="flex items-start gap-2.5 text-text-muted text-[0.85rem]">
                      <span className="text-gold text-[0.65rem] mt-1">✦</span> 90-minute session
                    </li>
                  </ul>

                  <a 
                    href="https://wa.me/919XXXXXXXXX" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full py-3 border border-gold text-gold rounded-full text-[0.7rem] tracking-[0.15em] uppercase font-semibold text-center transition-all duration-300 hover:bg-gold hover:text-white"
                  >
                    Book Party Glam
                  </a>
                </div>
              </motion.div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;
