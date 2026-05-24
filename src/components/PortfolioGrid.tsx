import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

const column1 = [
  'https://images2.imgbox.com/a2/1d/ZqUrCRdb_o.png',
  'https://images2.imgbox.com/0d/ee/xphwdxNs_o.png',
  'https://images2.imgbox.com/df/7b/tGXSdKvm_o.png',
  'https://images2.imgbox.com/d6/cb/0ZQyqJWf_o.png',
];

const column2 = [
  'https://images2.imgbox.com/87/44/LLDef0wz_o.png',
  'https://images2.imgbox.com/3f/a0/DraFxkpK_o.png',
  'https://images2.imgbox.com/3a/bf/cNH6WLvY_o.png',
  'https://images2.imgbox.com/65/97/lAMDpU7a_o.png',
  'https://images2.imgbox.com/f5/5b/0k2T0yIF_o.png',
  'https://images2.imgbox.com/0d/3d/5czWptyq_o.png',
];

const column3 = [
  'https://images2.imgbox.com/50/0a/FXd5ZgyO_o.png',
  'https://images2.imgbox.com/46/ac/okU1jYHT_o.jpg',
  'https://images2.imgbox.com/9f/5a/oYVyP5xy_o.jpg',
  'https://images2.imgbox.com/81/4a/ptxFROEz_o.jpg',
];

interface ColumnItem {
  src: string;
  id: string;
}

const col1Items: ColumnItem[] = column1.map((src, i) => ({ src, id: `col1-${i}` }));
const col2Items: ColumnItem[] = column2.map((src, i) => ({ src, id: `col2-${i}` }));
const col3Items: ColumnItem[] = column3.map((src, i) => ({ src, id: `col3-${i}` }));

const doubledCol1: ColumnItem[] = [...col1Items, ...col1Items.map((item) => ({ ...item, id: `${item.id}-dup` }))];
const doubledCol2: ColumnItem[] = [...col2Items, ...col2Items.map((item) => ({ ...item, id: `${item.id}-dup` }))];
const doubledCol3: ColumnItem[] = [...col3Items, ...col3Items.map((item) => ({ ...item, id: `${item.id}-dup` }))];

