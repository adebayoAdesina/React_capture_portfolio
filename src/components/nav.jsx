import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1 className="col-12-xm col-12-sm col-12-md">
        <Link to="/" className="logo">
          Portfolio
        </Link>
      </h1>
      <ul>
        <li className="col-xm-4 col-md-4 col-sm-4">
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li className="col-xm-4 col-md-4 col-sm-4">
          <Link to="ourWork">2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/ourWork" ? "50%" : "0%" }}
          />
        </li>
        <li className="col-xm-4 col-md-4 col-sm-4">
          <Link to="contactUs">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contactUs" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: Flex;
  flex-wrap: wrap;
  min-height: 10vh;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  z-index: 1000;
  top: 0;
  a {
    color: white;
    text-decoration: none;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 992px) {
    justify-content: center;
    padding: 1rem 2rem;
    li {
      padding-left: 3rem;
      padding-top: 1rem;
      position: relative;
    }
    ul {
      width: 100%;
      display: flex;
      list-style-type: none;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 992px) {
    left: 20%;
    bottom: -50%;;
  }
`;
export default Nav;
