import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "../../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-9.jpg";
import img2 from "../../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-10.webp";
import img3 from "../../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "../../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-12.webp";
import img5 from "../../../../assets/images/DolckerTline/arquitecto.webp";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
	const imagesAplicaciones = import.meta.globEager(
		"../../../../assets/images/GaleriaTline/aplicaciones/*"
	);
	const imagesGaleriaAplicaciones = Object.keys(imagesAplicaciones).map(
		(key) => ({
			original: imagesAplicaciones[key].default,
			thumbnail: imagesAplicaciones[key].default,
		})
	);

	return (
		<>
			<StyledAplicaciones
				id={id[0]}
				backgroundColor={COLORS.gray02}
				rowGap={DISTANCES.long}
			>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="Architecture is the art of wasting space. "
					author="Philip Johnson (1906-2005) "
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-aplicaciones" backgroundColor={COLORS.gray02}>
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
			</StyledGaleria>
			<StyledAplicaciones
				id={id[1]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.medium}
			>
				<Titulo2 color={COLORS.gray08}>Rehabilitation</Titulo2>
				<ImageWithCaption
					src={img2}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="Architecture is a way of translating dreams into the real world."
					author="Bjarke Ingels"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[2]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.medium}
			>
				<Titulo2 color={COLORS.gray08}>New construction</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					//   caption='Jorge dará la referencia o imágen.'
					columnSpan="6"
				/>
				<Cita
					cita="A building has two lives. The one its creator imagines and the life it has. And they are not always the same "
					author="Rem Koolhaas (1944-) "
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[3]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.medium}
			>
				<Titulo3 color={COLORS.gray08}>- Facades</Titulo3>
				<ImageWithCaption
					src={img4}
					alt="Imagen de Aplicaciones 4"
					caption="Dolcker & Line System"
					columnSpan="6"
				/>
			</StyledAplicaciones>
		</>
	);
};

export default AplicacionesTline;
