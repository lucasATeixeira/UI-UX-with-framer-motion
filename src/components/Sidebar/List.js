import React from "react";
import Item from "./Item";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function List() {
  return (
    <motion.ul className="list" variants={variants}>
      {[0, 1, 2, 3, 4].map(a => (
        <Item key={a} />
      ))}
    </motion.ul>
  );
}
