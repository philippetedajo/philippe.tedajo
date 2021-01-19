export const container = {
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

export const text_reaveal = {
  initial: { y: 80 },
  animate: { y: 0, transition: { duration: 0.8 } },
  exit: { y: 80, transition: { duration: 0.8 } },
};

export const text_reaveal_fade = {
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  exit: { y: 80, opacity: 0, transition: { duration: 1 } },
};
