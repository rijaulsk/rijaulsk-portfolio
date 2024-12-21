import { motion } from 'framer-motion';

interface ContactFormProps {
  inView: boolean;
}

export default function ContactForm({ inView }: ContactFormProps) {
  return (
    <motion.form
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      className="space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}