'use client';

import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 1);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 md:text-xl">
        I began my education at James Cook University, earning a{' '}
        <span className="font-bold">degree in Information Technology</span>, and
        further honed my skills through{' '}
        <span className="font-bold">
          General Assembly's Software Engineering Immersive program
        </span>
        . Specializing in{' '}
        <span className="font-bold">React, Node.js, and TypeScript</span>, I've
        contributed to developing scalable solutions across various roles.
      </p>

      <p className="mb-3 md:text-xl">
        Aside from coding, my passion extends to cinema,{' '}
        <span className="underline">photography and videography</span> where I
        enjoy capturing and creating stories. My interest in the art of
        storytelling through film complements my technical skills, allowing me
        to offer a <span className="font-bold">distinctive approach</span> to
        each project. As a collaborative and passionate professional with a mix
        of technical and creative skills, I aim to make a meaningful impact in
        the tech world.
      </p>
    </motion.section>
  );
}
