import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "One pixel at a time" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 className="font-cairo font-semibold" variants={text_reveal}>
        {text.content}
      </motion.h1>
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
          <motion.p variants={text_reveal_fade}>
            I build intuitive digital interfaces, offering a memorable user
            experience. I am a professional Front-end developer and my area of
            expertise is <a className="text-blue-400">ReactJs 🎗</a>,{" "}
            <a className="text-pink-400">GraphQl</a>,{" "}
            <a className="text-green-400">Typescript ♥️</a>,{" "}
            <a className="text-pink-400">Scss/Css</a>,{" "}
            <a className="text-blue-400">Redux</a>,{" "}
            <a className="text-green-400">C </a>,{" "}
            <a className="text-pink-400">Javascript</a>,{" "}
            <a className="text-green-400">Algorithms and data structure</a>,{" "}
            <a className="text-pink-400">RestFull Api</a> and{" "}
            <a className="text-blue-400">NodeJs ✨</a>.
            My whole life is shaped around my passion for web programming.
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
