import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Code } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-charcoal py-16 px-6 md:px-16 text-white relative overflow-hidden">
      {/* Top subtle border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10"
      >
        {/* Column 1: Brand */}
        <div className="lg:pr-8">
          <div className="font-serif text-[1.8rem] mb-4 tracking-wide">
            Sri & <span className="text-gold italic">Shine Makeovers</span>
          </div>
          <p className="text-[1.05rem] text-white/70 font-cormorant italic leading-[1.6] mb-6">
            "Crafting timeless beauty for your most special moments."
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-[0.75rem] tracking-[0.2em] uppercase text-gold mb-6 font-medium">Quick Links</h4>
          <ul className="list-none space-y-3">
            <li><a href="#portfolio" className="text-[0.9rem] text-white/70 no-underline transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block">Portfolio</a></li>
            <li><a href="#services" className="text-[0.9rem] text-white/70 no-underline transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block">Services</a></li>
            <li><a href="#about" className="text-[0.9rem] text-white/70 no-underline transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block">About</a></li>
            <li><a href="#contact" className="text-[0.9rem] text-white/70 no-underline transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-[0.75rem] tracking-[0.2em] uppercase text-gold mb-6 font-medium">Contact</h4>
          <ul className="list-none space-y-4">
            <li>
              <a href="tel:+919042761497" className="group flex items-start gap-3 text-[0.9rem] text-white/70 no-underline transition-colors hover:text-gold">
                <Phone size={16} className="mt-0.5 text-gold/60 group-hover:text-gold transition-colors" />
                <span>+91 90427 61497</span>
              </a>
            </li>
            <li>
              <a href="mailto:srianndshinemakeover@gmail.com" className="group flex items-start gap-3 text-[0.9rem] text-white/70 no-underline transition-colors hover:text-gold">
                <Mail size={16} className="mt-0.5 text-gold/60 group-hover:text-gold transition-colors" />
                <span className="break-all">srianndshinemakeover@gmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-[0.9rem] text-white/70">
              <MapPin size={16} className="mt-0.5 text-gold/60 shrink-0" />
              <span>Karur, Tamil Nadu</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h4 className="text-[0.75rem] tracking-[0.2em] uppercase text-gold mb-6 font-medium">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/sri_and_shine?igsh=NXQ5dXNuaHBibTZv" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 no-underline transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(201,169,110,0.4)] hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a href="https://wa.me/919042761497" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 no-underline transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:scale-110">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/5 text-center"
      >
        <p className="text-[0.7rem] text-white/40 tracking-[0.05em] uppercase font-medium mb-4">
          &copy; {new Date().getFullYear()} Sri and Shine Makeovers. All rights reserved.
        </p>

        {/* Developer Credit */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-2 group"
        >
          <Code size={12} className="text-gold/40 group-hover:text-gold transition-colors duration-500" />
          <span className="text-[0.75rem] text-white/30 font-light tracking-wider">
            Designed & Developed by
          </span>
          <a 
            href="https://www.instagram.com/codio_crafts?igsh=OHRycnNza3p6bG14" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-[0.75rem] font-medium tracking-wide cursor-pointer overflow-hidden"
          >
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f1d592] to-[#d4af37] bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-500">
              Codio Crafts
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover:w-full"></span>
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
