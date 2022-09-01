import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AboutPage from "./components/pages/about_page";
import GlobalStyle from "./components/global_style";
import Nav from "./components/nav";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactUs from "./components/pages/contact_us";
import OurWork from "./components/pages/our_work";
import MovieDetail from "./components/pages/movie_detail";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/scroll_top";

function App() {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />
      <ScrollTop/>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="contactUs" element={<ContactUs />} exact />
          <Route path="ourWork" element={<OurWork />} exact />
          <Route exact path="/" element={<AboutPage />} />
          <Route exact path="/work/:id" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    
    </>
  );
}

export default App;
