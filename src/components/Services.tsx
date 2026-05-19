import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Illustration & Brand Visual Design',
    subtitle: 'Professional branding and identity solutions.',
    image: '/src/assets/images/regenerated_image_1779163816142.jpg',
  },
  {
    title: 'Social Media & Marketing Design',
    subtitle: 'Engaging content for digital marketing.',
    image: '/src/assets/images/regenerated_image_1779163817364.jpg',
  },
  {
    title: 'Mockup & Product Presentation Design',
    subtitle: 'Stunning visualizations for your products.',
    image: '/src/assets/images/regenerated_image_1779163818897.jpg',
  },
  {
    title: 'Photo Editing & Enhancement',
    subtitle: 'Expert retouching and color grading.',
    image: '/src/assets/images/regenerated_image_1779163820732.jpg',
  },
  {
    title: 'Wedding Album & Frame Design',
    subtitle: 'Preserving your special moments beautifully.',
    image: '/src/assets/images/regenerated_image_1779163822442.jpg',
  },
  {
    title: 'Print & Promotional Design',
    subtitle: 'High-quality flyers, brochures and more.',
    image: '/src/assets/images/regenerated_image_1779163824661.png',
  },
];

export default function Services() {
  return (
    <section className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black tracking-tight mb-4">My Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Providing high-quality design solutions tailored to your business needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-5 flex flex-col sm:flex-row gap-8 items-center shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.07)] transition-all duration-500 group"
            >
              {/* Left Side: Image placeholder/frame */}
              <div className="w-full sm:w-52 h-52 rounded-[1.5rem] overflow-hidden bg-gray-50 border border-gray-200 relative shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[6px] border-white/40 pointer-events-none rounded-[1.5rem]" />
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col flex-grow text-center sm:text-left">
                <h3 className="text-2xl font-bold text-black mb-3 leading-tight group-hover:text-[#8a334a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[16px] mb-8 leading-relaxed max-w-xs mx-auto sm:mx-0">
                  {service.subtitle}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center gap-1 text-[#8a334a] font-bold text-[18px] hover:gap-2 transition-all cursor-pointer">
                    Explore now <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
