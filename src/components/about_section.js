import React from "react";
import homeOne from "../img/home1.png";
import { About, Description, Image, Hide } from "./styled";
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
      hidden: {x: 100},
      show: { x: 0, transition: { duration: 0.75, ease: "easeOut" , staggerChildren: 1, when: 'afterChildren'}}
  }
  return (
    <About>
      <Description>
        <motion.div className="title" animate={container.show} initial={container.hidden}>
          <Hide>
            <motion.h2
              animate={titleAnimation.show}
              initial={titleAnimation.hidden}
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={homeOne} alt="Guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
