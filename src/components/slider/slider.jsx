import React, { useState, useEffect } from 'react'
import {
    SliderContainer,
    SliderImage,
    SliderControls,
    SliderButton,
} from './styles'

const ImageSlider = ({ images }) => {
    // Estado que mantiene la imagen actualmente visible en el slider
    const [currentImage, setCurrentImage] = useState(images[0])
    // Estado que mantiene el intervalo de tiempo entre cambios de imagen
    const [intervalTime, setIntervalTime] = useState(4500)
    // Estado que mantiene la opacidad actual de la imagen
    const [imageOpacity, setImageOpacity] = useState(1)

    // Efecto que cambia la imagen visible cada vez que el intervalo de tiempo ha transcurrido
    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = images.indexOf(currentImage)
            const nextIndex = (currentIndex + 1) % images.length
            // Ajusta la opacidad gradualmente de 0 a 1 para crear una transición suave
            setImageOpacity(0)
            setTimeout(() => {
                setCurrentImage(images[nextIndex])
                setImageOpacity(1)
            }, 250) // Espera 500ms antes de cambiar la imagen visible y establecer la opacidad en 1
        }, intervalTime)
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval)
    }, [currentImage, intervalTime, images])

    // Manejador de eventos para cambiar la imagen visible al hacer clic en un botón
    const handleImageChange = newImage => {
        const currentIndex = images.indexOf(currentImage)
        const newIndex = images.indexOf(newImage)
        // Ajusta la opacidad gradualmente de 0 a 1 solo si se cambia a una imagen diferente
        if (newIndex !== currentIndex) {
            setImageOpacity(0)
            setTimeout(() => {
                setCurrentImage(images[newIndex])
                setImageOpacity(1)
            }, 250) // Espera 500ms antes de cambiar la imagen visible y establecer la opacidad en 1
        }
    }

    // Renderiza el componente del slider con la imagen actual y los botones de control
    return (
        <SliderContainer>
            <SliderImage
                src={currentImage}
                alt='slider-image'
                style={{
                    opacity: imageOpacity,
                    transition: 'opacity 1s ease-in-out',
                }}
            />
            <SliderControls>
                {images.map((image, index) => (
                    <SliderButton
                        key={index}
                        // Establece la propiedad "current" en true si la imagen actual es la imagen correspondiente al botón
                        current={currentImage === image}
                        onClick={() => handleImageChange(image)}
                        // Establece el estilo de cada botón en función de si es la imagen actual o no
                        style={{
                            color: currentImage === image ? '#000' : '#fff',
                            borderColor:
                                currentImage === image ? '#fff' : '#ccc',
                        }}
                    ></SliderButton>
                ))}
            </SliderControls>
        </SliderContainer>
    )
}

export default ImageSlider
