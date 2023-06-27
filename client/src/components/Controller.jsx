import React, { useContext, useState } from "react";

import { motion } from "framer-motion";

import CooeeLogo from "../assets/cooee.png";
import Tips from "./Tips";

import { FriendsContext } from "../context/FriendsContext";

import Loading from "./Loading";
import FriendsList from "./FriendsList";

import axios from "axios";

const Controller = () => {
  const { currentFriends, changeFriends } = useContext(FriendsContext);

  const [totalFriends, setTotalFriends] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const URL = `https://cooeereducer.onrender.com/get_friends_name/${totalFriends}/${nickname}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await axios.get(URL);

    setIsLoading(false);

    const { friends } = res.data;

    setTotalFriends("");
    setNickname("");
    changeFriends(friends);

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="flex items-center justify-center flex-col w-11/12 sm:w-1/3"
        onSubmit={handleSubmit}
      >
        <motion.div className="w-full flex items-center justify-center mb-10">
          <img src={CooeeLogo} alt="cooee logo" className="w-16 sm:w-32" />
          <p className="text-5xl sm:text-8xl font-bold">REDUCER</p>
        </motion.div>
        <Tips />
        <div className="w-full lg:w-10/12 flex items-center justify-center  flex-col">
          <div className="w-full flex items-center justify-center flex-col mb-2">
            <label
              htmlFor="total_friend"
              className="w-full text-left text-sky-700 text-lg"
            >
              TOTAL DE AMIGOS:
            </label>
            <input
              type="number"
              name="total_friend"
              id="total_friend"
              className="w-full rounded-lg bg-zinc-200 p-2 text-zinc-800 text-lg outline-none border border-zinc-400"
              required
              placeholder="Total de amigos da sua lista"
              value={totalFriends}
              onChange={(e) => setTotalFriends(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center justify-center flex-col mb-2">
            <label
              htmlFor="total_friend"
              className="w-full text-left text-sky-700 text-lg"
            >
              SEU NICKNAME:
            </label>
            <input
              type="text"
              name="total_friend"
              id="total_friend"
              className="w-full rounded-lg bg-zinc-200 p-2 text-zinc-800 text-lg outline-none border border-zinc-400"
              required
              placeholder="Nick da sua conta"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center justify-center flex-col mb-2">
            <button className="w-full bg-sky-700 text-zinc-50 p-4 rounded-lg transition-all hover:shadow-2xl font-bold">
              COMEÇAR
            </button>
          </div>
        </div>
      </form>
      {isLoading && <Loading />}
      {currentFriends.length && <FriendsList />}
    </>
  );
};

export default Controller;
