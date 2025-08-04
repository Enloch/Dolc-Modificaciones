import { useRef, useState } from "react";
import AmbienteContainer from "@components/AmbienteContainer";
import Anotacion from "@components/Anotacion";
import Text from "@components/Text";
import { Titulo } from "@components/Titulos";
import useSerie from "@hooks/useSerie";
import StyledSerie from "./styles";

// Define the `Serie` component that receives several props
const Serie = ({
	children,
	id,
	config,
	setFullScreenSrc,
	setFullScreenTitulo,
	backgroundColor,
}) => {
	// Use the `useSerie` hook to get configuration data and series elements
	const {
		titulo,
		descripcion,
		imgsMuestra,
		imgsAcabados,
		indicadores,
		imgAmbiente,
		imgSelectorAmbiente,
	} = useSerie(config, setFullScreenSrc, setFullScreenTitulo);

	// Define a local state `isOverflow` to indicate if there is horizontal overflow in the images section
	const [isOverflow, setIsOverflow] = useState(false);

	// Use the `useRef` hook to get a reference to the sample images container
	const divEjemplosRef = useRef();

	// Define a function that runs when the component loads
	const handleOnLoad = () => {
		// Check if there is horizontal overflow in the sample images container
		const overflowBoolean =
			divEjemplosRef.current.scrollWidth > divEjemplosRef.current.clientWidth;
		setIsOverflow(overflowBoolean);
	};

	// Render the HTML elements of the series
	return (
		<StyledSerie id={id} backgroundColor={backgroundColor}>
			{/* Show the series title */}
			<Titulo>{titulo}</Titulo>

			{/* Show an annotation if there is horizontal overflow in the images section */}
			{isOverflow ? (
				<Anotacion
					type="swipe"
					text="Swipe with your mouse or finger to view all images"
					className="anotacion-ejemplo"
				/>
			) : undefined}

			{/* Show the environment selection elements and indicators */}
			<AmbienteContainer onLoad={handleOnLoad} ref={divEjemplosRef}>
				{imgAmbiente}
				<AmbienteContainer.SeleccionarMuestra>
					{imgSelectorAmbiente}
					{indicadores}
				</AmbienteContainer.SeleccionarMuestra>
			</AmbienteContainer>

			{/* Show the series description */}
			<Text className="text-descripcion">{descripcion}</Text>

			{/* Show an interactive annotation */}
			<Anotacion
				type="click"
				text="Click on the image to view it in full size"
				className="anotacion-muestra"
			/>

			{/* Show the sample images */}
			<div className="muestra-container">{imgsMuestra}</div>

			{/* Show the finish images if available */}
			{imgsAcabados ? (
				<>
					<Text className="text-acabados">Finishes</Text>
					<div className="acabado-container">{imgsAcabados}</div>
				</>
			) : undefined}

			{/* Renderiza los elementos hijos del componente */}
			{children}
		</StyledSerie>
	);
};

// Export the `Serie` component as the default value
export default Serie;