const Column = ({ 
  items, 
  columnRef, 
  onDoubleClickItem,
  expandedId
}: { 
  items: ColumnItem[]; 
  columnRef: React.RefObject<HTMLDivElement | null>; 
  onDoubleClickItem: (e: React.PointerEvent<HTMLDivElement>, src: string, id: string) => void;
  expandedId?: string;
}) => {
  return (
    <div 
      ref={columnRef}
      className="relative h-[280px] sm:h-[450px] md:h-[600px] overflow-hidden flex flex-col gap-2 md:gap-4 select-none pointer-events-auto"
      style={{ touchAction: 'manipulation', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex flex-col gap-2 md:gap-4">
        {items.map(({ src, id }) => {
          const isThisExpanded = expandedId === id;
          return (
            <div 
              key={id} 
              data-img-id={id}
              onPointerDown={(e) => onDoubleClickItem(e, src, id)}
              className={`w-full aspect-square rounded-xl overflow-hidden shadow-md border border-gray-100 flex-shrink-0 bg-gray-50 cursor-pointer hover:scale-[1.01] transition-all duration-300 ${
                isThisExpanded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ touchAction: 'manipulation' }}
            >
              <img 
                src={src} 
                alt="Featured work" 
                className="w-full h-full object-cover select-none" 
                referrerPolicy="no-referrer"
                draggable="false"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function PortfolioGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  const columns = [
    { ref: col1Ref, speed: 0.04 },
    { ref: col2Ref, speed: 0.05, reverse: true },
    { ref: col3Ref, speed: 0.03 }
  ];

  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    id: string;
    rect: DOMRect;
    isClosing: boolean;
  } | null>(null);

  const lastTapRef = useRef<{ [key: string]: number }>({});
  const isPausedRef = useRef(false);
  isPausedRef.current = expandedImage !== null;

  // Initialize stagger positions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (col1Ref.current) col1Ref.current.scrollTop = 20;
      if (col2Ref.current) col2Ref.current.scrollTop = 120;
      if (col3Ref.current) col3Ref.current.scrollTop = 60;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // requestAnimationFrame continuous ticking loop
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 50); // Cap frame delta to prevent jumps on background tab wakes
      lastTime = now;

      if (!isPausedRef.current) {
        columns.forEach(({ ref, speed, reverse }) => {
          const el = ref.current;
          if (!el) return;

          const direction = reverse ? -1 : 1;
          el.scrollTop += direction * speed * delta;

          const half = el.scrollHeight / 2;
          if (el.scrollTop >= half) {
            el.scrollTop -= half;
          } else if (el.scrollTop <= 0) {
            el.scrollTop += half;
          }
        });
      }

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleImageDoubleClick = (e: React.PointerEvent<HTMLDivElement>, src: string, id: string) => {
    const now = Date.now();
    const lastTap = lastTapRef.current[id] || 0;

    if (now - lastTap < 300) {
      // It's a double-tap / double-click
      const rect = e.currentTarget.getBoundingClientRect();
      setExpandedImage({
        src,
        id,
        rect,
        isClosing: false,
      });
      lastTapRef.current[id] = 0; // reset
    } else {
      lastTapRef.current[id] = now;
    }
  };

  const handleCollapse = () => {
    if (!expandedImage || expandedImage.isClosing) return;

    // Grab exactly where the thumbnail is positioned in the scroll column right now
    const element = document.querySelector(`[data-img-id="${expandedImage.id}"]`);
    const finalRect = element ? element.getBoundingClientRect() : expandedImage.rect;

    setExpandedImage({
      ...expandedImage,
      rect: finalRect,
      isClosing: true
    });
  };

  const getRelativeRect = (domRect: DOMRect | null) => {
    if (!domRect || !sectionRef.current) return { top: 0, left: 0, width: 0, height: 0 };
    const parentRect = sectionRef.current.getBoundingClientRect();
    return {
      top: domRect.top - parentRect.top,
      left: domRect.left - parentRect.left,
      width: domRect.width,
      height: domRect.height,
    };
  };

  const getCenteringRect = () => {
    if (!sectionRef.current) return { top: 0, left: 0, width: 0, height: 0 };
    const parentRect = sectionRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Optimal modal size: ~75% of viewport width or height, maximum of 600px wide. Centered nicely.
    const size = Math.min(viewportWidth * 0.75, viewportHeight * 0.75, 600);

    const viewportCenterX = viewportWidth / 2;
    const viewportCenterY = viewportHeight / 2;

    const targetLeft = viewportCenterX - size / 2 - parentRect.left;
    const targetTop = viewportCenterY - size / 2 - parentRect.top;

    return {
      top: targetTop,
      left: targetLeft,
      width: size,
      height: size,
    };
  };

  return (
    <section id="works" className="py-16 md:py-36 bg-white overflow-hidden relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center gap-3">
          <h2 className="text-[32px] md:text-5xl font-bold text-black tracking-tight mb-1 text-center select-none">
            Featured work
          </h2>
          <div className="inline-flex items-center gap-2.5 bg-neutral-50 border border-neutral-100 px-4 py-2 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-100/50 select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
            </span>
            <span className="text-xs md:text-[13px] font-medium text-neutral-500 tracking-wide leading-none">
              double click and hold to see an image
            </span>
          </div>
        </div>

        {/* Unified Responsive 3-Column Grid */}
        <div className="grid grid-cols-3 gap-2.5 md:gap-8 items-start max-w-md md:max-w-5xl mx-auto">
          <Column items={doubledCol1} columnRef={col1Ref} onDoubleClickItem={handleImageDoubleClick} expandedId={expandedImage?.id} />
          <Column items={doubledCol2} columnRef={col2Ref} onDoubleClickItem={handleImageDoubleClick} expandedId={expandedImage?.id} />
          <Column items={doubledCol3} columnRef={col3Ref} onDoubleClickItem={handleImageDoubleClick} expandedId={expandedImage?.id} />
        </div>

      </div>

      {/* Dimmed backdrop background overlay */}
      {expandedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: expandedImage.isClosing ? 0 : 0.35 }}
          onClick={handleCollapse}
          className="absolute inset-0 bg-black z-40 cursor-pointer"
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Floating Expanded Clone */}
      {expandedImage && (
        <motion.div
          key={expandedImage.id}
          initial={getRelativeRect(expandedImage.rect)}
          animate={
            expandedImage.isClosing
              ? {
                  ...getRelativeRect(expandedImage.rect),
                  borderRadius: "12px",
                }
              : getCenteringRect()
          }
          style={{ touchAction: 'none' }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 28,
          }}
          onAnimationComplete={() => {
            if (expandedImage.isClosing) {
              setExpandedImage(null);
            }
          }}
          onClick={handleCollapse}
          className="absolute z-50 overflow-hidden bg-white shadow-2xl rounded-2xl cursor-pointer select-none"
        >
          <img
            src={expandedImage.src}
            alt="Expanded featured work"
            className="w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
            draggable="false"
          />
        </motion.div>
      )}
    </section>
  );
}
