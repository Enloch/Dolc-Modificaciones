import useListaContenidos from "../../hooks/useListaContenidosDecor";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContext from "../../contexts/ListaContenidosContextMatrixDecor";
import inglesLista from "../../utils/en/listaContenidosMatrixDecor.json";
import francesLista from "../../utils/fr/listaContenidosMatrixDecor.json";
const ListaContenidos = ({
	en = false,
	isMenuDesplegable = false,
	fr = false,
}) => {
	const contendiosJSON = useContext(ListaContenidosContext);
	const data = en ? inglesLista : fr ? francesLista : contendiosJSON;
	const contenidos = useListaContenidos(data);

	return (
		<StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
			<ul>{contenidos}</ul>
		</StyledListaContenidos>
	);
};

export default ListaContenidos;
