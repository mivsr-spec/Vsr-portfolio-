import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/#works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link to="/" className={`flex items-center gap-3 transition-opacity duration-500 ${
          isScrolled || location.pathname !== '/' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <img 
            src="https://images2.imgbox.com/64/ae/VB34pURF_o.jpeg" 
            alt="Vikram Singh Rawat" 
            className="w-11 h-11 rounded-full object-cover shadow-sm hidden md:block" 
          />
          <div className="flex flex-col justify-center text-center md:text-left">
            <span className="text-[17px] font-medium text-[#000000] leading-snug tracking-tight hidden md:block">Vikram Singh Rawat</span>
            <span className="text-[13px] text-gray-500 font-normal leading-tight hidden md:block">Based in DELHI - INDIA</span>
          </div>
        </Link>
        <div className={`flex space-x-6 md:space-x-8 items-center flex-wrap justify-center transition-all duration-500 overflow-hidden md:overflow-visible ${!isScrolled && location.pathname === '/' ? 'opacity-0 max-h-0 pointer-events-none md:opacity-100 md:max-h-[100px] md:pointer-events-auto' : 'opacity-100 max-h-[100px]'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isScrolled || location.pathname !== '/' ? 'text-text-body' : 'text-gray-800 md:text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
