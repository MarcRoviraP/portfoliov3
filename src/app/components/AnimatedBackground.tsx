'use client';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] rounded-full bg-cyan-900/30 blur-[120px]"
        animate={{
          x: ['0%', '30%', '-20%', '0%'],
          y: ['0%', '-40%', '20%', '0%'],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ top: '-10%', left: '-10%' }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] rounded-full bg-purple-900/20 blur-[100px]"
        animate={{
          x: ['0%', '-40%', '20%', '0%'],
          y: ['0%', '30%', '-30%', '0%'],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '-10%', right: '-10%' }}
      />
      <motion.div
        className="absolute w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] rounded-full bg-blue-900/10 blur-[150px]"
        animate={{
          x: ['0%', '20%', '-20%', '0%'],
          y: ['0%', '20%', '-20%', '0%'],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ top: '20%', left: '20%' }}
      />
    </div>
  );
}
