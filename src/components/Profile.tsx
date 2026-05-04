import { motion } from 'motion/react';
import { TOOLS } from '../constants';

export default function Profile() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative shrink-0"
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
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-[3.25rem] font-medium mb-6 font-mark-book leading-[1.1] text-black tracking-tight">
                Hi, I'm<br />
                Vikram Singh Rawat
              </h2>

              {/* Social Icons */}
              <div className="flex gap-3 mb-8">
                <a href="#" className="w-9 h-9 rounded-full bg-[#f6f6f6] flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors">
                   <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#f6f6f6] flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors">
                   <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#f6f6f6] flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors">
                   <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm8.44-8.825c-.09-2.072-1.3-4.004-3.414-5.263-2.616-1.558-6.192-2.146-8.995-1.583 2.062 1.34 3.753 3.324 4.542 5.485.804 2.195.666 4.67-.179 6.837a8.91 8.91 0 008.046-5.476zM7.222 5.58c-2.482 1.48-4.148 4.288-4.148 7.42 0 1.255.244 2.455.674 3.55 1.09-2.583 3.12-4.707 5.753-5.845 2.656-1.147 5.727-1.185 8.212-.472-1.25-2.222-3.493-3.83-6.155-4.52-1.428-.37-2.924-.4-4.336-.133z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#f6f6f6] flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors">
                   <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>

              <p className="text-[17px] text-[#111111] leading-[1.6] mb-6 max-w-2xl font-mark pr-2">
                A visual and product designer' create bold brand identities and clean digital visuals with Illustrator and Photoshop, turing ideas into sharp, business-ready designs that actually stand out.
              </p>
              
              <p className="text-[17px] text-[#111111] leading-[1.6] mb-10 max-w-2xl font-mark pr-2">
                Trusted by 100+ local brands and agencies for delivering consistent, high-quality designs!
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-[#f9f9f9] rounded-2xl p-5 min-w-[150px]">
                  <h3 className="text-xl font-medium font-mark text-black mb-1 tracking-tight">3+ years</h3>
                  <p className="text-xs text-gray-500 font-mark font-medium">Design experience</p>
                </div>
                <div className="bg-[#f9f9f9] rounded-2xl p-5 min-w-[150px]">
                  <h3 className="text-xl font-medium font-mark text-black mb-1 tracking-tight">100+</h3>
                  <p className="text-xs text-gray-500 font-mark font-medium">Projects delivered</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
