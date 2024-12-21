import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBadge from './SkillBadge';

const skills = [
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'Bootstrap', level: 'Intermediate' },
  { name: 'Redux', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}