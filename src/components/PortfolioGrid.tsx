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

const doubledCol1: ColumnItem[] = [...col1Items, ...col1Items.map((item, i) => ({ ...item, id: `${item.id}-dup` }))];
const doubledCol2: ColumnItem[] = [...col2Items, ...col2Items.map((item, i) => ({ ...item, id: `${item.id}-dup` }))];
const doubledCol3: ColumnItem[] = [...col3Items, ...col3Items.map((item, i) => ({ ...item, id: `${item.id}-dup` }))];

const Column = ({ 
  items, 
  columnRef, 
  onPressItem,
  heldId,
  isPopped
}: { 
  items: ColumnItem[]; 
  columnRef: React.RefObject<HTMLDivElement | null>; 
  onPressItem: (e: React.PointerEvent, src: string, id: string) => void;
  heldId?: string;
  isPopped?: boolean;
}) => {
  return (
    <div 
      ref={columnRef}
      className="relative h-[280px] sm:h-[450px] md:h-[600px] overflow-hidden flex flex-col gap-2 md:gap-4 select-none"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex flex-col gap-2 md:gap-4">
        {items.map(({ src, id }) => {
          const isThisHeld = heldId === id && isPopped;
          return (
            <div 
              key={id} 
              data-img-id={id}
              onPointerDown={(e) => onPressItem(e, src, id)}
              className={`w-full aspect-square rounded-xl overflow-hidden shadow-md border border-gray-100 flex-shrink-0 bg-gray-50 cursor-pointer hover:scale-[1.015] active:scale-95 transition-all duration-300 ${
                isThisHeld ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ touchAction: 'none' }}
            >
              <img 
                src={src} 
                alt="Featured work" 
                className="w-full h-full object-cover select-none pointer-events-none" 
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

  const [heldImage, setHeldImage] = useState<{
    src: string;
    id: string;
    rect: DOMRect;
    isClosing: boolean;
    isPopped: boolean;
  } | null>(null);

  const heldImageRef = useRef(heldImage);
  heldImageRef.current = heldImage;

  const isHeldRef = useRef(false);
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);

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

      if (!isHeldRef.current) {
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

  const handleImagePress = (e: React.PointerEvent, src: string, id: string) => {
    e.preventDefault();

    const currentTarget = e.currentTarget as HTMLElement;
    const rect = currentTarget.getBoundingClientRect();

    isHeldRef.current = true;
    setHeldImage({
      src,
      id,
      rect,
      isClosing: false,
      isPopped: false
    });

    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);

    holdTimerRef.current = setTimeout(() => {
      setHeldImage(prev => {
        if (prev && prev.id === id && !prev.isClosing) {
          return { ...prev, isPopped: true };
        }
        return prev;
      });
    }, 1000);
  };

  const handleRelease = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }

    isHeldRef.current = false;

    const currentHeld = heldImageRef.current;
    if (!currentHeld) return;

    if (!currentHeld.isPopped) {
      // Released before 1-second timeout, just cancel the popup and resume scroll
      setHeldImage(null);
      return;
    }

    if (currentHeld.isClosing) return;

    // Grab exactly where the thumbnail is positioned in the scroll column right now
    const element = document.querySelector(`[data-img-id="${currentHeld.id}"]`);
    const finalRect = element ? element.getBoundingClientRect() : currentHeld.rect;

    setHeldImage({
      ...currentHeld,
      rect: finalRect,
      isClosing: true
    });
  };

  // Only listen to Up and Cancel to release the held/paused state
  useEffect(() => {
    if (!heldImage || heldImage.isClosing) return;

    const handlePointerUp = () => {
      handleRelease();
    };

    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [heldImage]);

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

    // Optimal modal size: ~75% of viewport width, maximum of 600px wide. Centered nicely.
    const size = Math.min(viewportWidth * 0.75, 600);

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
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-5xl font-bold text-black tracking-tight mb-4 text-center select-none">
            Featured work
          </h2>
        </div>

        {/* Unified Responsive 3-Column Grid */}
        <div className="grid grid-cols-3 gap-2.5 md:gap-8 items-start max-w-md md:max-w-5xl mx-auto">
          <Column items={doubledCol1} columnRef={col1Ref} onPressItem={handleImagePress} heldId={heldImage?.id} isPopped={heldImage?.isPopped} />
          <Column items={doubledCol2} columnRef={col2Ref} onPressItem={handleImagePress} heldId={heldImage?.id} isPopped={heldImage?.isPopped} />
          <Column items={doubledCol3} columnRef={col3Ref} onPressItem={handleImagePress} heldId={heldImage?.id} isPopped={heldImage?.isPopped} />
        </div>

      </div>

      {/* Dimmed backdrop background overlay */}
      {heldImage && (heldImage.isPopped || heldImage.isClosing) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: heldImage.isClosing ? 0 : 0.35 }}
          className="absolute inset-0 bg-black z-40 pointer-events-none"
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Floating Expanded Clone */}
      {heldImage && (heldImage.isPopped || heldImage.isClosing) && (
        <motion.div
          key={heldImage.id}
          initial={getRelativeRect(heldImage.rect)}
          animate={
            heldImage.isClosing
              ? {
                  ...getRelativeRect(heldImage.rect),
                  borderRadius: "12px",
                }
              : getCenteringRect()
          }
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 28,
          }}
          onAnimationComplete={() => {
            if (heldImage.isClosing) {
              setHeldImage(null);
            }
          }}
          className="absolute z-50 overflow-hidden bg-white shadow-2xl rounded-2xl cursor-grabbing select-none"
          style={{ touchAction: 'none' }}
        >
          <img
            src={heldImage.src}
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
