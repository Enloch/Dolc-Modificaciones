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
			text: "Click on the point to see formatting possibilities",
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
				<Titulo>Design</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Diseños 1"
					caption="Architects provide the reference"
					columnSpan="6"
				/>
				<Cita
					cita="Architecture should speak of its time and place, but yearn for timelessness"
					author="Frank Gehry"
					colorAutor={COLORS.gray05}
				/>
			</StyledDisenos>
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo2>Safety mesh</Titulo2>
				<Anotaciones>
					<Text>
						The mesh on the back of large-format porcelain is a fiberglass mesh
						bonded with resin to the back of the slab. Its purpose is to
						reinforce the mechanical strength of the material, reducing the risk
						of fractures and facilitating handling, transport, and installation.
						<br />
						<br />
						<strong>
							Benefits of mesh reinforcement in large-format porcelain:
						</strong>
						<br />
						<br />
						1. Greater breakage resistance: The fiberglass helps prevent the
						piece from breaking easily, especially during cutting or
						installation.
						<br />
						<br />
						2. Handling safety: Reduces the risk of fragment detachment in case
						of breakage.
						<br />
						<br />
						3. Facilitates installation: In some cases, it improves adhesion
						with certain adhesives and mortars.
						<br />
						<br />
						4. Stress compensation: Helps absorb small mechanical stresses that
						may arise from thermal variations or substrate flexing.
						<br />
						<br />
						This type of reinforcement is common in ultra-thin porcelain slabs
						and in large-format pieces that require greater structural integrity
						due to their size.
					</Text>
				</Anotaciones>
				<ImageWithCaption
					src={acabados}
					alt="mesh"
					caption="(Top to bottom) No mesh, continuous mesh, discontinuous mesh"
					columnSpan="6"
				/>
			</StyledDisenos>
			<StyledDisenos id={id[2]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Thicknesses</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado3} alt="" />
					<ul>
						<strong>TC 5 / 3 mm.</strong>
						<li>Floor</li>
						<li>Ceiling</li>
						<li>Facade</li>
						<li>Frame</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado5} alt="" />
					<ul>
						<strong>TC 5 / 5.6 mm.</strong>
						<li>Floor</li>
						<li>Ceiling</li>
						<li>Facade</li>
						<li>Frame</li>
					</ul>
				</div>
				<div className="espesor espesor-3">
					<img src={ranurado8} alt="" />
					<ul>
						<strong>TC 5 / 8 mm.</strong>
						<li>Floor</li>
						<li>Ceiling</li>
						<li>Facade</li>
						<li>Frame</li>
					</ul>
				</div>
			</StyledDisenos>
			<IndiceSeries id={id[3]} />
		</>
	);
};

export default Disenos;
