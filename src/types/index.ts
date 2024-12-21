export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}