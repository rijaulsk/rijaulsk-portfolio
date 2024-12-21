import { motion } from 'framer-motion';
import { Code, Palette, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-emerald-500/20 rounded-full"
        />
                <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-emerald-500/10 rounded-full"
        />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 rounded-full border-4 border-emerald-500/20"
              />
            </div>
            <div className="relative flex items-center justify-center w-40 h-40">
              <Code className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
              <Palette className="absolute top-8 right-4 w-8 h-8 text-emerald-500" />
              <Sparkles className="absolute bottom-8 left-4 w-8 h-8 text-emerald-500" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm Rijaul Sk
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            A Frontend Developer and a Teacher who crafts modern and interactive web experiences
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors"
          >
            Let's Connect!
          </motion.a>
        </div>
      </div>
    </section>
  );
}