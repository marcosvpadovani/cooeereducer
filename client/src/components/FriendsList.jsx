import React, { useContext, useState, useRef } from "react";
import debounce from "lodash.debounce";

import { FriendsContext } from "../context/FriendsContext";

import { motion } from "framer-motion";

import Confirmation from "./Confirmation";

const FriendsList = () => {
  const { currentFriends, changeFriends } = useContext(FriendsContext);
  const [frnd, setFrnd] = useState([...currentFriends]);
  const [confirmAction, setConfirmAction] = useState(false);

  const deleteRef = useRef();

  const searchFriend = (e) => {
    let filtered;
    const value = e.target.value.toLowerCase();

    if (value.length) {
      filtered = frnd.filter((fr) => fr.toLowerCase().indexOf(value) !== -1);
      setFrnd(filtered);
    } else {
      filtered = [...currentFriends];
      setFrnd(filtered);
    }
  };

  const debouncedSearch = debounce(searchFriend, 300);

  const handleFriendDelete = (e) => {
    const friendToDelete = e.target.dataset.delete;
    const index = frnd.indexOf(friendToDelete);
    currentFriends.splice(index, 1);
    setFrnd([...currentFriends]);
  };

  return (
    <>
      <motion.div
        className="w-11/12 bg-zinc-200 flex items-center justify-start list-none flex-col overflow-y-auto p-6 shadow-2xl border rounded-xl fixed top-3 left-3 bottom-3 right-3 mx-auto"
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="w-full text-center mb-4 text-xl font-bold text-sky-700">
          <p>Showing a total of {frnd.length} friends...</p>
        </div>
        <div className="w-full flex items-center justify-start p-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search a friend"
            className="w-1/2 sm:w-1/4 p-4 outline-none border-zinc-400 bg-zinc-300 rounded-lg"
            onChange={debouncedSearch}
          />
        </div>
        <ul className="w-full p-4  max-h-[800px] flex items-center justify-start flex-col overflow-y-auto overflow-x-hidden">
          {frnd.length ? (
            frnd.map((friend, idx) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  key={idx}
                  className="w-full border m-2 flex items-center justify-between p-2 py-5 rounded-lg shadow-md h-fit bg-zinc-100"
                >
                  <p className="text-sky-700 text-xl font-bold text-center mx-2">
                    {friend}
                  </p>
                  <button
                    className="bg-red-600 p-4 text-center text-zinc-50 border-none outline-none font-bold m-1 rounded-md transition-colors hover:bg-red-700"
                    data-delete={friend}
                    ref={deleteRef}
                    onClick={handleFriendDelete}
                  >
                    Delete
                  </button>
                </motion.li>
              );
            })
          ) : (
            <p className="text-zinc-900 font-bold text-2xl text-center col-span-12">
              No friends yet.
            </p>
          )}
        </ul>
        <div className="w-full flex items-center justify-center">
          <button
            className="w-11/12 sm:w-1/3 p-4 bg-sky-700 font-bold text-center my-4 rounded-lg text-zinc-50 transition-colors hover:bg-sky-800"
            onClick={() => setConfirmAction(!confirmAction)}
          >
            EXCLUIR
          </button>
        </div>
        {confirmAction && (
          <Confirmation
            array={frnd}
            setConfirmation={setConfirmAction}
            setList={setFrnd}
          />
        )}
      </motion.div>
    </>
  );
};

export default FriendsList;
