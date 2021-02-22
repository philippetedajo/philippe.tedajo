import Link from "next/link";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reaveal, fade } from "../utils/Animation";
import { Frame } from "../components"

const Overview = () => {

  const overviews = [
    { content: {title:"Komexxe", link: "https://komexxe.herokuapp.com/fr"} },
    { content: {title:"Rt", link: "https://www.rosine.tedajo.com/"} },
    { content: {title:"Nextwind", link: "https://nextwind-snowy.vercel.app/"} },
  ];

  const overviewList = overviews.map((project, index) => (
    <div className="overflow-hidden mt-6" key={index}>
      <Link href={project.content.link}>
        <a target="_blank" rel="noreferrer noopener" >
          <motion.div className="flex transform duration-700 hover:scale-110 hover:text-third" variants={text_reaveal}>
            <h1 className="mr-2">{project.content.title}</h1>
            <div className="w-14 border-b"/>
          </motion.div>
        </a>
      </Link>
    </div>
  ));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex"
    >
      <motion.div variants={container} className="md:w-1/2 lg:pl-36 z-20">
        {overviewList}
      </motion.div>
      <div className=" opacity-20 md:opacity-100 md:static fixed md:block w-1/2">
        <Frame radius="rounded-full"/>
      </div>
    </motion.div>
  );
};

export default Overview;

Overview.Template = PageTemplate;
