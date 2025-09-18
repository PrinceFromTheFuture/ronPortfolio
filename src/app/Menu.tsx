"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import FadeInOnScroll from "./FadeIn";

function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [closedSize, setClosedSize] = useState({ width: 0, height: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  // Measure natural size
  useLayoutEffect(() => {
    if (menuRef.current) {
      setClosedSize({
        width: menuRef.current.offsetWidth,
        height: menuRef.current.offsetHeight,
      });
    }
  }, []);
  return (
    <div className=" absolute z-20 right-4 top-4 flex justify-end  left-4 ">
      <motion.div
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          width: isOpen ? "100%" : closedSize.width,
          height: isOpen ? "60vh" : closedSize.height,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className=" flex justify-end gap-3 items-start relative  shadow-2xl text-white bg-black rounded-4xl p-4 px-6"
      >
        <div className=" text-xl ">MENU</div>
        <MenuIcon color="#A1A29C" className=" " />
        {isOpen && (
          <motion.div
            className="absolute top-8 left-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.3 }}
          >
            <div className=" ">fd</div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Menu;
