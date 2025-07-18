import React, { useEffect, useState } from 'react'
import '../../Style/page1/nav/nav.css'
import logo from '../../Assets/images/Logo.png'

import Menu from './Menu'
import { Link, useLocation, useNavigate } from 'react-router-dom'





function Nav() {
    
    const [open, setOpen] = useState(false)

    const location = useLocation();

    
    const navigate = useNavigate();

    const scrollTo = (id) => {
        if (location.pathname !== "/Accueil") {
        navigate("/Accueil#" + id);
        } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                <li><a href='#' onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>HOME</a></li>
                <li><a  href='#' onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>PROJECTS</a></li>
                <li><a href='#' onClick={(e) => { e.preventDefault(); scrollTo("footer"); }}>SERVICES</a></li>
            </ul>
            <ul className='list_social_media'>
                <li>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayman123rahim@gmail.com" target="_blank" rel="noopener noreferrer">
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"/>
                        </svg>
                    </a>
                </li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/higan._.1/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
            </ul>
            <a  onClick={() => setOpen(!open)} href="#" className="menu"><svg className={isSpecialPage ? "svgg" : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>
        </nav>
        <Menu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Nav
