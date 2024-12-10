import React, { useRef } from 'react'
import svg1 from "../../Assets/services/secrete.png"
import svg2 from "../../Assets/services/repetitive.png"
import svg3 from "../../Assets/services/hospital.png"
import svg4 from "../../Assets/services/cinema.png"
import svg5 from "../../Assets/services/groups.png"
import svg6 from "../../Assets/services/hotel.png"
import '../../Style/page1/service/service.css'
import { motion, useTransform, useScroll } from 'framer-motion'

function Services(){
    const container = useRef()

    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [600, 0])
    const md = useTransform(scrollYProgress, [0, 1], [1000, 0])
    const lg = useTransform(scrollYProgress, [0, 1], [1500, 0])
    const xl = useTransform(scrollYProgress, [0, 1], [2000, 0])
    const xll = useTransform(scrollYProgress, [0, 1], [2500, 0])
    const xlll = useTransform(scrollYProgress, [0, 1], [3000, 0])
    const data = [
        {svg : svg1, title : "sécurité", description : "AV PLUS propose des solutions de sécurité avancées pour assurer la protection et la tranquillité d'esprit dans les espaces résidentiels et commerciaux", animation : sm  },
        {svg : svg2, title : "Automatisme", description : "AV PLUS est un leader en domotique, offrant des solutions personnalisées pour automatiser les espaces résidentiels et commerciaux, améliorant le confort et la sécurité.", animation : md},
        {svg : svg3, title : "hôpital", description : "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.", animation : lg},
        {svg : svg4, title : "Salle de cinéma privé", description : "AV PLUS crée des salles de cinéma privées sur mesure, offrant des expériences cinématographiques exceptionnelles chez vous.", animation : xl},
        {svg : svg5, title : "salle de réunion", description : "AV PLUS offre des solutions audio/vidéo pour optimiser l'expérience dans les salles de réunion et de conférence, créant un environnement multimédia haut de gamme et intuitif.", animation : xll},
        {svg : svg6, title : "Hospitality", description : "AV PLUS propose des solutions innovantes pour le secteur de l'hospitalité, améliorant l'expérience client avec des équipements audio/vidéo avancés et des systèmes domotiques intelligents.", animation : xlll},
    ]
    
  return (
    <div ref={container} className="container_service">
        <div className="service_content">
            <motion.h2 style={{ y : sm, transition : ".9s"}}>Ce Qui Est Le Plus <br /> ImportantPour Vous ?</motion.h2>
            <div className="grid-container">
                {data.map((item) => (
                    <motion.div style={{ y : item.animation, transition : ".9s" }} className="grid">
                        <div className="container_img">
                            <img src={item.svg} />
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </motion.div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
