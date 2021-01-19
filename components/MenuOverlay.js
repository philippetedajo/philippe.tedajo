import React from "react";
import Link from "next/link";
import Router from "next/router";

const MenuOverlay = ({ menuState, setMenuState }) => {
  Router.events.on("routeChangeStart", () => setMenuState(false));

  return (
    <div
      className={
        menuState
          ? "md:hidden fixed top-0 right-0 h-full w-full z-10 text-primary"
          : "fixed "
      }
      onClick={() => setMenuState(false)}
    >
      <div
        className={
          menuState
            ? "md:hidden w-screen fixed bg-secondary h-full z-20 top-0 right-0 overflow-x-hidden opacity-100 transition-all ease-in-out duration-700"
            : "md:hidden w-0 fixed bg-secondary h-full z-20 top-0 right-0 overflow-x-hidden opacity-0 transition-all ease-in-out duration-700"
        }
      >
        <div className="relative top-14 h-96 flex flex-col justify-center items-center">
          <Link href="/">
            <a className="text-6xl my-3 cursor-pointer">About</a>
          </Link>
          <Link href="/overview">
            <a className="text-6xl my-3 cursor-pointer"> Works</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
