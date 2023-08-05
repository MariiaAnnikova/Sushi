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
    <center className={s.title_events}>
  {/* <p className={s.event_logo}>Chef service is for:</p> */}

   {/* <center className={`${s.text} ${s.text1}`} data-aos="fade-dow">Private Party / Feste private</center>
  <div className={`${s.text} ${s.text3}`} data-aos="fade-dow">Special ocation / Ocasione speciale</div>
  <div className={`${s.text} ${s.text4}`} data-aos="fade-dow">Birthdays / Compleanni</div>
  <div className={`${s.text} ${s.text5}`} data-aos="fade-dow">Indoor / Outdoor Buffet  </div>


</center>  */}

{/* <center className={s.text} >Private Party / Feste private</center>
  <div className={s.text}>Special ocation / Ocasione speciale</div>
  <div className={s.text} >Birthdays / Compleanni</div>
  <div className={s.text}>Indoor / Outdoor Buffet  </div> */}


<center className={s.text} > {t("event")}</center>
</center> 

  )
}
