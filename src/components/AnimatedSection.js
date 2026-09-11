import { motion } from "framer-motion";

const directionVariants = {
  up: { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -36 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 18 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -18 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
};

/**
 * Fades + slides an element into view as the user scrolls to it.
 * Wrap any section / block with this to get a consistent scroll reveal.
 */
export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Wraps a list of children and staggers their entrance.
 * Use together with <StaggerItem /> for each child.
 */
export function StaggerGroup({
  children,
  className = "",
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  duration = 0.5,
  className = "",
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <MotionTag
      className={className}
      variants={variants}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
