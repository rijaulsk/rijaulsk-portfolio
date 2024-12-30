import { Project, Testimonial, BlogPost } from '../types'; 
import xpenseImage from '../assets/xpense.png';
import lazycartImage from '../assets/lazycart.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Xpense',
    description: 'A React/Redux expense tracker application storing data locally within the browser',
    image: xpenseImage,
    tags: ['React', 'Redux', 'Moment', 'Toastify', 'Firebase'],
    demoUrl: 'https://xpense-29871.web.app/',
    githubUrl: 'https://github.com/rijaulsk/xpense',
  },
  {
    id: 2,
    title: 'Lazycart',
    description: 'E-commerce cart system with React/Redux and Fakestore API.',
    image: lazycartImage,
    tags: ['React', 'Redux', 'Bootstrap', 'Firebase'],
    demoUrl: 'https://lazycart-96f49.web.app/',
    githubUrl: 'https://github.com/rijaulsk/lazycart',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Tech Lead at InnovateTech',
    content: 'Rijaul\'s expertise in frontend development is unparalleled. His attention to detail and problem-solving skills make him an invaluable asset to any team.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Developer at WebFlow',
    content: 'Working with Rijaul was a great experience. His deep understanding of modern web technologies and best practices truly shows in his work.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Mastering React Performance Optimization',
    excerpt: 'Learn the essential techniques for optimizing React applications and improving user experience.',
    date: 'March 1, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    date: 'February 25, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
  },
];