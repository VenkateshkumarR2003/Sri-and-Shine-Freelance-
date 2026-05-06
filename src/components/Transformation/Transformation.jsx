import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const Transformation = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - containerRect.left;
    const position = Math.max(2, Math.min(98, (x / containerRect.width) * 100));
    
    setSliderPosition(position);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="bg-charcoal py-20 px-6 md:px-16" id="transformation">
      <div className="max-w-[900px] mx-auto">
        
        <div className="text-center mb-12">
          <span className="block text-[0.68rem] tracking-[0.3em] uppercase text-gold-light font-medium mb-3">
            ✦ Transformation
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-white font-serif">
            Before <em className="italic text-blush-light">&amp; After</em>
          </h2>
          <div className="w-[40px] h-[1px] bg-gold mx-auto mt-[1.4rem] mb-[2.4rem]"></div>
          <p className="text-white/50 text-[0.88rem] -mt-4">Drag the slider to reveal the transformation</p>
        </div>

        <div 
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video cursor-ew-resize select-none shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Before Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=80&fm=webp')" }}
          ></div>
          
          {/* After Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&q=80&fm=webp')",
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          ></div>
          
          {/* Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <ArrowLeftRight size={14} className="text-charcoal" />
            </div>
          </div>
          
          {/* Labels */}
          <span className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-[0.65rem] tracking-[0.2em] uppercase rounded-full backdrop-blur-sm">
            Before
          </span>
          <span className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white text-[0.65rem] tracking-[0.2em] uppercase rounded-full backdrop-blur-sm">
            After
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Transformation;
