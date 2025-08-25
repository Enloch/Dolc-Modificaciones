import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../../assets/images/DolckerMatrixDecor/Aplicaciones/catalogo3-1-9.jpg";
import portales from "../../../../assets/images/DolckerMatrixDecor/Aplicaciones/catalogo4-1-10.jpg";
import img3 from "../../../../assets/images/DolckerMatrixDecor/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "../../../../assets/images/DolckerMatrixDecor/Aplicaciones/catalogo3-1-12.jpg";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";

const imagesBaño = import.meta.glob("../../../../assets/images/GaleriaDecor/Bano/*");
const imagesPortales = import.meta.glob("../../../../assets/images/GaleriaDecor/Portales/*");
const imagesEspacios = import.meta.glob("../../../../assets/images/GaleriaDecor/Espacios/*");

const imagenesGaleriaBaño = Object.keys(imagesBaño).map((key) => ({
	original: imagesBaño[key].default,
	thumbnail: imagesBaño[key].default,
}));

const imagenesGaleriaPortales = Object.keys(imagesPortales).map((key) => ({
	original: imagesPortales[key].default,
	thumbnail: imagesPortales[key].default,
}));

const imagenesGaleriaEspacios = Object.keys(imagesEspacios).map((key) => ({
	original: imagesEspacios[key].default,
	thumbnail: imagesEspacios[key].default,
}));
const AplicacionesTline = ({ id }) => {
	return (
		<>
			<StyledAplicaciones id={id[0]} backgroundColor={COLORS.gray02} rowGap={DISTANCES.small}>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
				<ImageWithCaption src={img1} alt="Imagen de Aplicaciones 1" caption="" columnSpan="6" />
				<Cita
					cita="Design is a balance between form and function. It's not enough for a space to be beautiful, it must also be useful."
					author="Frank Lloyd Wright"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>

			<StyledAplicaciones id={id[1]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.small}>
				<Titulo2 color={COLORS.gray08}>Portals</Titulo2>
				<ImageWithCaption src={portales} alt="Imagen de Aplicaciones 1" caption="" columnSpan="6" />
				<Cita
					cita="Design is where science and art reach a balance point."
					author="Robin Mathew"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesGaleriaPortales}
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
			<StyledAplicaciones id={id[2]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.small}>
				<Titulo2 color={COLORS.gray08}>Bathroom</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					//   caption='Jorge dará la referencia o imágen.'
					columnSpan="6"
				/>
				<Cita
					cita="The details are not the details. The details are the design."
					author="Charles Eames"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-interiores" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesGaleriaBaño}
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
			<StyledAplicaciones id={id[3]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.small}>
				<Titulo2 color={COLORS.gray08}>Spaces</Titulo2>
				<ImageWithCaption
					src={img4}
					alt="Imagen de Aplicaciones 1"
					//   caption='Jorge dará la referencia o imágen.'
					columnSpan="6"
				/>
				<Cita
					cita="Originality consists in returning to the origin; thus, original is that which returns to the simplicity of the first solutions."
					author="Antonio Gaudí"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-interiores" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesGaleriaEspacios}
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

export default AplicacionesTline;
