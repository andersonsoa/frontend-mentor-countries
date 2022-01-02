import { motion } from "framer-motion";

interface SectionProps {
  delay?: number;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, delay = 0.2, className, ...rest }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`max-w-7xl w-full mx-auto px-3 mt-14 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
