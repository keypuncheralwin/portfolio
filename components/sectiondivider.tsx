'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-400 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
    ></motion.div>
  );
}
