import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

import Home from './sections/Home'
import Courses from './sections/Courses'
import Navigation from './sections/Navigation'
import Footer from "./sections/Footer";
import ContactUs from "./sections/ContactUs";
import AboutUs from "./sections/AboutUs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.div`
  flex: 1;
`

function App() {

  return (
    <Wrapper>
      <GlobalStyle />
      <Navigation />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
