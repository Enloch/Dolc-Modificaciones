import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import img2 from "../../../../assets/images/DolckerMatrixDecor/Dolcker/catalogo3-1-5.jpg";
import img3 from "../../../../assets/images/DolckerMatrixDecor/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../../components/Tline/VisualizadorTest";
import Text from "../../../../components/Text";

import config from "../../../../configs/configDolckerMatrixDecor";

const DolckerTline = ({ id }) => {
	const propsVisualizador = {
		text: "Hover over the dots to see information",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Background image with indicators",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Dolcker Matrix Decor solutions</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={img2}
					alt="Imagen Dolcker 2"
					caption="Matrix Decor system with extruded aluminum matrices."
				/>
				<Text>
					<strong>MATRIX DECOR SYSTEM</strong> is an innovative system for
					aluminum slat cladding with an exclusive clipped installation
					mechanism, which guarantees a quick, safe and trouble-free
					assembly. Its wide variety of designs and finishes makes it a
					versatile solution for creating ventilated facades, interior
					claddings and decorative panels with high visual impact.
					<br />
					<br />
					Thanks to its carefully crafted aesthetics and premium quality,{" "}
					<strong>MATRIX DECOR</strong> is an ideal option for
					<strong>high decoration</strong> projects, bringing sophistication
					and modernity to interior spaces. Its combination of design and
					functionality allows environments to be transformed with a
					contemporary and elegant style, making it the perfect choice for
					architects and designers looking for a distinctive and durable
					cladding.
				</Text>
			</div>
			<VisualizadorNota {...propsVisualizador} />
			<Text>
				<br />
			</Text>
		</StyledDolcker>
	);
};

export default DolckerTline;
