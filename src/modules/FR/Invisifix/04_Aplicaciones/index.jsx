import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";

const AplicacionesTline = ({ id }) => {
	// Actualizado para usar import.meta.glob con eager: true en lugar de globEager
	const ImagenesAplicaciones = import.meta.glob(
		"../../../../assets/images/Invisifix/Galeria/aplicaciones/*",
		{ eager: true }
	);
	const imagesGaleriaAplicaciones = Object.keys(ImagenesAplicaciones).map(
		(key) => ({
			original: ImagenesAplicaciones[key].default,
			thumbnail: ImagenesAplicaciones[key].default,
		})
	);

	// Actualizado para usar import.meta.glob con eager: true en lugar de globEager
	const ImagenesObraNueva = import.meta.glob(
		"../../../../assets/images/Invisifix/Galeria/Obra/*",
		{ eager: true }
	);
	const imagesGaleriaObraNueva = Object.keys(ImagenesObraNueva).map((key) => ({
		original: ImagenesObraNueva[key].default,
		thumbnail: ImagenesObraNueva[key].default,
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
					Invisifix est l'outil de conception de façades et d'enveloppes
					développé pour les architectes et techniciens recherchant une liberté
					créative avec des solutions techniques précises.
					<br />
					<br />
					Avec Dolcker Invisifix vous pouvez :
					<br />
					• Concevoir de nouveaux bâtiments ou réhabiliter des façades
					existantes, en adaptant les finitions aux conditions de
					l'environnement urbain ou au style du projet.
					<br />
					• Combiner des couleurs dans des pourcentages définis par le
					concepteur, générant des compositions uniques en céramique, pierre ou
					matériaux techniques.
					<br />
					• Sélectionner des textures spécifiques comme mat, brillant ou flammé,
					fournissant un langage esthétique en accord avec l'identité du
					bâtiment.
					<br />
					• Choisir des systèmes d'ancrage sur mesure : des systèmes à clips aux
					pièces faites sur mesure, avec conseil technique inclus pour garantir
					une installation efficace et durable.
					<br />
					<br />
					Dolcker Fusion offre une solution intégrale pour amener la conception
					architecturale au niveau supérieur, combinant créativité, technique et
					support professionnel à chaque phase du projet.
				</Text>
				<Cita
					cita={`"La couleur est une puissance qui influence directement l'âme"`}
					author="— Wassily Kandinsky"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Construction neuve</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaObraNueva}
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
			</StyledGaleria>
		</>
	);
};

export default AplicacionesTline;
