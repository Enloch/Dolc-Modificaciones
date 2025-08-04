import styled, { css } from "styled-components";
import Seccion from "@components/Seccion";
import { Titulo } from "@components/Titulos";
import { column_5_span7, column_5_span8, column_total } from "@styles/grid";
import { mediaQueryTablet, mediaQueryMobile } from "@styles/sizes";
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
export const StyledFamilia = styled.section`
	background-color: #d9d9d9;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: auto;
	padding: 0 clamp(1.563rem, 2.604vw, 3.125rem)
		clamp(1.563rem, 2.604vw, 3.125rem) clamp(1.563rem, 2.604vw, 3.125rem);

	@media (max-width: 1080px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const ContenedorTitulos = styled.div`
	grid-row: 2;
	grid-column: 5 / 6;
	@media (max-width: 1080px) {
		grid-column: 1 / 2;
	}
	@media (max-width: 600px) {
		margin-top: 10px;
		grid-row: 2;
		grid-column: 1 / 1;
	}
`;

export const TituloFamilia = styled.h2`
	font-size: 16px;
	line-height: clamp(25px, 1.51vw, 29px);
	line-height: 19px;
	cursor: pointer;
	color: ${(props) => (props.activo ? "#000000" : "#8C8C8C")};
	text-decoration: ${(props) => (props.activo ? "underline" : "none")};
	text-decoration-thickness: ${(props) => (props.activo ? "1px" : "0")};
	font-weight: ${(props) => (props.activo ? "600" : "400")};

	&:hover {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		font-weight: 600;
		color: #000000;
	}
`;

export const ContenedorTitulosColeccion = styled.div`
	grid-row: 2;
	grid-column: 6 / 7;
	max-height: 460px;
	overflow-y: auto;
	@media (max-width: 1080px) {
		grid-column: 2 / 3;
	}
	@media (max-width: 600px) {
		margin-top: 10px;
		grid-row: 2;
		grid-column: 2 / 2;
	}
`;

export const TituloColeccion = styled.h4`
	font-size: clamp(14px, 0.833vw, 1rem);
	line-height: clamp(18px, 1.1vw, 20px);
	cursor: pointer;
	color: ${(props) => (props.activo ? "#000000" : "#8C8C8C")};
	text-decoration: ${(props) => (props.activo ? "underline" : "none")};
	text-decoration-thickness: ${(props) => (props.activo ? "1px" : "0")};
	font-weight: ${(props) => (props.activo ? "600" : "400")};
	&:hover {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		font-weight: 600;
		color: #000000;
	}
`;

export const ContenedorImagenes = styled.div`
	grid-row: 2;
	grid-column: 7 / 11;
	@media (max-width: 1080px) {
		grid-column: 3 / -1;
	}
	@media (max-width: 600px) {
		grid-row: 1;
		grid-column: 1 / -1;
	}
`;

export const Imagen = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
