import Cita from "../../../../components/Cita";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../../assets/images/Invisifix/Diseno/IMG_6516.jpg";
import fondo from "../../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../../utils/indicadoresFormato";
import Anotacion from "../../../../components/Anotacion";
import VisualizadorVariaciones from "../../../../components/VisualizadorVariaciones";
import Anotaciones from "../../../../components/Anotacion/Anotaciones";
import configAcabados from "../../../../configs/configAcabados";
import ranurado11 from "../../../../assets/images/Diseno/Espesores/ranurado11mm.webp";
import ranurado14 from "../../../../assets/images/Diseno/Espesores/ranurado14.webp";
import ranurado20 from "../../../../assets/images/Diseno/Espesores/ranurado20.webp";
import VisualizadorDesplazador from "../../../../components/VisualizadorDesplazador";
import IndiceSeries from "./05_1_IndiceSeries";

const DisenosTline = ({ id }) => {
	const propsFormato = {
		anotacion: {
			text: "Cliquez sur le point pour voir les options de format",
			type: "click",
		},
		visualizador: {
			config: indicadoresFormato,
			srcfondo: fondo,
			altFondo: "Image de fond avec des indicateurs",
		},
	};

	return (
		<>
			<StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Conception</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Image de conception 1"
					caption="DOLCKER Invisifix"
					columnSpan="6"
				/>
				<Cita
					cita={`"L'architecture est le jeu appris de la lumière, de l'espace et de la forme"`}
					author="— Louis Kahn"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledDisenos>
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo2>Finitions</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Cliquez sur le point pour voir toutes les options de pièces spéciales"
					/>
					<Anotacion
						type="swipe"
						text="Faites glisser avec la souris ou le doigt pour apprécier la texture"
					/>
				</Anotaciones>
				<VisualizadorDesplazador config={configAcabados} />
			</StyledDisenos>
			<StyledDisenos id={id[2]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Épaisseurs</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado11} alt="" />
					<ul>
						<strong>Porcelaine 8/9/10 mm</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado14} alt="" />
					<ul>
						<strong>Couleur & FullBody 11 mm</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Bord</li>
					</ul>
				</div>
				<div className="espesor espesor-3">
					<img src={ranurado20} alt="" />
					<ul>
						<strong>Format XL 3/6/8 mm</strong>
						<li>Sol technique</li>
						<li>Façade</li>
						<li>Bord</li>
						<li>Revetements</li>
						<li>Gouttières</li>
						<li>Grille</li>
						<li>Marche</li>
					</ul>
				</div>
			</StyledDisenos>
			<IndiceSeries id={id[3]} />
		</>
	);
};

export default DisenosTline;
