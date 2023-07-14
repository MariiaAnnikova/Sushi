import React from 'react'
import GaleryContainer from '../GaleryCantainer/GaleryContainer'
import s from './Galery.module.css'
import { Element } from 'react-scroll'

export default function Galery() {

    const photos = [
      
        {id:2,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190425_093730.jpg']},
        // {id:3,
        //     photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190507_210820.jpg']},   
        // {id:4,
        //     photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190507_211025.jpg']}, 
        {id:5,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190529_204942.jpg']}, 
        {id:6,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190915_212038.jpg']},   
        {id:7,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190925_161601.jpg']},
        // {id:8,
        //     photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190927_215159.jpg']},
        {id:9,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20190927_215235.jpg']},  
        // {id:10,
        //     photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20191003_221243.jpg']}, 
        // {id:11,
        //     photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20191007_211847.jpg']}, 
        {id:12,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20191007_211908.jpg']},
        {id:13,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20200203_210622.jpg']},
        {id:14,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20200902_224114.jpg']},
        {id:15,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20200831_220546.jpg']}, 
        {id:16,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20200819_215407.jpg']}, 
        // {id:17,
        //     photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20200920_205433.jpg']},
        {id:18,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20200920_205437.jpg']},  
     {id:19,
            photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20210213_135800.jpg']},
    //   {id:20,
    //             photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20210213_135800.jpg']},
    {id:21,
                    photo: ['https://sushi-photo.fra1.digitaloceanspaces.com/20191003_221250.jpg']},
       
               
    ]
  return (
    <Element name='Galery' className={s.photo_arr}>
        {
        photos.map((el) => <GaleryContainer {...el} key={el.id}  />)
        }





    </Element>
  )
}
