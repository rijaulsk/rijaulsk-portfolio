import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  delay: number;
  inView: boolean;
}

export default function ProjectCard({ project, delay, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay }}
      className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}