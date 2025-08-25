import Cita from "@components/Cita";
import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo, Titulo2 } from "@components/Titulos";
import { COLORS } from "@global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "@assets/images/T5/Diseno/catalogo3-1-14.jpg";
import fondo from "@assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "@utils/indicadoresFormato";
import Anotaciones from "@components/Anotacion/Anotaciones";
import ranurado3 from "@assets/images/T5/Diseno/Espesores/Dolcker_espesor_6mm.jpg";
import ranurado5 from "@assets/images/T5/Diseno/Espesores/Dolcker_espesor_9mm.jpg";
import ranurado8 from "@assets/images/T5/Diseno/Espesores/Dolcker_espesor_11mm.jpg";
import Text from "@components/Text";
import IndiceSeries from "./05_1_IndiceSeries";
import acabados from "@assets/images/T5/Diseno/Acabados/Dolcker enmallados T5_web.jpg";

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
				<ImageWithCaption src={img1} alt="Imagen de Diseños 1" caption="Arquitectos pasan la referencia" columnSpan="6" />
				<Cita
					cita="La arquitectura debe hablar de su tiempo y lugar, pero anhelar la eternidad"
					author="Frank Gehry"
					colorAutor={COLORS.gray05}
				/>
			</StyledDisenos>
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo2>Malla de seguridad</Titulo2>
				<Anotaciones>
					<Text>
						El enmallado en la parte trasera del porcelánico de gran formato es una malla de fibra de vidrio adherida con resina a la cara
						posterior de la losa. Su propósito es reforzar la resistencia mecánica del material, reduciendo el riesgo de fracturas y
						facilitando su manipulación, transporte e instalación.
						<br />
						<br />
						<strong>Beneficios del enmallado en porcelánico de gran formato:</strong>
						<br />
						<br />
						1. Mayor resistencia a la rotura: La fibra de vidrio ayuda a evitar que la pieza se quiebre con facilidad, especialmente durante
						el corte o la instalación.
						<br />
						<br />
						2. Seguridad en la manipulación: Reduce el riesgo de desprendimiento de fragmentos en caso de rotura.
						<br />
						<br />
						3. Facilita la instalación: En algunos casos, mejora la adherencia con ciertos adhesivos y morteros.
						<br />
						<br />
						4. Compensación de tensiones: Ayuda a absorber pequeñas tensiones mecánicas que pueden surgir por variaciones térmicas o flexión
						del soporte.
						<br />
						<br />
						Este tipo de refuerzo es común en losas porcelánicas ultrafinas y en piezas de gran formato que requieren mayor integridad
						estructural debido a su tamaño
					</Text>
				</Anotaciones>
				<ImageWithCaption
					src={acabados}
					alt="enmallado"
					caption="(De arriba a abajo)Sin malla, malla continua, malla discontinua"
					columnSpan="6"
				/>
			</StyledDisenos>
			<StyledDisenos id={id[2]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Espesores</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado3} alt="" />
					<ul>
						<strong>TC 5 / 3 mm.</strong>
						<li>Suelo</li>
						<li>Techo</li>
						<li>Fachada</li>
						<li>Recerco</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado5} alt="" />
					<ul>
						<strong>TC 5 / 5.6 mm.</strong>
						<li>Suelo</li>
						<li>Techo</li>
						<li>Fachada</li>
						<li>Recerco</li>
					</ul>
				</div>
				<div className="espesor espesor-3">
					<img src={ranurado8} alt="" />
					<ul>
						<strong>TC 5 / 8 mm.</strong>
						<li>Suelo</li>
						<li>Techo</li>
						<li>Fachada</li>
						<li>Recerco</li>
					</ul>
				</div>
			</StyledDisenos>
			<IndiceSeries id={id[3]} />
		</>
	);
};

export default Disenos;
