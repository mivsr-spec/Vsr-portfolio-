import { motion } from 'motion/react';

const services = [
  {
    title: 'Illustration & Brand Visual Design',
    subtitle: 'Professional branding and identity solutions.',
    image: 'https://images2.imgbox.com/ce/7a/KsYZHJFR_o.png',
  },
  {
    title: 'Social Media & Marketing Design',
    subtitle: 'Engaging content for digital marketing.',
    image: 'https://images2.imgbox.com/46/ac/okU1jYHT_o.jpg',
  },
  {
    title: 'Mockup & Product Presentation Design',
    subtitle: 'Stunning visualizations for your products.',
    image: 'https://images2.imgbox.com/59/b0/dXezGTGJ_o.png',
  },
  {
    title: 'Photo Editing & Enhancement',
    subtitle: 'Expert retouching and color grading.',
    image: 'https://images2.imgbox.com/e7/f7/jDgOn8Ed_o.jpg',
  },
  {
    title: 'Wedding Album & Frame Design',
    subtitle: 'Preserving your special moments beautifully.',
    image: 'https://images2.imgbox.com/9f/5a/oYVyP5xy_o.jpg',
  },
  {
    title: 'Print & Promotional Design',
    subtitle: 'Magazine, Book Cover & Layout Design',
    image: 'https://images2.imgbox.com/6e/a1/Q96BBHDB_o.png',
  },
  {
    title: 'Web Design',
    subtitle: 'Stunning visuals, smart structure and strategy.',
    image: 'https://images2.imgbox.com/47/f0/8HFyzDNS_o.png',
  },
  {
    title: 'Content Writing',
    subtitle: 'Blog posts, product descriptions, emails and more.',
    image: 'https://images2.imgbox.com/8b/64/r1jkPyXq_o.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-[37px] md:text-5xl font-bold text-black tracking-tight mb-4">My Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg">Providing high-quality design solutions tailored to your business needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-3.5 xs:p-5 flex flex-row gap-4 sm:gap-8 items-center shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.07)] transition-all duration-500 group"
            >
              {/* Left Side: Image placeholder/frame */}
              <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-52 sm:h-52 rounded-2xl sm:rounded-[1.5rem] overflow-hidden bg-gray-50 border border-gray-200 relative shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[4px] sm:border-[6px] border-white/40 pointer-events-none rounded-2xl sm:rounded-[1.5rem]" />
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col flex-grow text-left">
                <h3 className="text-sm xs:text-base sm:text-2xl font-bold text-black mb-1.5 sm:mb-3 leading-[1.2] sm:leading-tight group-hover:text-[#8a334a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[11px] xs:text-[13px] sm:text-[16px] leading-snug sm:leading-relaxed max-w-[190px] xs:max-w-xs">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
