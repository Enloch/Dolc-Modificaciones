import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import img2 from "../../../../assets/images/DolckerMatrix/Dolcker/catalogo3-1-5.jpg";
import img3 from "../../../../assets/images/DolckerMatrix/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../../components/Tline/VisualizadorNota";
import Text from "../../../../components/Text";

import config from "../../../../configs/configDolckerMatrix";

const DolckerTline = ({ id }) => {
	const propsVisualizador = {
		text: "Pasa el ratón por los puntos para ver la información",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Imagen de fondo con indicadores",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Dolcker Matrix Facade soluciona</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={img2}
					alt="Imagen Dolcker 2"
					caption="Sistema Matrix Facade con matrices de aluminio extruido."
				/>

				<Text>
					SISTEMA MATRIX FACADE es un sistema de revestimiento de lamas de
					aluminio para una colocacion cliplada de facil montaje. La gran
					variedad de diseños, le confieren una gran versatilidad, para el
					diseño de fachadas ventiladas, revestimientos interiores, paneles
					decorativos.
				</Text>
			</div>
			<VisualizadorNota {...propsVisualizador} />
			<Text>
				<br />
			</Text>
		</StyledDolcker>
	);
};

export default DolckerTline;
