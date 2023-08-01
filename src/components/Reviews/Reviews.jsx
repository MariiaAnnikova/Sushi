import React from 'react'
import s from './Reviews.module.css'
import stars from './reviews_pic/stars.png'
import rev_laura from'./reviews_pic/rev_laura.png'
import rev_lebing from './reviews_pic/rev_lebing.png'
import rev_ziggy from './reviews_pic/rev_ziggy.png'
import rev_karima from './reviews_pic/rev_karima.png'
import { Element } from 'react-scroll'



export default function Reviews() {
  
  
  return (
   
<div className={s.reviews} >
     
    <center className={s.stars}><img src={stars} alt='filon andre reviews'></img></center>
        <div className={s.all_reviews}> 
   
        <div className={s.review}><img src={rev_laura} alt='filon andre reviews' ></img></div>
        <div className={s.review}> <img src={rev_lebing} alt='filon andre reviews' ></img></div>
       
       
        <div className={s.review}><img src={rev_ziggy} alt='filon andre reviews' ></img></div>
        <div className={s.review}><img src={rev_karima} alt='filon andre reviews' ></img></div>
</div>

</div>
    
    
  )
}
