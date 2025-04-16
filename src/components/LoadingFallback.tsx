
import React from 'react';
import { motion } from 'framer-motion';

const LoadingFallback = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-2xl">
          PC
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingFallback;
