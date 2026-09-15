import React from "react";
import { motion } from "framer-motion";

export function Reveal({
  children,
  width = "100%",
  className = "",
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  style = {}
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ width, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
