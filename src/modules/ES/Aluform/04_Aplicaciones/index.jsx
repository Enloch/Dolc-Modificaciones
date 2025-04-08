import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../../assets/images/Aluform/Aplicaciones/IMG_6153.jpg";
import logos from "../../../../assets/images/DolckerMatrix/Aplicaciones/logos.gif";
import img3 from "../../../../assets/images/Aluform/Aplicaciones/IMG_7658.jpg";
import img5 from "../../../../assets/images/Aluform/Aplicaciones/IMG_9927.jpg";

import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const Aplicaciones = ({ id }) => {
	const imagesRehabilitar = import.meta.globEager(
		"../../../../assets/images/Aluform/Galeria/Rehabilitacion/*"
	);
	const imagesObra = import.meta.globEager(
		"../../../../assets/images/Aluform/Galeria/Obra/*"
	);
	const imagesExterior = import.meta.globEager(
		"../../../../assets/images/Aluform/Galeria/Exteriores/*"
	);

	const imagesGaleriaRehabilitar = Object.keys(imagesRehabilitar).map(
		(key) => ({
			original: imagesRehabilitar[key].default,
			thumbnail: imagesRehabilitar[key].default,
		})
	);

	const imagenesGaleriaObra = Object.keys(imagesObra).map((key) => ({
		original: imagesObra[key].default,
		thumbnail: imagesObra[key].default,
	}));

	const imagenesGaleriaExterior = Object.keys(imagesExterior).map((key) => ({
		original: imagesExterior[key].default,
		thumbnail: imagesExterior[key].default,
	}));
	return (
		<>
			<StyledAplicaciones
				id={id[0]}
				backgroundColor={COLORS.gray02}
				rowGap={DISTANCES.small}
			>
				<Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="La piel del edificio no solo lo protege, lo define."
					author="— Jean Nouvel"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[1]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Rehabilitación</Titulo2>
				<ImageWithCaption
					src={logos}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="El metal no es frío cuando se convierte en forma, luz y ritmo."
					author="— Adaptación de Tadao Ando"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaRehabilitar}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={true}
						showNav={false}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
			</StyledGaleria>
			<StyledAplicaciones
				id={id[2]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Obra nueva</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					//   caption='Jorge dará la referencia o imágen.'
					columnSpan="6"
				/>
				<Cita
					cita="Diseñar con aluminio es esculpir con precisión industrial."
					author="— Autor desconocido"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesGaleriaObra}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={true}
						showNav={false}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
			</StyledGaleria>
			<StyledAplicaciones
				id={id[3]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Exteriores</Titulo2>
				<ImageWithCaption
					src={img5}
					alt="Imagen de Aplicaciones 1"
					columnSpan="6"
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesGaleriaExterior}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={true}
						showNav={false}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
			</StyledGaleria>
		</>
	);
};

export default Aplicaciones;
