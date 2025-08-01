import useListaContenidos from "../../hooks/useListaContenidosTline";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContext from "../../contexts/ListaContenidosContextTline";
import inglesLista from "../../utils/en/listaContenidosTline.json";

const ListaContenidos = ({ en = false, isMenuDesplegable = false }) => {
	const contendiosJSON = useContext(ListaContenidosContext);
	const contenidos = en
		? useListaContenidos(inglesLista)
		: useListaContenidos(contendiosJSON);

	return (
		<StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
			<ul>{contenidos}</ul>
		</StyledListaContenidos>
	);
};

export default ListaContenidos;
