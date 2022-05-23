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

export const text_reveal = {
  initial: { y: 180 },
  animate: { y: 0, opacity: 1, transition: { duration: 1.4 } },
  exit: { y: 120, opacity: 0, transition: { duration: 1.1 } },
};

export const text_reveal_fade = {
  initial: { y: 180, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1.4 } },
  exit: { y: 120, opacity: 0, transition: { duration: 1 } },
};
