import React, { useEffect, useState } from 'react'
import '../../Style/page1/nav/nav.css'
import logo from '../../Assets/images/Logo.png'

import Menu from './Menu'
import { Link, useLocation } from 'react-router-dom'





function Nav() {
    
    const [open, setOpen] = useState(false)

    const location = useLocation();

    const isSpecialPage = ["/About", "/Contact"].includes(location.pathname);
    useEffect(()=>{
        window.onscroll = () =>{
            var nav = document.querySelector('.container_nav');
            var links = document.querySelectorAll('.list_nav li a');
            var socialMedia = document.querySelectorAll('.list_social_media li a');
            var svgs = document.querySelectorAll('.list_social_media li a svg');
            var menu = document.querySelector('.menu svg');
            if(window.pageYOffset > 0){
                nav.classList.add("sticky");
                links.forEach(link => {
                    link.classList.add("stiky")
                });
                socialMedia.forEach(link => {
                    link.classList.add("st")
                });
                svgs.forEach(link => {
                    link.classList.add("svgsticy")
                });

                menu.classList.add("stcky")
            }else{
                nav.classList.remove("sticky");
                links.forEach(link => {
                    link.classList.remove("stiky")
                });
                socialMedia.forEach(link => {
                    link.classList.remove("st")
                });
                svgs.forEach(link => {
                    link.classList.remove("svgsticy")
                });

                menu.classList.remove("stcky")
            }
        }
    }, [])
  return (
    <div className="container_nav">
        <nav>
            <a className='logo' href="#"><img src={logo} /></a>
            <ul  className={isSpecialPage ? "active-link" : "list_nav"}>
                <li><Link to="/Accueil" >ACCUEIL</Link></li>
                <li><Link to="/About" >QUI SOMMES-NOUS</Link></li>
                <li><Link to="/Contact" >CONTACT</Link></li>
            </ul>
            <ul className='list_social_media'>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
            </ul>
            <a  onClick={() => setOpen(!open)} href="#" className="menu"><svg className={isSpecialPage ? "svgg" : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>
        </nav>
        <Menu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Nav
