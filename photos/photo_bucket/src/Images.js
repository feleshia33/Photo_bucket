//import React from 'react' rac shortcut
import image_one.png from './Images/image_one'

const images = [
{
    id: 1,
    image: './images/1.png',
    text: '',
},
{
    id: 2,
    image: './images.2.png',
    text: '',
},
{
    id: 3,
    image: '',
    text: '',
},
{
    id: 4,
    image: '',
    text: '',
},
{
    id: 5,
    image: '',
    text: '',
},
{
    id: 6,
    image: '',
    text: '',
},
{
    id: 7,
    image: '',
    text: '',
},
{
    id: 8,
    image: '',
    text: '',
},{
    id: 9,
    image: '',
    text: '',
},{
    id: 10,
    image: '',
    text: '',
},
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