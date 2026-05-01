import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // If it's the first card (ShivOm Jewellers) or second (Corprest) or third (Round One MMA), wrap it in a Link
  const isClickable = index === 0 || index === 1 || index === 2;

  const CardContent = (
    <>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
        <motion.h3 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-white text-xl font-bold font-display px-4"
        >
          About Design
        </motion.h3>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="mt-6 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        {isClickable ? (
          <Link to={`/project/${project.id}`} className="block w-full h-full">
            {CardContent}
          </Link>
        ) : (
          <div className="w-full h-full">
            {CardContent}
          </div>
        )}
      </div>
      <div className="py-6 px-4 bg-white text-center">
        <h3 className="text-[22px] font-light text-gray-900 capitalize tracking-wide">{project.title}</h3>
      </div>
    </motion.div>
  );
}
