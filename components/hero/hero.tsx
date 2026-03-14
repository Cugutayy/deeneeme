'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-36">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1594737625785-cb7ed87f3f5f?auto=format&fit=crop&w=2100&q=80"
      >
        <source src="https://cdn.coverr.co/videos/coverr-running-through-the-city-1576/1080p.mp4" type="video/mp4" />
      </video>
      <div className="noise absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3 text-xs uppercase tracking-[0.35em] text-lime"
        >
          Urban Running Collective
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl font-bold uppercase tracking-[0.2em] md:text-8xl"
        >
          Alsancak Runners
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-3 text-2xl font-medium uppercase tracking-[0.2em] md:text-4xl"
        >
          Run The City
        </motion.h2>
        <p className="mt-10 text-sm uppercase tracking-[0.3em] text-white/80">↓ Run With Us</p>
      </div>
    </section>
  );
}
