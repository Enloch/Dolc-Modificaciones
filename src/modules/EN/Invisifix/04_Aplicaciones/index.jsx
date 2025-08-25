import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
	// Actualizado para usar import.meta.glob con eager: true en lugar de glob
	const ImagenesAplicaciones = import.meta.glob("../../../../assets/images/Invisifix/Galeria/aplicaciones/*", { eager: true });
	const imagesGaleriaAplicaciones = Object.keys(ImagenesAplicaciones).map((key) => ({
		original: ImagenesAplicaciones[key].default,
		thumbnail: ImagenesAplicaciones[key].default,
	}));

	// Actualizado para usar import.meta.glob con eager: true en lugar de glob
	const ImagenesObraNueva = import.meta.glob("../../../../assets/images/Invisifix/Galeria/Obra/*", { eager: true });
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
					Invisifix is the facade and envelope design tool developed for architects and technicians who seek creative freedom with precise
					technical solutions.
					<br />
					<br />
					With Dolcker Invisifix you can:
					<br />
					• Design new buildings or rehabilitate existing facades, adapting the finishes to the conditions of the urban environment or the
					style of the project.
					<br />
					• Combine colors in defined percentages by the designer, generating unique compositions in ceramic, stone or technical materials.
					<br />
					• Select specific textures such as matte, gloss or flame, providing an aesthetic language in line with the identity of the
					building.
					<br />
					• Choose customized anchoring systems: from clip systems to custom-made pieces, with included technical advice to ensure an
					efficient and durable installation.
					<br />
					<br />
					Dolcker Fusion offers an integral solution to take architectural design to the next level, combining creativity, technique and
					professional support in each phase of the project.
				</Text>
				<Cita
					cita={`"Color is a power which directly influences the soul"`}
					author="— Wassily Kandinsky"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- New Construction</Titulo3>
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
