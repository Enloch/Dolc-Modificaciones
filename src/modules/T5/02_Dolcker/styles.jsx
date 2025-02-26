import styled from "styled-components";
import StyledImageWithCaption from "../../../components/ImageWithCaption/styles";
import Seccion from "../../../components/Seccion";
import {
	Column8,
	DISTANCES,
	GridLayout,
	TABLET_SIZE,
} from "../../../global/GlobalStyles";
import StyledAnotacion from "../../../components/Anotacion/styles";
import StyledVisualizadorNota from "../../../components/VisualizadorNota/styles";

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
	@media (max-width: ${TABLET_SIZE}) {
		${StyledImageWithCaption}:nth-of-type(1) {
			grid-column: 1 / -1;
		}

		> p {
			grid-column: 1 / -1;
		}
		${StyledImageWithCaption}:nth-of-type(2) {
			grid-column: 1 / -1;
		}

		> p {
			grid-column: 1 / -1;
		}
		${StyledImageWithCaption}:nth-of-type(3) {
			grid-column: 1 / -1;
		}

		> p {
			grid-column: 1 / -1;
		}
	}

	.dolcker-info {
		${Column8}

		${GridLayout}
        grid-template-columns: repeat(9, 1fr);
		row-gap: ${DISTANCES.medium};

		${StyledImageWithCaption}:nth-of-type(1) {
			grid-column: 1 / span 3;
		}

		> p {
			grid-column: 1 / span 2;
		}
		${StyledImageWithCaption}:nth-of-type(2) {
			grid-column: 4 / span 3;
		}

		> p {
			grid-column: 3 / span 2;
		}
		${StyledImageWithCaption}:nth-of-type(3) {
			grid-column: 7 / span 3;
		}

		> p {
			grid-column: 1 / span 6;
		}

		@media (max-width: ${TABLET_SIZE}) {
			${StyledImageWithCaption}:nth-of-type(1) {
				grid-column: 1 / -1;
			}

			> p {
				grid-column: 1 / -1;
			}
			${StyledImageWithCaption}:nth-of-type(2) {
				grid-column: 1 / -1;
			}

			> p {
				grid-column: 1 / -1;
			}
			${StyledImageWithCaption}:nth-of-type(3) {
				grid-column: 1 / -1;
			}

			> p {
				grid-column: 1 / -1;
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
