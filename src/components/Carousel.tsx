import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

const carouselItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://images2.imgbox.com/aa/e4/1Ff5uTOr_o.jpg', 
    alt: 'Floral arrangement',
  },
  {
    id: 2,
    type: 'product',
    src: 'https://images2.imgbox.com/39/df/Iq3Z5796_o.jpg',
    title: 'Margherita Pizza',
    description: 'Fresh mozzarella, San Marzano tomatoes, and hand-torn basil on a crispy wood-fired crust.',
    tag: 'Recommended',
  },
  {
    id: 3,
    type: 'product',
    src: 'https://images2.imgbox.com/39/df/Iq3Z5796_o.jpg',
    title: 'Pasta Bolognese',
    description: 'Al dente spaghetti in rich beef ragu layered with herbs, tomato sauce, and parmesan.',
    tag: 'Best Seller',
  },
  {
    id: 4,
    type: 'logo',
    bgColor: '#004d2e', // Deep forest green
    logoUrl: 'https://api.iconify.design/mdi:chevron-up.svg?color=white', // Replace with similar abstract white logo
  },
  {
    id: 5,
    type: 'logo',
    bgColor: '#e2e8f0', // Light slate
    logoUrl: 'https://images2.imgbox.com/56/74/CgB4sT2z_o.png', // Or some abstract colored sphere
  }
];

// Placeholder images for now since we don't have the exact ones. Let's use some nice ones or unsplash.
// Actually I will use some generic unsplash images that fit the description.

const Carousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<string | null>(null);
  
  const xPos = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const currentX = useRef(0);
  const isPausedRef = useRef(false);
  const rAF = useRef<number>();
  const contentWidth = useRef(0);

  const items = [
    {
      id: 'img1',
      content: (
        <div className="w-[200px] h-[180px] md:w-[320px] md:h-[280px] shrink-0 overflow-hidden mx-2 md:mx-4 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 rounded-2xl md:rounded-3xl bg-white group">
          <img className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images2.imgbox.com/65/97/lAMDpU7a_o.png" alt="Design 1" draggable="false" />
        </div>
      )
    },
    {
      id: 'img2',
      content: (
        <div className="w-[180px] h-[180px] md:w-[260px] md:h-[280px] shrink-0 overflow-hidden mx-2 md:mx-4 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 rounded-2xl md:rounded-3xl bg-white group">
          <img className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images2.imgbox.com/76/b2/DeIwlj4e_o.png" alt="Design 2" draggable="false" />
        </div>
      )
    },
    {
      id: 'img3',
      content: (
        <div className="w-[220px] h-[180px] md:w-[340px] md:h-[280px] shrink-0 overflow-hidden mx-2 md:mx-4 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 rounded-2xl md:rounded-3xl bg-white group">
          <img className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images2.imgbox.com/89/e8/DxkYW6FC_o.png" alt="Design 3" draggable="false" />
        </div>
      )
    },
    {
      id: 'img4',
      content: (
        <div className="w-[190px] h-[180px] md:w-[280px] md:h-[280px] shrink-0 overflow-hidden mx-2 md:mx-4 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 rounded-2xl md:rounded-3xl bg-white group">
          <img className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images2.imgbox.com/fd/0c/2DTfYVvk_o.png" alt="Design 4" draggable="false" />
        </div>
      )
    },
    {
      id: 'img5',
      content: (
        <div className="w-[200px] h-[180px] md:w-[320px] md:h-[280px] shrink-0 overflow-hidden mx-2 md:mx-4 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 rounded-2xl md:rounded-3xl bg-white group">
          <img className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images2.imgbox.com/3f/a0/DraFxkpK_o.png" alt="Design 5" draggable="false" />
        </div>
      )
    },
    {
      id: 'img6',
      content: (
        <div className="w-[180px] h-[180px] md:w-[260px] md:h-[280px] shrink-0 overflow-hidden mx-2 md:mx-4 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 rounded-2xl md:rounded-3xl bg-white group">
          <img className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images2.imgbox.com/0d/3d/5czWptyq_o.png" alt="Design 6" draggable="false" />
        </div>
      )
    },
    {
      id: 'img9',
      content: (
        <div className="w-[190px] h-[180px] md:w-[300px] md:h-[280px] shrink-0 overflow-hidden mx-2 md:mx-4 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 rounded-2xl md:rounded-3xl bg-white group">
          <img className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images2.imgbox.com/f5/5b/0k2T0yIF_o.png" alt="Design 9" draggable="false" />
        </div>
      )
    }
  ];

  const baseItems = [...items, ...items];

  const setActiveItemState = useCallback((id: string | null) => {
    activeItemRef.current = id;
    setActiveItem(id);
  }, []);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Main animation and logic loop
  useEffect(() => {
    if (setRef.current) {
      contentWidth.current = setRef.current.offsetWidth;
      xPos.current = -contentWidth.current;
    }

    const loop = () => {
      // Auto-scroll logic
      if (!isPausedRef.current && !isDragging.current && contentWidth.current > 0) {
        xPos.current -= 1.5;
      }

      // Seamless infinite loop wrap constraints
      if (contentWidth.current > 0) {
        if (xPos.current <= -contentWidth.current * 2) {
          xPos.current += contentWidth.current;
        } else if (xPos.current >= 0) {
          xPos.current -= contentWidth.current;
        }
      }

      // Update transform cleanly
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${xPos.current}px, 0, 0)`;
      }

      rAF.current = requestAnimationFrame(loop);
    };

    rAF.current = requestAnimationFrame(loop);

    const handleResize = () => {
      if (setRef.current) contentWidth.current = setRef.current.offsetWidth;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rAF.current!);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
    const deltaX = clientX - startX.current;
    const deltaY = clientY - startY.current;

    // Detect if user is intentionally scrolling vertically (stop dragging carousel)
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 10) {
      isDragging.current = false;
      setActiveItemState(null);
      setIsPaused(false);
      return;
    }

    if (Math.abs(deltaX) > 5) {
      if (activeItemRef.current) {
        setActiveItemState(null);
        setIsPaused(false);
      }
      if (e.cancelable) e.preventDefault();
    }
    
    xPos.current = currentX.current + deltaX;
  }, [setActiveItemState]);

  const handleDragEnd = useCallback(() => {
    isDragging.current = false;
    setActiveItemState(null);
    setIsPaused(false);
  }, [setActiveItemState]);

  useEffect(() => {
    // Global event listeners to catch events outside the element bounds
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDragMove, { passive: false });
    window.addEventListener('touchend', handleDragEnd);
    window.addEventListener('touchcancel', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
      window.removeEventListener('touchcancel', handleDragEnd);
    };
  }, [handleDragMove, handleDragEnd]);

  // Handle manual scroll wheel interaction
  const handleWheel = useCallback((e: WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      xPos.current -= e.deltaX;
      
      if (activeItemRef.current) {
        setActiveItemState(null);
        setIsPaused(false);
      }
    }
  }, [setActiveItemState]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  const handleItemPress = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    isDragging.current = true;
    startX.current = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    startY.current = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    currentX.current = xPos.current;

    setIsPaused(true);
    setActiveItemState(id);
  };

  const renderItemWrap = (item: typeof items[0], uniqueId: string) => {
    const isActive = activeItem === uniqueId;
    return (
      <div 
        key={uniqueId} 
        className={`flex-shrink-0 transition-transform duration-300 ease-out will-change-transform cursor-grab active:cursor-grabbing select-none origin-center ${isActive ? 'scale-[1.08] z-20 motion-reduce:scale-100 drop-shadow-2xl' : 'scale-100 z-0'}`}
        onMouseDown={(e) => handleItemPress(e, uniqueId)}
        onTouchStart={(e) => handleItemPress(e, uniqueId)}
        onDragStart={(e) => e.preventDefault()}
        tabIndex={0}
        onKeyDown={(e) => {
          if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (isActive) {
              setActiveItemState(null);
              setIsPaused(false);
            } else {
              setActiveItemState(uniqueId);
              setIsPaused(true);
            }
          }
        }}
      >
        {item.content}
      </div>
    );
  };

  return (
    <section className="py-12 bg-black overflow-hidden relative">
      {/* Adding fade masks on the edges for a smoother look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div 
        ref={containerRef}
        className="flex w-[max-content] will-change-transform touch-pan-y"
      >
        <div ref={setRef} className="flex">
          {baseItems.map((item, index) => renderItemWrap(item, `set1-${item.id}-${index}`))}
        </div>
        <div className="flex">
          {baseItems.map((item, index) => renderItemWrap(item, `set2-${item.id}-${index}`))}
        </div>
        <div className="flex">
          {baseItems.map((item, index) => renderItemWrap(item, `set3-${item.id}-${index}`))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
