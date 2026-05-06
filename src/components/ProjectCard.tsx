import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const CardContent = (
    <>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
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
        <div className="w-full h-full">
          {CardContent}
        </div>
      </div>
      <div className="py-6 px-4 bg-white text-center">
        <h3 className="text-[22px] font-light text-gray-900 capitalize tracking-wide">{project.title}</h3>
      </div>
    </motion.div>
  );
}
