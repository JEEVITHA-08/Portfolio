import { Coffee, GitBranch, Server, Database, Layout, Target } from 'lucide-react'

export const journey = [
  {
    id: 'java',
    title: 'Java',
    icon: Coffee,
    items: [
      'Core Java',
      'Problem-solving implementation',
      'Clean coding practices',
      'Object-Oriented Programming',
    ],
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    icon: GitBranch,
    items: [
      'Arrays',
      'Hashing',
      'Sliding Window',
      'Subarray Problems',
      'Algorithmic Thinking',
      'Pattern Recognition',
    ],
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot',
    icon: Server,
    items: [
      'REST API Development',
      'Authentication',
      'Spring Security',
      'JWT',
      'Application Architecture',
      'Database Integration',
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    items: [
      'PostgreSQL',
      'MySQL',
      'Entity Relationships',
      'Persistence',
      'Query Fundamentals',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    items: [
      'React',
      'JavaScript',
      'API Integration',
      'Authentication Flows',
      'Component-Based Development',
      'Responsive UI',
    ],
  },
  {
    id: 'placement-prep',
    title: 'Placement Preparation',
    icon: Target,
    items: [
      'Coding',
      'Quantitative Aptitude',
      'Logical Reasoning',
      'Technical Interview Preparation',
    ],
  },
]

export default journey
