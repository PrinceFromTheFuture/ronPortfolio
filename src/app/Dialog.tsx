"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
function Dialog({ children, description, title }: { title: string; description: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative">
      <div onClick={() => setOpen(!open)}>{children}</div>
      <AnimatePresence>
        {open && (
          <div className=" fixed inset-0  z-10 ">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=" fixed inset-0 z-50 p-8"
            >
              <div onClick={() => setOpen(!open)} className=" rounded-full bg-white p-3 w-min">
                <X className=" text-main" />
              </div>

              <div className=" mt-12 text-6xl">{title}</div>
              <div className=" mt-4 text-3xl font-secondary text-black/80">{description}</div>
            </motion.div>
            <motion.div
              initial={{ y: -100, x: -100, scale: 0 }}
              animate={{ y: -100, x: -100, scale: 100 }}
              exit={{ y: -100, x: -100, scale: 0 }}
              transition={{ duration: 1,  }}
              viewport={{ once: true }} // only animate once
              className="bg-main  rounded-full top-0  aspect-square  absolute  size-16 z-10"
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dialog;
