"use client";
import { motion } from "framer-motion";

const FadeInOnScroll = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  const handleOpenLink = () => {
    if (!href) return;
    window.open(href, "_blank"); // opens in a new tab
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }} // only animate once
      className={className}
      onClick={handleOpenLink}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
