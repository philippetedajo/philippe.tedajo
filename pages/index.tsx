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
        className="text-7xl mb-8 font-semibold gradient-text"
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
            style={{ lineHeight: "2.1rem" }}
          >
            I build intuitive digital interfaces, offering a memorable user
            experience. I am a professional Front-end developer and my area of
            expertise is React / NextJs / Webpack GraphQl Typescript Scss/Css
            Redux C Javascript Algorithms and data structure RestFull Api and
            NodeJs ✨. My whole life is shaped around my passion for web
            programming.
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
