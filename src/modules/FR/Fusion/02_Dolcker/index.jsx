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
		text: "Passez la souris sur les points pour voir les informations",
		type: "normal",
		indicadores: config,
		imgBackground: Imagen2,
		alt: "Background image with indicators",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Le système Fusion résout</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={Imagen1}
					alt="Dolcker Image 2"
					caption="Système Fusion"
				/>

				<Text>
					Système de façade modulaire avec des combinaisons personnalisées
					<br />
					<br />
					DOLCKER FUSIÓN est l'évolution naturelle du célèbre DOLCKER
					SYSTEM, créé pour offrir une liberté de création sans précédent dans la conception
					des enveloppes architecturales.
					<br />
					<br />
					Sa valeur différenciatrice principale réside dans la possibilité de combiner
					différentes collections au sein de la même façade, permettant de mélanger des couleurs,
					des textures et des finitions dans les pourcentages définis à la mesure par l'architecte ou le prescripteur.
					<br />
					<br />
					Cette personnalisation est maintenue tout au long de la chaîne logistique : le matériel est livré classifié, mélangé et combiné selon le projet, en palettes préparées pour une installation directe,
					facilitant l'exécution et optimisant le travail sur site.
					<br />
					<br />
					Grâce à cette innovation, des façades avec une esthétique unique peuvent être conçues, où le contrôle de la conception est entièrement entre les mains du concepteur,
					permettant une expression architecturale libre, sophistiquée et efficace.
				</Text>
				<ImageWithCaption
					src={Imagen2}
					alt="Dolcker Image 2"
					// caption="Système Volumen"
				/>
			</div>
			{/* <VisualizadorNota {...propsVisualizador} /> */}

			<Text />
		</StyledDolcker>
	);
};

export default DolckerTline;
