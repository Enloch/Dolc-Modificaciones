import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Archiform/Ventajas/Archiform24.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";
import Reemplazo from "../../../../assets/images/DolckerMatrix/temporal.webp";

const VentajasTline = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Avantages du système Dolcker Archiform</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Image Avantages 1"
				caption="DOLCKER & CLIP Archiform"
				columnSpan="6"
			/>
			<Text>
				DOLCKER a développé deux épaisseurs de dalle, 14 et 20 mm combinables
				dans son système d'installation haute sécurité, facilitant le travail
				des techniciens pour créer des bâtiments uniques et personnalisés.
				<br />
				<br />
				Il dispose d'un développement technique de{" "}
				<strong>système de fixation amélioré pour façades ventilées</strong>,
				pour s'adapter à la fois aux besoins esthétiques et fonctionnels du
				projet.
			</Text>
			<Listado>
				<li>Système de fixation mécanique caché + fixation élastique</li>
				<li>Système amovible</li>
				<li>
					Clips coulissants (sécurité pour échafaudages et levage de pièces)
				</li>
				<li>
					Profil continu à haute inertie pour supporter des charges importantes
				</li>
				<li>Rainure calibrée continue en usine</li>
				<li>Système de placement libre</li>
				<li>Plusieurs tailles de pièces</li>
				<li>Découpe sur mesure</li>
				<li>Différentes épaisseurs de pièces (14 et 20 mm)</li>
				<li>Système développé pour des chambres jusqu'à 20 cm</li>
				<li>Pièces avec bord visible "full body"</li>
				<li>Fabrication de pièces avec textures mates, flammées et polies</li>
				<li>Assemblage rapide et sécurisé</li>
				<li>Système polyvalent pour concevoir la façade</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;
