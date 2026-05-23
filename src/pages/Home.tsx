import { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import PortfolioGrid from '../components/PortfolioGrid';
import ContactSection from '../components/ContactSection';
import HowItWorks from '../components/HowItWorks';
import LatestProjects from '../components/LatestProjects';

export default function Home() {
  const projectsWrapperRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState<string | number>('0px');

  useEffect(() => {
    const handleResize = () => {
      if (projectsWrapperRef.current) {
        const height = projectsWrapperRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        if (height > viewportHeight) {
          setStickyTop(`${viewportHeight - height}px`);
        } else {
          setStickyTop('0px');
        }
      }
    };

    // Run measurement initially
    handleResize();

    // Set up ResizeObserver to dynamic update if content loads or changes size
    const observer = new ResizeObserver(() => {
      handleResize();
    });

    if (projectsWrapperRef.current) {
      observer.observe(projectsWrapperRef.current);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="overflow-visible">
      <Hero />
      <div className="relative z-10 bg-white overflow-visible">
        <Profile />
        <PortfolioGrid />
        <Services />
        <HowItWorks />
        
        {/* Overlapping Sticky Scroll Wrapper */}
        <div className="relative overflow-visible">
          {/* Latest Projects - Sticky Base Layer */}
          <div 
            ref={projectsWrapperRef} 
            className="sticky transition-all duration-75 overflow-visible"
            style={{ 
              top: stickyTop,
              zIndex: 10,
            }}
          >
            <LatestProjects />
          </div>
          
          {/* Contact Section - Sticky Overlap Layer */}
          <div className="sticky top-0 z-20 overflow-visible bg-[#0a0a0a]">
            <ContactSection />
          </div>
        </div>

        <Carousel />
      </div>
    </main>
  );
}
