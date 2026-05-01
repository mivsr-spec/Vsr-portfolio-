import { motion } from 'motion/react';
import { TOOLS } from '../constants';

export default function Profile() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-bg-primary shadow-xl">
              <img
                src="https://images2.imgbox.com/64/ae/VB34pURF_o.jpeg"
                alt="Vikram Singh Rawat"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </motion.div>

          {/* Intro Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-normal mb-6">Hi, I'm Vikram Singh Rawat</h2>
              <p className="text-lg text-text-body leading-relaxed mb-8 max-w-2xl">
                I am a custom graphic designer specialized in Adobe Illustrator and Photoshop, focused on creating clean, professional, and original designs. I help clients turn their ideas into high-quality visuals based on their vision, references, or descriptions. My goal is to deliver designs that are visually strong and suitable for real business use.
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-8 max-w-2xl">
                Worked with multiple local brands and private agencies, delivering high-quality and consistent design work.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                {['Graphic Design', 'Adobe Illustrator', 'Adobe Photoshop', 'Logo Design', 'Brand Identity'].map((tag) => (
                  <span key={tag} className="px-4 py-1 bg-bg-primary text-text-body text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-text-heading mb-4">Expertise</h3>
                  <div className="flex gap-4">
                    {TOOLS.slice(0, 2).map((tool) => (
                      <div key={tool.name} className="w-10 h-10 p-2 bg-bg-primary rounded-lg hover:bg-white hover:shadow-md transition-all cursor-pointer">
                        <img src={tool.icon} alt={tool.name} className="w-full h-full grayscale hover:grayscale-0 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:border-l md:pl-8 border-gray-100">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-text-heading mb-4">Working Process</h3>
                  <ul className="text-xs text-text-body leading-relaxed max-w-xs list-disc pl-4 space-y-1">
                    <li>Create original designs based on vision (no templates)</li>
                    <li>Up to 5 revisions for final satisfaction</li>
                    <li>Clear communication and fast delivery</li>
                    <li>Understand requirements through chat/email/short discussion</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
