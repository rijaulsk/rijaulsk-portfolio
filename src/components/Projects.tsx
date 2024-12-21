import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.2}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}