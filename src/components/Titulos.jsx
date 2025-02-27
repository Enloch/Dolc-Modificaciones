import styled from "styled-components";
import { TextLarge } from "../global/GlobalStyles";

const Titulo = styled.h2`
	${TextLarge}
	font-weight: bold;
	text-transform: uppercase;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

const Titulo2 = styled.h2`
	${TextLarge}
	font-weight: bold;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

const Titulo3 = styled.h4`
	${TextLarge}
	font-weight: normal;
	/* font-style: italic; */

	a {
		text-decoration: none;
		color: inherit;
	}
`;
const Titulo4 = styled.h3`
	${TextLarge}
	/* font-weight: bold; */

    a {
		text-decoration: none;
		color: inherit;
	}
`;
export { Titulo, Titulo2, Titulo3, Titulo4 };
