//import React from 'react' rac shortcut
import image_one from './Images/image_one.png'

const images = [
{
    id: 1,
    image: 'image_one.png',
    text: 'Ispum lalala fee'
    
},
{
    id: 2,
    image: 'image_two.png',
    text: 'Ispum lalala feed'
},
{
    id: 3,
    image: '',
    text: ''
},
{
    id: 4,
    image: '',
    text: ''
}

]

const Images = () => {
  return (
    <>
    {images.map((image) => (
    <h3>{image.image}</h3>))}
    </>
  )
}

export default Images