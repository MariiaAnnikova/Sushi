import React, { useEffect}  from 'react'
import s from './PhotoParalax.module.css'
import andrei from "../../css/andrei.jpeg"
import andrei_par from "../../css/andrei_par.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Element } from 'react-scroll'
import slider11 from "../../css/slider11.jpeg"

export default function PhotoParalax() {
  // useEffect(()=> {
  //   AOS.init({duration:8000;
  //  }, [])
  return (
    <div className={s.wrapper}>
<header>
        <img src={slider11} alt={"Andrei_Filon"} className={s.photo_andrei}/>
        <div className={s.about_andrei_title}>
        {/* <p>Hello! I'm Andre Filon.</p> */}
        <p>Welcome! </p>
         <p>I'm Andre Filon, a seasoned sushi chef with a passion for crafting exquisite culinary experiences.
          </p> 
          <p>With over a decade of experience in the art of sushi, I have honed my skills working in renowned establishments in Romania and Italy.</p>
          <p> Now, I bring my expertise directly to you as a private sushi chef, specializing in creating unforgettable dining experiences for your private events. </p>
        
    </div>
    </header> 
    <div className={s.line}></div>
    </div>
  )
}
