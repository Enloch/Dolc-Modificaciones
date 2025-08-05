import useListaContenidos from "../../hooks/useListaContenidos";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContextFusion from "../../contexts/ListaContenidosContexInvisifix";
import inglesLista from "../../utils/en/listaContenidosInvisifix.json";
import francesLista from "../../utils/fr/listaContenidosInvisifix.json";

const ListaContenidos = ({
	en = false,
	isMenuDesplegable = false,
	fr = false,
}) => {
	const contendiosJSON = useContext(ListaContenidosContextFusion);
	const contenidos = en
		? useListaContenidos(inglesLista)
		: fr
			? useListaContenidos(francesLista)
			: useListaContenidos(contendiosJSON);

	return (
		<StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
			<ul>{contenidos}</ul>
		</StyledListaContenidos>
	);
};

export default ListaContenidos;
