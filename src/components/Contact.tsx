import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rijaulsk/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rijaulsk', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm inView={inView} />
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <Mail size={20} />
                <span>rijaulsk001@gmail.com</span>
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}