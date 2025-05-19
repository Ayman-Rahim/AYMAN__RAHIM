import React from 'react'
import '../../Style/page1/menu/menu.css'
import 'rsuite/dist/rsuite.min.css';
import { Drawer} from 'rsuite';
import { Link } from 'react-router-dom';



function Menu({open, setOpen}) {
  return (
    <Drawer size={'xs'} placement={"left"} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
          
        </Drawer.Header>
        <Drawer.Body>
          
          <ul className='Menu'>
                <li><Link to="/Accueil">ACCUEIL</Link></li>
                <li><Link to="/About">QUI SOMMES-NOUS</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </Drawer.Body>
    </Drawer>
  )
}

export default Menu
