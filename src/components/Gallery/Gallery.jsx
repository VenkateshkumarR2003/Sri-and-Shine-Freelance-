import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import img1 from '../../assets/images/instagram/1 (6).jpg';
import img2 from '../../assets/images/instagram/1 (7).jpg';
import img3 from '../../assets/images/instagram/IMG-20260506-WA0058.jpg';
import img4 from '../../assets/images/instagram/IMG-20260506-WA0083.jpg';
import img5 from '../../assets/images/instagram/IMG-20260506-WA0090.jpg';
import img6 from '../../assets/images/instagram/IMG-20260506-WA0099.jpg';
import img7 from '../../assets/images/instagram/IMG-20260506-WA0140.jpg';
import img8 from '../../assets/images/instagram/IMG-20260506-WA0147.jpg';
import img9 from '../../assets/images/instagram/IMG-20260506-WA0166.jpg';
import img10 from '../../assets/images/instagram/IMG-20260506-WA0167.jpg';
import img11 from '../../assets/images/instagram/IMG_3075.JPG';
import img12 from '../../assets/images/instagram/IMG_3092.JPG';
import img13 from '../../assets/images/instagram/IMG_3130.JPG';
import img14 from '../../assets/images/instagram/IMG_4507.JPG';
import img15 from '../../assets/images/instagram/photo (3).jpg';
import img16 from '../../assets/images/instagram/photo (6).jpg';

const Gallery = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white" id="gallery">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="block text-[0.68rem] tracking-[0.3em] uppercase text-gold font-medium mb-3">
            ✦ @sri_and_shine
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-charcoal font-serif">
            Instagram <em className="italic text-blush-dark">Gallery</em>
          </h2>
          <div className="w-[40px] h-[1px] bg-gold mx-auto mt-[1.4rem] mb-[2.4rem]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-[10px] aspect-square cursor-pointer group">
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-[ease] group-hover:scale-105 block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-400 flex items-center justify-center group-hover:opacity-100">
                <FaInstagram size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/sri_and_shine?igsh=NXQ5dXNuaHBibTZv" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-charcoal text-charcoal rounded-full text-[0.78rem] tracking-[0.1em] uppercase font-medium transition-colors duration-300 hover:bg-charcoal hover:text-white"
          >
            <FaInstagram size={16} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
