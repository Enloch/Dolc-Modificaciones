import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "@global/GlobalStyles";
import img1 from "@assets/images/DolckerTXT/Dolcker/catalogo3-1-4.jpg";
import img4 from "@assets/images/DolckerTXT/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "@components/TXT/VisualizadorNota";
import Text from "@components/Text";
import Modal from "@components/Modal";
import { useState } from "react";

import config from "@configs/configDolckerTXT";

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
		text: "Hover over the points to see the information",
		type: "normal",
		indicadores: config,
		imgBackground: img4,
		alt: "Background image with indicators",
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
				<Titulo>Dolcker TXT solutions</Titulo>
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
						caption="System TXT 11"
					/>
					<Text>
						Innovation in ventilated facades.
						<br />
						<br />
						The new line of ventilated facades Dolcker TXT is designed to offer
						versatility, efficiency and an innovative design, adapting to the
						most avant-garde architectural demands.
						<br />
						<br />
						Its modular structure and its different fastening options allow
						customized configurations that guarantee a high-level aesthetic and
						functional result.
					</Text>
					<Text>
						• TXT 11 – Facades with differentiated cladding alignments,
						highlighting a vertical joint lacquered in the color chosen by the
						designer.
						<br />
						<br />• TXT 13 – Facades that incorporate strategic profiles to
						generate shadows and enhance volumetry.
					</Text>
				</div>

				<VisualizadorNota {...propsVisualizador} />
			</StyledDolcker>
		</>
	);
};

export default DolckerTline;
