import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Scala/Dolcker/Volum55.jpg";
import Imagen2 from "../../../../assets/images/Scala/Dolcker/Volum62.jpg";

const DolckerTline = ({ id }) => {
	const propsVisualizador = {
		text: "Passez la souris sur les points pour voir les informations",
		type: "normal",
		indicadores: config,
		imgBackground: Imagen2,
		alt: "Image de fond avec indicateurs",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Le système Scala résout</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={Imagen1}
					alt="Image Dolcker 2"
					caption="Système Scala"
				/>

				<Text>
					DOLCKER SCALA est le premier système de rainure continue{" "}
					<strong>full&body</strong>, qui offre d'infinies possibilités de
					modulation. Il combine des plaques d'épaisseurs différentes —11, 14 et
					20 mm— pour générer des reliefs, des ombres et des espaces entre les
					pièces de la façade.
					<br />
					<br />
					Ce système innovant permet de concevoir des enveloppes architecturales
					avec des solutions techniques applicables également aux sols
					surélevés, toits, recercles de fenêtres et chapeaux de couronnement,
					en utilisant toujours le même matériau pour obtenir une esthétique
					continue et cohérente sur tout le projet.
					<br />
					<br />
					Grâce à la technologie full&body, il est possible de concevoir des
					arêtes complètement continues, obtenant un fini uniforme, précis et de
					haute qualité architecturale.
				</Text>
				<ImageWithCaption
					src={Imagen2}
					alt="Image Dolcker 2"
					// caption="Sistema Volumen"
				/>
			</div>
			{/* <VisualizadorNota {...propsVisualizador} /> */}

			<Text />
		</StyledDolcker>
	);
};

export default DolckerTline;
