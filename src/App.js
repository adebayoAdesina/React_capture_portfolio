import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AboutPage from './components/pages/about_page';
import GlobalStyle from './components/global_style';


function App() {
  return (
    <>
    <GlobalStyle/>
    <AboutPage/>

    </>
  );
}

export default App;
