import styled from "styled-components";
import StyledAnotacion from "./styles";
import { TABLET_SIZE } from "../../../global/GlobalStyles";
import { column_3_span2 } from "../../../styles/grid";
const Anotaciones = styled.div`
	${column_3_span2}
	@media (max-width: ${TABLET_SIZE}) {
		gap: 2rem;
	}

	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: flex-end;
	padding-bottom: 1rem;

	${StyledAnotacion} {
		padding-bottom: 0;
		flex: 1 1 $img-height;
	}
`;

export default Anotaciones;
