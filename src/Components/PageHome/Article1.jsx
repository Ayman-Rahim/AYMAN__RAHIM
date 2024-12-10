import React, { useRef } from 'react';
import '../../Style/page1/article/article1.css'
import room1 from '../../Assets/article/room.jpg'
import room2 from '../../Assets/article/room1.jpg'
import { motion, useTransform, useScroll } from 'framer-motion'

function Article1() {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })
    const xl = useTransform(scrollYProgress, [0, 1], [600, 0]);
    const xll = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
    const xlll = useTransform(scrollYProgress, [0, 1], [-1500, 0]);
    const xl_l = useTransform(scrollYProgress, [0, 1], [900, 0]);
    const opacity  = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={container} className="container_article1">
        <div className="content">
            <motion.h2 style={{ y : xl,opacity : opacity, transition : '.8s' }}>Que Pouvons-Nous <br /> Automatise ?</motion.h2>
            <div className='content_infos'>
                <div className="content_img">
                    <motion.img style={{ x : xll, transition : '.8s' }} className='im1' src={room1} />
                    <motion.img style={{ x : xlll, transition : '.8s' }} className='im2' src={room2} />
                </div>
                <div className="content_discription">
                    <motion.h2 style={{ opacity : opacity, y : xl, transition : '1s' }}>Résidentiel</motion.h2>
                    <motion.p style={{ opacity : opacity, y : xl_l , transition : '1s'}}>
                        AV PLUS est une entreprise leader spécialisée
                        dans les solutions audio/vidéo, la domotique
                        et la conception de salles de cinéma privées.
                        Nous offrons des services personnalisés,
                        des équipements de haute qualité et un service
                        client attentif pour répondre aux besoins uniques de chaque projet. Avec notre expertise, nous transformons les espaces résidentiels et commerciaux en environnements immersifs et intelligents, en fournissant des technologies de pointe pour améliorer le confort, la sécurité et le divertissement. Notre engagement envers l'innovation et la satisfaction client fait de nous votre partenaire de confiance pour créer des solutions audio/vidéo de qualité supérieure et des maisons intelligentes de premier ordre
                    </motion.p>
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Article1
