import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  const list = { hidden: { opacity: 1 } };
  const item = { hidden: { x: -10, opacity: 0 } };
  return (
    <div>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        hello world
      </motion.h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam
        atque cumque iusto assumenda asperiores. Commodi est tempora facilis
        autem, officia officiis, a deleniti id neque praesentium, quidem fugit
        sapiente?
      </p>
      <motion.ul animate="visible" variants={list}>
        <motion.li variants={item}>foo</motion.li>
        <motion.li variants={item}>foo</motion.li>
        <motion.li variants={item}>foo</motion.li>
      </motion.ul>
    </div>
  );
};

export default Test;
