import React from "react";
import styled from "styled-components";
import { About } from "./styled";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";
import { UseScroll } from "./useScroll";
import { scrollReveal } from "./animation";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq ref={element} variants={scrollReveal} animate={controls} initial="hidden">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, iste.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedue?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, iste.
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Method">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, iste.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Product Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, iste.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
