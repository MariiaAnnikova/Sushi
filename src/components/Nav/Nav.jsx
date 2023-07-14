import React from 'react'
import s from "./Nav.module.css"

import Logo from '../../css/Logo.jpeg'
import { Link } from 'react-scroll'

export default function Nav() {
  return (
    <div className={s.nav_block}>

<div className={s.nav_logo}><img  src={Logo} alt="Logo" /></div> 

<div className={s.nav_menu}>
<Link activeClass="active"
                 to="PhotoParalax" 
                 smooth={true} 
                 duration={500}>
           About me
        </Link>

        <Link 
                 to="Service" 
                 smooth={true} 
                 duration={500}>
           Service
        </Link>


        <Link 
                 to="Galery" 
                 smooth={true} 
                 duration={500}>
          Galery
        </Link>


   
        <Link className={s.nav_contacts}
                 to="Contacts" 
                 smooth={true} 
                 duration={500}>
          Contacts
        </Link>

        <Link className={s.nav_reviews}
                 to="Reviews" 
                 smooth={true} 
                 duration={500}>
        Reviews
        </Link>  

      </div>    
    </div>
  )
}
