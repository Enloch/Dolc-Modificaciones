import styled, { css } from "styled-components";
import Seccion from "../../../../../components/Seccion";
import { Titulo2 } from "../../../../../components/Titulos";
import { column_5_span7, column_total } from "../../../../../styles/grid";
import { mediaQueryTablet } from "../../../../../styles/sizes";
import Enlace from "./Enlace";

const SyledIndiceSeries = styled(Seccion)`
  ${Titulo2} {
    ${column_total}
    margin-bottom: 2rem;
  }

  ${Enlace}, > .enlace {
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-column-start: 1;
      grid-column-end: -1;
    `)}
  }

  .series-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2rem;
    width: 100%;
    ${column_5_span7}

    ${mediaQueryTablet(css`
      grid-template-columns: repeat(4, 1fr);
    `)}
        
        @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  /* Estilos para el carrusel */
  .carousel-container {
    ${column_5_span7}
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    margin-bottom: 50px; /* Espacio para los dots */

    .slick-track {
      display: flex;
      align-items: stretch;
      margin-left: 0;
    }

    .slick-slide {
      height: auto;
      padding: 0 10px;
      display: flex;

      & > div {
        width: 100%;
        height: 100%;
        display: flex;
      }
    }

    .carousel-item {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 5px;
    }

    .slick-prev,
    .slick-next {
      z-index: 1;
      &:before {
        color: #333;
        font-size: 24px;
      }
    }

    .slick-prev {
      left: -5px;
      @media (min-width: 768px) {
        left: -25px;
      }
    }

    .slick-next {
      right: -5px;
      @media (min-width: 768px) {
        right: -25px;
      }
    }

    .slick-dots {
      bottom: -35px;

      li {
        margin: 0 2px;

        button:before {
          font-size: 8px;
        }
      }

      @media (max-width: 480px) {
        bottom: -30px;

        li {
          margin: 0 1px;

          button:before {
            font-size: 6px;
          }
        }
      }
    }
  }
`;

export default SyledIndiceSeries;
