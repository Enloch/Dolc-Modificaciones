import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import useImagesSeries from "../../../../hooks/useImagesSeriesTline";
import StyledIndiceSeries from "./styles";
import React, { useState } from "react";

const IndiceSeries = ({ id, queSerieActiva }) => {
  const [categoria, setCategoria] = useState("Todas");
  const enlacesSeries = useImagesSeries(categoria, queSerieActiva);

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value); // Actualiza la categoría seleccionada
  };
  return (
    <>
      <StyledIndiceSeries
        id={id}
        backgroundColor={COLORS.gray02}
        style={{ paddingBottom: "0", rowGap: "20px" }}
      >
        <Titulo style={{ paddingBottom: "0" }}>SERIES</Titulo>
        <select value={categoria} onChange={handleCategoriaChange}>
          <option value='Todas'>Todas las series</option>
          <option value='Piedra'>Piedra</option>
          <option value='Cemento'>Cemento</option>
          <option value='Marmol'>Mármol</option>
          <option value='Monocolor'>Monocolor</option>
          <option value='Terrazo'>Terrazo</option>
        </select>
      </StyledIndiceSeries>
      <StyledIndiceSeries
        id={id}
        backgroundColor={COLORS.gray02}
        style={{ paddingTop: "20px" }}
      >
        {enlacesSeries}
      </StyledIndiceSeries>
    </>
  );
};
export default IndiceSeries;
