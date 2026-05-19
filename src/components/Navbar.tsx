import React from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust based on navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 py-8 px-8 md:px-12 lg:px-16 flex justify-between items-start text-white bg-transparent"
    >
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="text-[20px] font-medium tracking-tight hover:opacity-60 transition-opacity"
      >
        Home
      </a>
      
      <div className="flex flex-col items-end gap-1 text-[20px] font-medium tracking-tight">
        <a 
          href="#works" 
          onClick={(e) => scrollToSection(e, 'works')}
          className="hover:opacity-60 transition-opacity"
        >
          Projects
        </a>
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className="hover:opacity-60 transition-opacity"
        >
          About
        </a>
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="hover:opacity-60 transition-opacity"
        >
          Contacts
        </a>
      </div>
    </motion.nav>
  );
}
