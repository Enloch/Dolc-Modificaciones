import styled, { css } from "styled-components";
import Seccion from "../../../../../components/Seccion";
import { Titulo } from "../../../../../components/Titulos";
import { column_total } from "../../../../../styles/grid";
import { mediaQueryTablet } from "../../../../../styles/sizes";
import Enlace from "./Enlace";

const StyledIndiceSeries = styled(Seccion)`
	${Titulo} {
		${column_total}
	}
	select {
		/* Estilos para el selector */
		width: 200px;
		padding: 8px;
		border-radius: 4px;
		font-size: 16px;
		color: #333;
		background-color: transparent;

		/* Estilos adicionales para diferentes estados del selector */
		&:focus {
			outline: none;
			border-color: #0066cc;
		}
		&:hover {
			border-color: #999;
		}
	}
	${Enlace} {
		grid-row: 2;
	}
	${Enlace}, > .enlace {
		grid-column-end: span 3;
		${mediaQueryTablet(css`
			grid-column-start: 1;
			grid-column-end: -1;
		`)}
	}
`;

export default StyledIndiceSeries;
