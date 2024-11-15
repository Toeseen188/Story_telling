export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "down" ? 30 : -30, // Slide in from the top or bottom
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };
};
