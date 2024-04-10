"use client";
import variants from "@/variants/variants";
import { AnimatePresence, motion } from "framer-motion";

function Main({ children }) {
  return (
    <motion.main
      variants={variants.fadeIn("left", 0.2, 0.2)}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>{children}</AnimatePresence>
    </motion.main>
  );
}

export default Main;
