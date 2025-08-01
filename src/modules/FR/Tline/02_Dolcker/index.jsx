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
		text: "Passez la souris sur les points pour voir les informations",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Image de fond avec indicateurs",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Dolcker T-LINE solution</Titulo>
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
					Le système DOLCKER & line pour les façades en céramique de type
					Dolcker line est un système avec profilés à haute inertie et double
					sécurité. Tous les éléments composant ce système sont fabriqués avec
					des matières premières de qualité maximale.
					<br />
					<br />
					<br />
					Il s'agit d'un système de fixation mécanique par clip + fixation
					chimique + fixation mécanique par bandeau périphérique continu en
					aluminium laqué dans sa couleur, via une sous-structure composée de
					consoles réglables de haute qualité en forme de "L" de 3 mm
					d'épaisseur, qui transmettent les efforts et sont fixées par ancrage à
					la structure de base du bâtiment. Sur ces consoles sont fixés par vis
					autoperceuses en acier inoxydable les profilés verticaux en aluminium
					extrudé en forme de "T" de 3 mm d'épaisseur.
					<br />
					<br />
					<br />
					Dans ces profilés en forme de "T" sont vissés des profilés horizontaux
					en forme de "G", permettant ainsi un support total de la pièce. C'est
					le système idéal pour la pose de céramiques, permettant le
					remplacement des pièces grâce à un clip coulissant en acier inoxydable
					permettant de nombreuses configurations. De plus, il permet de laquer
					le bandeau horizontal en fonction de la couleur choisie par le client.
					Au moins deux clips coulissants sont placés en partie supérieure de la
					pièce de départ. Pour les autres pièces intermédiaires, on placera au
					moins 4 clips par pièce de céramique. On ajoutera des points de mastic
					polyuréthane de collage et d'étanchéité type sika-111 (4 par pièce)
					pour absorber les dilatations de la façade.
					<br />
					<br />
					<br />
					C'est sans aucun doute un système offrant de multiples options de
					composition de façade puisqu'il permet de rompre les joints verticaux.
					Ces joints verticaux sont réduits à seulement 1 mm, mettant ainsi en
					valeur les joints horizontaux. La saillie de la céramique est entre
					43-47 mm selon l'épaisseur choisie.
				</Text>
			</div>
			<VisualizadorNota {...propsVisualizador} />
			<Text>
				<br />
				<br />
			</Text>
		</StyledDolcker>
	);
};

export default DolckerTline;
