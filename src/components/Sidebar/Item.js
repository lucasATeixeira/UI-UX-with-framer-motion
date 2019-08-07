import React from "react";
import { motion } from "framer-motion";

export default function Item() {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  return (
    <motion.li
      className="list-item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="avatar" />
      <div className="content" />
    </motion.li>
  );
}
