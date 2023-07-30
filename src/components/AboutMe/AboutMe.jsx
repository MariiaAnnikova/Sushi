import React from 'react'
import s from './AboutMe.module.css'
import Andrei_pic from '../../css/slider11.jpeg'






export default function AboutMe() {
  return (
    <div className={s.about_me_block}>
<div className={s.about_me_pic}>
  <img src={Andrei_pic} alt="Andrei Filon Sushi Chef Privato" />
</div>


<div className={s.about_title}>
<p>Welcome! </p>
         <p>I'm Andre Filon, a seasoned sushi chef with a passion for crafting exquisite culinary experiences.
          </p> 
          <p>With over a decade of experience in the art of sushi, I have honed my skills working in renowned establishments in Romania and Italy.</p>
          <p> Now, I bring my expertise directly to you as a private sushi chef, specializing in creating unforgettable dining experiences for your private events. </p>
         <p>Whether you're hosting an intimate birthday celebration, a joyful family reunion, or any special occasion that calls for an extraordinary culinary experience, I am dedicated to providing you and your guests with an unforgettable journey through the world of sushi.</p>
          <p> As your personal sushi chef, I bring the restaurant experience directly to your home or venue, ensuring that every dish is meticulously prepared and tailored to your preferences.</p>
          <p>As a private chef, I offer my service for private parties, anniversaries, birthdays, family dinners. Please see my contacts for more details and availability.</p>
          </div>
    </div>
  )
}
