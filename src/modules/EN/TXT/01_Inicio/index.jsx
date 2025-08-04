import ListaContenidos from "@components/ListaContenidosTXT";
import { Titulo } from "@components/Titulos";
import { COLORS } from "@global/GlobalStyles";
import { StyledIndice } from "./styles";
import { BsMouse } from "react-icons/bs";
import scrollTo from "@helpers/scrollTo";
import useMenuDesplegable from "@hooks/useMenuDesplegable";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// Define la animación para la flecha
const pulse = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`;
// Define los estilos para la flecha animada
const AnimatedArrow = styled(BsMouse)`
	animation: ${pulse} 2s ease-in-out infinite;
`;
const Indice = ({ indiceRef }) => {
	const { menuDesplegable, btnIndice } = useMenuDesplegable(
		ListaContenidos,
		"Índice",
		indiceRef,
		"en"
	);

	const handleClickFlecha = () => {
		const position =
			indiceRef.current.offsetHeight + indiceRef.current.offsetTop;
		scrollTo(position, 2000);
	};

	return (
		<>
			<StyledIndice backgroundColor={COLORS.gray06} ref={indiceRef} id="indice">
				<Titulo color={COLORS.gray01}>Dolcker TXT</Titulo>
				<ListaContenidos en={true} />
				<AnimatedArrow
					size={32}
					color="white"
					alt=""
					className="flecha-indice"
					onClick={handleClickFlecha}
				/>
				<div className="idiomas">
					<Link to="/dolcker-txt">ES</Link>
					<Link to="/en/dolcker-txt" className="seleccionado">
						EN
					</Link>
					<Link to="/fr/dolcker-txt">FR</Link>
				</div>
			</StyledIndice>
			{menuDesplegable}
			{btnIndice}
		</>
	);
};

export default Indice;
