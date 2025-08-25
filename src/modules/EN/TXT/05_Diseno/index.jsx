import { Titulo, Titulo2 } from "@components/Titulos";
import { COLORS } from "@global/GlobalStyles";
import StyledDisenos from "./styles";
import { StyledGaleria, StyledSlider } from "./styles";
import ImageGallery from "react-image-gallery";
import Text from "@components/Text";
import "react-image-gallery/styles/css/image-gallery.css";
import Escena3DTXT from "@components/Configuradores/TXT";

const images = import.meta.glob("@assets/images/GaleriaTXT/*", { eager: true });

const imagenesGaleria = Object.keys(images).map((key) => ({
	original: images[key].default,
	thumbnail: images[key].default,
}));

import ranurado6 from "@assets/images/Diseno/Espesores/ranurado6mm.webp";
import ranurado11 from "@assets/images/Diseno/Espesores/ranurado11mm.webp";
import ranurado14 from "@assets/images/Diseno/Espesores/ranurado14.webp";
const DisenosTline = ({ id }) => {
	return (
		<>
			<StyledGaleria id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Design</Titulo>
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
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Thicknesses and fastening systems</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado6} alt="" />
					<ul>
						<strong>TC 6 / 6 mm.</strong>
						<li>120x120 cm</li>
						<li>160x160 cm</li>
						<li>100x50 cm</li>
						<li>100x50 cm</li>
						<li>120x280 cm</li>
						<li>Custom cut</li>
						<li>Fachada</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado6} alt="" />
					<ul>
						<strong>TC 9 / 9 mm.</strong>
						<li>120x60 cm</li>
						<li>60x60 cm</li>
						<li>75x150 cm</li>
						<li>75x75 cm</li>
						<li>100x100 cm</li>
						<li>100x50 cm</li>
						<li>90x90 cm</li>
						<li>80x80 cm</li>
						<li>90x45 cm</li>
						<li>160x80 cm</li>
						<li>160x160 cm</li>
						<li>Custom cut</li>
						<li>Fachada</li>
					</ul>
				</div>
				<div className="espesor espesor-3">
					<img src={ranurado11} alt="" />
					<ul>
						<strong>TC 11 / 11 mm.</strong>
						<li>60x60 cm</li>
						<li>90x60 cm</li>
						<li>80x80 cm</li>
						<li>120x60 cm</li>
						<li>100x50 cm</li>
						<li>90x45 cm</li>
						<li>Custom cut</li>
						<li>Fachada</li>
					</ul>
				</div>
				<div className="espesor espesor-4">
					<img src={ranurado14} alt="" />
					<ul>
						<strong>TC 14 / 14 mm.</strong>
						<li>60x60 cm</li>
						<li>90x60 cm</li>
						<li>80x80 cm</li>
						<li>120x60 cm</li>
						<li>100x50 cm</li>
						<li>90x45 cm</li>
						<li>Custom cut</li>
						<li>Fachada</li>
					</ul>
				</div>
				<Text>
					• TC 6 – XXL panels with thicknesses of 3 mm and 6 mm, ensuring
					maximum structural stability and an exceptional visual impact.
					<br />
					<br />
					• TC 9 – Visible clip designed for pieces with thicknesses of 9 mm,
					offering secure and aesthetic support.
					<br />
					<br />• TC 11 & TC 14 – Hidden fastening system with continuous
					groove, compatible with thicknesses of 11 mm and 14 mm, providing a
					clean and homogeneous finish.
				</Text>
			</StyledDisenos>
			{/* <IndiceSeries id={id[1]} queSerieActiva={setSerieActiva} /> */}
			<StyledDisenos id={id[2]} backgroundColor={COLORS.gray01}>
				<Titulo2>Configurator</Titulo2>
				<div className="rotador">
					<Escena3DTXT />
				</div>
			</StyledDisenos>
		</>
	);
};

export default DisenosTline;
