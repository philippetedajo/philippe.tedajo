import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reaveal } from "../utils/Animation";

const Overview = () => {
  const overviews = [
    { content: "Flatlin" },
    { content: "Flatlin" },
    { content: "Rigel" },
    { content: "Rigel" },
  ];

  const overviewList = overviews.map((project, index) => (
    <div className="overflow-hidden mt-6" key={index}>
      <motion.h1 variants={text_reaveal}>{project.content}</motion.h1>
    </div>
  ));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex"
    >
      <motion.div variants={container} className="md:w-1/2 lg:pl-36">
        {overviewList}
      </motion.div>
      <div className="hidden md:block w-1/2">part 2</div>
    </motion.div>
  );
};

export default Overview;

Overview.Template = PageTemplate;
