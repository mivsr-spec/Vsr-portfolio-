import { motion } from 'motion/react';
import { ImagePlus } from 'lucide-react';

const column1 = [
  '/src/assets/images/regenerated_image_1779102111838.png',
  '/src/assets/images/regenerated_image_1779102115538.png',
  '/src/assets/images/regenerated_image_1779102119983.png',
  '/src/assets/images/regenerated_image_1779102091925.png',
];

const column2 = [
  '/src/assets/images/regenerated_image_1779102751904.png',
  '/src/assets/images/regenerated_image_1779102756934.png',
  '/src/assets/images/regenerated_image_1779102755872.png',
  'https://images2.imgbox.com/33/87/jDgOn8Ed_o.png',
  '/src/assets/images/regenerated_image_1779102753944.png',
  '/src/assets/images/regenerated_image_1779118398176.png',
];

const column3 = [
  '/src/assets/images/regenerated_image_1779116717734.jpg',
  '/src/assets/images/regenerated_image_1779116715702.jpg',
  '/src/assets/images/regenerated_image_1779115155893.png',
  '/src/assets/images/regenerated_image_1779116713948.jpg',
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

export default function PortfolioGrid() {
  return (
    <section id="works" className="py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black tracking-tight mb-4 text-center">Featured work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          <ScrollingColumn images={column1} duration={25} staggerOffset="0px" />
          <ScrollingColumn images={column2} duration={20} reverse={true} staggerOffset="-50px" />
          <ScrollingColumn images={column3} duration={30} staggerOffset="50px" />
        </div>
      </div>
    </section>
  );
}
