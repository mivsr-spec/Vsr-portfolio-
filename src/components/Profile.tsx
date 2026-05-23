import { motion } from 'motion/react';
import profileImg from '../assets/images/regenerated_image_1778855762789.jpeg';

export default function Profile() {
  return (
    <section id="about" className="py-16 md:py-36 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Tag */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f6f6f6] text-[13px] font-medium text-black mb-6 md:mb-8">
              About Me
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-[4.5rem] font-normal text-black leading-[1.1] md:leading-[1.05] tracking-tight mb-5 font-['Arial']">
              Hi, I am'<br />
              Vikram Singh Rawat
            </h2>

            {/* Software Icons Row */}
            <div className="flex items-center gap-3.5 mb-7 md:mb-9">
              {/* Photoshop */}
              <div 
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border-[2.5px] md:border-[3px] border-black rounded-[10px] bg-transparent select-none cursor-default hover:scale-105 transition-transform duration-200"
                title="Adobe Photoshop"
              >
                <span className="text-[15px] md:text-[16px] font-bold text-black font-sans tracking-tight leading-none">
                  Ps
                </span>
              </div>

              {/* InDesign */}
              <div 
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border-[2.5px] md:border-[3px] border-black rounded-[10px] bg-transparent select-none cursor-default hover:scale-105 transition-transform duration-200"
                title="Adobe InDesign"
              >
                <span className="text-[15px] md:text-[16px] font-bold text-black font-sans tracking-tight leading-none">
                  Id
                </span>
              </div>

              {/* Illustrator */}
              <div 
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border-[2.5px] md:border-[3px] border-black rounded-[10px] bg-transparent select-none cursor-default hover:scale-105 transition-transform duration-200"
                title="Adobe Illustrator"
              >
                <span className="text-[15px] md:text-[16px] font-bold text-black font-sans tracking-tight leading-none">
                  Ai
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6 mb-8 md:mb-10 max-w-xl">
              <p className="text-[16px] md:text-[18px] text-[#555555] leading-relaxed">
                I’m a Visual Marketing Designer creating custom, original visuals that support brand growth and engagement. I turn strategy into polished, pixel-perfect design, with no template work, just tailored solutions built around your goals. From branding and social media to product visuals and marketing assets, I deliver design that looks professional, communicates clearly, and performs effectively.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-xl w-full">
              {/* Card 1 */}
              <div className="bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-8 flex flex-col justify-between h-[150px] sm:h-[180px] md:h-[220px] border border-neutral-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.012)] relative">
                <div className="flex justify-between items-start">
                  <span className="text-3xl sm:text-4xl md:text-[56px] font-medium text-black tracking-tighter leading-none font-sans">
                    60+
                  </span>
                  <span className="text-[10px] md:text-xs font-mono font-medium text-neutral-400 mt-1">
                    01
                  </span>
                </div>
                <div className="text-right self-end mt-auto">
                  <p className="text-[11px] sm:text-[14px] md:text-[17px] text-black font-semibold leading-[1.3] tracking-tight font-sans">
                    Successful projects<br />completed
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-8 flex flex-col justify-between h-[150px] sm:h-[180px] md:h-[220px] border border-neutral-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.012)] relative">
                <div className="flex justify-between items-start">
                  <span className="text-3xl sm:text-4xl md:text-[56px] font-medium text-black tracking-tighter leading-none font-sans">
                    95%
                  </span>
                  <span className="text-[10px] md:text-xs font-mono font-medium text-neutral-400 mt-1">
                    02
                  </span>
                </div>
                <div className="text-right self-end mt-auto">
                  <p className="text-[11px] sm:text-[14px] md:text-[17px] text-black font-semibold leading-[1.3] tracking-tight font-sans">
                    Customer<br />satisfaction rate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="aspect-[4/5] relative rounded-none overflow-hidden bg-gray-100 group w-full max-w-[260px] xs:max-w-[300px] sm:max-w-md lg:max-w-sm">
              <img
                src={profileImg}
                alt="Vikram Singh Rawat"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
