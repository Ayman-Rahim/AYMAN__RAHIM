import React from 'react'
import "../../Style/page1/footer/footer.css"
import { Link } from 'react-router-dom'
function Footer() {
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
                    <li><Link to="/Accueil" >ACCUEIL</Link></li>
                    <li><Link to="/About" >QUI SOMMES-NOUS</Link></li>
                    <li><Link to="/Contact" >CONTACT</Link></li>
                </ul>
            </div>
            <div className="footer-part-two">
                <ul className="cl3">
                    <li className='header-footer'>Adress</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, harum assumenda, nam</li>
                </ul>
                <ul className="cl4">
                    <li className='header-footer'>Téléphone</li>
                    <li>+2126 6265 6006</li>
                </ul>
                <ul className="cl5">
                    <li className='header-footer'>Rejoinez notre newsletter</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='container_form'>
                        <input type="text" placeholder='Enter your email'/>
                        <button>Subscribe</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright ©2024 AV PLUS. All Rights Reserved. Design by HDACH YASSINE </p>
            <ul className='list_social_mediaa'>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
