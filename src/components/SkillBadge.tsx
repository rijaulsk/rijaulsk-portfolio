import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: { name: string; level: string };
  delay: number;
  inView: boolean;
}

export default function SkillBadge({ skill, delay, inView }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay }}
      className="group relative"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-[1] transition-opacity bg-emerald-600 rounded-lg">
          <span className="text-white font-medium">{skill.level}</span>
        </div>
      </div>
    </motion.div>
  );
}