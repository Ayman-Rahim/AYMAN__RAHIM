import React from 'react'
import "../../Style/page2/aboutcarousel/aboutc.css"
import { motion } from 'framer-motion'


function AboutCarousel() {
  return (
    <div className='container_carousel_about'>
      <div className="content_about">
        <div className="carousel_about_infos">
            <motion.h1
            initial={{ y : "20rem" }}
            animate={{ y : "0rem" }}
            style={{ transition : ".3s" }}
            >À propos de AV PLUS</motion.h1>
            <motion.p
            initial={{ y : "30rem" }}
            animate={{ y : "0rem" }}
            style={{ transition : ".3s" }}
            
            >Votre partenaire de confiance pour des solutions audio/vidéo, domotique et salles de cinéma privées de qualité supérieure.</motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutCarousel
