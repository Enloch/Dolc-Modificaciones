import React, { useState, useEffect } from "react";
import StyledImageWithCaption from "./styles";

const ImageWithCaptionSlider = ({
  images, // Asumimos que 'images' es un array de objetos con 'src', 'alt', y 'caption'
  onClickFunc,
  className,
  columnSpan,
  style,
  mostrarCaption = true,
  isGray = false,
  interval = 3500, // Intervalo de tiempo en milisegundos para cambiar la imagen
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambiar a la siguiente imagen cada 'interval' milisegundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Limpiar el intervalo
  }, [images.length, interval]);

  const { src, alt, caption } = images[currentImageIndex];

  const imageContent = (
    <img
      src={src}
      alt={alt}
      onClick={onClickFunc}
      className={isGray ? "gray" : ""}
    />
  );

  return (
    <StyledImageWithCaption
      className={className}
      style={style}
      columnSpan={columnSpan}
    >
      {imageContent}
      {mostrarCaption && <figcaption>{caption || "-"}</figcaption>}
    </StyledImageWithCaption>
  );
};

export default ImageWithCaptionSlider;
