import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MenuOverlay } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import ActiveLink from "../utils/Links";

const Header = ({ onToggleSound, isPlaying }) => {
  const [menuState, setMenuState] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleToggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div style={{ height: "10vh" }} className="px-10 flex justify-between">
      <div className="flex items-center">
        <ActiveLink activeClassName="text-third" href="/">
          <div className="text-4xl cursor-pointer">P.</div>
        </ActiveLink>

        <div className="ml-6 flex cursor-pointer mt-2" onClick={toggleTheme}>
          {theme === "light" ? (
            <Image
              src="/icons/moon-fill.svg"
              alt="sound-off"
              width={25}
              height={25}
              className="transform transition duration-300 hover:scale-110"
            />
          ) : (
            <Image
              src="/icons/sun-fill.svg"
              alt="sound-off"
              width={25}
              height={25}
              className="transform transition duration-300 hover:scale-110"
            />
          )}
        </div>
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
