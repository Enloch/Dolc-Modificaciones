import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Fusion/Dolcker/IMG_7282.jpg";
import Imagen2 from "../../../../assets/images/Fusion/Dolcker/IMG_7346.jpg";

const DolckerTline = ({ id }) => {
	const propsVisualizador = {
		text: "Hover over the points to see information",
		type: "normal",
		indicadores: config,
		imgBackground: Imagen2,
		alt: "Background image with indicators",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Fusion System solves</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={Imagen1}
					alt="Dolcker Image 2"
					caption="Fusion System"
				/>

				<Text>
					Modular facade system with customized combinations
					<br />
					<br />
					DOLCKER FUSIÓN is the natural evolution of the renowned DOLCKER
					SYSTEM, created to offer unprecedented creative freedom in the design
					of architectural envelopes.
					<br />
					<br />
					Its main differentiating value lies in the possibility of combining
					different collections within the same facade, allowing to mix colors,
					textures and finishes in the percentages defined to measure by the
					architect or prescriptor.
					<br />
					<br />
					This personalization is maintained throughout the entire logistics
					chain: the material is delivered classified, mixed and combined
					according to project, in pallets prepared for direct installation,
					facilitating execution and optimizing work on site.
					<br />
					<br />
					Thanks to this innovation, facades with a unique aesthetic can be
					conceived, where design control is fully in the hands of the designer,
					allowing for free, sophisticated and efficient architectural
					expression.
				</Text>
				<ImageWithCaption
					src={Imagen2}
					alt="Dolcker Image 2"
					// caption="Sistema Volumen"
				/>
			</div>
			{/* <VisualizadorNota {...propsVisualizador} /> */}

			<Text />
		</StyledDolcker>
	);
};

export default DolckerTline;
