import React, { useState, useEffect } from "react";
import { Titulo } from "@components/Titulos";
import { COLORS } from "@global/GlobalStyles";
import useImagesSeries from "@hooks/useImagesSeriesMatrix";
import {
  StyledIndiceSeries,
  StyledIndiceImagenes,
  StyledFamilia,
  ContenedorTitulos,
  ContenedorImagenes,
  TituloFamilia,
  TituloColeccion,
  ContenedorTitulosColeccion,
  Imagen,
} from "./styles";
import {
  Familias,
  configFamilias,
} from "@configs/SeriesMatrix/configFamilias";
const IndiceSeries = ({ id, queSerieActiva }) => {
  const [tituloActivo, setTituloActivo] = useState(Familias[0].Titulo);
  const [coleccionActiva, setColeccionActiva] = useState(null);
  const [imagen, setImagen] = useState(Familias[0].Imagen);
  const familiaActiva = Familias.find(
    (familia) => familia.Titulo === tituloActivo
  );
  const configuracionActiva = configFamilias.find(
    (config) => config.id === familiaActiva.id
  )?.config;
  useEffect(() => {
    // Esto establecerá la primera familia y su imagen cuando el componente se monte
    setTituloActivo(Familias[0].Titulo);
    setImagen(Familias[0].Imagen);
  }, []);

  const handleClickTitles = (familia) => {
    setTituloActivo(familia.Titulo);
    setImagen(familia.Imagen);
    setColeccionActiva(null);
  };
  const handleClickColecciones = (coleccion) => {
    setColeccionActiva(coleccion);
    setImagen(coleccion.img);
  };
  const handleHoverTitles = (item, esColeccion = false) => {
    const imagenNueva = esColeccion ? item.img : item.Imagen;
    setImagen(imagenNueva);
  };

  const handleMouseLeave = () => {
    if (coleccionActiva) {
      // Si hay una colección activa, mantener su imagen
      setImagen(coleccionActiva.img);
    } else {
      // Si no hay una colección activa, volver a la imagen de la familia activa
      const familiaActivaImagen = Familias.find(
        (f) => f.Titulo === tituloActivo
      )?.Imagen;
      setImagen(familiaActivaImagen);
    }
  };

  const CreaTitulos = Familias.map((familia) => (
    <TituloFamilia
      key={familia.id}
      onClick={() => handleClickTitles(familia)}
      onMouseEnter={() => handleHoverTitles(familia)}
      onMouseLeave={handleMouseLeave}
      activo={tituloActivo === familia.Titulo}
    >
      {familia.Titulo}
    </TituloFamilia>
  ));
  const CreaTituloColecciones = configuracionActiva
    ? configuracionActiva.map((coleccion) => (
        <TituloColeccion
          key={coleccion.id}
          onClick={() => handleClickColecciones(coleccion)}
          onMouseEnter={() => handleHoverTitles(coleccion, true)}
          onMouseLeave={handleMouseLeave}
          activo={coleccionActiva && coleccionActiva.id === coleccion.id}
        >
          {coleccion.title}
        </TituloColeccion>
      ))
    : null;
  return (
    <>
      <StyledIndiceSeries
        id={id}
        backgroundColor={COLORS.gray02}
        style={{ paddingBottom: "0", rowGap: "20px" }}
      >
        <Titulo style={{ paddingBottom: "0" }}>Collections</Titulo>
      </StyledIndiceSeries>
      <StyledFamilia>
        <ContenedorTitulos>
          <TituloFamilia
            style={{
              marginBottom: "10px",
              fontWeight: "600",
              color: "#000000",
            }}
          >
            Collection
          </TituloFamilia>
          {CreaTitulos}
        </ContenedorTitulos>
        <ContenedorTitulosColeccion>
          <TituloFamilia
            style={{
              marginBottom: "10px",
              fontWeight: "600",
              color: "#000000",
            }}
          >
            Models
          </TituloFamilia>
          {CreaTituloColecciones}
        </ContenedorTitulosColeccion>
        <ContenedorImagenes>
          <Imagen src={imagen} />
        </ContenedorImagenes>
      </StyledFamilia>
    </>
  );
};
export default IndiceSeries;
