import React, { useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import s from './Events.module.css'

export default function Events() {
    useEffect(()=> {
        AOS.init({duration:8000});
       }, [])

  return (
    <center className={s.title_events}>
  <p className={s.event_logo}>Chef service is for:</p>
  <center className={`${s.text} ${s.text1}`} data-aos="fade-dow">Private Party / Feste private</center>
  {/* <div className={`${s.text} ${s.text2}`} data-aos="fade-dow">Cene romantice</div> */}
  <div className={`${s.text} ${s.text3}`} data-aos="fade-dow">Special ocation / Ocasione speciale</div>
  <div className={`${s.text} ${s.text4}`} data-aos="fade-dow">Birthdays / Compleanni</div>
  <div className={`${s.text} ${s.text5}`} data-aos="fade-dow">Indoor / Outdoor Buffet  </div>
  {/* <div className={`${s.text} ${s.text6}`} data-aos="fade-dow"> Sushi,  </div> */}
</center>

  )
}
