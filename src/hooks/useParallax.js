import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useParallax(distance = 100, isMobileDisabled = true) {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rawY = useTransform(scrollY, [0, 1000], [0, distance]);
  
  // Use spring for "Apple-like" smoothness instead of raw scroll values
  const smoothY = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return isMobileDisabled && isMobile ? 0 : smoothY;
}
