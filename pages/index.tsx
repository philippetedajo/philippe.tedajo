import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "One pixel at a time" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div
        style={{ fontSize: "5rem" }}
        className="mb-8 gradient-text"
        variants={text_reveal}
      >
        {text.content}
      </motion.div>
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
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
            I'm a Full stack Software engineer , I build thing for the web,
            offering a memorable user experience. Currently working with{" "}
            <span className="gradient-text">
              React, GraphQl, Typescript, NodeJs and Prisma
            </span>{" "}
            . My whole life is shaped around my passion for{" "}
            <span className="underline-span">programming</span> .
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
