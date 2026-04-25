import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Dribbble } from 'lucide-react';

export default function Contact() {
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
              Contact
            </h1>
            <div className="h-1 w-24 bg-orange-500"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-xl text-text-body">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>vsrx74@gmail.com</span>
                </li>
                <li className="flex items-center gap-4 text-xl text-text-body">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+91 8958123147</span>
                </li>
                <li className="flex items-center gap-4 text-xl text-text-body">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span>New Delhi, India</span>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="pt-12 border-t border-gray-100">
              <h3 className="text-sm uppercase tracking-widest font-bold text-text-heading mb-6">Follow Me</h3>
              <div className="flex gap-6">
                {[
                  { icon: <Linkedin className="w-6 h-6" />, href: "#" },
                  { icon: <Instagram className="w-6 h-6" />, href: "#" },
                  { icon: <Dribbble className="w-6 h-6" />, href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-14 h-14 rounded-full bg-bg-primary flex items-center justify-center text-text-heading hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
