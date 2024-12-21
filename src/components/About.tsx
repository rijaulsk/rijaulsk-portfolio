import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile_pic from '../assets/profile-pic.jpg';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 transform rotate-3">
              <img
                src={profile_pic}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-lg transform -rotate-3 transition-transform hover:rotate-0"
              />
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate frontend developer with a keen eye for design and a
              love for creating seamless user experiences. With years of experience
              in web development, I've had the privilege of working on diverse
              projects that have shaped my expertise in modern web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in web development started with teaching others, which has
              given me a unique perspective on how to create intuitive and
              accessible interfaces. I believe in writing clean, maintainable code
              and staying up-to-date with the latest industry trends.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}