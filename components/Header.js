import React, { useState } from "react";
import { MenuOverlay } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import ActiveLink from "../utils/Links";

const Header = () => {
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
            <a className="header">Some works</a>
          </ActiveLink>
        </li>
      </ul>
      <div className="flex items-center md:hidden z-10">
        {menuState ? (
          <IoCloseSharp
            onClick={handleToggleMenu}
            fill="#fff"
            size={26}
            className="menu-close cursor-pointer transition-all"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            size={23}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
