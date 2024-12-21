import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  delay: number;
  inView: boolean;
}

export default function BlogCard({ post, delay, inView }: BlogCardProps) {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay }}
      className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
        <a
          href="#"
          className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          Read More →
        </a>
      </div>
    </motion.article>
  );
}