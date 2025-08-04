import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/DolckerMatrix/Caracteristicas/caracteristicas.jpg";
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
					L'<strong>aluminium extrudé</strong> est connu pour sa grande
					résistance structurelle, ce qui lui{" "}
					<strong>
						permet de supporter des charges et des efforts physiques sans se déformer.
					</strong>
					Cela en fait un matériau idéal pour les applications dans
					l'industrie de la construction, car il peut résister à des conditions
					adverses, comme les changements de température, l'humidité et la corrosion.
					<br />
					<br />
					En plus de sa résistance, l'aluminium extrudé se distingue par sa
					durabilité à long terme. Sa
					<strong> capacité à résister à l'oxydation et à la corrosion </strong>
					garantit une durée de vie prolongée, ce qui
					<strong> réduit les coûts de maintenance et de remplacement.</strong>
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variété de formes et de profils</strong>
					<br />
					<br />
					Le <strong>processus d'extrusion de l'aluminium </strong>permet d'obtenir
					une grande variété de formes et
					<strong> de profils en aluminium extrudé.</strong>
					<br />
					<br />
					Les pièces en aluminium extrudé obtenues sont d'une
					<strong> grande résistance </strong>, avec une forme parfaite et avec un
					risque très faible de sortir d'usine avec des imperfections ou des erreurs.
					<br />
					<br />
					Depuis des barres et des tubes jusqu'à des profils complexes et personnalisés,
					<strong> l'aluminium extrudé offre de la versatilité</strong> pour
					s'adapter à différentes nécessités de conception et d'applications
					spécifiques
					<br />
					<br />
					Ces profils peuvent être utilisés dans la fabrication de{" "}
					<strong>
						volets persiennés en aluminium extrudé autobloquants de sécurité
					</strong>
					, de façades, entre autres. Les{" "}
					<strong>
						profils extrudés en aluminium permettent d'apporter de la flexibilité et de créer
						des solutions sur mesure
					</strong>
					, adaptées aux exigences techniques et esthétiques de chaque projet.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Léger et résistant</strong>
					<br />
					<br />
					Tout d'abord, l'une des principales propriétés de l'aluminium est sa
					légèreté. Cela n'empêche pas qu'en ajustant la composition de son alliage
					on peut obtenir une grande résistance et en conséquence il peut s'adapter
					à presque n'importe quelle application.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Maintenance 0</strong>
					<br />
					<br />
					Au moyen du processus de finition de l'aluminium, qu'il soit anodisé ou
					laqué, on confère une protection importante contre les agents
					atmosphériques agressifs. On obtient également des possibilités décoratives
					adaptées à l'environnement ou à la conception des structures qui le composent.
					Par conséquent, il ne nécessite pas de maintenance spécifique, ce qui entraîne une
					économie de coûts considérable.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Recyclable</strong>
					<br />
					<br />
					L'aluminium est un matériau totalement recyclable et contribue à
					réduire la consommation énergétique de 95%. Les caractéristiques du
					matériau recyclé ne diffèrent pas de celles du matériau provenant du
					minéral. Cette   haute capacité de recyclage a une valeur de
					durabilité pour l'environnement.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variété de finitions</strong>
					<br />
					<br />
					L'aluminium est le matériau idéal pour la création de concepts d'
					édification contemporains. Que ce soit en optant pour une finition de la
					surface laquée ou anodisée, vous profiterez de la beauté durable des
					fenêtres sans avoir à investir dans la peinture ni dans le vernis
					<br />
					<br />
				</Text>
				<Text>
					<strong>Résistant à la corrosion</strong>
					<br />
					<br />
					De façon naturelle, l'aluminium génère une couche d'oxyde autoprotectrice
					qui le rend très résistant à la corrosion.
					<br />
					<br />
					Au moyen de processus industriels contrôlés, on peut appliquer
					différents types de traitement de surface pour réussir à améliorer
					encore plus cette propriété.
				</Text>
			</StyledCaracteristicas>
		</>
	);
};

export default CaracteristicasTline;
