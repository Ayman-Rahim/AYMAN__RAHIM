import React from 'react'
import '../../Style/page1/menu/menu.css'
import 'rsuite/dist/rsuite.min.css';
import { Drawer} from 'rsuite';
import { Link, useLocation, useNavigate } from 'react-router-dom';



function Menu({open, setOpen}) {
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
    <Drawer size={'xs'} placement={"right"} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
          
        </Drawer.Header>
        <Drawer.Body>
          
          <ul className='Menu'>
                <li><a href='#' onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>HOME</a></li>
                <li><a  href='#' onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>PROJECTS</a></li>
                <li><a href='#' onClick={(e) => { e.preventDefault(); scrollTo("footer"); }}>CONTACT</a></li>
          </ul>
        </Drawer.Body>
    </Drawer>
  )
}

export default Menu
