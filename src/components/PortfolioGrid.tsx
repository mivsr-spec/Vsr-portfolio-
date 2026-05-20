import { motion } from 'motion/react';
import { ImagePlus } from 'lucide-react';

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

const ScrollingColumn = ({ images, duration, reverse = false, staggerOffset = "0px" }: { images: string[], duration: number, reverse?: boolean, staggerOffset?: string }) => {
  return (
    <div className="relative h-[600px] overflow-hidden flex flex-col gap-4">
      <motion.div
        animate={{
          y: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ y: staggerOffset }}
        className="flex flex-col gap-4"
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="w-full aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0 bg-gray-50">
            <img 
              src={src} 
              alt={`Work ${i}`} 
              className="w-full h-full object-cover transition-all duration-500" 
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MobileScrollingColumn = ({ images, duration, reverse = false }: { images: string[], duration: number, reverse?: boolean }) => {
  return (
    <div className="relative h-[320px] overflow-hidden flex flex-col gap-2">
      <motion.div
        animate={{
          y: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-2"
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="w-full aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 bg-gray-50">
            <img 
              src={src} 
              alt={`Work ${i}`} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function PortfolioGrid() {
  return (
    <section id="works" className="py-16 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Desktop Version (hidden on mobile, matches original completely) */}
        <div className="hidden md:block">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black tracking-tight mb-4 text-center">Featured work</h2>
          </div>

          <div className="grid grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            <ScrollingColumn images={column1} duration={25} staggerOffset="0px" />
            <ScrollingColumn images={column2} duration={20} reverse={true} staggerOffset="-50px" />
            <ScrollingColumn images={column3} duration={30} staggerOffset="50px" />
          </div>
        </div>

        {/* Mobile Version (visible on mobile only, custom 3-column auto-scrolling grid) */}
        <div className="block md:hidden">
          <div className="text-center mb-10">
            <h2 className="text-[32px] font-bold text-black tracking-tight text-center">Featured work</h2>
          </div>

          <div className="grid grid-cols-3 gap-2.5 items-start max-w-md mx-auto">
            <MobileScrollingColumn images={column1} duration={14} />
            <MobileScrollingColumn images={column2} duration={11} reverse={true} />
            <MobileScrollingColumn images={column3} duration={16} />
          </div>
        </div>

      </div>
    </section>
  );
}
