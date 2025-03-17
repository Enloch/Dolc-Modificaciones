import { useState } from "react";
import StyledImageWithCaption from "./styles";

const ImageWithCaption = ({
  src,
  alt,
  caption,
  onClickFunc,
  className,
  columnSpan,
  style,
  mostrarCaption,
  isGray = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Manejo de errores cuando la imagen no se carga correctamente
  const handleImageError = () => {
    console.error(`Error al cargar la imagen: ${src}`);
    setImageError(true);
  };

  // Determina si la imagen es webp y proporciona una alternativa si es necesario
  const isWebP = src && typeof src === 'string' && src.toLowerCase().endsWith('.webp');

  if (!caption && !mostrarCaption)
    return (
      <StyledImageWithCaption
        className={className}
        style={style}
        columnSpan={columnSpan}
      >
        {imageError ? (
          <div className="image-error">
            <p>No se pudo cargar la imagen</p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            onClick={onClickFunc}
            className={isGray ? "gray" : ""}
            onError={handleImageError}
            loading="lazy" // Añadido para carga perezosa
          />
        )}
      </StyledImageWithCaption>
    );

  return (
    <StyledImageWithCaption
      className={className}
      style={style}
      columnSpan={columnSpan}
    >
      {imageError ? (
        <div className="image-error">
          <p>No se pudo cargar la imagen</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onClick={onClickFunc}
          className={isGray ? "gray" : ""}
          onError={handleImageError}
          loading="lazy" // Añadido para carga perezosa
        />
      )}
      <figcaption>{caption || "-"}</figcaption>
    </StyledImageWithCaption>
  );
};

export default ImageWithCaption;
