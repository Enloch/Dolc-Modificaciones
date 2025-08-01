import React, { useState, useEffect } from "react";
import { Titulo } from "../../../../../components/Titulos";
import { COLORS } from "../../../../../global/GlobalStyles";
import {
  StyledIndiceSeries,
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
} from "../../../../../configs/SeriesMatrix/configFamilias";

const IndiceSeries = ({ id, queSerieActiva }) => {
  // State Management Optimization:
  // baseImage: Stores the image corresponding to the selected family/collection or initial state.
  // hoverImage: Stores the image to display temporarily on hover, null otherwise.
  const [tituloActivo, setTituloActivo] = useState(Familias[0].Titulo);
  const [coleccionActiva, setColeccionActiva] = useState(null);
  const [baseImage, setBaseImage] = useState(Familias[0].Imagen); // Renamed from imagen
  const [hoverImage, setHoverImage] = useState(null); // New state for hover effect

  // Derived state (remains the same)
  const familiaActiva = Familias.find(
    (familia) => familia.Titulo === tituloActivo
  );
  const configuracionActiva = configFamilias.find(
    (config) => config.id === familiaActiva?.id // Added optional chaining for safety
  )?.config;

  useEffect(() => {
    // Establish initial state on mount
    setTituloActivo(Familias[0].Titulo);
    setColeccionActiva(null);
    setBaseImage(Familias[0].Imagen);
    setHoverImage(null);
  }, []); // Run only once

  // Click Handlers: Update base state
  const handleClickTitles = (familia) => {
    setTituloActivo(familia.Titulo);
    setColeccionActiva(null);
    setBaseImage(familia.Imagen); // Update the base image
    setHoverImage(null); // Clear any hover effect
  };

  const handleClickColecciones = (coleccion) => {
    setColeccionActiva(coleccion);
    setBaseImage(coleccion.img); // Update the base image
    setHoverImage(null); // Clear any hover effect
  };

  // Hover Handlers: Update transient hover state
  const handleHoverTitles = (item, esColeccion = false) => {
    const imagenNueva = esColeccion ? item.img : item.Imagen;
    setHoverImage(imagenNueva); // Set the temporary hover image
  };

  const handleMouseLeave = () => {
    setHoverImage(null); // Clear the temporary hover image on leave
  };

  // Determine the image to display: prioritize hover image if present
  const imagenActual = hoverImage || baseImage;

  // Generate Title Components (logic remains mostly the same, just wiring to new handlers)
  const CreaTitulos = Familias.map((familia) => (
    <TituloFamilia
      key={familia.id}
      onClick={() => handleClickTitles(familia)}
      onMouseEnter={() => handleHoverTitles(familia)} // Use new hover handler
      onMouseLeave={handleMouseLeave} // Use new mouse leave handler
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
          onMouseEnter={() => handleHoverTitles(coleccion, true)} // Use new hover handler
          onMouseLeave={handleMouseLeave} // Use new mouse leave handler
          activo={coleccionActiva && coleccionActiva.id === coleccion.id}
        >
          {coleccion.title}
        </TituloColeccion>
      ))
    : null;

  // Render component
  return (
    <>
      <StyledIndiceSeries
        id={id}
        backgroundColor={COLORS.gray02}
        style={{ paddingBottom: "0", rowGap: "20px" }}
      >
        <Titulo style={{ paddingBottom: "0" }}>Colecciones</Titulo>
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
            Colección
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
            Modelos
          </TituloFamilia>
          {CreaTituloColecciones}
        </ContenedorTitulosColeccion>
        <ContenedorImagenes>
          {/* Display the determined image */}
          <Imagen
            src={imagenActual}
            alt={`Imagen para ${tituloActivo || ""} ${coleccionActiva ? "- " + coleccionActiva.title : ""}`}
          />
        </ContenedorImagenes>
      </StyledFamilia>
    </>
  );
};

export default IndiceSeries;
