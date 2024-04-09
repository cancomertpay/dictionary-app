"use client";

import variants from "@/variants/variants";
import { motion } from "framer-motion";

function HeeaderContainer({ children }) {
  return (
    <motion.header
      variants={variants.fadeIn("up", 0.2, 0.4)}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between py-5 md:py-8"
    >
      {children}
    </motion.header>
  );
}

export default HeeaderContainer;
