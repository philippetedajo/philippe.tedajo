import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Player from "./Sound";

const Footer = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="px-10 flex items-center justify-between "
    >
      <ul className="flex flex-col text-center sm:flex-row hidden md:block">
        <li>
          <p className="mr-2.5 lg:mr-10">Philippe Tedajo </p>
        </li>
      </ul>
      <ul className="flex text-center ">
        <p className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://github.com/philippetedajo">
            <a target="_blank" rel="noreferrer noopener">
              <AiOutlineGithub size={25} />
            </a>
          </Link>
        </p>
        <p className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://www.linkedin.com/">
            <a target="_blank" rel="noreferrer noopener">
              <AiFillLinkedin size={25} />
            </a>
          </Link>
        </p>
      </ul>
      <Player />
    </div>
  );
};

export default Footer;
