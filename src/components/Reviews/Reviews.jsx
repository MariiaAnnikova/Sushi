import React from 'react'
import s from './Reviews.module.css'


export default function Reviews() {
  return (
   
    <div> <center className={s.review_title}> Reviews of my clients </center>
    <center className={s.all_reviews}> 
  
        <div className={s.review}>I’ve had the pleasure of having sushi made by Andrei a few times and I can say without a doubt that it was the best sushi I’ve ever tasted! Can’t wait for next time. <p>Kamila Antoniani</p></div>
        <div className={s.review}> It is completly another level of quality and test of Sushi. Trylly unforgettable. Very testy. <p>Mariia Voican </p></div>
        <div className={s.review}>I’ve had the pleasure of having sushi made by Andrei a few times and I can say without a doubt that it was the best sushi I’ve ever tasted! Can’t wait for next time. <p>Kamila Antoniani</p></div>
    </center>
    </div>
  )
}
