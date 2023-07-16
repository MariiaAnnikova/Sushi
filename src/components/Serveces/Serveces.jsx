import React from 'react'
import s from './Serveces.module.css'
import phone_call from '../../Icons/icons/phone_call.png'
import done from '../../Icons/icons/done.png'
import chef from '../../Icons/icons/chef.png'
import cleaning from '../../Icons/icons/cleaning.png'
import { Element  } from 'react-scroll'

export default function Serveces() {
  return (
    <Element name='Service' className={s.all_block_serveces}>

    <h2 className={s.serveces_header}> HOW IT WORKS </h2>
    <div className={s.block_serveces_top_icon}>
    <div className={s.services_icon}>
    <img src={phone_call} alt="sushi"/>
    <img src={done} alt="sushi"/>
    <img src={chef} alt="sushi"/>
    <img src={cleaning} alt="sushi"/>
    </div>
    </div>
    
    <div className={s.block_serveces_down_title}>
    <div className={s.serveces_title}>
     <p>Get in contact with Chef Andre</p>
     <p>We will decide  the menu together based on your preferences</p>
     <p>Chef Andre will prepare dinner for you with the best ingredients</p>
     {/* <p>Prepaering magic to happend</p> */}
     <p>After work Chef Andrei will leave your kithen clean </p>
    </div>
    </div>
    </Element>
    
  )
}
