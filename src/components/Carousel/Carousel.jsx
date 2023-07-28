import React from 'react'
import pic from "../../css/pic.png"
import slider2 from "../../css/slider2.jpg"
import slider3 from "../../css/slider3.jpg"
import slider4 from "../../css/slider4.jpg"
import slider5 from "../../css/slider5.jpg"
import slider7 from "../../css/slider7.jpg"
import slider8 from "../../css/slider8.jpg"
import slider11 from "../../css/slider11.jpeg"

import s from './Carousel.module.css'

export default function Carousel() {
  return (
    <div>
    <div className={s.border_pic_up}> <img src={pic} alt="sushi"/></div>
    
    <div className={s.pic_carousel}>
<div className={s.slider}>

<img src={ slider2} alt="sushi"/>
<img src={ slider3} alt="sushi"/>
<img src={ slider4} alt="sushi"/>
<img src={ slider5} alt="sushi"/>
<img src={ slider7} alt="sushi"/>
<img src={ slider8} alt="sushi"/>
<img src={ slider2} alt="sushi"/>

</div>

</div>
<div className={s.border_pic}> <img src={pic} alt="sushi"/></div>
</div>
  )
}
