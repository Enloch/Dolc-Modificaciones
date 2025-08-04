import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/DolckerMatrixDecor/Caracteristicas/caracteristicas.jpg";
import Text from "../../../../components/Text";

const CaracteristicasTline = ({ id }) => {
	return (
		<>
			<StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Caractéristiques techniques</Titulo>
				<ImageWithCaption
					src={caracter1}
					alt="Rendu par 7475"
					caption=""
					columnSpan="6"
				/>
				<Text>
					<strong>Résistance et durabilité</strong>
					<br />
					<br />
					L'aluminium extrudé est connu pour sa grande résistance structurelle, ce qui
					<strong>
						lui permet de supporter les charges et les contraintes physiques sans
						se déformer.
					</strong>
					Cela en fait un matériau idéal pour les applications dans l'industrie
					de la construction, car il peut résister aux conditions défavorables, telles que les variations
					de température, l'humidité et la corrosion.
					<br />
					<br />
					Outre sa résistance, l'aluminium extrudé se distingue par sa
					durabilité à long terme. Sa <strong>capacité à résister à l'oxydation et à la corrosion</strong>
					garantit une durée de vie prolongée, ce qui <strong>réduit les coûts de maintenance et de remplacement.</strong>
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variété de formes et de profils</strong>
					<br />
					<br />
					Le <strong>processus d'extrusion de l'aluminium</strong> permet une grande
					variété de formes et de <strong>profils d'extrusion en aluminium.</strong>
					<br />
					<br />
					Les pièces d'extrusion en aluminium obtenues sont d'une grande <strong>résistance</strong>, avec une forme parfaite et un risque très faible
					de quitter l'usine avec des imperfections ou des erreurs.
					<br />
					<br />
					Des barres et tubes aux profils complexes et personnalisés,
					<strong>l'extrusion d'aluminium offre de la versatilité</strong> pour s'adapter aux
					nécessités de design différentes et aux applications spécifiques
					<br />
					<br />
					Ces profils peuvent être utilisés dans la fabrication de
					<strong>volets roulants en aluminium extrudé de sécurité</strong>, de façades, entre
					autres. Les <strong>
						profils en aluminium extrudé permettent de la flexibilité et créent
					</strong>
					des solutions sur mesure adaptées aux exigences techniques et esthétiques de chaque
					projet.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Léger et résistant</strong>
					<br />
					<br />
					Tout d'abord, l'une des principales propriétés de l'aluminium est sa légèreté.
					Cela n'empêche pas d'ajuster la composition de son alliage pour
					obtenir une grande résistance, et par conséquent, il peut être adapté à presque
					toute application.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Entretien zéro</strong>
					<br />
					<br />
					Grâce au processus de finition de l'aluminium, qu'il soit anodisé ou peint,
					une protection importante est conférée contre les agents atmosphériques
					agressifs. Des possibilités décoratives sont également obtenues, adaptées à
					l'environnement ou au design des structures qui le composent.
					Par conséquent, il ne nécessite pas d'entretien spécifique, ce qui implique
					des économies de coûts considérables.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Recyclable</strong>
					<br />
					<br />
					L'aluminium est un matériau entièrement recyclable et contribue à réduire
					la consommation d'énergie de 95%. Les caractéristiques du matériau recyclé ne
					diffèrent pas de celles du matériau issu du minerai. Cette grande
					capacité de recyclage a une valeur de durabilité pour l'environnement.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variété de finitions</strong>
					<br />
					<br />
					L'aluminium est le matériau idéal pour créer des concepts de construction
					contemporains. Que vous choisissiez une finition de surface peinte ou anodisée, vous
					profiterez de la beauté durable des fenêtres sans avoir à investir dans
					de la peinture ou du vernis.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Résistant à la corrosion</strong>
					<br />
					<br />
					Naturellement, l'aluminium génère une couche d'oxyde autoprotectrice qui le rend
					très résistant à la corrosion.
					<br />
					<br />
					Grâce à des processus industriels contrôlés, différents types de traitements
					de surface peuvent être appliqués pour améliorer davantage cette propriété.
				</Text>
			</StyledCaracteristicas>
		</>
	);
};

export default CaracteristicasTline;
