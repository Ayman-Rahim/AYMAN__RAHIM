import React, { useRef } from 'react'
import "../../Style/page3/contactform.css"
import { motion, useTransform, useScroll } from 'framer-motion'
function ContactFrom() {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })
    const xl = useTransform(scrollYProgress, [0, 1], [600, 0]);
    const lg = useTransform(scrollYProgress, [0, 1], [1500, 0]);
  return (
    <div ref={container} className="container_contact_form">
        <div className="contact_form">
            <motion.div style={{ y : xl, transition : ".9s" }} className="formulaire_inputs">
                <h2>Remplir le formulaire</h2>
                <div className="inputs">
                    <div className="nom_input">
                        <label>Votre Nom *</label>
                        <input type="text"  />
                    </div>
                    <div className="email_input">
                        <label>Votre Email *</label>
                        <input type="text"  />
                    </div>
                    <div className="sujet_input">
                        <label>Votre Sujet *</label>
                        <input type="text"  />
                    </div>
                    <div className="message_input">
                        <label>Message *</label>
                        <textarea style={{ width: "100%", resize: "vertical" }} rows={4}  ></textarea>
                    </div>
                    <button type='button'>Send</button>
                </div>
            </motion.div>
            <motion.div style={{ y : lg, transition : ".9s" }} className="contact_form_infos">
                <div className="email">
                    <h4>E-MAIL</h4>
                    <a href="#">tcpedia@gmail.com</a>
                </div>
                <div className="telephone">
                    <h4>TELEPHONE</h4>
                    <a href="#">+2126 6666 6666</a>
                </div>
                <div className="adress">
                    <h4>ADRESS</h4>
                    <p>Angle Bd Abdelmoumen & rue soumaya,résidence Shehrazade, 3,appt:22, étage:5, Casablanca 20000</p>
                </div>

                <div className="social_media">
                    <h4>RESEAUX SOCIAUX</h4>
                    <div className="container_media">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ContactFrom
