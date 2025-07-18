

import React, { useRef } from 'react'
import svg1 from "../../Assets/services/envv.jpg"
import svg2 from "../../Assets/services/building.jpg"
import svg3 from "../../Assets/services/homedes.jpg"
import svg4 from "../../Assets/services/gametools.jpg"
import svg5 from "../../Assets/services/caracters.jpg"
import svg6 from "../../Assets/services/gamerig.jpg"
import svgb from "../../Assets/icons/blendericon.png"
import svgu from "../../Assets/icons/icons8-unreal-engine-64.png"
import '../../Style/page1/service/service.css'
import { motion, useTransform, useScroll } from 'framer-motion'
import { i } from 'framer-motion/client'

function AllServices(){
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
        {
            svg: svg1,
            title: "Game Environment Design",
            description:
            "Create immersive and visually stunning game worlds, including landscapes, lighting, and environmental storytelling to enhance gameplay experience.",
            animation: sm,
        },
        {
            svg: svg2,
            title: "Games Buildings Design",
            description:
            "Design detailed and functional in-game buildings, structures, and architecture that fit the game's theme and support player interaction.",
            animation: md,
        },
        {
            svg: svg4,
            title: "Games Tools Design",
            description:
            "Develop and design the tools and utilities used by game characters or players, such as weapons, gear, and interactive objects.",
            animation: lg,
        },
        {
            svg: svg3,
            title: "Games Buildings Interior Design",
            description:
            "Craft realistic and engaging interior spaces for in-game buildings, including furniture, textures, lighting, and ambient details.",
            animation: xl,
        },
        {
            svg: svg5,
            title: "Games Characters Design",
            description:
            "Design compelling and memorable game characters with unique visual styles, personalities, and narrative roles.",
            animation: xll,
        },
        {
            svg: svg6,
            title: "Games Characters Rigging",
            description:
            "Create and apply skeletal rigs to game characters, enabling realistic movement, animation, and gameplay mechanics.",
            animation: xlll,
        },
    ];

    
  return (
    <div ref={container} className="container_service">
        <div className="service_content">
            <motion.h2 style={{ y : sm, transition : ".9s"}}>Services</motion.h2>
            <div className="grid-container">
                {data.map((item) => (
                    <motion.div style={{ y : item.animation, transition : ".9s" }} className="grid">
                        <div className="container_img">
                            <img src={item.svg} />
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <div className="blender_inreal_icons">
                            <img src={svgb} className='blender_icon' />
                            <img src={svgu} className='inreal_icon' />
                        </div>
                    </motion.div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default AllServices
