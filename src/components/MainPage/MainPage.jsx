import React from 'react'
import s from './MainPage.module.css'
import Galery from '../Galery/Galery'
import Carousel from '../Carousel/Carousel'
import Serveces from '../Serveces/Serveces'
import PhotoParalax from '../PhotoParalax/PhotoParalax'
import Events from '../Events/Events'
import Contacts from '../Contacts/Contacts'
import Reviews from '../Reviews/Reviews'
import PhraseSushi from '../PhraseSushi/PhraseSushi'


export default function MainPage() {
    



  return (
    <div className={s.mainPage}>
<PhraseSushi />
{/* <center className={`${s.phrase_title} ${s[`phrase_title_${theme}`]}`}>
  <h3 className={s.phrase_title}> Love and sushi are very similar in a variety of ways; </h3>
  <h3 className={s.phrase_title}> One is that you can never have too much of either.</h3>
</center> */}
  
  
    

<PhotoParalax />

<Galery />
<Events />

<Contacts />
<Reviews />

</div>
  );
}
