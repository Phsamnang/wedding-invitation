"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900/40 fixed top-0 left-0 h-full w-full flex-col z-[100] flex justify-center items-center"
        >
          <motion.svg animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"></path><path d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"></path></motion.svg>
          <p className="text-white font-serif mt-2 tracking-wide">អូសចុះក្រោម</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
