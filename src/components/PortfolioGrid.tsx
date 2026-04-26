import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

export default function PortfolioGrid() {
  return (
    <section id="works" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <img src="https://api.iconify.design/lucide:layout-grid.svg" alt="grid" className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold uppercase tracking-tight">My Works</h2>
            </div>
            <p className="text-text-body font-medium">Recent Projects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 md:gap-x-12 md:gap-y-20">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
