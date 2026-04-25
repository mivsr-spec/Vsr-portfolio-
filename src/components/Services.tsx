import { motion } from 'motion/react';
import { Layout, Palette, Share2, Megaphone, PenTool, FileText } from 'lucide-react';

const services = [
  {
    title: 'Custom Design',
    description: 'Bespoke designs tailored to your specific ideas and requirements.',
    icon: <Layout className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Custom Illustration',
    description: 'Sketches and drawings into clean digital designs.',
    icon: <PenTool className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Social Media Graphics',
    description: 'Engaging Social Media posts, ads, and promotional Designs',
    icon: <Share2 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Logo & Brand Identity',
    description: 'Unique logos and cohesive brand systems that stand out.',
    icon: <Palette className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Marketing Designs',
    description: 'Professional documents, business cards, letterheads, invoices, brochures, flyers, PPTs, resumes, certificates, ID cards, offer letters, and company profiles.',
    icon: <Megaphone className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Content Writing',
    description: 'Promotional content, website content, product descriptions, blog posts, scripts, and PPT content for business and personal use.',
    icon: <FileText className="w-6 h-6 text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-text-body max-w-2xl mx-auto mb-4">
            I offer a wide range of graphic design services to help your business grow and succeed visually.
          </p>
          <h2 className="text-4xl font-bold">My Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-bg-primary hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
