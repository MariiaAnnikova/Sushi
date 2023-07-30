import React from 'react'
import s from "./Nav.module.css"
import {PlusOutlined} from '@ant-design/icons'
import Logo from '../../css/Logo.jpeg'

import { Link } from 'react-router-dom'


export default function Nav({menuActive, setMenuActive}) {
  return (
    <div>
    <div className={s.nav_block}>

<div className={s.nav_logo}> <Link to='/'> <img  src={Logo} alt="Logo" /> </Link></div> 

<div className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>

<Link to='about_me'>
           About me
        </Link>

       <Link to='Contact'  className={s.nav_contacts}>
                 
                
          Contacts
        </Link>

        <div className={s.nav_reviews} 
               >
        <p>IT / ENG </p>
        </div>  

      </div>    
    
    </div>
      <PlusOutlined className={s.icon_plus} onClick={() => setMenuActive(menuActive ? false : true)}/>
      </div>
  )
}
