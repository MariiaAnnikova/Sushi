import React from 'react'
import { PhoneOutlined } from '@ant-design/icons'
import { MailOutlined} from '@ant-design/icons'
import { IeOutlined} from '@ant-design/icons'
import { InstagramOutlined } from '@ant-design/icons'
import s from './Contacts.module.css'
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'


export default function Contacts() {
  return (
    <Element name='Contacts'>
    {/* <div className={s.contacts_header}>Book unforgettable dinner with Chef Andre!  </div> */}

    
    <div className={s.container_contacts}>
     <Link to ='contact'><center><button> <p>CONTACT ME </p> </button> </center></Link> 
       {/* <div className= {`${s.contact} ${s.tel_contact}`} ><PhoneOutlined  className={s.icon}/> +39 3338415356 </div>
       <div className={`${s.contact} ${s.mail_contacts}`}> <MailOutlined className={s.icon}/> info@chefandre.it </div>
       {/* <div className={`${s.contact} ${s.web_contact}`}>  <IeOutlined className={s.icon}/> chefandre.it </div>  */}
      {/* <div className={`${s.contact} ${s.inst_contact}`}>  <InstagramOutlined className={s.icon}/> @andrefilon </div> */}

       </div>
    </Element>
  )
}
