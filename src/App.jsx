import React, { useEffect } from 'react';
import Navbar from './components/Shared/Navbar';
import Hero from './components/Hero/Hero';
import BrandMarquee from './components/BrandMarquee/BrandMarquee';
import Portfolio from './components/Portfolio/Portfolio';
import Transformation from './components/Transformation/Transformation';
import VideoShowcase from './components/VideoShowcase/VideoShowcase';
import Services from './components/Services/Services';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Shared/Footer';
import FloatingWhatsApp from './components/Shared/FloatingWhatsApp';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-text selection:bg-blush selection:text-text">
      <Navbar />
      
      <main>
        <Hero />
        <BrandMarquee />
        <Portfolio />
        <Transformation />
        <VideoShowcase />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
