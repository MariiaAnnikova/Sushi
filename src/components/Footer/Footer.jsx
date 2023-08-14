import React from 'react'
import { InstagramOutlined } from '@ant-design/icons'

import { MailOutlined } from '@ant-design/icons';
import s from './Footer.module.css'
import { PhoneOutlined } from '@ant-design/icons'

export default function Footer() {

    // const onClickMailtoHandler = () => {
    //     window.location.href = "mailto:info@atelierBahia.com?subject=Mail from Our Site&body=Here is some text";
    //   }
  return (
    <div className={s.container_footer}>
    <div className={s.footer}>
        <footer>
  <div className={s.social_icons}>

<a href="mailto:info@chefandre.com"><MailOutlined /></a>
<a href='https://instagram.com/andrefilon'><InstagramOutlined /></a>
<a href='https://wa.me/39333845356'><PhoneOutlined /></a>

</div>
<div className={s.copyright}><p>@ Sushi Chef a Domicilio Andre Filon. 2023.All right reserved.</p></div>
</footer>
    </div>
    </div>
  )
}