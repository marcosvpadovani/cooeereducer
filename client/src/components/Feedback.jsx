import React from "react";

import { motion } from "framer-motion";

import Happy from "../assets/smile-emoticon.png";
import Sad from "../assets/sad-face.png";

const Feedback = ({ success, error }) => {
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
        {success && (
          <div className="w-full flex items-center justify-center flex-col">
            <img src={Happy} alt="happy" className="w-28 mb-2" />
            YAY! All done!
          </div>
        )}
        {error && (
          <div className="w-full flex items-center justify-center flex-col">
            <img src={Sad} alt="happy" className="w-28 mb-2" />
            Oh no! Something went wrong...
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Feedback;
