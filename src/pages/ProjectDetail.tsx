import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import {ArrowLeft} from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  // Fallback if not found or if we want generic content
  // But the prompt says we should make it for ShivOm Jewellers.
  const isShivOm = id === '1';
  const isCorprest = id === '2';
  const isRoundOne = id === '3';

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Project not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        <Link to="/" className="inline-flex items-center gap-2 text-text-body hover:text-blue-600 transition-colors mb-10 font-medium">
          <ArrowLeft size={20} /> Back to My Works
        </Link>
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[45%] lg:w-[40%] flex-shrink-0"
          >
            <div className="sticky top-32 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white flex items-center justify-center p-2">
               <img 
                 src={isShivOm ? "/assets/Artboard 31@4x-8.png" : isCorprest ? "/assets/Untitled (1)_page-0001.jpg" : isRoundOne ? "/assets/R11@3x.png" : project.imageUrl} 
                 alt={isShivOm ? "ShivOm Jewellers" : isCorprest ? "CORPREST CONSULTANCY" : isRoundOne ? "ROUND ONE MMA" : project.title} 
                 className="w-full h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-contain"
                 referrerPolicy="no-referrer"
               />    
            </div>
          </motion.div>

          {/* Right Side: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[55%] lg:w-[60%] flex flex-col pt-0 md:pt-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 font-serif leading-tight mt-0">
              {isShivOm ? 'ShivOm Jewellers' : isCorprest ? 'CORPREST CONSULTANCY' : isRoundOne ? 'ROUND ONE MMA' : project.title}
            </h1>

            <div className="prose prose-lg text-gray-700 leading-relaxed text-justify max-w-none">
              {isShivOm ? (
                <p>
                  The design was created on demand for ShivOm Jewellers, with a focus on making it emotionally relatable while maintaining a premium, sophisticated feel. Every element is intentional minimal yet powerful allowing the brand to stand out while staying culturally connected. This logo blends spirituality with elegance, capturing the essence of a jewellery brand deeply rooted in Hindu tradition. The form is inspired by the sacred presence of Lord Shiva, subtly integrated into the typography to create a meaningful and timeless identity. The flowing curves and sharp contrasts reflect both divine strength and refined craftsmanship just like the jewellery the brand represents. The client was highly satisfied, as the logo not only represents their products but also tells their story, values, and spiritual connection through design.
                </p>
              ) : isCorprest ? (
                <p>
                  Created on demand for Corprest Consultancy, a law firm, this logo was designed to reflect trust, professionalism, and structured authority. The circular badge form represents unity and reliability, while the balanced typography and central "CC" monogram establish a strong and memorable identity. Subtle legal elements like the scales of justice and handshake symbolize fairness, integrity, and client relationships. The clean, minimal style ensures a premium and corporate feel, helping the brand appear both credible and approachable. The client was highly satisfied, as the logo clearly communicates their legal expertise, values, and commitment to professional service.
                </p>
              ) : isRoundOne ? (
                <p>
                  The Logo is Created on demand for Round 1 MMA, this logo was designed to capture the raw energy and competitive spirit of combat sports. The bold typography combined with the striking red “1” creates a strong visual impact, instantly conveying dominance and intensity. The fighter silhouette adds movement and action, making the brand feel powerful and alive. The clean yet aggressive style ensures high visibility across platforms while maintaining a professional sports identity. The client was highly satisfied, as the logo perfectly represents strength, performance, and the fighting mindset their brand stands for.
                </p>
              ) : (
                <p>
                  This original design was carefully crafted to bring the client's vision to life, focusing on quality, relevance, and visual impact. Clean typography, balanced layout, and harmonious colors work together to deliver a professional brand identity.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
