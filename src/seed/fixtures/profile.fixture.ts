export interface ProfileFixture {
  name: string;
  description: string;
  linkedin: string;
  skills: { name: string }[];
  experience: {
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    achievements: string[];
  }[];
  projects: { name: string; }[];
}

export const profileFixture: ProfileFixture = {
  name: 'Ilia Dernov',
  description:
    'Backend developer with full-stack skills and 8 years of experience, scalable services. Specialize in Node.js and PHP with proven expertise in microservice architecture. Deep hands-on experience with MongoDB, PostgreSQL, Redis — from schema design to complex queries and caching strategies. Worked on high-concurrency systems in game development. Frontend skills: Vue.js 2/3, TypeScript, JavaScript, HTML5/CSS3. Strong focus on performance optimization, debugging, profiling, and monitoring.',
  linkedin: 'https://www.linkedin.com/in/ilia-dernov-2b861821a/',
  skills: [
    { name: 'TypeScript' },
    { name: 'Node.js' },
    { name: 'NestJS' },
    { name: 'PHP' },
    { name: 'Symfony' },
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
    { name: 'Redis' },
    { name: 'GraphQL' },
    { name: 'REST API' },
    { name: 'RabbitMQ' },
    { name: 'Kafka' },
    { name: 'Docker' },
    { name: 'GitLab CI' },
    { name: 'AWS' },
    { name: 'Vue.js' },
    { name: 'Jest' },
  ],
  experience: [
    {
      company: 'Avangard',
      position: 'Senior Fullstack Developer (Node.js / PHP)',
      startDate: new Date('2026-03-01'),
      achievements: [
        'Developed and maintained multiple Node.js (NestJS) microservices for high-load web platforms',
        'Built REST APIs and GraphQL integrations, worked with message queues (RabbitMQ / Kafka)',
        'Created modern frontend applications with Vue.js 3 + Nuxt.js (SSR / static generation)',
        'Designed databases using PostgreSQL, MongoDB, Redis, optimised queries and caching strategies',
        'Managed full development cycle: from requirements to deployment using Docker, GitLab CI, AWS',
      ],
    },
    {
      company: 'Green Grey',
      position: 'Senior Node.js Programmer',
      startDate: new Date('2021-11-01'),
      endDate: new Date('2026-01-01'),
      achievements: [
        'Developed high-load backend for mobile games using Node.js (NestJS) and microservice architecture',
        'Full-cycle development of game microservices: from API design and data schemas (MongoDB, Redis, ElasticSearch) to business logic and deployment',
        'Ensured high code quality through unit and integration tests (Jest, PHPUnit) and regular code reviews',
        'Debugging, profiling, and performance optimization of services; worked with logs and metrics',
      ],
    },
    {
      company: 'Avangard',
      position: 'Lead Web Programmer (Fullstack)',
      startDate: new Date('2019-03-01'),
      endDate: new Date('2021-10-01'),
      achievements: [
        'Designed and developed RESTful APIs for web applications using Node.js (TypeScript) and PHP',
        'Built modern, responsive user interfaces with Vue.js 2/3, ensuring high performance and UX',
        'Designed and optimized relational data models in PostgreSQL, wrote complex SQL queries',
        'Participated in all stages: requirements gathering, prototyping, implementation, testing, deployment',
      ],
    },
    {
      company: 'Vita pharmacy',
      position: 'Senior Web Developer (Fullstack)',
      startDate: new Date('2017-01-01'),
      endDate: new Date('2019-03-01'),
      achievements: [
        'Designed and implemented monolithic/microservice architecture on Symfony, ensuring stability of the main website under growing traffic',
        'Deep optimization from Doctrine queries and DB schema to caching configuration',
        'End-to-end development: from backend business logic and APIs (PHP/Symfony) to frontend interfaces with Vue.js and auxiliary services in Node.js',
      ],
    },
  ],
  projects: [
    {
      name: 'Series visual novel mobile game',
    },
    {
      name: 'Arena heroes mobile game',
    },
    {
      name: 'Staff application avangard',
    },
    {
      name: 'Vita pharmacy mobile application',
    },
    {
      name: 'Vita pharmacy mobile application',
    },
  ],
};