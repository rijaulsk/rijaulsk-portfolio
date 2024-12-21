import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            className="text-2xl font-bold text-emerald-600 dark:text-emerald-400"
            whileHover={{ scale: 1.05 }}
          >
            Rijaul Sk
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}