"use client";
import variants from "@/variants/variants";
import { motion } from "framer-motion";

function ContentContainer({ children }) {
  return (
    <motion.div
      variants={variants.fadeIn("left", 0.2, 0.2)}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default ContentContainer;
