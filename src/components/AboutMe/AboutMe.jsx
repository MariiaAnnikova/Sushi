import React from 'react'
import s from './AboutMe.module.css'
import Andrei_pic from '../../css/slider11.jpeg'

import { useTranslation } from 'react-i18next';

export default function AboutMe() {

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };


  return (
    <div className={s.about_me_block}>
<div className={s.about_me_pic}>
  <img src={Andrei_pic} alt="Andrei Filon Sushi Chef Privato" />
</div>


<div className={s.about_title}>
<p>{t("andrei_one")}  </p>
         <p>{t("andrei_two")} </p>
          <p> {t("andrei_tre")} </p>
          <p> {t("andrei_tre")} </p>
          <p>{t("andrei_four")} </p>
          {/* <p>{t( "about_andrei_five")} </p> */}
          <p>{t( "about_andrei_six")} </p>
          {/* <p>{t( "about_andrei_seven")} </p> */}
          </div>
    </div>
  )
}
