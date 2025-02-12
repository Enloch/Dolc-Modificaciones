import styled from "styled-components";
import { COLORS, DISTANCES } from "../../../global/GlobalStyles";
import { column_5_span6 } from "../../../styles/grid";

const StyledVisualizadorNota = styled.div`
	${column_5_span6}

	position: relative;

	.indicadores-container {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
	}

	.visualizador-nota-container {
		position: absolute;
		right: 0;
		left: 0;
		/* bottom: 0; */
		z-index: 2;

		display: flex;
		flex-direction: column;

		padding: 1rem 1rem;

		background-color: ${COLORS.gray01};
		opacity: 0;
		visibility: hidden;

		transition:
			visibility 0.3s,
			opacity 0.3s;

		img {
			height: 4rem;
			width: 4rem;
		}

		.visualizador-nota,
		img {
			animation: slide-right-fade-in 0.3s;
			animation-fill-mode: forwards;
		}
		p {
			font-size: 12px;
		}
	}

	@keyframes slide-right-fade-in {
		0% {
			opacity: 0;
			transform: translateX(30px);
		}

		100% {
			opacity: 1;
			transform: translateX(0px);
		}
	}
`;

export default StyledVisualizadorNota;
