import React, { useRef } from 'react'
import "../../Style/page2/section1/section1.css"
import section1 from "../../Assets/page2/section1/homee.jpg"
import { motion, useTransform, useScroll } from 'framer-motion'







function Section1() {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })

    const xl = useTransform(scrollYProgress, [0, 1], [1000, 0]);
    const lg = useTransform(scrollYProgress, [0, 1], [1500, 0]);
    const xll = useTransform(scrollYProgress, [0, 1], [1700, 0]);
    const xlll = useTransform(scrollYProgress, [0, 1], [2200, 0]);
  return (
    <div ref={container} className='container_section'>
        <div className="section1">
            <div className="section1_img">
                <motion.img style={{ y : xl, transition : ".9s" }} src={section1} />
            </div>
            <div className="section1_all_infos">
                <div className="section1_content">
                    <motion.h3 style={{ y : lg, transition : ".9s" }}>Solutions pour SMART HOME</motion.h3>
                    <motion.p style={{ y : xll, transition : ".9s" }}>
                        Nous sommes un leader reconnu dans le domaine des solutions smart home, offrant une expertise complète en matière d'automatisation résidentielle. Notre équipe dévouée est spécialisée dans la conception, l'installation et la personnalisation de systèmes domotiques avancés pour améliorer votre quotidien. Nous proposons une gamme étendue de fonctionnalités, allant de la gestion intelligente de l'éclairage et du chauffage à la surveillance de sécurité et à la gestion de l'énergie.
                        Avec des technologies de pointe et une intégration transparente, nous créons des maisons intelligentes qui sont à la fois pratiques, écoénergétiques et sécurisées.
                    </motion.p>
                </div>
                <div className="section_moreinfos">
                    <motion.p style={{ y : xlll, transition : ".9s" }}>
                        Notre engagement envers la satisfaction du client se traduit par un service personnalisé, des solutions sur mesure et une assistance technique tout au long du processus. Faites confiance à AV PLUS pour transformer votre maison en un espace intelligent et confortable, adapté à votre style de vie moderne.
                    </motion.p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section1
