import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Editorial & Fashion Images
import edit1 from '../../assets/images/fashion and editorial/1 (1).jpg';
import edit2 from '../../assets/images/fashion and editorial/1 (3).jpg';
import edit3 from '../../assets/images/fashion and editorial/1 (5).jpg';
import edit4 from '../../assets/images/fashion and editorial/1 (7).jpg';
import edit5 from '../../assets/images/fashion and editorial/IMG-20260506-WA0166.jpg';
import edit6 from '../../assets/images/fashion and editorial/IMG-20260506-WA0167.jpg';
import edit7 from '../../assets/images/fashion and editorial/IMG-20260506-WA0172.jpg';
import edit8 from '../../assets/images/fashion and editorial/shoot (15).jpg';
import edit9 from '../../assets/images/fashion and editorial/shoot (2).jpg';
import edit10 from '../../assets/images/fashion and editorial/shoot (3).jpg';
import edit11 from '../../assets/images/fashion and editorial/shoot (4).jpg';
import edit12 from '../../assets/images/fashion and editorial/shoot (7).jpg';

// Bridal Images
import bridal1 from '../../assets/images/bridal/IMG-20260506-WA0037.jpg';
import bridal2 from '../../assets/images/bridal/IMG-20260506-WA0108.jpg';
import bridal3 from '../../assets/images/bridal/IMG-20260506-WA0117.jpg';
import bridal4 from '../../assets/images/bridal/IMG-20260506-WA0123.jpg';
import bridal5 from '../../assets/images/bridal/IMG-20260506-WA0125.jpg';
import bridal6 from '../../assets/images/bridal/IMG-20260506-WA0131.jpg';
import bridal7 from '../../assets/images/bridal/IMG-20260506-WA0154.jpg';
import bridal8 from '../../assets/images/bridal/IMG-20260506-WA0186.jpg';
import bridal9 from '../../assets/images/bridal/IMG_3075.JPG';
import bridal10 from '../../assets/images/bridal/IMG_3091.JPG';
import bridal11 from '../../assets/images/bridal/IMG_3092.JPG';
import bridal12 from '../../assets/images/bridal/IMG_3135.JPG';

// Engagement Images
import eng1 from '../../assets/images/engagement/IMG-20260506-WA0063.jpg';
import eng2 from '../../assets/images/engagement/IMG-20260506-WA0083.jpg';
import eng3 from '../../assets/images/engagement/IMG-20260506-WA0090.jpg';
import eng4 from '../../assets/images/engagement/IMG-20260506-WA0094.jpg';
import eng5 from '../../assets/images/engagement/IMG-20260506-WA0143.jpg';
import eng6 from '../../assets/images/engagement/IMG-20260506-WA0147.jpg';
import eng7 from '../../assets/images/engagement/IMG-20260506-WA0183.jpg';
import eng8 from '../../assets/images/engagement/photo (4).jpg';

const portfolioData = [
  // Editorial & Fashion
  { id: 101, cat: 'editorial', img: edit1, title: 'Vogue Editorial', subtitle: 'Editorial & Fashion', featured: true },
  { id: 102, cat: 'editorial', img: edit2, title: 'Luxe Fashion', subtitle: 'Editorial & Fashion', featured: false },
  { id: 103, cat: 'editorial', img: edit3, title: 'High Fashion Glam', subtitle: 'Editorial & Fashion', featured: true },
  { id: 104, cat: 'editorial', img: edit4, title: 'Couture Look', subtitle: 'Editorial & Fashion', featured: false },
  { id: 105, cat: 'editorial', img: edit5, title: 'Evening Glam', subtitle: 'Editorial & Fashion', featured: true },
  { id: 106, cat: 'editorial', img: edit6, title: 'Urban Chic', subtitle: 'Editorial & Fashion', featured: false },
  { id: 107, cat: 'editorial', img: edit7, title: 'Dewy Finish', subtitle: 'Editorial & Fashion', featured: false },
  { id: 108, cat: 'editorial', img: edit8, title: 'Festive Ready', subtitle: 'Editorial & Fashion', featured: false },
  { id: 109, cat: 'editorial', img: edit9, title: 'Event Glam', subtitle: 'Editorial & Fashion', featured: false },
  { id: 110, cat: 'editorial', img: edit10, title: 'Modern Muse', subtitle: 'Editorial & Fashion', featured: false },
  { id: 111, cat: 'editorial', img: edit11, title: 'Night Out Glam', subtitle: 'Editorial & Fashion', featured: false },
  { id: 112, cat: 'editorial', img: edit12, title: 'Statement Look', subtitle: 'Editorial & Fashion', featured: false },

  // Bridal
  { id: 201, cat: 'bridal', img: bridal1, title: 'Royal Bridal Look', subtitle: 'Bridal', featured: true },
  { id: 202, cat: 'bridal', img: bridal2, title: 'Ethereal Bride', subtitle: 'Bridal', featured: false },
  { id: 203, cat: 'bridal', img: bridal3, title: 'Classic South Indian', subtitle: 'Bridal', featured: true },
  { id: 204, cat: 'bridal', img: bridal4, title: 'Modern Bride', subtitle: 'Bridal', featured: true },
  { id: 205, cat: 'bridal', img: bridal5, title: 'Elegant Bride', subtitle: 'Bridal', featured: false },
  { id: 206, cat: 'bridal', img: bridal6, title: 'Traditional Glam', subtitle: 'Bridal', featured: false },
  { id: 207, cat: 'bridal', img: bridal7, title: 'Graceful Bride', subtitle: 'Bridal', featured: false },
  { id: 208, cat: 'bridal', img: bridal8, title: 'Serene Beauty', subtitle: 'Bridal', featured: false },
  { id: 209, cat: 'bridal', img: bridal9, title: 'Timeless Elegance', subtitle: 'Bridal', featured: false },
  { id: 210, cat: 'bridal', img: bridal10, title: 'Glowy Bridal', subtitle: 'Bridal', featured: false },
  { id: 211, cat: 'bridal', img: bridal11, title: 'Radiant Bride', subtitle: 'Bridal', featured: false },
  { id: 212, cat: 'bridal', img: bridal12, title: 'Majestic Look', subtitle: 'Bridal', featured: false },

  // Engagement
  { id: 301, cat: 'engagement', img: eng1, title: 'Golden Engagement', subtitle: 'Engagement', featured: true },
  { id: 302, cat: 'engagement', img: eng2, title: 'Soft Glam', subtitle: 'Engagement', featured: false },
  { id: 303, cat: 'engagement', img: eng3, title: 'Bold & Beautiful', subtitle: 'Engagement', featured: true },
  { id: 304, cat: 'engagement', img: eng4, title: 'Radiant Glow', subtitle: 'Engagement', featured: true },
  { id: 305, cat: 'engagement', img: eng5, title: 'Subtle Elegance', subtitle: 'Engagement', featured: false },
  { id: 306, cat: 'engagement', img: eng6, title: 'Dreamy Look', subtitle: 'Engagement', featured: false },
  { id: 307, cat: 'engagement', img: eng7, title: 'Celebration Glam', subtitle: 'Engagement', featured: false },
  { id: 308, cat: 'engagement', img: eng8, title: 'Sparkling Beauty', subtitle: 'Engagement', featured: false },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('editorial');

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
          {['editorial', 'bridal', 'engagement'].map(tab => (
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
