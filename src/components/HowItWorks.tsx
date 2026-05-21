import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Idea & Planning',
    text: 'You explain the project and design goals.',
    rotation: -1.5
  },
  {
    number: '02',
    title: 'Design & Creation',
    text: 'I turn the idea into professional visuals.',
    rotation: 1
  },
  {
    number: '03',
    title: 'Review & Adjustments',
    text: 'Necessary edits are made for the best result.',
    rotation: -1
  },
  {
    number: '04',
    title: 'Final Delivery',
    text: 'You receive the completed design package.',
    rotation: 1.5
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gray-50 text-gray-500 text-sm font-medium mb-4 border border-gray-100"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[29px] md:text-5xl lg:text-6xl font-bold tracking-tight text-black max-w-3xl mx-auto leading-[1.1]"
          >
            Four steps to your <br /> next big project.
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-7xl mx-auto mt-6 md:mt-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              style={{ rotate: `${step.rotation}deg` }}
              className="bg-white p-3 md:p-8 rounded-xl md:rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[120px] xs:min-h-[135px] md:min-h-[320px] transition-all duration-300 group"
            >
              <div className="text-[10px] md:text-[14px] font-bold text-gray-400 mb-1.5 md:mb-8 font-mono">{step.number}</div>
              <h3 className="text-[14px] xs:text-[16px] md:text-[28px] font-bold text-black mb-0.5 md:mb-4 leading-tight">{step.title}</h3>
              <div className="mt-auto">
                <p className="text-[11px] xs:text-[12px] md:text-[16px] text-gray-500 leading-snug md:leading-relaxed font-medium">
                  {step.text}
                </p>
              </div>
              
              {/* Optional Arrow Decoration for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-20">
                  <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 12 10.5 4 24 4C37.5 4 46 12 46 12M46 12L38 6M46 12L38 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
