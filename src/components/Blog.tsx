import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../data';
import BlogCard from './BlogCard';

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Latest Articles
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              delay={index * 0.2}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}