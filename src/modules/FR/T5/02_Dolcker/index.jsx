import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "@global/GlobalStyles";
import img1 from "@assets/images/T5/Dolcker/catalogo3-1-4.jpg";
import img2 from "@assets/images/Dolcker/catalogo3-1-5.webp";
import img3 from "@assets/images/T5/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "@components/TXT/VisualizadorNota";
import Text from "@components/Text";

import config from "@configs/configDolckerT5";

const Dolcker = ({ id }) => {
	const propsVisualizador = {
		text: "Hover over the points to see information",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Imagen de fondo con indicadores",
	};

	return (
		<>
			<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
				<Titulo>Dolcker T5 XL solution</Titulo>
				<div className="dolcker-info">
					<ImageWithCaption
						src={img1}
						alt="Imagen Dolcker 2"
						caption="Example of Dolcker T5 XL Systems"
					/>
					<Text>
						Dolcker T5 XL: innovation and design for next-generation ventilated facades.
						<br />
						<br />
						The <strong>DOL-T5 XL System</strong> is an advanced solution for ventilated facades, designed for the installation of large-format ceramic cladding with a hybrid fixing system, combining hidden clips and structural adhesive. Its optimized design ensures a lightweight, safe, and efficient assembly using the highest quality materials. Main Features
						<br />
						<br />
						<strong>Fixing system:</strong>
						<br />
						Hidden clip for a clean and uniform aesthetic.
						<br />
						Compatible with ceramics of 3.5 - 5.6 - 10.5 - 12 mm thickness.
						<br />
						Horizontal joints of 5-6 mm and vertical joints of 2 mm or more, ensuring stability and aesthetics.
						<br />
						<br />
						<strong>Anchoring and profiles:</strong>
						<br />
						Single and double L-shaped aluminum brackets for robust fixing.
						<br />
						Vertical T and L extruded aluminum profiles, lacquered in black, ensuring resistance and durability.
						<br />
						Stainless steel expansion anchor for slab fixing.
						<br />
						Anchor with nylon plug and screw for brick walls.
						<br />
						Self-drilling screws with EPDM washer in stainless steel, ensuring maximum hold.
						<br /> Flat head self-drilling screws lacquered in stainless steel for discreet and resistant fixing.
						<br />
						<br />
						<strong>Fixings:</strong>
						<br />
						Mechanical fixing with hidden lacquered stainless steel clip with a 5.6 mm outlet.
						<br />
						Chemical fixing with SikaTack Panel structural adhesive, ensuring a strong and durable bond.
						<br />
						<br />
						<strong>Other components:</strong>
						<br /> Sika Primer 210T, optimizing adhesive bonding.
						<br /> Double-sided adhesive tape, improving initial fixing and facilitating installation.
					</Text>
				</div>
				<VisualizadorNota {...propsVisualizador} />
				<Text>
					{/* <strong>Imagen Exterior G10(Arquitecto )</strong>
        <br />
        -Esquina {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Recerco {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Coronación {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Arranque {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Fachada {'( dibujo técnico/croquis por parte del arquitecto)'} */}
				</Text>
			</StyledDolcker>
		</>
	);
};

export default Dolcker;
