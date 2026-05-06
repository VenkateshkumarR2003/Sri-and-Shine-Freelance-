import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ease-in-out ${
          scrolled
            ? 'bg-white/92 backdrop-blur-md border-b border-border py-3 px-6 md:px-16'
            : 'bg-transparent py-5 px-6 md:px-16'
        }`}
      >
        <a 
          href="#" 
          className={`font-serif text-2xl tracking-[0.04em] no-underline transition-colors duration-300 ${
            scrolled ? 'text-charcoal' : 'text-white'
          }`}
        >
          Sri & <span className="text-gold italic">Shine</span>
        </a>

        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative text-[0.78rem] tracking-[0.12em] uppercase no-underline font-medium transition-colors duration-300 group ${
                  scrolled ? 'text-text hover:text-gold' : 'text-white/85 hover:text-gold'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden md:block px-6 py-2 border text-[0.75rem] tracking-[0.1em] uppercase font-medium rounded-full transition-all duration-300 ${
            scrolled
              ? 'border-gold text-gold hover:bg-gold hover:text-white'
              : 'border-white/60 text-white hover:bg-gold hover:text-white hover:border-gold'
          }`}
        >
          Book Now
        </a>

        {/* Hamburger Icon */}
        <div
          className="flex md:hidden flex-col gap-[5px] cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-[22px] h-[1.5px] transition-all duration-300 ${
                scrolled ? 'bg-charcoal' : 'bg-white'
              }`}
            ></span>
          ))}
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center gap-8"
          >
            <div
              className="absolute top-6 right-6 p-4 text-charcoal bg-transparent cursor-pointer z-[1000] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeMobileNav();
              }}
            >
              <X size={36} />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileNav}
                className="font-serif text-3xl text-charcoal no-underline hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
