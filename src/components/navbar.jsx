// navbar with text "freeGameZ" with a game icon and a link to my github
import React from "react";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

function Navbar() {
  return (
    <>
      <nav className="navbar flex p-8 h-10 bg-zinc-800 w-[95vw] hover:italic mx-auto  sticky z-10 items-center justify-between shadow-2xl shadow-inner transition-all border-b-2 border-red-400  hover:w-[96vw] shadow-zinc-900  drop-shadow-2xl rounded-tr-3xl  rounded-bl-3xl hover:rounded-tl-3xl hover:rounded-br-3xl hover:rounded-tr-none hover:rounded-bl-none text-white font-mono text-3xl">
        <h1 className="drop-shadow-lg cursor-pointer font-medium  ">
          freeGameZ
          <span role="img" aria-label="game">
            🎮
          </span>
        </h1>
        <a
          href="https://github.com/A-JA-Y/free-games"
          target="_blank"
          className="github-link"
        >
          <Button
            type="default"
            danger
            shape="circle"
            icon={<GithubOutlined />}
          />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
