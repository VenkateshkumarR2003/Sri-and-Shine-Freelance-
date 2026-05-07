import React from 'react';
import { Quote } from 'lucide-react';

import mainImg from '../../assets/images/about/main.jpg';
import floatingImg from '../../assets/images/about/1000235547.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Images & Badge */}
          <div className="relative">
            <img 
              src={mainImg} 
              alt="Gunasekaran — Makeup Artist" 
              className="w-full h-[400px] lg:h-[580px] object-cover rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.12)] block"
              loading="eager"
            />
            <img 
              src={floatingImg} 
              alt="Work" 
              className="hidden lg:block absolute -bottom-8 -right-8 w-[180px] h-[180px] object-cover rounded-xl border-[6px] border-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] animate-float-slow"
              loading="lazy"
            />
            <div className="hidden md:block absolute top-8 -left-6 bg-charcoal text-white p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-center min-w-[120px] animate-float-slow [animation-delay:1s]">
              <strong className="block font-serif text-[1.8rem] text-gold mb-1 leading-none">2+</strong>
              <span className="text-[0.7rem] tracking-[0.1em] uppercase text-white/60 leading-tight">Years of<br/>Experience</span>
            </div>
            {/* Floating Quote */}
            <div className="absolute -right-6 top-20 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[220px] hidden md:block animate-float-slow [animation-delay:2s]">
              <Quote className="text-gold/40 mb-2" size={24} />
              <p className="text-[0.8rem] italic text-text-muted leading-relaxed font-cormorant">
                "She didn't just do my makeup, she made me feel like the most beautiful version of myself."
              </p>
              <span className="block mt-3 text-[0.65rem] uppercase tracking-wider text-charcoal font-medium">— Sarah M.</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-6">
            <span className="block text-[0.68rem] tracking-[0.3em] uppercase text-gold font-medium mb-3">
              ✦ My Story
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-charcoal font-serif">
              Meet <em className="italic text-blush-dark">Gunasekaran</em>
            </h2>
            <div className="w-[40px] h-[1px] bg-gold mt-[1.4rem] mb-[2.4rem]"></div>
            
            <p className="text-[1.1rem] leading-[1.6] text-charcoal mb-6 font-cormorant italic text-xl border-l-2 border-gold pl-4 py-1">
              "Every bride I work with becomes a story I carry forever."
            </p>

            <p className="text-[0.98rem] leading-[1.8] text-text-muted mb-5">
              I'm Sridharani — a Karur-based bridal and editorial makeup artist who believes every face tells a story. My role is to amplify your natural beauty and help you step into your most radiant self.
            </p>
            <p className="text-[0.98rem] leading-[1.8] text-text-muted mb-5">
              Trained at the prestigious VLCC Academy and certified in airbrush artistry, I've had the honour of working with 300+ brides across India. Whether it's a minimalist dewy look or a statement bridal glam — I create looks that last through every moment, every tear, every dance.
            </p>
            <p className="text-[0.98rem] leading-[1.8] text-text-muted mb-8">
              My kit is exclusively stocked with MAC, Huda Beauty, Charlotte Tilbury, and Dior — because you deserve only the finest on your most important day.
            </p>

            {/* Signature Image Placeholder - using a cursive font as a fallback if no image */}
            <div className="font-cormorant italic text-3xl text-charcoal mb-6">
              Sridharani Gunasekaran
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10 flex-wrap pt-8 border-t border-border">
              <div className="text-left">
                <div className="font-serif text-[2.2rem] text-charcoal leading-none mb-1">
                  30<span className="text-gold">+</span>
                </div>
                <div className="text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mt-1">Happy Clients</div>
              </div>
              <div className="text-left">
                <div className="font-serif text-[2.2rem] text-charcoal leading-none mb-1">
                  2<span className="text-gold">+</span>
                </div>
                <div className="text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mt-1">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="font-serif text-[2.2rem] text-charcoal leading-none mb-1">
                  15<span className="text-gold">+</span>
                </div>
                <div className="text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mt-1">Cities Served</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
