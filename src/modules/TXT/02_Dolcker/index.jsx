import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import img1 from "../../../assets/images/DolckerTXT/Dolcker/catalogo3-1-4.jpg";
import img4 from "../../../assets/images/DolckerTXT/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../components/TXT/VisualizadorNota";
import Text from "../../../components/Text";
import Modal from "../../../components/Modal";
import { useState } from "react";

import config from "../../../configs/configDolckerTXT";

const DolckerTline = ({ id }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedCaption, setSelectedCaption] = useState("");

	const openModal = (imageSrc, caption) => {
		setSelectedImage(imageSrc);
		setSelectedCaption(caption);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setSelectedCaption("");
	};

	const propsVisualizador = {
		text: "Pasa el ratón por los puntos para ver la información",
		type: "normal",
		indicadores: config,
		imgBackground: img4,
		alt: "Imagen de fondo con indicadores",
	};

	return (
		<>
			<Modal
				isOpen={selectedImage !== null}
				onClose={closeModal}
				caption={selectedCaption}
			>
				<img src={selectedImage} alt="Ampliada" />
			</Modal>
			<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
				<Titulo>Dolcker TXT soluciona</Titulo>
				<div className="dolcker-info">
					{/* <ImageWithCaption
						src={img3}
						alt="Imagen Dolcker 2"
						caption="Sistema TXT 11"
						onClickFunc={() => openModal(img3, "Sistema TXT 11")}
					/>
					<ImageWithCaption
						src={img2}
						alt="Imagen Dolcker 2"
						caption="Sistema TXT 12"
						onClickFunc={() => openModal(img2, "Sistema TXT 12")}
					/>
					<ImageWithCaption
						src={img1}
						alt="Imagen Dolcker 2"
						caption="Sistema TXT 13"
						onClickFunc={() => openModal(img1, "Sistema TXT 13")}
					/> */}
					<ImageWithCaption
						src={img1}
						alt="Imagen Dolcker 2"
						caption="Sistema TXT en acabdo naranja"
					/>
					<Text>
						Innovacion en fachadas ventiladas.
						<br />
						<br />
						La nueva línea de fachadas ventiladas Dolcker TXT está diseñada para
						ofrecer versatilidad, eficiencia y un diseño innovador, adaptándose
						a las exigencias arquitectónicas más vanguardistas.
						<br />
						<br />
						Su estructura modular y sus diferentes opciones de fijación permiten
						configuraciones personalizadas que garantizan un resultado estético
						y funcional de alto nivel.
					</Text>
					{/* <Text>
						• TXT 11 – Fachadas con alineaciones de revestimiento diferenciadas,
						destacando una junta vertical lacada en el color elegido por el
						diseñador.
						<br />
						<br />
						• TXT 12 – Fachadas diseñadas para resaltar volúmenes distintivos.
						<br />
						<br />• TXT 13 – Fachadas que incorporan perfiles estratégicos para
						generar sombras y potenciar la volumetría.
					</Text> */}
				</div>

				<VisualizadorNota {...propsVisualizador} />
			</StyledDolcker>
		</>
	);
};

export default DolckerTline;
