import lavaRising from '@/public/lavaRising.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Lava Rising',
    description:
      'I worked on a 2d platformer game in my spare time. Made with the unity game engine, it can be played on the browser or on mobile by downloading from the appstore',
    tags: ['Unity', 'C#'],
    imageUrl: lavaRising,
  },
  {
    title: 'Lava Rising',
    description:
      'I worked on a 2d platformer game in my spare time. Made with the unity game engine, it can be played on the browser or on mobile by downloading from the appstore',
    tags: ['Unity', 'C#'],
    imageUrl: lavaRising,
  },
] as const;

export const skillsData = [
  'HTML/CSS',
  'Sass/Tailwind',
  'JavaScript',
  'Typescript',
  'Python',
  'C#',
  'Groovy',
  'React Js',
  'React Native',
  'Angular',
  'Node.js',
  'Express',
  'Flask',
  'Postgres (SQL)',
  'MongoDB',
  'Neo4j',
  'REST API',
  'Docker',
  'Canva',
  'Jira',
  'Bitbucket',
  'Git/Github',
  'Linux/Bash',
  'Unity (2d/3d game dev)',
  'Unit/End-to-end testing (Jest/Cypress)',
] as const;
