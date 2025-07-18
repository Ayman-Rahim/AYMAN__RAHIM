import React, { useRef } from 'react'
import svg1 from "../../Assets/icons/cplus.png"
import svg2 from "../../Assets/icons/c-sharp.png"
import svg3 from "../../Assets/icons/letter-c.png"
import svg4 from "../../Assets/icons/icons8-unreal-engine-64.png"
import svg5 from "../../Assets/icons/blendericon.png"
import svg6 from "../../Assets/icons/icons8-unity-64.png"

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
    {
        svg: svg1,
        title: "C++",
        description:
        "A powerful language used for system programming, game development, and high-performance applications. I use it to build efficient algorithms and manage memory manually.",
        animation: sm,
    },
    {
        svg: svg2,
        title: "C#",
        description:
        "An object-oriented language I use to build Windows applications, games with Unity, and robust backend services using .NET.",
        animation: md,
    },
    {
        svg: svg3,
        title: "C",
        description:
        "A low-level language used in embedded systems and performance-critical applications. It helped me understand core programming concepts and system architecture.",
        animation: lg,
    },
    {
        svg: svg4,
        title: "Unreal Engine",
        description:
        "An advanced game engine I use to create realistic 3D environments, immersive gameplay, and interactive experiences with high-end visuals.",
        animation: xl,
    },
    {
        svg: svg5,
        title: "Blender",
        description:
        "A powerful open-source 3D tool I use for modeling, animation, character creation, and texturing in game and design projects.",
        animation: xll,
    },
    {
        svg: svg6,
        title: "Unity",
        description:
        "A cross-platform game engine I use to develop 2D and 3D games. It allows me to integrate C# scripts, manage scenes, and create interactive prototypes.",
        animation: xlll,
    },
    ];

    
  return (
    <div ref={container} className="container_service">
        <div className="service_content">
            <motion.h2 style={{ y : sm, transition : ".9s"}}>Technologies And Softwares I Know Best ?</motion.h2>
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
