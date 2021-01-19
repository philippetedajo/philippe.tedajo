import Head from "next/head";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, item } from "../utils/Animation";

const About = () => {
  const texts = [{ content: "One pixel" }, { content: "Every frame" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 variants={item}>{text.content}</motion.h1>
    </div>
  ));

  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
        </motion.div>
        <div className="hidden md:block w-1/2">part 2</div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
