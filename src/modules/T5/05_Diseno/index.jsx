import Cita from "../../../components/Cita";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../assets/images/T5/Diseno/catalogo3-1-14.jpg";
import fondo from "../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../utils/indicadoresFormato";
import Anotacion from "../../../components/Anotacion";
import VisualizadorVariaciones from "../../../components/VisualizadorVariaciones";
import Anotaciones from "../../../components/Anotacion/Anotaciones";
import VisualizadorRotador from "../../../components/VisualizadorRotador";
import config from "../../../configs/configPiezasEspeciales";
import configAcabados from "../../../configs/configAcabados";
import Series from "./05_2_Series";
import ranurado5 from "../../../assets/images/T5/Diseno/Espesores/Dolcker_espesor_6mm.jpg";
import VisualizadorDesplazador from "../../../components/VisualizadorDesplazador";
import Text from "../../../components/Text";
import IndiceSeries from "./05_1_IndiceSeries";
import ConfiguradorImg from "../../../assets/images/DolckerTline/formatoscolor.webp";
import rotadorImg from "../../../assets/images/DolckerTline/config.jpg";

const Disenos = ({ id }) => {
	const propsFormato = {
		anotacion: {
			text: "Pulsa en el punto para ver las posibilidades de formato",
			type: "click",
		},
		visualizador: {
			config: indicadoresFormato,
			srcfondo: fondo,
			altFondo: "Imagen de fondo con indicadores",
		},
	};

	return (
		<>
			<StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Diseño</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Diseños 1"
					caption="Arquitectos pasan la referencia"
					columnSpan="6"
				/>
				<Cita
					cita="La arquitectura debe hablar de su tiempo y lugar, pero anhelar la eternidad"
					author="Frank Gehry"
					colorAutor={COLORS.gray05}
				/>
			</StyledDisenos>
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo2>Formato</Titulo2>
				<Anotacion {...propsFormato.anotacion} />
				{/* <VisualizadorVariaciones {...propsFormato.visualizador} /> */}
				<ImageWithCaption
					src={ConfiguradorImg}
					alt="Imagen de Diseños 1"
					caption="Configurador interactivo"
					columnSpan="6"
				/>
			</StyledDisenos>
			<StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo2>Acabados Cerámica</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Pulsa en el punto para ver todas las posibilidades de piezas especiales"
					/>
					<Anotacion
						type="swipe"
						text="Desliza con el ratón o el dedo para apreciar la textura"
					/>
				</Anotaciones>
				<VisualizadorDesplazador config={configAcabados} />
			</StyledDisenos>
			<StyledDisenos id={id[4]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Espesores</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado5} alt="" />
					<ul>
						<strong>TC 5 / 5 mm.</strong>
						<li>Suelo</li>
						<li>Techo</li>
						<li>Fachada</li>
						<li>Recerco</li>
					</ul>
				</div>
			</StyledDisenos>
			<StyledDisenos id={id[5]} backgroundColor={COLORS.gray01}>
				<Titulo2>Piezas especiales</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Pulsa en el punto para ver todas las posibilidades de piezas especiales"
					/>
					<Anotacion
						type="swipe"
						text="Desliza con el ratón o el dedo para rotar la imagen 360º"
					/>
				</Anotaciones>
				{/* <VisualizadorRotador config={config} /> */}
				<ImageWithCaption
					src={rotadorImg}
					alt="Imagen de Diseños 1"
					caption="Jorge debe definir que piezas exactamente son"
					columnSpan="6"
				/>
			</StyledDisenos>
			{/* <StyledDisenos id={id[5]} backgroundColor={COLORS.gray01}>
                <Titulo2>Perfiles Cenefa</Titulo2>
                <Anotaciones>
                    <Anotacion
                        type='normal'
                        text='Pulsa en el punto para ver todas las posibilidades de piezas especiales'
                    />
                    <Anotacion
                        type='swipe'
                        text='Desliza con el ratón o el dedo para rotar la imagen 360º'
                    />
                </Anotaciones>
                <VisualizadorRotador config={config} />
            </StyledDisenos> */}
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

export default Disenos;
