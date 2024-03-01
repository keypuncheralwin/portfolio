import lavaRising from '@/public/lavaRising.png';
import netflicks from '@/public/netflicks.png';
import chat from '@/public/chat.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { ProjectData } from './types';

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

export const projectsData: ProjectData[] = [
  {
    title: 'NetFlicks',
    description:
      'NetFlicks is a dynamic platform for exploring, tracking, and organising your favorite movies and TV shows. Built with Next.js 14, with options to log in via email or Google.',
    tags: [
      'next js',
      'typescript',
      'next-auth',
      'tailwind',
      'prisma',
      'supabase',
    ],
    imageUrl: netflicks,
    linkedinUrl: 'https://github.com/keypuncheralwin/net-flicks',
    websiteUrl: 'https://netflicks.alwingeorge.dev',
  },
  {
    title: 'Lava Rising',
    description:
      'A 2d platformer game made with the unity game engine. Try and survive by avoiding the falling debris but be careful not to fall into the rising lava. Play it on the browser or on mobile (playstore).',
    tags: ['Unity', 'C#'],
    imageUrl: lavaRising,
    linkedinUrl:
      'https://github.com/keypuncheralwin/Lava-Rising--Platformer-Game-',
    websiteUrl: 'https://keypuncheralwin.itch.io/lava-rising',
  },
  {
    title: 'Chat Application',
    description:
      'A simple online chat application, allowing instant messaging leveraging websockets. Allows for private one to one messaging with presistent chat history.',
    tags: ['java', 'springboot', 'javascript', 'html', 'css', 'mongodb'],
    imageUrl: chat,
    linkedinUrl: 'https://github.com/keypuncheralwin/chat',
    websiteUrl: 'http://chat.alwingeorge.dev/',
  },
];

export const skillsData = [
  'HTML/CSS',
  'Sass/Tailwind',
  'JavaScript',
  'Typescript',
  'Python',
  'C#',
  'Java',
  'React Js',
  'Next Js',
  'React Native',
  'Angular',
  'Node.js',
  'Express',
  'Flask',
  'Postgres (SQL)',
  'MongoDB',
  'Sequelize',
  'Prisma',
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
      "Working on various aspects of the company's primary ride-sharing app, I managed to significantly reduce monthly Twilio costs by analysing SMS triggers, prioritising push notifications over SMS, and ensuring SMS were sent only if push notifications failed. Additionally, savings were further enhanced by refactoring the SMS message content to reduce its character size. In terms of development, I contributed to refining the application's front-end using React Native, adapting to evolving feature demands and enhancing the user experience. My involvement extended to the back-end, where I utilised Express JS to update and overhaul API endpoints to accommodate new functionalities and user needs. This comprehensive engagement across different facets of the app substantially broadened my technical knowledge and skills, fostering my continuous professional development in the app development sector.",
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2022 - Present',
  },
  {
    title: 'Software Engineer',
    location: 'brightSpark Labs',
    description:
      'Obtained an NV1 clearance, enabling involvement in high-security projects. Contributed to enhancing an existing node graph visualiser by implementing React Fiber, overcoming limitations of the react-force-graph library for superior 3D graph control. My work extended to refining our in-house codebase, focusing on the Angular frontend and Java-based Dropwizard backend, building on top of existing features to extend their functionality. To streamline software setup, crafted linux bash scripts that automated configurations, enhancing efficiency and fostering a collaborative environment. Updated and modernised outdated documentation, facilitating the onboarding of new team members and enhancing project accessibility.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2022 - Sep 2022',
  },
  {
    title: 'I.T Client Relations Consultant',
    location: 'Ipau',
    description:
      'Managed IT operations across several primary schools, providing extensive support and system administration for servers, networks, and IT infrastructure. Enhanced workflows through scripting, maintained school websites to guarantee their ongoing functionality and accessibility, and offered both onsite and remote technical support to resolve IT issues. Oversaw the management of Windows Servers, PCs, and mobile devices to ensure their efficient operation.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2021 - Jan 2022',
  },
] as const;
