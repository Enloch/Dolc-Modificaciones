import useListaContenidos from "../../hooks/useListaContenidosTline";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContext from "../../contexts/ListaContenidosContextMatrix";
import inglesLista from "../../utils/en/listaContenidosMatrix.json";
import francesLista from "../../utils/fr/listaContenidosMatrix.json";
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
