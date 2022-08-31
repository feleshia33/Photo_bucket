//import React from 'react' rac shortcut
import image_one from './Images'

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
}

]

const Images = () => {
  return (
    <>
    {images.map(({key, image}) => (
    <h3>{image.image}</h3>
    
    ))}
    </>
  )
}

export default Images