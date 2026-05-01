import { motion } from 'motion/react';
import { Layout, Palette, Share2, Megaphone, PenTool, FileText } from 'lucide-react';

const services = [
  {
    title: 'Custom Design',
    icon: <Layout className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Custom Illustration',
    icon: <PenTool className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Social Media Graphics',
    icon: <Share2 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Logo & Brand Identity',
    icon: <Palette className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Marketing Designs',
    icon: <Megaphone className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Content Writing',
    icon: <FileText className="w-8 h-8 text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal">My Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mr-6 group-hover:scale-105 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-normal text-gray-900 m-0">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
