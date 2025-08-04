import useListaContenidos from "../../hooks/useListaContenidosFusion";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContextFusion from "../../contexts/ListaContenidosContextFusion";
import inglesLista from "../../utils/en/listaContenidosFusion.json";
import francesLista from "../../utils/fr/listaContenidosFusion.json";

const ListaContenidos = ({
	en = false,
	isMenuDesplegable = false,
	fr = false,
}) => {
	const contendiosJSON = useContext(ListaContenidosContextFusion);
	const data = en ? inglesLista : fr ? francesLista : contendiosJSON;
	const contenidos = useListaContenidos(data);

	return (
		<StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
			<ul>{contenidos}</ul>
		</StyledListaContenidos>
	);
};

export default ListaContenidos;
