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
<PhotoParalax />

<Galery />
<Events />

<Contacts />
<Reviews />

</div>
  );
}
