import Cita from "../../../../components/Cita";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../../assets/images/Archiform/Diseno/Archiform36.jpg";
import fondo from "../../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../../utils/indicadoresFormato";
import Anotacion from "../../../../components/Anotacion";
import VisualizadorVariaciones from "../../../../components/VisualizadorVariaciones";
import Anotaciones from "../../../../components/Anotacion/Anotaciones";
import VisualizadorRotador from "../../../../components/VisualizadorRotador";
import config from "../../../../configs/configPiezasEspeciales";
import configAcabados from "../../../../configs/configAcabados";
import Series from "./05_2_Series";
import ranurado11 from "../../../../assets/images/Diseno/Espesores/ranurado11mm.webp";
import ranurado14 from "../../../../assets/images/Diseno/Espesores/ranurado14.webp";
import ranurado20 from "../../../../assets/images/Diseno/Espesores/ranurado20.webp";
import VisualizadorDesplazador from "../../../../components/VisualizadorDesplazador";
import IndiceSeries from "./05_1_IndiceSeries";

const DisenosTline = ({ id }) => {
	const propsFormato = {
		anotacion: {
			text: "Cliquez sur le point pour voir les possibilités de format",
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
				<Titulo>Design</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Image Conception 1"
					caption="DOLCKER & CLIP Archiform."
					columnSpan="6"
				/>
				<Cita
					cita="L'architecture est l'apprentissage de la lumière, de l'espace et de la forme"
					author="— Louis Kahn"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledDisenos>
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo2>Format</Titulo2>
				<Anotacion {...propsFormato.anotacion} />
				<VisualizadorVariaciones {...propsFormato.visualizador} />
			</StyledDisenos>
			<StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo2>Finition</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Cliquez sur le point pour voir toutes les possibilités de pièces spéciales"
					/>
					<Anotacion
						type="swipe"
						text="Faites glisser avec la souris ou le doigt pour apprécier la texture"
					/>
				</Anotaciones>
				<VisualizadorDesplazador config={configAcabados} />
			</StyledDisenos>
			<StyledDisenos id={id[4]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Épaisseurs</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado14} alt="" />
					<ul>
						<strong>TC 14 / 14 mm.</strong>
						<li>Plancher</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Cadre de fenêtre</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado20} alt="" />
					<ul>
						<strong>TC 20 / 20 mm.</strong>
						<li>Plancher technique</li>
						<li>Façade</li>
						<li>Cadre de fenêtre</li>
						<li>Toits</li>
						<li>Gouttière</li>
						<li>Grille</li>
						<li>Marche</li>
					</ul>
				</div>
			</StyledDisenos>
			<StyledDisenos id={id[5]} backgroundColor={COLORS.gray01}>
				<Titulo2>Pièces spéciales</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Cliquez sur le point pour voir toutes les possibilités de pièces spéciales"
					/>
					<Anotacion
						type="swipe"
						text="Faites glisser avec la souris ou le doigt pour faire pivoter l'image à 360°"
					/>
				</Anotaciones>
				<VisualizadorRotador config={config} />
			</StyledDisenos>
			{/* <IndiceSeries id={id[6]} />
      <Series
        ids={[
          "basalt",
          "dolm",
          "dquartz",
          "marble",
          "stone",
          "quarcity",
          "crete",
          "portland",
          "space",
          "tzment",
          "wood",
          "terrazo",
          "arquitect",
          "volumen",
        ]}
      /> */}
		</>
	);
};

export default DisenosTline;
