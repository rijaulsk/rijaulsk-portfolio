import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </motion.div>
  );
}

export default App;