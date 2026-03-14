export const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

export const hoverScale = {
  whileHover: { scale: 1.08 },
  transition: { duration: 0.35, ease: 'easeOut' }
};
