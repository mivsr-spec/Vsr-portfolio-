import { motion } from 'motion/react';
import { TOOLS } from '../constants';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section with Dark Blue Aesthetic */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="white" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter mb-4">
              About Me
            </h1>
            <div className="h-1 w-24 bg-orange-500"></div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-heading">
              Hi, I'm Vikram Singh Rawat
            </h2>

            <p className="text-lg text-text-body leading-relaxed mb-6">
              I am a custom graphic designer specializing in Adobe Illustrator and Photoshop. I focus on creating clean, professional, and original designs that help businesses present themselves visually in the best way. I turn ideas into high-quality visuals based on your vision, references, or descriptions, ensuring every design is practical and ready for real business use.
            </p>
            <p className="text-lg text-text-body leading-relaxed mb-6">
              I have worked with multiple local brands and private agencies, consistently delivering reliable and high-quality work. My expertise includes graphic design, logo design, and brand identity, with strong skills in Illustrator and Photoshop.
            </p>
            <p className="text-lg text-text-body leading-relaxed mb-6">
              I follow a simple and effective process—understanding your requirements through quick discussions, creating original designs without templates, offering up to 5 revisions for complete satisfaction, and maintaining clear communication with fast delivery.
            </p>
            <p className="text-lg text-text-body leading-relaxed mb-6">
              I offer a wide range of graphic design services to support your business growth and create a strong visual presence.
            </p>
          </motion.div>

          {/* Process Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-bg-primary border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-text-heading">My Process</h3>
              <ul className="space-y-3 text-text-body">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Create original designs based on vision (no templates)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Up to 5 revisions for final satisfaction
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Clear communication and fast delivery
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Understand requirements through chat/email/short discussion
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
