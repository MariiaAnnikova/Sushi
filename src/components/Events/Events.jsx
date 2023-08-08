import React, { useEffect} from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import s from './Events.module.css'
import { useTranslation } from 'react-i18next';

export default function Events() {
    // useEffect(()=> {
    //     AOS.init({duration:8000});
    //    }, [])

    const { t, i18n } = useTranslation();


    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  return (
  
  


<div className={s.text} > {t("event")}</div>


  )
}
