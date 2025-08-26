import { Titulo } from "@components/Titulos";
import { COLORS } from "@global/GlobalStyles";
import { StyledGaleria, StyledSlider } from "./styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = import.meta.globEager("@assets/images/GaleriaTXT/*");

const imagenesGaleria = Object.keys(images).map((key) => ({
	original: images[key].default,
	thumbnail: images[key].default,
}));

const Galeria = ({ id }) => {
	return (
		<>
			<StyledGaleria id={id} backgroundColor={COLORS.gray02}>
				<Titulo>Galeria de proyectos</Titulo>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesGaleria}
						showPlayButton={false}
						showFullscreenButton={false}
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

export default Galeria;
