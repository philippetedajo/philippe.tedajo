import Link from "next/link";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reaveal } from "../utils/Animation";
import { Frame } from "../components";
import SeoTags from "../components/SeoTags";

const Overview = () => {
  const overviews = [
    {
      content: {
        title: "Nextwind",
        link: "https://nextwind-snowy.vercel.app/",
      },
    },
    { content: { title: "Codetree", link: "https://codetree.vercel.app/" } },
    { content: { title: "Rt", link: "https://www.rosine.tedajo.com/" } },
  ];

  const overviewList = overviews.map((project, index) => (
    <div className="overflow-hidden mt-6" key={index}>
      <Link href={project.content.link}>
        <a target="_blank" rel="noreferrer noopener">
          <motion.div
            className="flex transform duration-700 hover:scale-110 hover:text-third"
            variants={text_reaveal}
          >
            <h1 className="mr-2">{project.content.title}</h1>
          </motion.div>
        </a>
      </Link>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36 z-20">
          {overviewList}
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-full " />
        </div>
      </motion.div>
    </>
  );
};

export default Overview;

Overview.Template = PageTemplate;
