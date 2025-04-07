import { useState } from "react";
import Cita from "../../../../components/Cita";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../../assets/images/DolckerMatrix/Diseno/catalogo3-1-14.jpg";
import RotadorMatrix from "../../../../components/Rotadores/Matrix/Rotador";
import IndiceSeries from "./05_1_IndiceSeries";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const DisenosTline = ({ id }) => {
	const imagesDiseño = import.meta.globEager(
		"../../../../assets/images/GaleriaMatrix/Diseño/*"
	);
	const imagenesGaleria = Object.keys(imagesDiseño).map((key) => ({
		original: imagesDiseño[key].default,
		thumbnail: imagesDiseño[key].default,
	}));

	return (
		<>
			<StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Diseño</Titulo>
				<ImageWithCaption src={img1} alt="Imagen de Diseños 1" columnSpan="6" />
				<Cita
					cita="Proporcionar arquitectura significativa no es parodiar la historia, sino articularla."
					author="Daniel Libeskind"
					colorAutor={COLORS.gray04}
				/>
			</StyledDisenos>
			<StyledGaleria id="galeria-interiores" backgroundColor={COLORS.gray02}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesGaleria}
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
			<IndiceSeries id={id[1]} />
			<StyledDisenos id={id[2]} backgroundColor={COLORS.gray01}>
				<Titulo2>Configurador</Titulo2>
				<div className="rotador">
					<RotadorMatrix />
				</div>
			</StyledDisenos>
		</>
	);
};

export default DisenosTline;
