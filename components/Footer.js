import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      style={{ height: "10vh" }}
      className="px-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center"
    >
      <ul className="flex flex-col text-center sm:flex-row">
        <li>
          <p className="mr-2.5 lg:mr-10">Philippe Tedajo </p>
        </li>
      </ul>
      <ul className="flex text-center ">
        <p className="mr-2.5 lg:mr-10">
          <Link href="https://www.linkedin.com/">
            <AiOutlineGithub size={25} />
          </Link>
        </p>
        <p className="mr-2.5 lg:mr-10">
          <Link href="https://github.com/philippetedajo">
            <AiFillLinkedin size={25} />
          </Link>
        </p>
      </ul>
    </div>
  );
};

export default Footer;
