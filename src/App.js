import React from "react";
import Navbar from "./components/navbar";
import Games from "./components/gamesData";

const App = () => {
  return (
    <>
      <div className="bg-zinc-700 min-w-full min-h-full ">
        <Navbar  />
        <Games/>
      </div>
    </>
  );
};

export default App;
