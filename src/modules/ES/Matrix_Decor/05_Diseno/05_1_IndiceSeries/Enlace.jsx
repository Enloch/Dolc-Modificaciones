import styled from "styled-components";
import {
	DISTANCES,
	TextMedium,
	TextSmall,
} from "../../../../../global/GlobalStyles";

const Enlace = styled.a`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	color: black;
	text-decoration: none;

	img {
		height: auto;
		object-fit: cover;
	}

	span {
		${TextSmall}
	}
`;

export default Enlace;
