import useListaContenidos from "../../hooks/useListaContenidosT5";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContext from "../../contexts/ListaContenidosContextT5";
import inglesLista from "../../utils/en/listaContenidosT5.json";
import francesLista from "../../utils/fr/listaContenidosT5.json";

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
