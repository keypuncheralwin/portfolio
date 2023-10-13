import lavaRising from '@/public/lavaRising.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';

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
    title: 'More Projecsts to be added',
    description: 'More Projecsts to be added',
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

export const experiencesData = [
  {
    title: 'Software Engineer',
    location: 'Liftango',
    description:
      "Worked on various aspects of the company's primary ride-sharing app. Using React Native, I refined the front-end, meeting evolving requirements and enhancing user experience. On the backend, my contributions with Express JS were central to updating API endpoints, catering to new features and user preferences. This role significantly expanded my knowledge and skillset in app development.",
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2022 - Present',
  },
  {
    title: 'Software Engineer',
    location: 'brightSpark Labs',
    description:
      'I secured an NV1 clearance, enabling me to participate in high-security projects. I worked on a variety of projects, leveraging languages/stacks such as Java/SpringBoot, TypeScript/React, Python, Docker, bash/linux ,postgres/GraphQL and more. Collaborated with colleagues to design and implement a feature to an existing in-house program to improve usability.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2022 - Sep 2022',
  },
  {
    title: 'I.T Client Relations Consultant',
    location: 'Ipau',
    description:
      'Managed multiple primary schools, providing level 1, 2, and 3 support. Duties included writing scripts to manage servers, managing school websites, onsite support and any support regard the IT infrastructure. Managed Group Policy, Active Directory, DNS, and DHCP. Used Veeam for backups and SCCM for software deployment.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2021 - Jan 2022',
  },
] as const;
