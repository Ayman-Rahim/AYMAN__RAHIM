import React, { lazy, Suspense, useEffect } from 'react';
import './Style/app/app.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"
const Nav = lazy(() => import('./Components/PageHome/Nav'));
const Carousel = lazy(() => import('./Components/PageHome/Carousel'));
const Carousell = lazy(() => import('./Components/PageHome/CarouselStatic'));
const Article1 = lazy(() => import('./Components/PageHome/Article1'));
const Article2 = lazy(() => import('./Components/PageHome/Article2'));
const Article3 = lazy(() => import('./Components/PageHome/Article3'));
const Article4 = lazy(() => import('./Components/PageHome/Article4'));
const Article5 = lazy(() => import('./Components/PageHome/Article5'));
const Article6 = lazy(() => import('./Components/PageHome/Article6'));
const Services = lazy(() => import('./Components/PageHome/Services'));
const AllServices = lazy(() => import('./Components/PageHome/AllServices'));
const Clients = lazy(() => import('./Components/PageHome/Clients'));
const Contact = lazy(() => import('./Components/PageHome/Contact'));
const Footer = lazy(() => import('./Components/PageHome/Footer'));



function App() {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <div className="app">
        <HashRouter basename="/Accueil#home">
          <ScrollToTop />
          
          <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/Accueil" />} />
            <Route path='/Accueil' element={
              < >
                <div id="home">
                  <Carousell />
                </div>
                <Article1 />
                <div id="projects">
                  <Article2 />
                </div>
                <Article3 />
                <Article4 />
                <Article5 />
                <Article6 />
                <Services />
                <AllServices />
                {/* <Clients /> */}
                <div id="footer">
                  <Contact />
                </div>
                  {/* <Footer /> */}
              </>
            }/>

            
          </Routes>
          
        
        </HashRouter>
    </div>
  )
}

export default App
