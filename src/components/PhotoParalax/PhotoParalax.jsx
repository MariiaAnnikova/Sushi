import React, { useEffect}  from 'react'
import s from './PhotoParalax.module.css'
import andrei from "../../css/andrei.jpeg"
import andrei_par from "../../css/andrei_par.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Element } from 'react-scroll'
import slider11 from "../../css/slider11.jpeg"
import { useTranslation } from 'react-i18next';

export default function PhotoParalax() {

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // useEffect(()=> {
  //   AOS.init({duration:8000;
  //  }, [])
  return (
    <div className={s.wrapper}>
<header>
        <img src={slider11} alt={"Andrei_Filon"} className={s.photo_andrei}/>
        <div className={s.about_andrei_title}>
       
        <p>{t("andrei_one")}</p>
         <p>{t("andrei_two")}
          </p> 
          <p>{t("andrei_tre")}</p>
          <p> {t("andrei_four")} </p>
        
    </div>
   

    </header> 
    <div className={s.line}></div>
    </div>
  )
}
