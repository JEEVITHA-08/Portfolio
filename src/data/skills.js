import { Server, Layout, Database, Wrench, Brain } from 'lucide-react'

// Technologies visually highlighted as primary throughout the site.
export const primaryTech = ['Java', 'Spring Boot', 'PostgreSQL', 'React']

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: Server,
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT Authentication',
      'REST API Development',
      'JPA',
      'Hibernate',
      'Maven',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    items: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Vite',
      'Axios',
      'React Router',
      'API Integration',
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    items: [
      'PostgreSQL',
      'MySQL',
      'Relational Database Concepts',
      'Entity Relationships',
      'Repository Pattern',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    icon: Wrench,
    items: [
      'Git',
      'GitHub',
      'Postman',
      'IntelliJ IDEA',
      'Visual Studio Code',
      'Railway',
      'Vercel',
    ],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    icon: Brain,
    items: [
      'Arrays',
      'HashMap',
      'Two Sum Pattern',
      'Sliding Window',
      'Fixed Window',
      'Variable Window',
      'Subarray Problems',
      "Kadane's Algorithm",
      'Basic DSA Practice',
    ],
  },
]

export default skillCategories
