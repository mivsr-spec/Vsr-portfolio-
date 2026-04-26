import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <p className="text-lg md:text-xl font-medium tracking-widest uppercase mb-2 opacity-80">
            VIKRAM SINGH RAWAT
          </p>
          <h1 className="text-7xl md:text-9xl font-bold font-display leading-none tracking-tighter mb-4">
            Visual Marketing Designer
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 mb-8">
            Turning your vision into visuals
          </p>
          <div className="h-1 w-24 bg-orange-500 mb-8"></div>
        </motion.div>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-bg-primary" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 80%)' }}></div>
    </section>
  );
}
