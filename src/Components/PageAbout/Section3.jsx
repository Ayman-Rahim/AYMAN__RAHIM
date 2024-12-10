import React, { useRef } from 'react'
import "../../Style/page2/section3/section3.css"
import section3 from "../../Assets/page2/section3/hopitall.jpeg"
import { motion, useTransform, useScroll } from 'framer-motion'


function Section3() {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })
    const xl = useTransform(scrollYProgress, [0, 1], [600, 0]);
    const lg = useTransform(scrollYProgress, [0, 1], [1500, 0]);
    const xll = useTransform(scrollYProgress, [0, 1], [1800, 0]);
    const xlll = useTransform(scrollYProgress, [0, 1], [2500, 0]);
    const left = useTransform(scrollYProgress, [0, 1], [-600, 0]);
    const right = useTransform(scrollYProgress, [0, 1], [600, 0]);
  return (
    <div ref={container} className="container_section3">
        <div className="section3">
            <div className="section3_img">
                <motion.img style={{ x : left, transition : ".9s"  }} src={section3} />
            </div>
            <div  className="section3_all_infos">
                <div className="section3_content">
                    <motion.h3 style={{x : lg , transition : ".9s"  }}>Solutions pour HôpitalE</motion.h3>
                    <motion.p style={{x : xll , transition : ".9s"  }}>
                        AV PLUS propose des solutions avancées pour les hôpitaux, incluant des équipements audio/vidéo et de communication de pointe. Leurs services englobent l'installation de systèmes de vidéoconférence, d'écrans d'affichage pour l'information des patients, ainsi que des solutions de gestion de l'énergie et de sécurité.
                    </motion.p>
                </div>
                <div className="section_moreinfos">
                    <motion.p style={{x : xlll , transition : ".9s"  }}>
                        En collaborant avec les établissements de santé, AV PLUS contribue à créer des environnements hospitaliers modernes et efficaces, améliorant les communications internes et la qualité des soins pour les patients.
                    </motion.p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section3
