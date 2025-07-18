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
            <motion.h2 style={{ y : xl,opacity : opacity, transition : '.8s' }}>About Me</motion.h2>
            <div className='content_infos'>
                {/* <div className="content_img">
                    <motion.img style={{ x : xll, transition : '.8s' }} className='im1' src={room1} />
                    <motion.img style={{ x : xlll, transition : '.8s' }} className='im2' src={room2} />
                </div> */}
                <div className="content_discription">
                    {/* <motion.h2 style={{ opacity : opacity, y : xl, transition : '1s' }}>Résidentiel</motion.h2> */}
                    <motion.p style={{ opacity : opacity, y : xl_l , transition : '1s'}}>
                    I’m a passionate game developer and 3D asset creator focused on building immersive, stylized, and performance-optimized 
                    content for video games. I specialize in modeling environments, characters, and props using Blender 
                    and integrate them into game engines like Unreal Engine. With a strong eye for design and gameplay experience, I aim to create
                     assets that not only look great but also serve gameplay and performance goals. Whether it’s for horror, survival, or stylized
                      adventure games, I love bringing interactive worlds to life from concept to playable experience.
                    </motion.p>
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Article1
