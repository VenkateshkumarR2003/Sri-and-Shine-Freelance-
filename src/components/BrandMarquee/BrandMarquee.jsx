import React from 'react';

import brand1 from '../../assets/images/brands/2 (1).png';
import brand2 from '../../assets/images/brands/2 (3).png';
import brand3 from '../../assets/images/brands/2 (4).png';
import brand4 from '../../assets/images/brands/2 (5).png';
import brand5 from '../../assets/images/brands/brand (1).jpeg';
import brand6 from '../../assets/images/brands/brand (2).jpeg';
import brand7 from '../../assets/images/brands/brand (3).jpeg';
import brand8 from '../../assets/images/brands/brand (4).jpeg';
import brand9 from '../../assets/images/brands/brand (5).png';

const brands = [
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9
];

const BrandMarquee = () => {
  // Multiply array to ensure seamless infinite loop across wide screens
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="bg-[#FAF9F7] py-10 overflow-hidden relative group border-b border-black/5">
      {/* Gradients for smooth fade in/out effect */}
      <div className="absolute top-0 bottom-0 left-0 w-[60px] md:w-[150px] z-10 bg-gradient-to-r from-[#FAF9F7] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-[60px] md:w-[150px] z-10 bg-gradient-to-l from-[#FAF9F7] to-transparent pointer-events-none"></div>

      <div className="flex w-max animate-marqueeScroll items-center">
        {marqueeItems.map((brand, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center shrink-0 px-10 md:px-16"
          >
            <img 
              src={brand} 
              alt="Brand Partner" 
              className="h-[45px] md:h-[65px] w-auto max-w-[200px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
