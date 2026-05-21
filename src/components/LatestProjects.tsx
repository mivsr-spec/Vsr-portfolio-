import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    name: 'PROJECT A',
    tag: '_01.25',
    src: 'https://images2.imgbox.com/0d/6d/TQuog3s9_o.png',
  },
  {
    name: 'PROJECT B',
    tag: '_02.25',
    src: 'https://images2.imgbox.com/26/ce/u71qwhW1_o.png',
  },
  {
    name: 'PROJECT C',
    tag: '_03.25',
    src: 'https://images2.imgbox.com/7e/2d/Qf8QscS1_o.png',
  },
  {
    name: 'PROJECT D',
    tag: '_04.25',
    src: 'https://images2.imgbox.com/94/a7/Y0IhBaXz_o.png',
  },
  {
    name: 'PROJECT E',
    tag: '_05.25',
    src: 'https://images2.imgbox.com/15/27/9sb6O7XO_o.png',
  },
  {
    name: 'PROJECT F',
    tag: '_06.25',
    src: 'https://images2.imgbox.com/67/5d/ETN7DM2L_o.png',
  },
];

export default function LatestProjects() {
  return (
    <section className="pt-0 md:pt-4 pb-12 md:pb-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header row */}
        <div className="flex justify-between items-end mb-6 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-black tracking-tight leading-[1.05] select-none"
          >
            Latest<br />Projects.
          </motion.h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-6 sm:gap-y-6 md:gap-x-8 md:gap-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Outer Image frame with large rounded corners and light shadow/border */}
              <div className="w-full aspect-square rounded-[1.2rem] sm:rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden bg-[#f4f4f4] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-700 ease-out group-hover:scale-[1.015] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  draggable="false"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
