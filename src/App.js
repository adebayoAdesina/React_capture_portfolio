import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AboutPage from './components/pages/about_page';
import GlobalStyle from './components/global_style';
import Nav from './components/nav';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/pages/contact_us';
import OurWork from './components/pages/our_work';


function App() {
  return (
    <>
    <GlobalStyle/>
    <Nav/>
    <Routes>
      <Route path='contactUs' element={<ContactUs/>}  exact />
      <Route  path='ourWork' element={<OurWork/>}/>
      <Route exact path='/' element={<AboutPage/>} />
      
      
    </Routes>
    </>
  );
}

export default App;
