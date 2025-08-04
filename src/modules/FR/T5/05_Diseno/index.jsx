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
					caption="Les architectes fournissent la référence"
					columnSpan="6"
				/>
				<Cita
					cita="L'architecture doit parler de son époque et de son lieu, mais aspirer à l'intemporalité"
					author="Frank Gehry"
					colorAutor={COLORS.gray05}
				/>
			</StyledDisenos>
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo2>Maille de sécurité</Titulo2>
				<Anotaciones>
					<Text>
						La maille au dos du grès cérame grand format est une maille en fibre
						de verre collée à la résine à l'arrière de la dalle. Son objectif
						est de renforcer la résistance mécanique du matériau, réduisant le
						risque de fractures et facilitant la manipulation, le transport et
						l'installation.
						<br />
						<br />
						<strong>
							Bénéfices du renforcement par maille dans le grès cérame grand
							format :
						</strong>
						<br />
						<br />
						1. Résistance accrue à la rupture : La fibre de verre aide à éviter
						que la pièce ne se casse facilement, notamment lors de la coupe ou
						de l'installation.
						<br />
						<br />
						2. Sécurité de manipulation : Réduit le risque de détachement de
						fragments en cas de casse.
						<br />
						<br />
						3. Facilite l'installation : Dans certains cas, elle améliore
						l'adhérence avec certains adhésifs et mortiers.
						<br />
						<br />
						4. Compensation des contraintes : Aide à absorber les petites
						contraintes mécaniques pouvant survenir en raison de variations
						thermiques ou de flexions du support.
						<br />
						<br />
						Ce type de renforcement est courant dans les dalles de grès cérame
						ultra-minces et dans les pièces grand format nécessitant une plus
						grande intégrité structurelle en raison de leur taille.
					</Text>
				</Anotaciones>
				<ImageWithCaption
					src={acabados}
					alt="mesh"
					caption="(De haut en bas) Sans maille, maille continue, maille discontinue"
					columnSpan="6"
				/>
			</StyledDisenos>
			<StyledDisenos id={id[2]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Épaisseurs</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado3} alt="" />
					<ul>
						<strong>TC 5 / 3 mm.</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Encadrement</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado5} alt="" />
					<ul>
						<strong>TC 5 / 5.6 mm.</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Encadrement</li>
					</ul>
				</div>
				<div className="espesor espesor-3">
					<img src={ranurado8} alt="" />
					<ul>
						<strong>TC 5 / 8 mm.</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Encadrement</li>
					</ul>
				</div>
			</StyledDisenos>
			<IndiceSeries id={id[3]} />
		</>
	);
};

export default Disenos;
