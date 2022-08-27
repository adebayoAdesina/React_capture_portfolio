import React from 'react'
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import homeTwo from '../img/home2.png';
import { About, Description, Image, } from "./styled";
import styled from 'styled-components';

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>High <span>quality</span> services</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamworl"/>
              <h3>Team Work</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="clock"/>
              <h3>Diaphragm</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={money} alt="clock"/>
              <h3>Afforable</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </Description>
      <Image>
        <img src={homeTwo} alt="homeTwo" />
      </Image>
    </Services>
  )
}

const Services = styled(About)``;

export default ServicesSection