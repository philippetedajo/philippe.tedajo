import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reaveal, text_reaveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [
    { content: "Build universe one" },
    { content: "pixel at a time" },
  ];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 className="font-cairo font-semibold" variants={text_reaveal}>
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
          <motion.p variants={text_reaveal_fade}>
            I focus on user needs to build intuitive digital interfaces,
            offering a memorable user experience. I am a professional Front-end
            developer and my area of expertise is{" "}
            <a className="text-third">ReactJs</a>,{" "}
            <a className="text-third">GraphQl</a>,{" "}
            <a className="text-third">Typescript ♥️</a>,{" "}
            <a className="text-third">Scss/Css</a>,{" "}
            <a className="text-third">Redux</a>,{" "}
            <a className="text-third">Advance Javascript</a>,{" "}
            <a className="text-third">Algorithms and data structure</a>,{" "}
            <a className="text-third">RestFull Api</a> and{" "}
            <a className="text-third">NodeJs</a> .All my life and work is design
            by my passion for programming.
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
