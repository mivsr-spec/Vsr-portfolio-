import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Paperclip, ChevronRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    pricingModel: 'DESIGN RETAINER',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!formData.name || !formData.email) {
      alert('Please fill in required fields (Name and Email).');
      setStatus('idle');
      return;
    }

    try {
      const web3FormData = new FormData();
      web3FormData.append('access_key', '57bc1e28-4188-4430-a62b-b58f5caac4cd');
      web3FormData.append('name', formData.name);
      web3FormData.append('email', formData.email);
      web3FormData.append('website', formData.website || '');
      web3FormData.append('pricingModel', formData.pricingModel);
      web3FormData.append('budget', formData.budget || '');
      web3FormData.append('message', formData.message);
      web3FormData.append('subject', `New Inquiry from ${formData.name}`);
      web3FormData.append('from_name', formData.name);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', website: '', pricingModel: 'DESIGN RETAINER', budget: '', message: '' });
      } else {
        console.error('Web3Forms error:', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="pt-16 md:pt-28 pb-16 md:pb-36 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="flex flex-col h-full lg:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-6 md:mb-8 tracking-tighter leading-none">
                Let's Talk
              </h2>
              <p className="text-neutral-400 text-base md:text-lg lg:text-[19px] leading-relaxed max-w-lg tracking-tight font-normal">
                Whether you're building a brand, designing a product, or simply want to explore an idea, <span className="font-semibold text-white">I do love to hear from you.</span>
              </p>
            </motion.div>
 
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ml-0 md:ml-[-22px] mt-[100px] md:mt-[-12px] mr-0 md:mr-[109px] mb-0 pl-0 md:pl-6 pt-3 md:pt-6 pb-2 md:pb-4 space-y-3 md:space-y-6"
            >
              <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-white/5">
                <span className="text-white font-bold text-sm md:text-base">Email</span>
                <a href="mailto:vsrx74@gmail.com" className="text-white hover:opacity-80 transition-all text-sm md:text-base ml-0 mt-0 mr-4 pl-0 font-semibold">
                  vsrx74@gmail.com
                </a>
              </div>
              
              <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-white/5">
                <span className="text-white font-bold text-sm md:text-base">Telephone</span>
                <a href="tel:+918958123147" className="text-white hover:opacity-80 transition-all text-sm md:text-base mb-0 pl-0 mr-4 font-semibold">
                  +91 8958123147
                </a>
              </div>
            </motion.div>
          </div>
 
          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#111111] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 text-white border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">
              <input type="hidden" name="access_key" value="57bc1e28-4188-4430-a62b-b58f5caac4cd" />
              
              <div className="grid grid-cols-1 gap-5 md:gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Your name <span className="text-[#ff4d4d]">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl md:rounded-[1rem] p-4 md:p-5 focus:ring-1 focus:ring-white/20 transition-all outline-none text-white placeholder:text-gray-600 text-sm md:text-base"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
 
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">E-mail <span className="text-[#ff4d4d]">*</span></label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl md:rounded-[1rem] p-4 md:p-5 focus:ring-1 focus:ring-white/20 transition-all outline-none text-white placeholder:text-gray-600 text-sm md:text-base"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
 
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Website</label>
                  <input
                    type="text"
                    placeholder="Your Website"
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl md:rounded-[1rem] p-4 md:p-5 focus:ring-1 focus:ring-white/20 transition-all outline-none text-white placeholder:text-gray-600 text-sm md:text-base"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Project budget</label>
                  <input
                    type="text"
                    placeholder="Your Project Budget"
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl md:rounded-[1rem] p-4 md:p-5 focus:ring-1 focus:ring-white/20 transition-all outline-none text-white placeholder:text-gray-600 text-sm md:text-base"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  />
                </div>
 
                <div className="space-y-3 md:space-y-4">
                  <label className="text-sm font-bold text-gray-400">Pricing model</label>
                  <div className="flex bg-[#1a1a1a] p-1 rounded-xl md:rounded-[1.2rem] border border-white/5">
                    <button
                      type="button"
                      className={`flex-1 py-3 px-3 md:py-4 md:px-4 rounded-lg md:rounded-[1rem] text-[12px] font-bold transition-all ${
                        formData.pricingModel === 'DESIGN RETAINER' 
                        ? 'bg-[#2a2a2a] text-white shadow-xl ring-1 ring-white/10' 
                        : 'text-gray-500 hover:text-gray-400'
                      }`}
                      onClick={() => setFormData({ ...formData, pricingModel: 'DESIGN RETAINER' })}
                    >
                      DESIGN RETAINER
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-3 px-3 md:py-4 md:px-4 rounded-lg md:rounded-[1rem] text-[12px] font-bold transition-all ${
                        formData.pricingModel === 'SINGLE PROJECT' 
                        ? 'bg-[#2a2a2a] text-white shadow-xl ring-1 ring-white/10' 
                        : 'text-gray-500 hover:text-gray-400'
                      }`}
                      onClick={() => setFormData({ ...formData, pricingModel: 'SINGLE PROJECT' })}
                    >
                      SINGLE PROJECT
                    </button>
                  </div>
                </div>
 
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl md:rounded-[1rem] p-4 md:p-5 focus:ring-1 focus:ring-white/20 transition-all outline-none text-white placeholder:text-gray-600 resize-none text-sm md:text-base"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>
 
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-black font-bold py-4 md:py-6 rounded-xl md:rounded-[1.5rem] flex items-center justify-center gap-2 hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-50 text-sm md:text-base"
              >
                {status === 'loading' ? 'Sending...' : 'Get in touch'}
              </button>
 
              {status === 'success' && (
                <p className="text-green-400 text-center font-bold">Thank you! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-bold">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
