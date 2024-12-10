import React, { useRef } from 'react'
import "../../Style/page2/section2/section2.css"
import section2 from "../../Assets/page2/section2/room_1.jpg"
import { motion, useTransform, useScroll } from 'framer-motion'
function Section2() {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })

    const xl = useTransform(scrollYProgress, [0, 1], [1000, 0]);
    const lg = useTransform(scrollYProgress, [0, 1], [1500, 0]);
    const xll = useTransform(scrollYProgress, [0, 1], [1700, 0]);
    const xlll = useTransform(scrollYProgress, [0, 1], [2200, 0]);
    const xllll = useTransform(scrollYProgress, [0, 1], [2500, 0]);
  return (
    <div ref={container} className='container_section2'>
        <div className="section2">
            
            <div className="section2_all_infos">
                <div className="section2_content">
                    <motion.h3 style={{ y : xlll, transition : ".9s" }}>Solutions pour SMART HOTEL</motion.h3>
                    <motion.p style={{ y : xllll, transition : ".9s" }}>
                        Nous sommes un leader reconnu dans le domaine des solutions smart hotel, offrant des technologies innovantes pour améliorer l'expérience des clients et optimiser les opérations hôtelières. Notre expertise comprend la domotique avancée, la gestion de l'énergie, les systèmes de contrôle d'accès et de sécurité, ainsi que les solutions de divertissement personnalisées.
                    </motion.p>
                </div>
                <div className="section_moreinfos">
                    <motion.p style={{ y : xll, transition : ".9s" }}>
                        Grâce à notre approche sur mesure, nous concevons des solutions adaptées aux besoins spécifiques de chaque hôtel, offrant un confort et une commodité exceptionnels aux clients tout en améliorant l'efficacité opérationnelle pour les gestionnaires. Avec notre engagement envers l'innovation et la qualité, nous sommes votre partenaire de confiance pour des solutions smart hotel de pointe.
                    </motion.p>
                </div>

            </div>
            <div className="section2_img">
                <motion.img style={{ y : xl, transition : ".9s" }} src={section2} />
            </div>
        </div>
    </div>
  )
}

export default Section2
