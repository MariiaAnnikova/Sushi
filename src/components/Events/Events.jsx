import React, { useEffect} from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import s from './Events.module.css'

export default function Events() {
    // useEffect(()=> {
    //     AOS.init({duration:8000});
    //    }, [])

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


<center className={s.text} > As a private chef, I offer my service for private parties, anniversaries, birthdays, family dinners, etc.

Please see my contacts for more details and availability.</center>
</center> 

  )
}
