import React from 'react'
import s from './ContactsPage.module.css'
import  Logo  from '../../css/Logo.jpeg'


export default function ContactsPage() {
  return (
    <div className={s.contacts_page_container}>
        <div className={s.contacts_logo}>
            <img src={ Logo } alt=" Andre Filon Chef Privato" />
        </div>
        <div className={s.contacts_title}>
            <p>tel</p>
        <p>email</p>
        <p>web</p>
        <p>insta</p>
        
        </div>
        <div className={s.contacts_info}>
            <p>+39 33384 5356</p>
            <p>info@chefandre.it</p>
            <p>chefandre.it</p>
            <p>@andrefilon</p>
        </div>

    </div>
  )
}