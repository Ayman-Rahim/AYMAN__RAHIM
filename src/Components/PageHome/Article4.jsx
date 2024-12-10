import React, { useRef } from 'react'
import "../../Style/page1/article4/article4.css"
import  smartHopital from "../../Assets/article4/smart_hopital.jpg";
import hopital from "../../Assets/article4/hopital.jpeg"
import { motion, useTransform, useScroll } from 'framer-motion'

function Article4() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })
    const xl = useTransform(scrollYProgress, [0, 1], [600, 0]);
    const xl_l = useTransform(scrollYProgress, [0, 1], [900, 0]);
    const opacity  = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const xll = useTransform(scrollYProgress, [0, 1], [1000, 0]);
    const xlll = useTransform(scrollYProgress, [0, 1], [1500, 0]);
  return (
    <div ref={container} className="container_article4">
        <div className="contenttt">
            <div className="side_images">
                <motion.img style={{ x : xll, transition : '.8s' }} className='i2' src={hopital} />
                <motion.img style={{ x : xlll, transition : '.8s' }} className='i1' src={smartHopital} />
            </div>
            <div className="side_description">
                <motion.h2 style={{ opacity : opacity, y : xl, transition : '1s' }}>hôpital</motion.h2>
                <motion.p style={{ opacity : opacity, y : xl_l , transition : '1s'}}>
                    Dans le domaine hospitalier, AV PLUS a fourni des produits et des solutions à plusieurs hôpitaux de premier plan, améliorant les communications internes et la qualité des soins. Leurs services incluent l'installation de systèmes audio/vidéo avancés et des solutions de vidéoconférence pour faciliter les communications. Ils contribuent ainsi à créer des environnements hospitaliers plus modernes, efficaces et favorables à une meilleure expérience pour les patients
                </motion.p>
            </div>
            
        </div>
    </div>
  )
}

export default Article4
