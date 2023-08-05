import React from 'react'
import s from "./Nav.module.css"
import {PlusOutlined} from '@ant-design/icons'
import Logo from '../../css/Logo.jpeg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


export default function Nav({menuActive, setMenuActive}) {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
    <div className={s.nav_block}>

<div className={s.nav_logo}> <Link to='/'> <img  src={Logo} alt="Logo" /> </Link></div> 

<div className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>

<Link to='about_me'>
           <p>{t("info")}</p>
        </Link>

       <Link to='Contact'  className={s.nav_contacts}>
       <p>{t("cont")}</p>
        </Link>

        <div className={s.nav_reviews} 
               >
        <button onClick={() => changeLanguage('it')}>IT</button>
        <button onClick={() => changeLanguage('en')}>ENG</button>
        </div>  

      </div>    
    
    </div>
      <PlusOutlined className={s.icon_plus} onClick={() => setMenuActive(menuActive ? false : true)}/>
      </div>
  )
}