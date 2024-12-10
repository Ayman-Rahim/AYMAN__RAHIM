import React, { useRef } from 'react'
import i1 from "../../Assets/Clients/i1.png"
import i2 from "../../Assets/Clients/i2.jpg"
import i3 from "../../Assets/Clients/i3.jpg"
import i4 from "../../Assets/Clients/i4.png"
import i5 from "../../Assets/Clients/i5.png"
import i6 from "../../Assets/Clients/i6.jpg"
import "../../Style/page1/clients/clients.css"
import { motion, useTransform, useScroll } from 'framer-motion'


function Clients() {
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
        {src : i1, animation : sm},
        {src : i2, animation : md},
        {src : i3, animation : lg},
        {src : i4, animation : xl},
        {src : i5, animation : xll},
        {src : i6, animation : xlll},
    ]
  return (
    <div ref={container} className="container_clients">
        <div className="client_content">
            <motion.h2 style={{ y : sm, transition : ".9s"}}>Nos clients satisfaits</motion.h2>
            <div className="grid-container">
                {data.map((item) => (
                  <motion.div style={{ y : item.animation, transition : ".9s" }} className="grid">
                    <img src={item.src} />
                  </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Clients
