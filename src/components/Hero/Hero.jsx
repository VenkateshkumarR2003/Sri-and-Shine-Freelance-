import React, { useEffect, useState } from 'react';

import video1 from '../../assets/images/hero/10835749-hd_1920_1080_25fps.mp4';
import video2 from '../../assets/images/hero/13613681_3840_2160_25fps.mp4';
import video3 from '../../assets/images/hero/3971844-hd_1920_1080_25fps.mp4';

// Optimization: Poster images show instantly while videos load in the background
import poster1 from '../../assets/images/bridal/IMG-20260506-WA0037.jpg';
import poster2 from '../../assets/images/fashion and editorial/IMG-20260506-WA0166.jpg';
import poster3 from '../../assets/images/engagement/IMG-20260506-WA0063.jpg';

const slides = [
  {
    video: video1,
    poster: poster1,
    subtitle: "Chennai & All Over Tamil Nadu",
    title: <>Bridal <em className="italic text-blush-light">Makeup</em><br />Artist</>,
    desc: "Transforming brides into timeless visions of elegance — every stroke, a masterpiece."
  },
  {
    video: video2,
    poster: poster2,
    subtitle: "Premium & Luxury",
    title: <>Editorial <em className="italic text-blush-light">Fashion</em><br />Glam</>,
    desc: "High-end editorial styling for magazines, shoots, and red carpets."
  },
  {
    video: video3,
    subtitle: "Flawless Finish",
    title: <>Event <em className="italic text-blush-light">&amp; Party</em><br />Ready</>,
    desc: "Stand out in any crowd with a customized glamorous look designed to last."
  }
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Video Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-transform ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          style={{ transform: `translateY(${scrollY * 0.3}px)`, transitionProperty: 'opacity, transform', transitionDuration: '1000ms, 0.1s' }}
        >
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-black/30 to-[rgba(180,120,100,0.2)]"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-[80px] ${index === currentSlide ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
          >
            <div className="w-full max-w-[800px] mx-auto">
              <span className="inline-block text-[0.72rem] tracking-[0.3em] uppercase text-gold-light font-sans font-normal mb-5">
                ✦ {slide.subtitle} ✦
              </span>

              <h1 className="text-[clamp(3.2rem,8vw,6.5rem)] text-white font-serif font-normal leading-[1.05] tracking-[-0.01em] mb-5">
                {slide.title}
              </h1>

              <p className="text-base text-white/78 font-light tracking-[0.06em] mb-11 max-w-[480px] w-full mx-auto">
                {slide.desc}
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="px-9 py-3.5 bg-gold text-white rounded-full text-[0.8rem] tracking-[0.12em] uppercase font-medium shadow-[0_8px_28px_rgba(201,169,110,0.4)] hover:bg-[#b8924f] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(201,169,110,0.5)] transition-all duration-300 font-sans pointer-events-auto"
                >
                  Book Now
                </a>
                <a
                  href="#portfolio"
                  className="px-9 py-3.5 bg-transparent text-white border border-white/60 rounded-full text-[0.8rem] tracking-[0.12em] uppercase font-medium hover:bg-white/15 hover:border-white transition-all duration-300 font-sans pointer-events-auto"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[2px] transition-all duration-500 ease-in-out rounded-full ${index === currentSlide ? 'h-10 bg-gold' : 'h-4 bg-white/30 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50">Scroll</span>
        <div className="w-[1px] h-[40px] bg-white/30 relative overflow-hidden">
          <div className="absolute -top-[40px] left-0 w-[1px] h-[40px] bg-gold animate-scrollDown"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
