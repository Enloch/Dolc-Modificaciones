import React, { useState } from "react";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import useImagesSeries from "../../../../hooks/useImagesSeriesMatrix";
import { StyledIndiceSeries, StyledIndiceImagenes } from "./styles";

const IndiceSeries = ({ id, queSerieActiva }) => {
  const [categoria, setCategoria] = useState("Todas");
  const enlacesSeries = useImagesSeries(queSerieActiva);

  return (
    <>
      <StyledIndiceSeries
        id={id}
        backgroundColor={COLORS.gray02}
        style={{ paddingBottom: "0", rowGap: "20px" }}
      >
        <Titulo style={{ paddingBottom: "0" }}>Familias</Titulo>
      </StyledIndiceSeries>
      <StyledIndiceImagenes
        id={id}
        backgroundColor={COLORS.gray02}
        style={{ paddingTop: "20px" }}
      >
        {enlacesSeries}
      </StyledIndiceImagenes>
    </>
  );
};
export default IndiceSeries;
