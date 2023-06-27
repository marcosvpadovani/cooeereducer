import React, { createContext, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  return (
    <FriendsContext.Provider
      value={{ currentFriends: friends, changeFriends: setFriends }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
