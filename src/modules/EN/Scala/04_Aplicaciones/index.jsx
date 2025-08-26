import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "../../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../../assets/images/Scala/Aplicaciones/Volum06.jpg";
import img2 from "../../../../assets/images/Scala/Aplicaciones/Volum51.jpg";
import img3 from "../../../../assets/images/Scala/Aplicaciones/Volum39.jpg";
import img4 from "../../../../assets/images/Scala/Aplicaciones/Volum101.jpg";
import img5 from "../../../../assets/images/Scala/Aplicaciones/Volum03.jpg";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const imagesRehabilitar = import.meta.globEager("../../../../assets/images/GaleriaVolumen/Aplicaciones/*");
	const imagesGaleriaRehabilitar = Object.keys(imagesRehabilitar).map((key) => ({
		original: imagesRehabilitar[key].default,
		thumbnail: imagesRehabilitar[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const imagesobra = import.meta.globEager("../../../../assets/images/GaleriaVolumen/Obra/*");
	const imagesGaleriaObra = Object.keys(imagesobra).map((key) => ({
		original: imagesobra[key].default,
		thumbnail: imagesobra[key].default,
	}));
	return (
		<>
			<StyledAplicaciones id={id[0]} backgroundColor={COLORS.gray02} rowGap={DISTANCES.medium}>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
				<ImageWithCaption src={img1} alt="Imagen de Aplicaciones 1" caption="DOLCKER &CLIP." columnSpan="6" />
				<Cita
					cita="“Architecture is the wise, correct and magnificent game of volumes under light.”"
					author="— Le Corbusier"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-aplicaciones" backgroundColor={COLORS.gray02}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaRehabilitar}
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
			<StyledAplicaciones id={id[1]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo2 color={COLORS.gray08}>Rehabilitation</Titulo2>
				<ImageWithCaption src={img2} alt="Imagen de Aplicaciones 1" caption="DOL -TC11." columnSpan="6" />
				<Cita
					cita="“A facade is not just a skin, it is a statement.”"
					author="— Norman Foster"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones id={id[2]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo2 color={COLORS.gray08}>New construction</Titulo2>
				<ImageWithCaption src={img3} alt="Imagen de Aplicaciones 1" caption="DOL -TC14." columnSpan="6" />
				<Cita
					cita="“Design should seduce, educate and, perhaps most importantly, provoke an emotional response.”"
					author="— April Greiman"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaObra}
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
			<StyledAplicaciones id={id[3]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo3 color={COLORS.gray08}>- Facades</Titulo3>
				<ImageWithCaption src={img4} alt="Imagen de Aplicaciones 4" caption="DOL -TC20." columnSpan="6" />
			</StyledAplicaciones>
			<StyledAplicaciones id={id[4]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo3 color={COLORS.gray08}>- Terraces, raised floors, ceilings and solutions</Titulo3>
				<ImageWithCaption src={img5} alt="Imagen de Aplicaciones 5" caption="DOL -TC11." columnSpan="6" />
			</StyledAplicaciones>
		</>
	);
};

export default AplicacionesTline;
