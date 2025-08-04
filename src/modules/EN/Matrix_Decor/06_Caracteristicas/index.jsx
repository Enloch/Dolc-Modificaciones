import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/DolckerMatrixDecor/Caracteristicas/caracteristicas.jpg";
import Text from "../../../../components/Text";

const CaracteristicasTline = ({ id }) => {
	return (
		<>
			<StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Technical characteristics</Titulo>
				<ImageWithCaption
					src={caracter1}
					alt="Render by 7475"
					caption=""
					columnSpan="6"
				/>
				<Text>
					<strong>Strength and durability</strong>
					<br />
					<br />
					Extruded aluminum is known for its great structural strength, which
					<strong>
						{" "}
						allows it to withstand loads and physical stresses without
						deforming.
					</strong>
					This makes it an ideal material for applications in the construction
					industry, as it can withstand adverse conditions, such as temperature
					changes, humidity, and corrosion.
					<br />
					<br />
					In addition to its strength, extruded aluminum stands out for its
					long-term durability. Its{" "}
					<strong>ability to resist oxidation and corrosion</strong>
					guarantees a prolonged lifespan, which{" "}
					<strong>reduces maintenance and replacement costs.</strong>
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variety of shapes and profiles</strong>
					<br />
					<br />
					The <strong>aluminum extrusion process</strong> allows for a wide
					variety of shapes and <strong>aluminum extrusion profiles.</strong>
					<br />
					<br />
					The aluminum extrusion pieces obtained are of great{" "}
					<strong>resistance</strong>, with a perfect shape and a very low risk
					of leaving the factory with imperfections or errors.
					<br />
					<br />
					From bars and tubes to complex and customized profiles,
					<strong>aluminum extrusion offers versatility</strong> to adapt to
					different design needs and specific applications
					<br />
					<br />
					These profiles can be used in the manufacture of
					<strong>security aluminum extrusion shutters</strong>, facades, among
					others. The{" "}
					<strong>
						extruded aluminum profiles allow for flexibility and create
					</strong>
					solutions tailored to the technical and aesthetic requirements of each
					project.
					<strong>
						persianas de aluminio extrusionado autoblocantes de seguridad
					</strong>
					, fachadas, entre otros. Los{" "}
					<strong>
						perfiles extrusionados de aluminio permiten dar flexibilidad y crear
						soluciones a medida
					</strong>
					, adaptadas a los requisitos técnicos y estéticos de cada proyecto.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Lightweight and resistant</strong>
					<br />
					<br />
					First of all, one of the main properties of aluminum is its lightness.
					This does not prevent adjusting the composition of its alloy to
					achieve great strength, and as a result, it can be adapted to almost
					any application.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Zero maintenance</strong>
					<br />
					<br />
					Through the aluminum finishing process, whether anodized or painted,
					important protection is conferred against aggressive atmospheric
					agents. Decorative possibilities are also achieved that are adapted to
					the environment or design of the structures that compose it.
					Therefore, it does not require specific maintenance, which entails
					considerable cost savings.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Recyclable</strong>
					<br />
					<br />
					Aluminum is a fully recyclable material and contributes to reducing
					energy consumption by 95%. The characteristics of recycled material do
					not differ from those of material from the mineral. This high
					recycling capacity has a sustainability value for the environment.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variety of finishes</strong>
					<br />
					<br />
					Aluminum is the ideal material for creating contemporary building
					concepts. Whether you choose a painted or anodized surface finish, you
					will enjoy the lasting beauty of windows without having to invest in
					paint or varnish.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Corrosion resistant</strong>
					<br />
					<br />
					Naturally, aluminum generates a self-protective oxide layer that makes
					it highly resistant to corrosion.
					<br />
					<br />
					Through controlled industrial processes, different types of surface
					treatments can be applied to further improve this property.
				</Text>
			</StyledCaracteristicas>
		</>
	);
};

export default CaracteristicasTline;
