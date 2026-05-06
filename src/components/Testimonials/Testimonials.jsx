import React from 'react';

const testimonials = [
  { text: "Sridharani is an absolute artist. My bridal look was everything I dreamed of and more. She understood my vision perfectly and executed it flawlessly. I cried happy tears!", name: "Priya Sharma", role: "Bride, Mumbai", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=70" },
  { text: "The makeup lasted through a full 10-hour wedding without a single touch-up needed. Sridharani's skill with HD makeup is unparalleled. Highly recommend for any bride!", name: "Neha Kapoor", role: "Bride, Delhi", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=70" },
  { text: "I was so nervous about my engagement look but Sridharani made me feel so comfortable and confident. She's not just talented — she's a dream to work with!", name: "Meera Nair", role: "Client, Bangalore", img: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=80&q=70" },
  { text: "Booked Sridharani for my sister's wedding and she made the entire bridal party look stunning. Professional, punctual, and incredibly talented. 10/10!", name: "Ritu Agarwal", role: "Client, Pune", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=70" },
  { text: "The before and after was just incredible. I've never felt more beautiful in my life. Sridharani has magic hands. My photos are absolutely stunning!", name: "Ananya Singh", role: "Bride, Chennai", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=70" },
  { text: "Worth every single rupee! The makeup lasted through all the ceremonies, the dancing, and even some emotional tears. I'll book Sridharani again and again!", name: "Divya Menon", role: "Client, Hyderabad", img: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=80&q=70" },
];

const Testimonials = () => {
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-charcoal py-20 px-6 md:px-16" id="testimonials">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="block text-[0.68rem] tracking-[0.3em] uppercase text-gold-light font-medium mb-3">
            ✦ Client Love
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-white font-serif">
            What Brides <em className="italic text-blush-light">Say</em>
          </h2>
          <div className="w-[40px] h-[1px] bg-gold mx-auto mt-[1.4rem] mb-[2.4rem]"></div>
        </div>

        <div className="overflow-hidden relative mt-12 group">
          <div className="flex gap-6 animate-testimonialsScroll w-max hover:[animation-play-state:paused]">
            {allTestimonials.map((t, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 min-w-[340px] max-w-[340px] backdrop-blur-md"
              >
                <div className="text-gold text-[0.8rem] mb-4 tracking-[0.1em]">★★★★★</div>
                <div className="text-[1rem] text-white/70 leading-[1.7] mb-6 italic font-cormorant">
                  "{t.text}"
                </div>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-[42px] h-[42px] rounded-full object-cover border-2 border-gold" loading="lazy" />
                  <div>
                    <div className="font-medium text-white text-[0.88rem]">{t.name}</div>
                    <div className="text-[0.72rem] text-white/40 tracking-[0.05em]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
