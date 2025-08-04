import styled from "styled-components";
import StyledImageWithCaption from "@components/ImageWithCaption/styles";
import Seccion from "@components/Seccion";
import {
  Column8,
  DISTANCES,
  GridLayout,
  TABLET_SIZE,
} from "@global/GlobalStyles";
import StyledAnotacion from "@components/Anotacion/styles";
import StyledVisualizadorNota from "@components/VisualizadorNota/styles";

const StyledDolcker = styled(Seccion)`
  row-gap: ${DISTANCES.long};

  @media (max-width: ${TABLET_SIZE}) {
    .dolcker-info {
      grid-row-start: 2;
    }
    ${StyledAnotacion} {
      grid-row-start: 3 !important;
    }

    ${StyledVisualizadorNota} {
      grid-row-start: 4 !important;
    }
  }

  .dolcker-info {
    ${Column8}

    ${GridLayout}
    grid-template-columns: repeat(9, 1fr);
    row-gap: ${DISTANCES.medium};

    /* Estilos dinámicos basados en el número de imágenes */
    /* Para 1 imagen */
    &:has(${StyledImageWithCaption}:nth-of-type(1):last-of-type) {
      ${StyledImageWithCaption}:nth-of-type(1) {
        grid-column: 1 / span 7;
      }

      > p:nth-of-type(n) {
        grid-column: 1 / span 7;
      }
    }

    /* Para 2 imágenes */
    &:has(${StyledImageWithCaption}:nth-of-type(2):last-of-type) {
      ${StyledImageWithCaption}:nth-of-type(1) {
        grid-column: 1 / span 4;
      }

      ${StyledImageWithCaption}:nth-of-type(2) {
        grid-column: 5 / span 5;
      }

      > p:nth-of-type(1) {
        grid-column: 1 / span 9;
      }
    }

    /* Para 3 imágenes (mantiene el diseño original) */
    &:has(${StyledImageWithCaption}:nth-of-type(3):last-of-type) {
      ${StyledImageWithCaption}:nth-of-type(1) {
        grid-column: 1 / span 3;
      }

      ${StyledImageWithCaption}:nth-of-type(2) {
        grid-column: 4 / span 3;
      }

      ${StyledImageWithCaption}:nth-of-type(3) {
        grid-column: 7 / span 3;
      }

      > p:nth-of-type(1) {
        grid-column: 1 / span 6;
      }

      > p:nth-of-type(2) {
        grid-column: 1 / span 9;
      }
    }

    @media (max-width: ${TABLET_SIZE}) {
      ${StyledImageWithCaption} {
        grid-column: 1 / -1 !important;
      }

      > p {
        grid-column: 1 / -1 !important;
      }
    }
  }
  
  ${StyledAnotacion} {
    grid-row-start: 2;
  }

  ${StyledVisualizadorNota} {
    grid-row-start: 2;
  }
`;

export default StyledDolcker;
