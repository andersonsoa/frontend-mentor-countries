import { motion } from "framer-motion";

interface CountriesProps {
  children: React.ReactNode;
  delay?: number;
}

export const Countries = ({ children, delay = 0.2 }: CountriesProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 mt-14 gap-2"
    >
      {children}
    </motion.div>
  );
};
