"use client";
import { motion } from "framer-motion";

const FadeInOnScroll = ({ children,className }: { children: React.ReactNode, className?:string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }} // only animate once
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
