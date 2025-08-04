import { useRef, useState } from "react";
import AmbienteContainer from "@components/AmbienteContainerTline";
import Anotacion from "@components/Anotacion";
import Text from "@components/Text";
import { Titulo } from "@components/Titulos";
import useSerie from "@hooks/useSerie";
import StyledSerie from "./styles";

// Define el componente `Serie` que recibe varias props
const Serie = ({
	children,
	id,
	config,
	setFullScreenSrc,
	setFullScreenTitulo,
	backgroundColor,
}) => {
	// Usa el hook `useSerie` para obtener datos de configuración y elementos de la serie
	const {
		titulo,
		descripcion,
		imgsMuestra,
		imgsAcabados,
		indicadores,
		imgAmbiente,
		imgSelectorAmbiente,
	} = useSerie(config, setFullScreenSrc, setFullScreenTitulo);

	// Define un estado local `isOverflow` para indicar si hay desbordamiento horizontal en la sección de imágenes
	const [isOverflow, setIsOverflow] = useState(false);

	// Usa el hook `useRef` para obtener una referencia al contenedor de imágenes de muestra
	const divEjemplosRef = useRef();

	// Define una función que se ejecuta cuando se carga el componente
	const handleOnLoad = () => {
		// Verifica si hay desbordamiento horizontal en el contenedor de imágenes de muestra
		const overflowBoolean =
			divEjemplosRef.current.scrollWidth > divEjemplosRef.current.clientWidth;
		setIsOverflow(overflowBoolean);
	};

	// Renderiza los elementos HTML de la serie
	return (
		<StyledSerie id={id} backgroundColor={backgroundColor}>
			{/* Muestra el título de la serie */}
			<Titulo>{titulo}</Titulo>

			{/* Muestra una anotación si hay desbordamiento horizontal en la sección de imágenes */}
			{isOverflow ? (
				<Anotacion
					type="swipe"
					text="Faites glisser avec la souris ou le doigt pour voir toutes les images"
					className="anotacion-ejemplo"
				/>
			) : undefined}

			{/* Muestra los elementos de selección de ambiente y los indicadores */}
			<AmbienteContainer onLoad={handleOnLoad} ref={divEjemplosRef}>
				{imgAmbiente}
				<AmbienteContainer.SeleccionarMuestra>
					{imgSelectorAmbiente}
					{indicadores}
				</AmbienteContainer.SeleccionarMuestra>
			</AmbienteContainer>

			{/* Muestra la descripción de la serie */}
			<Text className="text-descripcion">{descripcion}</Text>

			{/* Muestra una anotación interactiva */}
			<Anotacion
				type="click"
				text="Cliquez sur l'image pour voir l'image en taille réelle"
				className="anotacion-muestra"
			/>

			{/* Muestra las imágenes de muestra */}
			<div className="muestra-container">{imgsMuestra}</div>

			{/* Muestra las imágenes de acabado si están disponibles */}
			{imgsAcabados ? (
				<>
					<Text className="text-acabados">Finitions</Text>
					<div className="acabado-container">{imgsAcabados}</div>
				</>
			) : undefined}

			{/* Renderiza los elementos hijos del componente */}
			{children}
		</StyledSerie>
	);
};

// Exporta el componente `Serie` como valor predeterminado
export default Serie;
