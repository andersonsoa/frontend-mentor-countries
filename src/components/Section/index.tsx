import { motion } from "framer-motion";

interface SectionProps {
  delay?: number;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, delay = 0.2, className, ...rest }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
