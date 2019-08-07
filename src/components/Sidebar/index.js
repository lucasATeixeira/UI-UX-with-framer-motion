import React from "react";
import { motion, useCycle } from "framer-motion";
import { Nav } from "./styles";
import List from "./List";

export default function Sidebar() {
  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(27px at 40px 40px)",
      transition: {
        when: "afterChild",
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const [isOpen, toggle] = useCycle(false, true);

  return (
    <Nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <List />
      </motion.div>
      <button className="expand" onClick={() => toggle()}>
        ...
      </button>
    </Nav>
  );
}
