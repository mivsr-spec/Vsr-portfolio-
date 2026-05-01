import { motion } from 'motion/react';
import { Linkedin, Instagram, Dribbble, Mail, MapPin, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-normal font-display tracking-tighter">VIKRAM SINGH RAWAT</h2>
            <p className="text-text-body max-w-xs leading-relaxed">
              Custom Graphic Design Specialist specialized in Adobe Illustrator and Photoshop. Focused on creating clean, professional, and original designs.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Dribbble className="w-5 h-5" />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-heading hover:bg-blue-600 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest font-bold text-text-heading">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-body">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>vsrx74@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-text-body">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 8958123147</span>
              </li>
              <li className="flex items-center gap-3 text-text-body">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text-body">
            © {new Date().getFullYear()} Vikram Singh Rawat. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-text-body">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
