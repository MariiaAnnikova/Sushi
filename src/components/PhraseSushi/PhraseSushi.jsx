import React from 'react'
import s from './PhraseSushi.module.css'

import { useTranslation } from 'react-i18next';

export default function PhraseSushi() {

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  

  return (
    <center className={s.phrase_container }>
   <h3 className={s.phrase_title_English}>{t("phrase_one")} </h3>
    <h3 className={s.phrase_title_English}> {t("phrase_two")} </h3>


  </center>
  )
}
