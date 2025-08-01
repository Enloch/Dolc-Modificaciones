import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import img2 from "../../../../assets/images/DolckerTline/Dolcker/catalogo3-1-5.webp";
import img4 from "../../../../assets/images/DolckerTline/Dolcker/DOLCKER_T-LINE SOLUCIONA GRAPA.webp";
import img3 from "../../../../assets/images/DolckerTline/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../../components/Tline/VisualizadorNota";
import Text from "../../../../components/Text";

import config from "../../../../configs/configDolckerTline";

const DolckerTline = ({ id }) => {
	const propsVisualizador = {
		text: "Hover over the points to see the information",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Imagen de fondo con indicadores",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Dolcker T-LINE solutions</Titulo>
			<div className="dolcker-info">
				{/* <ImageWithCaption
          src={img2}
          alt='Imagen Dolcker 2'
          caption='Sistema T-LINE con perfilería.'
        />
        <ImageWithCaption
          src={img4}
          alt='Imagen Dolcker 2'
          caption='Sistema T-LINE con grapa vista. Grapa y cara del perfíl interior lacado en el color de la cerámica.'
        /> */}
				<Text>
					DOLCKER & line system for Dolcker line type ceramic facades is a
					system with high inertia and double safety profiles. All and every one
					of the elements that make up this system are manufactured with raw
					materials of the highest quality.
					<br />
					<br />
					<br />
					It is a mechanical clip fastening system + chemical fastening +
					mechanical fastening continuous perimeter aluminum border lacquered to
					its color, by means of a substructure that is composed of high-quality
					adjustable aluminum brackets in the shape of an "L" of 3 mm thick,
					which transmit forces and are fixed by anchoring to the base structure
					of the building (brick wall or concrete slab). On these brackets, the
					vertical profiles of extruded aluminum in the shape of a "T" of 3 mm
					thick are fixed by means of self-drilling stainless steel screws.
					<br />
					<br />
					<br />
					In these "T"-shaped profiles, "G"-shaped horizontal profiles are
					screwed, thus allowing the piece to be fully supported. It is the
					ideal system for the placement of ceramics, allowing the replacement
					of pieces since it has a stainless steel sliding clip achieving an
					infinity of placements. It also allows lacquering the horizontal
					border profile depending on the color the client chooses. At least two
					sliding clips are placed on the upper part of the starting piece. In
					the rest of the intermediate pieces, at least 4 clips will be placed
					for each ceramic piece. Sika-111 or similar polyurethane adhesive and
					sealant mastic points (4 per piece) will be added to allow us to
					absorb the facade's expansions in the sliding clips.
					<br />
					<br />
					<br />
					It is undoubtedly a system with multiple facade composition options
					since it is possible to break the vertical joints. These vertical
					joints are minimized to just 1 mm, thus enhancing the horizontal
					joints. The ceramic projection is between 43-47 mm depending on the
					thickness of the chosen ceramic.
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
