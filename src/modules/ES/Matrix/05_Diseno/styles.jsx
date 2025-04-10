/* eslint-disable indent */
import styled from "styled-components";
import Seccion from "../../../../components/Seccion";
import StyledVisualizadorRotador from "../../../../components/VisualizadorRotador/styles";
import StyledVisualizadorVariaciones from "../../../../components/VisualizadorVariaciones/styles";
import {
  COLORS,
  DISTANCES,
  GridLayout,
  TABLET_SIZE,
  MOBILE_SIZE,
} from "../../../../global/GlobalStyles";
import { column_5_span7, column_5_span6 } from "../../../../styles/grid";

export const StyledGaleria = styled(Seccion)`
  .Slider {
    ${column_5_span6}
  }
`;
export const StyledSlider = styled.div`
  .image-gallery-slide .image-gallery-image {
    max-width: 100%;
    object-fit: contain;
  }
`;
const StyledDisenos = styled(Seccion)`
  row-gap: ${DISTANCES.small};

  /* .espesores-ejemplos {
        ${column_5_span7}

        ${GridLayout}
        grid-template-columns: repeat(7, 1fr);

        img:nth-of-type(1) {
            grid-column: 1 / span 3;
        }
        img:nth-of-type(2) {
            grid-column: 4 / span 2;
        }
    } */
  .rotador {
    grid-column: 5 / -1;
    background-color: #fff;
    height: 75vh;
  }
  .espesor {
    ul {
      display: flex;
      flex-direction: column;

      strong {
        padding: ${DISTANCES.small} 0;
      }

      li {
        border-top: 1px solid ${COLORS.gray05};
        /* padding: ${DISTANCES.small} 0; */
        padding: 5px 0;
        word-break: break-word;
      }
    }
  }
  .espesor-1 {
    grid-column: 5 / span 2;
  }

  .espesor-2 {
    grid-column: 7 / span 2;
  }

  .espesor-3 {
    grid-column: 9 / span 2;
  }
  /* Media query para pantallas Ultrawide */
  @media (min-aspect-ratio: 21/9) {
    .rotador {
      grid-column: 5 / -2; /* Estilo específico para Ultrawide */
    }
  }
  @media (max-width: ${TABLET_SIZE}) {
    > * {
      grid-row-start: auto !important;
    }

    ${(props) =>
      props.isEspesores ? "grid-template-columns: repeat(3, 1fr);" : null}
    .rotador {
      grid-column: 1 / -1;
      height: 60vh;
    }
    .espesor-1 {
      grid-column: 1 / span 1;
    }

    .espesor-2 {
      grid-column: 2 / span 1;
    }

    .espesor-3 {
      grid-column: 3 / span 1;
    }
  }
  @media (max-width: ${MOBILE_SIZE}) {
    > * {
      grid-row-start: auto !important;
    }

    ${(props) =>
      props.isEspesores ? "grid-template-columns: repeat(3, 1fr);" : null}
    .rotador {
      grid-column: 1 / -1;
      height: 100vh;
    }
    .espesor-1 {
      grid-column: 1 / span 1;
    }

    .espesor-2 {
      grid-column: 2 / span 1;
    }

    .espesor-3 {
      grid-column: 3 / span 1;
    }
  }
  ${StyledVisualizadorVariaciones}, ${StyledVisualizadorRotador} {
    align-self: flex-end;
  }
`;

// Loader component
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px; // Match RotatorWrapper height
  background: ${COLORS.gray01};
  color: ${COLORS.gray05};
  grid-column: span 12;
`;

// Placeholder component
export const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px; // Match RotatorWrapper height
  background: ${COLORS.gray03};
  border: 1px dashed ${COLORS.gray04};
  cursor: pointer;
  transition: background-color 0.3s ease;
  grid-column: span 12;

  &:hover {
    background: ${COLORS.gray02};
  }

  &::after {
    content: "👆 Haz clic para cargar el configurador";
    font-size: 1.5rem; // Adjusted size
    color: ${COLORS.gray05};
    text-align: center;
    padding: 1rem;
  }
`;

export default StyledDisenos;
