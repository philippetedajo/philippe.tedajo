export const container = {
  initial: { opacity: 1 },
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  initial: { y: 80 },
  animate: { y: 0, transition: { duration: 0.8 } },
  exit: { y: 80, transition: { duration: 0.8 } },
};
