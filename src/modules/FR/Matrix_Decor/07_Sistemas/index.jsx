import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/DolckerMatrix/temporal.webp";
import ImageWithCaption from "../../../../components/ImageWithCaption";

const SistemasTline = ({ id }) => {
	return (
		<>
			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Systèmes de construction</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Introduction aux systèmes"
					caption=""
					columnSpan="5"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							Système
							<br />
							<strong>MATRIX</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Titulo2>MATRIX</Titulo2>
				<Text>
					Le système DOLCKER MATRIX pour les façades céramiques de type dolcker est un
					système avec profilage à haute inertie et double sécurité. Chacun des
					éléments qui composent ce système est fabriqué avec
					des matières premières de haute qualité. C'est un système de fixation mécanique à clips + chimique pour installer une bande de finition en aluminium clipsée sur le système, par l'intermédiaire d'une sous-structure composée de consoles en aluminium de haute qualité réglables en forme
					de "L" avec une épaisseur de 3 mm, qui transmettent les contraintes et sont fixées
					par ancrage à la structure de base du bâtiment (mur en briques
					ou dalle en béton). Sur ces consoles, des profils en aluminium verticaux
					extrudés en forme de "T" avec une épaisseur de 3 mm sont fixés en utilisant
					des vis autoperceuses en acier inoxydable.
					<br />
					<br />
					Sur ces profils en forme de "T", des profils horizontaux en forme de "G" sont vissés, permettant au élément d'être entièrement supporté. C'est le système idéal pour
					installer des céramiques, permettant le remplacement des éléments puisqu'il
					possède un clip coulissant en acier inoxydable réalisant des
					installations infinies. Il permet également de peindre le profil de finition selon la
					couleur de la menuiserie, permettant au client de choisir la couleur
					<br />
					<br />
					C'est sans aucun doute un système avec plusieurs options de composition de façade puisqu'il est possible de rompre les joints verticaux. Ces joints verticaux sont réduits à seulement 1 mm, améliorant ainsi les joints horizontaux.
				</Text>
				<Text>
					<strong>MATRIX</strong> est un système de bardage en lamelles d'aluminium innovant avec un mécanisme d'installation à clips exclusif qui garantit un montage rapide, sûr et sans problème. Sa grande variété de designs et de finitions en fait une solution polyvalente pour créer des façades ventilées, des bardages intérieurs et des panneaux décoratifs à fort impact visuel.
					<br />
					<br />
					Grâce à son esthétique soigneusement travaillée et à sa qualité premium, <strong>MATRIX</strong> est une option idéale pour les projets de <strong>haute décoration</strong>, apportant sophistication et modernité aux espaces intérieurs. Sa combinaison de design et de fonctionnalité permet de transformer les environnements avec un style contemporain et élégant, ce qui en fait le choix parfait pour les architectes et les designers à la recherche d'un bardage distinctif et durable.
				</Text>
				{/* <ImageWithCaption
          src={dolckerClip1}
          alt='Dolcker-clip demostración'
          caption='Imágen demostración (Jorge)'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={dolckerClip2}
          alt='Dolcker-clip tabla'
          caption='Imágen tabla (Jorge)'
          columnSpan='8'
          isGray
        /> */}
			</StyledSistemas>
		</>
	);
};

export default SistemasTline;
