import React from 'react'
import carr from "../../Assets/carousel/studio img.jpg"
import { motion } from "framer-motion";
import '../../Style/page1/carouselstt/carstatic.css'
// function CarouselStatic() {
//   return (
//     <div className="container_carousell">
//         <div className="carousel">
//             <div className="side_static_img">
//                 <img src={carr}  />
//             </div>
//             <div className="side_static_description">
//                 <h2>AYMEN RAHIM</h2>
//                 <h5>Software Engineer & 3D designer</h5>
//                 <p className='desc_static'>
//                     I specialize in building scalable web applications and creating immersive 3D experiences. 
//                     My work combines strong backend knowledge with creative 3D design to deliver innovative digital solutions.
//                 </p>
//             </div>
//         </div>
//     </div>
//   )
// }

// Variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { x: -80, opacity: 0, scale: 0.95 },
  show: { x: 0, opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { x: 80, opacity: 0, scale: 0.95 },
  show: { x: 0, opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const textVariant = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

function CarouselStatic() {
  return (
    <motion.div
      className="container_carousell"
      variants={containerVariant}
      initial="hidden"
      animate="show"
    >
      <div className="carousel">
        <motion.div className="side_static_img" variants={fadeLeft}>
          <img src={carr} alt="Aymen Rahim" />
        </motion.div>

        <motion.div className="side_static_description" variants={fadeRight}>
          <motion.h2 variants={textVariant}>AYMAN RAHIM</motion.h2>
          <motion.h5 variants={textVariant}>
            Software Engineer & 3D Designer
          </motion.h5>
          <motion.p className="desc_static" variants={textVariant}>
            I specialize in developing video games and creating immersive 3D experiences. 
            My work combines programming languages knowledge with creative 3D design to deliver innovative digital solutions.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}



export default CarouselStatic
