import React, { useEffect}  from 'react'
import s from './PhotoParalax.module.css'
import andrei from "../../css/andrei.jpeg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Element } from 'react-scroll'

export default function PhotoParalax() {
  useEffect(()=> {
    AOS.init({duration:8000});
   }, [])
  return (
    <Element name='PhotoParalax' className={s.wrapper}>

    <header>
        <img src={andrei} alt={"Andrei_Filon"} className={s.photo_andrei}/>
        <div className={s.about_andrei_title}>
        <p>Welcome to the world of private sushi dining with Chef Andre Filon. </p>
        <p> 10 years of delicious experience in Romania and Italy.</p>
        <p>3 years of work in a top sushi restaurant in Gabichi Mare.</p>
        <p>Master in the Arts of Sushi, Ramen and Barbecue. </p>
        <p>Deep knowledge about balance menu, nutrition  and sea food.</p>
    </div>
    </header>
    </Element>
  )
}
