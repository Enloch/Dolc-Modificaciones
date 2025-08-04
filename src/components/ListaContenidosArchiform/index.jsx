import useListaContenidos from "../../hooks/useListaContenidosArchiform";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContext from "../../contexts/ListaContenidosContextArchiform";
import inglesLista from "../../utils/en/listaContenidosArchiform.json";
import francesLista from "../../utils/fr/listaContenidosArchiform.json";
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
