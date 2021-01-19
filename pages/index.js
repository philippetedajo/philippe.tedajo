import Head from "next/head";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reaveal, text_reaveal_fade } from "../utils/Animation";

const About = () => {
  const texts = [{ content: "One pixel" }, { content: "Every frame" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 variants={text_reaveal}>{text.content}</motion.h1>
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
          <motion.p variants={text_reaveal_fade}>
            Supporter of "simplicity", I focus on user needs to build intuitive
            digital interfaces, offering a memorable user experience. I work at
            Bhent.inc as a front end developer for several types of projects and
            my area of expertise is <a className="text-third">ReactJs</a>,{" "}
            <a className="text-third">React Native</a> and{" "}
            <a className="text-third">Node</a> . Longly inspired by Indian
            philosophy and culture, all my life and work is design by it.
          </motion.p>
        </motion.div>
        <div className="hidden md:block w-1/2">part 2</div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
