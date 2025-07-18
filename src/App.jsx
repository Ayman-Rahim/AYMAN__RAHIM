import React, { lazy, Suspense, useEffect } from 'react';
import './Style/app/app.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"
import AboutCarousel from './Components/PageAbout/AboutCarousel';
const Nav = lazy(() => import('./Components/PageHome/Nav'));
const Carousel = lazy(() => import('./Components/PageHome/Carousel'));
const Article1 = lazy(() => import('./Components/PageHome/Article1'));
const Article2 = lazy(() => import('./Components/PageHome/Article2'));
const Article3 = lazy(() => import('./Components/PageHome/Article3'));
const Article4 = lazy(() => import('./Components/PageHome/Article4'));
const Article5 = lazy(() => import('./Components/PageHome/Article5'));
const Services = lazy(() => import('./Components/PageHome/Services'));
const Clients = lazy(() => import('./Components/PageHome/Clients'));
const Contact = lazy(() => import('./Components/PageHome/Contact'));
const Footer = lazy(() => import('./Components/PageHome/Footer'));
const About = lazy(() => import('./Components/PageAbout/About'));
const Section1 = lazy(() => import('./Components/PageAbout/Section1'));
const Section2 = lazy(() => import('./Components/PageAbout/Section2'));
const Section3 = lazy(() => import('./Components/PageAbout/Section3'));
const ContactCarousel = lazy(() => import('./Components/PageContact/ContactCarousel'));
const ContactFrom = lazy(() => import('./Components/PageContact/ContactFrom'));


function App() {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <div className="app">
        <HashRouter>
          <ScrollToTop />
          
          <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/Accueil" />} />
            <Route path='/Accueil' element={
              < >
                <Carousel />
                <Article1 />
                <Article2 />
                <Article3 />
                <Article4 />
                <Article5 />
                <Services />
                <Clients />
                <Contact />
                <Footer />
              </>
            }/>

            <Route path='/About' element={
              < >
                <AboutCarousel />
                <About />
                <Section1 />
                <Section2 />
                <Section3 />
                <Contact />
                <Footer />
              </>
              }/>

            <Route path='/Contact' element={
              < >
                <ContactCarousel />
                <ContactFrom />
                <Contact />
                <Footer />
              </>
              }/>
          </Routes>
          
        
        </HashRouter>
    </div>
  )
}

export default App
