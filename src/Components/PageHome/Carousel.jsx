import React, { lazy, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Style/page1/carousel/carousel.css"
import Slider from "react-slick";
import bgone from "../../Assets/images/bgOne.jpg"
import bgtwo from "../../Assets/images/bgTwo.jpg"
import bgthree from "../../Assets/images/gbThree.jpg"
import { motion } from 'framer-motion';







function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const data = [
    {src : bgone, header : "Des Solutions Intelligentes Pour l'Hotellerie"},
    {src : bgtwo, header : "Solutions Pour Smart Home", discription : "transformer votre maison en une maison intelligente"},
    {src : bgthree, header : "Profitez de votre chez vous"}
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };
  return (
    <div className='carousel_container'>
      {/* <Nav /> */}
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) =>(
            <div className='slide1' key={index}>
              <div className="image-container">
                <img src={item.src} />
                <div className="image-shadow"></div>
              </div>
              
              <motion.div
              
              
              className="infos" key={activeSlide}>
                <motion.h2
                  
                  initial={{ top: activeSlide === index ? "20rem" : "30rem", opacity: 0 }}
                  animate={activeSlide === index ? { top: "0rem", opacity: 1 } : {}}
                  style={{ transition : "1s" }}
                  
                >{item.header}</motion.h2>
                {item.discription !== undefined ? (
                <motion.p
                
                initial={{ top: activeSlide === index ? "40rem" : "50rem", opacity: 0 }}
                animate={activeSlide === index ? { top: "0rem", opacity: 1 } : {}}
                style={{ transition : "1s" }}
                >transformer votre maison en une maison intelligente</motion.p>) : null}
              </motion.div>
            </div>

          ))}
          
        </Slider>
      </div>
    </div>
  )
}

export default Carousel
