import lavaRising from '@/public/lavaRising.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

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

export const experiencesData = [
  {
    title: 'Lorem Ipsum',
    location: 'Dolor Sit, AM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    icon: React.createElement(LuGraduationCap),
    date: 'Lorem Date',
  },
  {
    title: 'Consectetur Adipiscing',
    location: 'Elit, LM',
    description:
      'Donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.',
    icon: React.createElement(CgWorkAlt),
    date: 'Ipsum - Dolor',
  },
  {
    title: 'Sed Do Eiusmod',
    location: 'Tempor, TX',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    icon: React.createElement(FaReact),
    date: 'Lorem - Ipsum',
  },
] as const;
