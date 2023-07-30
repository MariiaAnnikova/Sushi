import React from 'react'
import s from './GaleryContainer.module.css'



export default function GaleryContainer({photo}) {
  return (
    <div className={s.photo_container}>
      
        <img alt='Andrei Filon Sushi Chef' src={ photo}/>
    </div>
  )
}
