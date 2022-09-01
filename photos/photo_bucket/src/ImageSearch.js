import images from './Images'


const ImageSearch = () => {
    return (
        <>
            {images.map(({ id, image }) => (
                <h3 key={id}>{images.photo}</h3>
            ))}
        </>
    );
}

export default ImageSearch;