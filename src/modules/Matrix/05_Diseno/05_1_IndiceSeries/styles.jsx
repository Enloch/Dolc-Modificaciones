import styled, { css } from "styled-components";
import Seccion from "../../../../components/Seccion";
import { Titulo } from "../../../../components/Titulos";
import {
  column_5_span7,
  column_5_span8,
  column_total,
} from "../../../../styles/grid";
import { mediaQueryTablet, mediaQueryMobile } from "../../../../styles/sizes";
import Enlace from "./Enlace";

export const StyledIndiceSeries = styled(Seccion)`
  ${Titulo} {
    ${column_total}
  }

  ${Enlace} {
    grid-row: 2;
  }
  ${Enlace}, > .enlace {
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-column-start: 1;
      grid-column-end: span 2;
    `)}
  }
`;
export const StyledIndiceImagenes = styled(Seccion)`
  ${Enlace}

  // Enlaces en la primera fila
  ${Enlace}:nth-child(1), > .enlace:nth-child(1) {
    grid-column-start: 5; // Enlace 1 en columnas 5-6
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
    `)}
    ${mediaQueryMobile(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: -1; // Se extiende hasta el final de la cuadrícula
    `)}
  }
  ${Enlace}:nth-child(2), > .enlace:nth-child(2) {
    grid-column-start: 7; // Enlace 2 en columnas 7-8
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 3; // Comienza en la primera columna
      grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
    `)}
    ${mediaQueryMobile(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: -1; // Se extiende hasta el final de la cuadrícula
    `)}
  }
  ${Enlace}:nth-child(3), > .enlace:nth-child(3) {
    grid-column-start: 9; // Enlace 3 en columnas 9-10
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
    `)}
    ${mediaQueryMobile(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: -1; // Se extiende hasta el final de la cuadrícula
    `)}
  }
  ${Enlace}:nth-child(4), > .enlace:nth-child(4) {
    grid-column-start: 11; // Enlace 4 en columnas 11-12
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 3; // Comienza en la primera columna
      grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
    `)}
    ${mediaQueryMobile(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: -1; // Se extiende hasta el final de la cuadrícula
    `)}
  }
  // Enlaces en la segunda fila
  ${Enlace}:nth-child(5), > .enlace:nth-child(5) {
    grid-row: 2; // Cambio a la siguiente fila
    grid-column-start: 5; // Enlace 5 en columnas 1-2
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
    `)}
    ${mediaQueryMobile(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: -1; // Se extiende hasta el final de la cuadrícula
    `)}
  }
  ${Enlace}:nth-child(6), > .enlace:nth-child(6) {
    grid-row: 2; // Cambio a la siguiente fila
    grid-column-start: 7; // Enlace 5 en columnas 1-2
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 3; // Comienza en la primera columna
      grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
    `)}
    ${mediaQueryMobile(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: -1; // Se extiende hasta el final de la cuadrícula
    `)}
  }
  ${Enlace}:nth-child(7), > .enlace:nth-child(7) {
    grid-row: 2; // Cambio a la siguiente fila
    grid-column-start: 9; // Enlace 5 en columnas 1-2
    grid-column-end: span 2;
    ${mediaQueryTablet(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
    `)}
    ${mediaQueryMobile(css`
      grid-row: auto; // Cada enlace en su propia fila
      grid-column-start: 1; // Comienza en la primera columna
      grid-column-end: -1; // Se extiende hasta el final de la cuadrícula
    `)}
  }

  /* // Cambios para dispositivos como una tablet
  ${Enlace}, > .enlace {
    ${mediaQueryTablet(css`
    grid-row: auto; // Cada enlace en su propia fila
    grid-column-start: 1; // Comienza en la primera columna
    grid-column-end: span 2; // Se extiende hasta el final de la cuadrícula
  `)}
  } */
`;
