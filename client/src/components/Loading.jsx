import React from "react";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="fixed left-0 right-0 bottom-0 top-0 bg-zinc-900 bg-opacity-70 flex items-center justify-center flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-11/12 sm:w-1/3 bg-zinc-300 p-4 rounded-lg shadow-2xl flex items-center justify-center flex-col"
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-full border-8 border-sky-700 border-r-8 border-r-zinc-300 animate-spin mb-4"></div>
        <p className="text-lg font-bold text-zinc-800">PROCESSANDO...</p>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
