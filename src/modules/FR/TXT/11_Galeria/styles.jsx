import styled from "styled-components";
import Seccion from "@components/Seccion";
import { column_5_span6 } from "@styles/grid";

export const StyledGaleria = styled(Seccion)`
  .Slider {
    ${column_5_span6}
  }
`;

export const StyledSlider = styled.div`
  .image-gallery-slide .image-gallery-image {
    max-width: 100%; // Limita el ancho máximo
    height: 50vh; // Limita la altura máxima
    object-fit: contain; // Asegura que la imagen se ajuste dentro del contenedor
  }
`;
