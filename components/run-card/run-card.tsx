'use client';

import { motion } from 'framer-motion';

type RunCardProps = {
  title: string;
  date: string;
  location: string;
  distance: string;
};

export function RunCard({ title, date, location, distance }: RunCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="group overflow-hidden rounded-lg border border-white/15 bg-white/5 p-6 transition"
    >
      <h3 className="text-xl font-semibold uppercase tracking-[0.08em]">{title}</h3>
      <div className="mt-5 space-y-1 text-sm text-white/75">
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <p>Distance: {distance}</p>
      </div>
      <div className="mt-6 h-1 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
    </motion.article>
  );
}
