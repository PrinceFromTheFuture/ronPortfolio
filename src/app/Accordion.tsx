"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Accordion({ answer, question }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      className=" mb-6 border-b border-b-black/30 font-secondary"
    >
      <div className=" flex items-center">
        <X className={cn(!isOpen && "rotate-45 text-black/60", " transition-all")} />
        <div className=" ml-6 text-xl">{question}</div>
      </div>
      <motion.div layout className=" mb-5">
        <AnimatePresence>
          {isOpen && (
            <motion.p
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=" ml-12 text-black/60 mt-6"
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Accordion;
