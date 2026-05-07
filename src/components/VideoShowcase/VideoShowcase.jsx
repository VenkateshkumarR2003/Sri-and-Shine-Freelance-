import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Import local videos
import video1 from '../../assets/images/videos/shoot (1).mp4';
import video2 from '../../assets/images/videos/VID-20260506-WA0054.mp4';
import video3 from '../../assets/images/videos/VID-20260506-WA0061.mp4';
import video4 from '../../assets/images/videos/VID-20260506-WA0121.mp4';
import video5 from '../../assets/images/videos/VID-20260506-WA0137.mp4';
import video6 from '../../assets/images/videos/VID-20260506-WA0146.mp4';
import video7 from '../../assets/images/videos/VID-20260506-WA0171.mp4';
import video8 from '../../assets/images/videos/VID-20260506-WA0185.mp4';
import video9 from '../../assets/images/videos/VID-20260506-WA0191.mp4';

// Posters for faster perceived loading
import p1 from '../../assets/images/bridal/IMG-20260506-WA0037.jpg';
import p2 from '../../assets/images/bridal/IMG-20260506-WA0108.jpg';
import p3 from '../../assets/images/bridal/IMG-20260506-WA0123.jpg';
import p4 from '../../assets/images/engagement/IMG-20260506-WA0063.jpg';
import p5 from '../../assets/images/engagement/IMG-20260506-WA0140.jpg';
import p6 from '../../assets/images/fashion and editorial/IMG-20260506-WA0166.jpg';
import p7 from '../../assets/images/fashion and editorial/IMG-20260506-WA0172.jpg';
import p8 from '../../assets/images/fashion and editorial/shoot (2).jpg';
import p9 from '../../assets/images/fashion and editorial/shoot (4).jpg';

const showcaseVideos = [
  { id: 1, src: video1, poster: p1, title: "Bridal Shoot", category: "Bridal", float: true },
  { id: 2, src: video2, poster: p2, title: "Soft Bridal Glow", category: "Bridal", float: false },
  { id: 3, src: video3, poster: p3, title: "Engagement Elegance", category: "Engagement", float: true },
  { id: 4, src: video4, poster: p4, title: "Editorial Glam", category: "Fashion", float: false },
  { id: 5, src: video5, poster: p5, title: "Party Ready", category: "Event", float: true },
  { id: 6, src: video6, poster: p6, title: "Subtle Radiance", category: "Bridal", float: false },
  { id: 7, src: video7, poster: p7, title: "Classic Beauty", category: "Bridal", float: true },
  { id: 8, src: video8, poster: p8, title: "Modern Glamour", category: "Fashion", float: false },
  { id: 9, src: video9, poster: p9, title: "Perfect Finish", category: "Event", float: true },
];

const VideoShowcase = () => {
  const [modalVideo, setModalVideo] = useState(null);

  // Duplicating the array to allow for a seamless infinite scroll loop
  const infiniteVideos = [...showcaseVideos, ...showcaseVideos, ...showcaseVideos];

  return (
    <section className="py-24 bg-[#FAF9F7] relative overflow-hidden" id="video-showcase">
      {/* Soft Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="block text-[0.68rem] tracking-[0.3em] uppercase text-[#d4af37] font-medium mb-3">
            ✦ Transformation
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-charcoal font-serif">
            Art in <em className="italic text-[#d4af37]">Motion</em>
          </h2>
          <div className="w-[40px] h-[1px] bg-[#d4af37] mx-auto mt-[1.4rem] mb-[1.4rem]"></div>
          <p className="text-[0.95rem] text-[#7a7a7a] font-light tracking-wide">
            Real moments. Real beauty. Captured in motion.
          </p>
        </motion.div>
      </div>

      {/* Cinematic Edge Fade Mask */}
      <div
        className="relative w-full z-10 py-6"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex gap-6 md:gap-8 w-max px-[5vw] animate-videoScroll hover:[animation-play-state:paused] overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-hide">
          {infiniteVideos.map((video, index) => {
            const isFeatured = index % showcaseVideos.length === 0;
            return (
              <motion.div
                key={`${video.id}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
                className={`relative group cursor-pointer rounded-xl overflow-hidden shrink-0 shadow-[0_15px_35px_rgba(0,0,0,0.06)] bg-charcoal snap-center ${isFeatured ? 'w-[180px] md:w-[200px] lg:w-[240px] aspect-[9/16] shadow-[0_20px_40px_rgba(0,0,0,0.12)]' : 'w-[140px] md:w-[160px] lg:w-[200px] aspect-[9/16]'
                  }`}
                onClick={() => setModalVideo(video)}
              >
                {/* Floating Effect Wrapper */}
                <motion.div
                  className="w-full h-full"
                  animate={video.float ? { y: [0, -6, 0] } : {}}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  <video
                    src={video.src}
                    poster={video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    controlsList="nodownload"
                    onCanPlay={(e) => e.target.play()}
                    className="w-full h-full object-cover scale-105 group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                  ></video>

                  {/* Default subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

                  {/* Hover clear state overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-[0.6rem] tracking-[0.15em] uppercase font-medium backdrop-blur-md mb-3 w-max translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {video.category}
                    </span>
                    <h3 className="text-white font-serif text-[1.4rem] tracking-wide translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setModalVideo(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black hover:border-transparent border border-white/20 transition-all duration-300 z-50"
              onClick={() => setModalVideo(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[420px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-charcoal"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={modalVideo.src}
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              ></video>

              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none flex flex-col items-start">
                <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[0.65rem] tracking-[0.15em] uppercase font-medium backdrop-blur-md mb-2">
                  {modalVideo.category}
                </span>
                <h3 className="text-white font-serif text-[1.5rem] tracking-wide shadow-black drop-shadow-md">
                  {modalVideo.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcase;
