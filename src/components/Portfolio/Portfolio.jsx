import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Bridal Images
import bridal1 from '../../assets/images/bridal/IMG-20260506-WA0037.jpg';
import bridal2 from '../../assets/images/bridal/IMG-20260506-WA0108.jpg';
import bridal3 from '../../assets/images/bridal/IMG-20260506-WA0123.jpg';
import bridal4 from '../../assets/images/bridal/IMG-20260506-WA0131.jpg';
import bridal5 from '../../assets/images/bridal/IMG-20260506-WA0154.jpg';
import bridal6 from '../../assets/images/bridal/IMG_3135.JPG';

// Engagement Images
import eng1 from '../../assets/images/engagement/IMG-20260506-WA0063.jpg';
import eng2 from '../../assets/images/engagement/IMG-20260506-WA0083.jpg';
import eng3 from '../../assets/images/engagement/IMG-20260506-WA0094.jpg';
import eng4 from '../../assets/images/engagement/IMG-20260506-WA0106.jpg';
import eng5 from '../../assets/images/engagement/IMG-20260506-WA0140.jpg';
import eng6 from '../../assets/images/engagement/IMG-20260506-WA0183.jpg';

// Editorial & Fashion Images
import edit1 from '../../assets/images/fashion and editorial/IMG-20260506-WA0166.jpg';
import edit2 from '../../assets/images/fashion and editorial/IMG-20260506-WA0167.jpg';
import edit3 from '../../assets/images/fashion and editorial/IMG-20260506-WA0172.jpg';
import edit4 from '../../assets/images/fashion and editorial/shoot (15).jpg';
import edit5 from '../../assets/images/fashion and editorial/shoot (2).jpg';
import edit6 from '../../assets/images/fashion and editorial/shoot (4).jpg';

const portfolioData = [
  // Bridal
  { id: 1, cat: 'bridal', img: bridal1, title: 'Royal Bridal Look', subtitle: 'Bridal', featured: true },
  { id: 4, cat: 'bridal', img: bridal2, title: 'Ethereal Bride', subtitle: 'Bridal', featured: false },
  { id: 7, cat: 'bridal', img: bridal3, title: 'Classic South Indian', subtitle: 'Bridal', featured: true },
  { id: 10, cat: 'bridal', img: bridal4, title: 'Modern Bride', subtitle: 'Bridal', featured: true },
  { id: 13, cat: 'bridal', img: bridal5, title: 'Elegant Bride', subtitle: 'Bridal', featured: false },
  { id: 16, cat: 'bridal', img: bridal6, title: 'Traditional Glam', subtitle: 'Bridal', featured: false },

  // Engagement
  { id: 2, cat: 'engagement', img: eng1, title: 'Golden Engagement', subtitle: 'Engagement', featured: true },
  { id: 5, cat: 'engagement', img: eng2, title: 'Soft Glam', subtitle: 'Engagement', featured: false },
  { id: 8, cat: 'engagement', img: eng3, title: 'Bold & Beautiful', subtitle: 'Engagement', featured: true },
  { id: 11, cat: 'engagement', img: eng4, title: 'Radiant Glow', subtitle: 'Engagement', featured: true },
  { id: 14, cat: 'engagement', img: eng5, title: 'Subtle Elegance', subtitle: 'Engagement', featured: false },
  { id: 17, cat: 'engagement', img: eng6, title: 'Modern Muse', subtitle: 'Engagement', featured: false },

  // Editorial & Fashion
  { id: 3, cat: 'editorial', img: edit1, title: 'Evening Glam', subtitle: 'Editorial & Fashion', featured: true },
  { id: 6, cat: 'editorial', img: edit2, title: 'Luxe Fashion Look', subtitle: 'Editorial & Fashion', featured: false },
  { id: 9, cat: 'editorial', img: edit3, title: 'Dewy Finish', subtitle: 'Editorial & Fashion', featured: true },
  { id: 12, cat: 'editorial', img: edit4, title: 'Festive Ready', subtitle: 'Editorial & Fashion', featured: true },
  { id: 15, cat: 'editorial', img: edit5, title: 'Event Glam', subtitle: 'Editorial & Fashion', featured: false },
  { id: 18, cat: 'editorial', img: edit6, title: 'Night Out Glam', subtitle: 'Editorial & Fashion', featured: false },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('bridal');

  const displayData = portfolioData.filter(item => item.cat === activeTab);

  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#FAF9F7]" id="portfolio">
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Premium Anti-Gravity Heading */}
        <motion.div 
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold/40 hidden sm:block"></div>
            <span className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-medium font-sans">
              My Work
            </span>
            <div className="w-8 h-[1px] bg-gold/40 hidden sm:block"></div>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-[-0.02em] font-serif flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-charcoal"
            >
              Curated
            </motion.span>
            <motion.em
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="italic text-blush-dark bg-clip-text text-transparent bg-gradient-to-r from-gold to-[#d4b986]"
            >
              Transformations
            </motion.em>
          </h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[50px] h-[1px] bg-gold mt-[1.8rem]"
          ></motion.div>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {['bridal', 'engagement', 'editorial'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-[0.75rem] tracking-[0.1em] uppercase font-medium transition-all duration-300 border ${
                activeTab === tab
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-transparent text-text-muted border-border hover:border-gold hover:text-gold'
              }`}
            >
              {tab === 'editorial' ? 'Editorial & Fashion' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayData.map(item => (
            <div 
              key={item.id} 
              className={`relative overflow-hidden rounded-xl cursor-pointer bg-border group ${item.featured ? 'lg:row-span-2 lg:col-span-1' : ''}`}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className={`w-full object-cover object-top transition-transform duration-600 ease-[ease] group-hover:scale-105 block ${item.featured ? 'h-[320px] lg:h-[660px]' : 'h-[320px]'}`} 
                loading="lazy" 
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 transition-opacity duration-400 flex items-end p-6 group-hover:opacity-100">
                <div className="text-white">
                  <h4 className="font-serif text-[1.1rem] font-normal mb-1">{item.title}</h4>
                  <span className="text-[0.72rem] tracking-[0.1em] uppercase text-gold-light">{item.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;
