import React from 'react'
import { Link} from 'react-router-dom'


export const DivInfoEng =({data})=> {
  return (
   <div>
    <Link to='about_me'>
  {data.language.info}
 </Link>
 </div> 
  )
}
