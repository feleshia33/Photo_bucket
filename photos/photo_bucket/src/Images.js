//import React from 'react' rac shortcut
import image_one from './Images'

function Images() {
    const images = [
    {   key: 1, 
        image: 'image_one.png', 
        text: 'Ispum lalala fee'
    },
    {
        key: 2, 
        image: 'image_two.png', 
        text: 'Ispum lalala feed'
    }   
    ];

// const Images = () => {
    return (
        <>
            {images.map(({ key, image }) => (
                <h3 key={key}>{image.image}</h3>

            ))}
        </>
    );
}
//}

export default Images