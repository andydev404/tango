export const opacityAnimationProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const slideUpAnimationProps = {
  whileInView: { y: 0, opacity: 1 },
  initial: { y: 100, opacity: 0 },
  transition: { y: { stiffness: 1000, velocity: -100 } },
  viewport: { once: true }
};
