import { motion } from 'motion/react';
import profileImg from '../assets/images/regenerated_image_1778855762789.jpeg';

export default function Profile() {
  return (
    <section id="about" className="py-16 md:py-36 bg-white overflow-hidden">
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
            <h2 className="text-4xl md:text-[4.5rem] font-normal text-black leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8 font-['Arial']">
              Hi, I am'<br />
              Vikram Singh Rawat
            </h2>

            {/* Description */}
            <div className="space-y-6 mb-8 md:mb-10 max-w-xl">
              <p className="text-[16px] md:text-[18px] text-[#555555] leading-relaxed">
                I’m a Visual Marketing Designer, Crafting high-impact visuals that drive engagement and growth. I specialize in turning brand strategies into polished, pixel-perfect designs. I deliver tailored visual solutions that align with your business goals. Let’s create designs that not only look exceptional but perform even better.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 max-w-lg lg:flex lg:flex-wrap">
              <div className="bg-[#f9f9f9] rounded-[1rem] md:rounded-2xl py-3 px-3.5 md:py-6 md:px-8 min-w-0 lg:min-w-[200px]">
                <h3 className="text-lg xs:text-xl md:text-3xl font-normal text-black mb-0.5 md:mb-1 font-['Arial']">3+ years</h3>
                <p className="text-[11px] xs:text-[12px] md:text-[15px] text-gray-500 font-normal font-sans mt-[4px] md:mt-[8px]">Design experience</p>
              </div>
              <div className="bg-[#f9f9f9] rounded-[1rem] md:rounded-2xl py-3 px-3.5 md:py-6 md:px-8 min-w-0 lg:min-w-[200px]">
                <h3 className="text-lg xs:text-xl md:text-3xl font-normal text-black mb-0.5 md:mb-1 font-['Arial']">100+</h3>
                <p className="text-[11px] xs:text-[12px] md:text-[15px] text-gray-500 font-normal font-sans mt-[4px] md:mt-[7px]">Project delivered</p>
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
            <div className="aspect-[4/5] relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100 group w-full max-w-[260px] xs:max-w-[300px] sm:max-w-md lg:max-w-sm">
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
