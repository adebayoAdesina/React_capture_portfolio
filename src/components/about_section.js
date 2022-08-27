import React from "react";
import homeOne from '../img/home1.png'
// import styled from "styled-components";
import { About, Description, Image, Hide } from "./styled";
const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={homeOne} alt="Guy with a camera" srcset="" />
            </Image>
        </About>
    );
}



export default AboutSection;