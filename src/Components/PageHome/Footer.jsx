import React from 'react'
import "../../Style/page1/footer/footer.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
function Footer() {
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
  return (
    <div className="container_footer">
        <div className="footer">
            <div className="footer-part-one">
                <ul className='cl1'>
                    <li className='header-footer'>Qui sommes-nous ?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et numquam rem perferendis mollitia soluta, hic minima, officia amet magni reiciendis dolore eos expedita facere assumenda dicta libero at iure.</li>
                </ul>

                <ul className='cl2'>
                    <li className='header-footer'>La navigation</li>
                    <li><a href='#' onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>HOME</a></li>
                <li><a  href='#' onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>PROJECTS</a></li>
                <li><a href='#' onClick={(e) => { e.preventDefault(); scrollTo("footer"); }}>CONTACT</a></li>
                </ul>
            </div>
            <div className="footer-part-two">
                <ul className="cl3">
                    <li className='header-footer'>Localisation</li>
                    <li>Currently based in Kentira, Morocco, where I live and work on exciting software and design projects </li>
                </ul>
                <ul className="cl4">
                    <li className='header-footer'>Téléphone</li>
                    <li>+2126 6265 6006</li>
                </ul>
                {/* <ul className="cl5">
                    <li className='header-footer'>Rejoinez notre newsletter</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='container_form'>
                        <input type="text" placeholder='Enter your email'/>
                        <button>Subscribe</button>
                    </li>
                </ul> */}
            </div>
        </div>
        <div className="copyright">
            <p>Copyright ©2024 AV PLUS. All Rights Reserved. Design by HDACH YASSINE </p>
            <ul className='list_social_mediaa'>
                <li>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yassinhdach18@gmail.com" target="_blank" rel="noopener noreferrer">
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"/>
                        </svg>
                    </a>
                </li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
