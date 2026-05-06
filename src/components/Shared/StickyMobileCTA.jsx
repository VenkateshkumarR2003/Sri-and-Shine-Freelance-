import React from 'react';
import { Calendar } from 'lucide-react';

const StickyMobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-100 p-4 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] gpu-accelerate">
      <button className="w-full bg-brand-text text-white font-medium py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-soft relative overflow-hidden group active:scale-95 transition-transform duration-200">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <Calendar size={20} />
        <span>Book Your Slot Now</span>
      </button>
    </div>
  );
};

export default StickyMobileCTA;
