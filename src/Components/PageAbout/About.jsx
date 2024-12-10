import React, { useRef } from 'react'
import im from "../../Assets/page2/aaaavv.jpeg"
import '../../Style/page2/about/about.css'
import { motion, useTransform, useScroll } from 'framer-motion'

function About() {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })
    const xl = useTransform(scrollYProgress, [0, 1], [600, 0]);
    const left = useTransform(scrollYProgress, [0, 1], [-600, 0]);
    const right = useTransform(scrollYProgress, [0, 1], [600, 0]);
  return (
    <div ref={container} className='container_about'>
        <div className="content_about_infos">
            <motion.h2 style={{ y : xl, transition : ".5s" }}>Qui sommes-nous ?</motion.h2>
            <div className="about_infos">
                <div className="about_title">
                    <motion.h2 style={{ x : left, transition : ".5s"}}>AV PLUS</motion.h2>
                </div>
                <div className="about_txt">
                    <motion.p style={{ x : right, transition : ".5s"}}>
                        Nous sommes AV PLUS, une entreprise leader dans le domaine des solutions audio/vidéo, domotique et salles de cinéma privées. Notre équipe dévouée possède une vaste expertise et une passion pour offrir des expériences exceptionnelles à nos clients. Nous proposons des solutions personnalisées, des équipements de haute qualité et un service client attentif pour répondre aux besoins uniques de chaque projet.
                        Avec notre engagement envers l'innovation, la fiabilité et la satisfaction client, nous sommes fiers d'être votre partenaire de confiance pour créer des environnements audio/vidéo immersifs, des maisons intelligentes et des salles de cinéma privées de premier ordre.
                    </motion.p>
                </div>
            </div>
            <div className="about_img">
                <motion.img style={{ y : xl, transition : ".5s" }} src={im} />
            </div>
        </div>
    </div>
  )
}

export default About
