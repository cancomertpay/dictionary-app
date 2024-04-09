// global framer motion variants

const variants = {
  // fade in
  fadeIn(direction, delay, duration) {
    let variants = {};
    switch (direction) {
      case "right":
        variants = {
          hidden: {
            x: 20,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "spring",
              stiffness: 100,
            },
          },
        };
        break;
      case "left":
        variants = {
          hidden: {
            x: -20,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "spring",
              stiffness: 100,
            },
          },
        };
        break;
      case "up":
        variants = {
          hidden: {
            y: -20,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "spring",
              stiffness: 100,
            },
          },
        };
        break;
      case "down":
        variants = {
          hidden: {
            y: 20,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "spring",
              stiffness: 100,
            },
          },
        };
        break;
      default:
        variants = {
          hidden: {
            x: 20,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "spring",
              stiffness: 100,
            },
          },
        };
        break;
    }
    return variants;
  },
};

export default variants;
