import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Invisifix/Ventajas/IMG_0060.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";

const VentajasTline = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Avantages du système Dolcker Invisifix</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Image avantages 1"
				caption="DOLCKER Invisifix"
				columnSpan="6"
			/>
			<Text>
				DOLCKER INVISIFIX a développé un système modulaire innovant permettant
				une personnalisation complète des façades, combinant :
				<br />
				<br />
				<strong>1. </strong>
				Trois épaisseurs de plaque : 11, 14 et 20 mm.
				<br />
				<strong>2. </strong>
				Trois textures par modèle, entièrement combinables entre elles
				<br />
				<strong>3. </strong>
				Modulation prédéfinie par pourcentage, selon les spécifications du
				concepteur
				<br />
				<br />
				Grâce à notre système de classification exclusif, les commandes sont
				fournies organisées selon les pourcentages définis de couleur et de
				texture, de sorte que l'installateur n'a pas besoin de faire de
				classification préalable sur site.
				<br />
				<br />
				Le système DOLCKER INVISIFIX intègre un développement technique de
				fixation pour façades ventilées, conçu pour répondre à la fois aux
				exigences esthétiques et fonctionnelles du projet.
			</Text>
			<Listado>
				<li>Système de fixation mécanique + fixation élastique</li>
				<li>Système amovible</li>
				<li>
					Clips coulissants (sécurité pour échafaudages et équipements de
					levage)
				</li>
				<li>
					Profil continu de haute inertie pour supporter des charges importantes
				</li>
				<li>Rainure calibrée en continu en usine</li>
				<li>Système de placement libre</li>
				<li>Plusieurs tailles de pièces</li>
				<li>Découpe sur mesure</li>
				<li>Différentes épaisseurs de pièces (11, 14 et 20 mm)</li>
				<li>Système développé pour des chambres jusqu'à 20 cm</li>
				<li>Pièces avec bord visible "pleine masse"</li>
				<li>Fabrication de pièces avec textures mate, flammée et adoucie</li>
				<li>Assemblage rapide et sécurisé</li>
				<li>Système polyvalent pour concevoir la façade</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;
