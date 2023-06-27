import React, { useState, useContext } from "react";

import { motion } from "framer-motion";

import Feedback from "./Feedback";
import Loading from "./Loading";

const Confirmation = ({ array, setConfirmation, setList }) => {
  const [needFeedback, setNeedFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletion = async (e) => {
    setIsLoading(true);
    for (let i = 0; i < array.length; i++) {
      const BASE_DELETE_URL = `https://pt.clubcooee.com/users/rosterchange/${array[i]}/ignore`;

      const newTab = window.open(BASE_DELETE_URL, "_blank");

      if (i > array.length) {
        window.location.reload();
        break;
      }
    }
  };

  return (
    <>
      <motion.div className="top-0 left-0 right-0 bottom-0 fixed bg-zinc-900 bg-opacity-70 flex items-center justify-center">
        <div className="w-11/12 sm:w-1/3 flex items-center justify-center flex-col bg-zinc-200 shadow-2xl rounded-lg p-6">
          <p className="w-full text-center font-bold text-sky-700 text-xl mb-2">
            You're about to delete {array.length} friends...
          </p>
          <p className="w-full text-center font-bold text-sky-700 text-2xl mb-2">
            Are you sure?
          </p>
          <p className="w-full text-left font-bold text-zinc-700 text-md mb-2 px-4">
            If you're not sure, just reload the page.
          </p>
          <button
            className="w-11/12 bg-sky-700 text-zinc-50 font-bold p-4 text-center"
            onClick={handleDeletion}
          >
            CONTINUE
          </button>
        </div>
      </motion.div>
      {needFeedback && <Feedback success={true} error={false} />}
      {isLoading && <Loading />}
    </>
  );
};

export default Confirmation;
