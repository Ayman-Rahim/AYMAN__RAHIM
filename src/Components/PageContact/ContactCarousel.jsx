import React from 'react'
import "../../Style/page3/contactcar.css"
import { motion } from 'framer-motion'





function ContactCarousel() {
  return (
    <div className='container_contact_carousel'>
      <div className="content_contact">
        <div className="carousel_contact_infos">
            <motion.h1
            initial={{ y : "20rem" }}
            animate={{ y : "0rem" }}
            style={{ transition : ".3s" }}
            
            >Contactez-nous</motion.h1>
            <motion.p
            initial={{ y : "30rem" }}
            animate={{ y : "0rem" }}
            style={{ transition : ".3s" }}
            >Pour nous contacter, veuillez utiliser le formulaire de contact disponible sur notre site web.</motion.p>
        </div>
      </div>
    </div>
  )
}

export default ContactCarousel
