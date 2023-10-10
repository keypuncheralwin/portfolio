'use client'

import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/activeSectionContext';


export default function About() {
  const {ref, inView} = useInView({
    threshold: 0.75
  });
  const { setActiveSection } = useActiveSectionContext()
  useEffect(() => {
    if(inView){
      setActiveSection('About');
    }
  },[inView,setActiveSection])
  

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
    <p className="mb-3">
        My educational journey began at James Cook University, where I earned my <span className="font-bold">degree in Information Technology</span>. Eager to delve deeper into the world of software development, I pursued further studies with <span className="font-bold">General Assembly's Software Engineering Immersive program</span>. With a strong foundation in <span className="font-bold">React, Node.js, and TypeScript</span>, I've been instrumental in crafting scalable and efficient solutions in various roles.
    </p>

    <p>
        Beyond the world of code, I am a creative at heart. My <span className="underline">love</span> for cinema doesn't just end at watching movies; I delve into the world of <span className="underline">photography and videography</span>, capturing moments and weaving stories. When I'm not coding or behind a camera, you might find me exploring the nuances of cinema, appreciating the art of storytelling on screen. With a blend of technical acumen and a penchant for <span className="font-bold">creativity</span>, I strive to bring a unique perspective to every project I undertake. Collaborative, passionate, and <span className="font-bold">ever-curious</span>, I am driven to combine my skills and interests to create lasting impacts in the tech landscape.
    </p>
    </motion.section>

  )
}
