import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesAplicaciones = import.meta.globEager("../../../../assets/images/Fusion/Galeria/aplicaciones/*");
	const imagesGaleriaAplicaciones = Object.keys(ImagenesAplicaciones).map((key) => ({
		original: ImagenesAplicaciones[key].default,
		thumbnail: ImagenesAplicaciones[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesTerracota = import.meta.globEager("../../../../assets/images/Fusion/Galeria/terracota/*");
	const imagesGaleriaTerracota = Object.keys(ImagenesTerracota).map((key) => ({
		original: ImagenesTerracota[key].default,
		thumbnail: ImagenesTerracota[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesColor = import.meta.globEager("../../../../assets/images/Fusion/Galeria/color/*");
	const imagesGaleriaColor = Object.keys(ImagenesColor).map((key) => ({
		original: ImagenesColor[key].default,
		thumbnail: ImagenesColor[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesPetra = import.meta.globEager("../../../../assets/images/Fusion/Galeria/petra/*");
	const imagesGaleriaPetra = Object.keys(ImagenesPetra).map((key) => ({
		original: ImagenesPetra[key].default,
		thumbnail: ImagenesPetra[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesTextura = import.meta.globEager("../../../../assets/images/Fusion/Galeria/textura/*");
	const imagesGaleriaTextura = Object.keys(ImagenesTextura).map((key) => ({
		original: ImagenesTextura[key].default,
		thumbnail: ImagenesTextura[key].default,
	}));

	return (
		<>
			<StyledGaleria id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaAplicaciones}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={false}
						showNav={true}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
				<Text>
					Fusion est l'outil de conception de façades et d'enveloppes développé pour les architectes et techniciens recherchant une liberté
					créative avec des solutions techniques précises.
					<br />
					<br />
					Avec Dolcker Fusion vous pouvez :
					<br />
					• Concevoir de nouveaux bâtiments ou réhabiliter des façades existantes, en adaptant les finitions aux conditions urbaines ou au
					style du projet.
					<br />
					• Combiner des couleurs dans des pourcentages définis par le concepteur, générant des compositions uniques en céramique, pierre ou
					matériaux techniques.
					<br />
					• Sélectionner des textures spécifiques comme mat, brillant ou flammé, fournissant un langage esthétique en accord avec l'identité
					du bâtiment.
					<br />
					• Choisir des systèmes d'ancrage personnalisés : des systèmes à clip aux coupes sur mesure, avec conseil technique inclus pour
					assurer une installation efficace et durable.
					<br />
					<br />
					Dolcker Fusion offre une solution intégrale pour emmener la conception architecturale au niveau supérieur, combinant créativité,
					technique et support professionnel à chaque phase du projet.
				</Text>
				<Cita
					cita="“La couleur est une puissance qui influence directement l'âme”"
					author="— Wassily Kandinsky"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Terracota</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaTerracota}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={false}
						showNav={true}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
				<Text>
					Fusion Terracota est une ligne de surfaces architecturales qui explore la beauté intemporelle des tons de terre cuite naturels.
					Conçue pour les projets contemporains qui recherchent un lien avec les matériaux bruts et l'équilibre visuel, cette collection
					s'adapte aux compositions sobres et expressives.
					<br />
					<br />
					Caractéristiques principales :
					<br />
					• Couleurs de terre douces et naturelles : gammes qui évoquent l'essence de l'argile, du sable, de l'oxyde ou de la sienna.
					<br />
					• Surfaces de grande pureté visuelle, conçues pour offrir des textures authentiques et des finitions céramiques chaudes, durables
					et polyvalentes.
					<br />
					• Possibilité de combiner des couleurs dans des proportions personnalisées, adaptant chaque conception à l'identité esthétique du
					projet.
					<br />
					• Parfait pour l'architecture contemporaine, la réhabilitation ou l'intégration dans des paysages urbains sensibles.
					<br />
					<br />
					Choisissez les tons directement de la terre et créez des compositions qui parlent le langage de l'architecture honnête, naturelle
					et essentielle.
				</Text>
				<Cita
					cita="“L'architecture commence lorsque vous placez deux briques soigneusement ensemble.”"
					author="— Ludwig Mies van der Rohe"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[2]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Color</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaColor}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={false}
						showNav={true}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
				<Text>
					Fusion Color est l'outil créatif de la collection ARQ qui permet de combiner des couleurs monochromes pour obtenir des
					compositions architecturales personnalisées, équilibrées ou audacieuses, selon l'identité du projet.
					<br />
					<br />
					À partir d'une gamme de couleurs monochromes soigneusement sélectionnée, la collection offre la possibilité de :
					<br />
					• Créer des combinaisons douces, en utilisant des tons proches les uns des autres dans la même gamme chromatique.
					<br />
					• Générer des effets harmonieux, avec des nuances subtiles pour une harmonie visuelle continue.
					<br />
					• Parier sur une grande dispersion chromatique, en jouant avec des couleurs intenses ou contrastées qui génèrent de l'impact et du
					caractère.
					<br />
					<br />
					Chaque combinaison peut être définie dans la proportion exacte souhaitée, permettant de contrôler le rythme visuel et l'atmosphère
					de la conception, du plus sobre au plus expressif.
					<br />
					<br />
					Fusion Color transforme la céramique en un outil de langage architectural, où la couleur est structurée, équilibrée et exprimée
					avec intention.
				</Text>
				<Cita
					cita="“Le design n'est pas seulement ce à quoi cela ressemble et ce que cela ressent. Le design est comment cela fonctionne.”"
					author="— Steve Jobs"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Petra</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaPetra}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={false}
						showNav={true}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
				<Text>
					Fusion Petra est la proposition créative qui permet de combiner différentes collections de pierres naturelles pour créer des
					façades uniques, contemporaines et esthétiquement précieuses.
					<br />
					<br />
					Les pierres naturelles, en raison de leur origine géologique et de leur diversité chromatique et graphique, offrent une richesse
					visuelle inégalée.
					<br />
					<br />
					Fusion Petra commence par cette singularité pour offrir aux architectes ou concepteurs la possibilité de :
					<br />
					• Mélanger des tons et des textures de différentes pierres dans la même façade.
					<br />
					• Concevoir des compositions élégantes, modernes et avant-gardistes.
					<br />
					• Définir la proportion exacte de chaque type de pierre, adaptant le rythme visuel et l'impact du projet.
					<br />
					• Jouer avec les graphismes naturels et les veines pour générer des effets dynamiques ou sobres, selon le langage du bâtiment.
					<br />
					<br />
					Avec Fusion Petra, les pierres cessent d'être un matériau complémentaire pour devenir un outil de composition central, capable de
					construire l'identité et la sophistication à partir de l'essentiel.
				</Text>
				<Cita
					cita="“Concevoir n'est pas rendre joli, c'est rendre sensé.”"
					author="— Phrase attribuée à plusieurs designers (origine non confirmée)"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[4]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Textura</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaTextura}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={false}
						showNav={true}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
				<Text>
					Fusion Textura est l'outil créatif qui permet de concevoir et de personnaliser des façades en combinant différentes finitions et
					couleurs, générant des compositions avec de la profondeur, du rythme visuel et une interaction dynamique avec la lumière.
					<br />
					<br />
					Grâce à cette proposition, vous pouvez :
					<br />
					• Combiner des textures mates, brillantes et flammées dans la même surface architecturale.
					<br />
					• Appliquer n'importe quelle finition disponible dans nos collections pour générer des façades avec un caractère unique.
					<br />
					• Définir vos propres pourcentages de combinaison, adaptant la conception aux besoins esthétiques et techniques du projet.
					<br />
					• Créer des effets de lumière et d'ombre, ajoutant du volume, du relief et de la sophistication à l'enveloppe du bâtiment.
					<br /> <br />
					Fusion Textura offre une liberté créative totale, élevant la façade à un langage expressif où la finition devient une question de
					conception.
				</Text>
				<Cita
					cita="“Là où la couleur et la texture se rencontrent, le caractère de l'espace est né.”"
					author="— Inspiration originale"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
		</>
	);
};

export default AplicacionesTline;
