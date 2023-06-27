import React from "react";

import Controller from "./components/Controller";
import FriendsProvider from "./context/FriendsContext";

const App = () => {
  return (
    <FriendsProvider>
      <div className="w-full h-screen bg-zinc-300 flex items-center justify-center p-6 flex-col">
        <Controller />
      </div>
    </FriendsProvider>
  );
};

export default App;
