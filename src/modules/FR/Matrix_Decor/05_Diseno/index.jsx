import { useState } from "react";
import Cita from "../../../../components/Cita";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledDisenos, { StyledGaleria, StyledSlider } from "./styles";
import img1 from "../../../../assets/images/DolckerMatrixDecor/Diseno/catalogo3-1-14.jpg";
import RotadorMatrix from "../../../../components/Rotadores/MatrixDecor/Rotador";
import ImageGallery from "react-image-gallery";
import IndiceSeries from "./05_1_IndiceSeries";
const DisenosTline = ({ id }) => {
	const imagesDiseño = import.meta.glob(
		"../../../../assets/images/GaleriaDecor/Diseño/*", { eager: true }
	);
	const imagenesGaleria = Object.keys(imagesDiseño).map((key) => ({
		original: imagesDiseño[key].default,
		thumbnail: imagesDiseño[key].default,
	}));

	const [serieActiva, setSerieActiva] = useState("");
	return (
		<>
			<StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Conception</Titulo>
				<ImageWithCaption src={img1} alt="Image des designs 1" columnSpan="6" />
				<Cita
					cita="Le design n'est pas seulement ce à quoi cela ressemble et ce que l'on en ressent. Le design est la façon dont cela fonctionne."
					author="Steve Jobs"
					colorAutor={COLORS.gray05}
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
			<IndiceSeries id={id[1]} queSerieActiva={setSerieActiva} />
			<StyledDisenos id={id[2]} backgroundColor={COLORS.gray01}>
				<Titulo2>Configurateur</Titulo2>
				<div className="rotador">
					<RotadorMatrix />
				</div>
			</StyledDisenos>
		</>
	);
};

export default DisenosTline;
