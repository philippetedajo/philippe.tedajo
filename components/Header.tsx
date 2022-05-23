import React, { useState } from "react";
import { MenuOverlay } from "../components";
import { Menu, X } from "react-feather";

import ActiveLink from "../utils/Links";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleToggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div style={{ height: "10vh" }} className="px-10 flex justify-between">
      <div className="flex items-center">
        <ActiveLink activeClassName="text-third" href="/">
          <div className="text-4xl cursor-pointer">P.</div>
        </ActiveLink>
      </div>

      <MenuOverlay menuState={menuState} setMenuState={setMenuState} />
      <ul className="text-lg items-center hidden md:flex">
        <li>
          <ActiveLink activeClassName="a-header" href="/">
            <a className="header mr-5">About</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="a-header" href="/overview">
            <a className="header">Works</a>
          </ActiveLink>
        </li>
      </ul>
      <div className="flex items-center md:hidden z-10">
        {menuState ? (
          <X
            onClick={handleToggleMenu}
            fill="#fff"
            size={26}
            className="menu-close cursor-pointer transition-all"
          />
        ) : (
          <Menu
            onClick={handleToggleMenu}
            size={23}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
    </div>
  );
};
