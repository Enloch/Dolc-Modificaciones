import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/DolckerMatrix/Caracteristicas/caracteristicas.jpg";
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
					<strong>Resistance and durability</strong>
					<br />
					<br />
					<strong>Extruded aluminum</strong> is known for its great structural
					resistance, which allows it to 
					<strong>
						withstand loads and physical stresses without deforming.
					</strong>
					This makes it an ideal material for applications in the
					construction industry, as it can resist adverse conditions, such as
					temperature changes, humidity, and corrosion.
					<br />
					<br />
					In addition to its resistance, extruded aluminum stands out for its
					long-term durability. Its <strong>ability to resist oxidation and corrosion
					</strong>guarantees a prolonged useful life, which <strong>reduces maintenance and replacement costs.</strong>
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variety of shapes and profiles</strong>
					<br />
					<br />
					The <strong>aluminum extrusion process</strong> allows obtaining a wide
					variety of shapes and <strong>extruded aluminum profiles.</strong>
					<br />
					<br />
					The extruded aluminum pieces obtained are of <strong>great resistance
					</strong>, with a perfect shape and with a very low risk of leaving the
					factory with imperfections or errors.
					<br />
					<br />
					From bars and tubes to complex and customized profiles, <strong>extruded
					aluminum offers versatility</strong> to adapt to different design needs
					and specific applications.
					<br />
					<br />
					These profiles can be used in the manufacture of 
					<strong>
						self-locking security extruded aluminum blinds
					</strong>
					, facades, among others. 
					<strong>
						Extruded aluminum profiles allow flexibility and create
						custom solutions
					</strong>
					, adapted to the technical and aesthetic requirements of each project.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Lightweight and resistant</strong>
					<br />
					<br />
					First, one of the main properties of aluminum is its
					lightness. This does not prevent that by adjusting the composition of its alloy
					a great resistance can be achieved and as a result it can adapt
					to almost any application.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Zero Maintenance</strong>
					<br />
					<br />
					Through the aluminum finishing process, whether anodized or lacquered,
					important protection against aggressive atmospheric agents is conferred.
					Decorative possibilities adapted to the environment or the design of the
					structures that compose it are also achieved. Therefore, it does not
					require specific maintenance, which leads to considerable cost savings.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Recyclable</strong>
					<br />
					<br />
					Aluminum is a totally recyclable material and contributes to reducing
					energy consumption by 95%. The characteristics of the recycled material
					do not differ from those of the material from the mineral. This high
					recycling capacity has a sustainability value for the environment.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Variety of finishes</strong>
					<br />
					<br />
					Aluminum is the ideal material for the creation of contemporary
					building concepts. Whether you opt for a lacquered or anodized surface
					finish, you will enjoy the lasting beauty of the windows without having
					to invest in paint or varnish.
					<br />
					<br />
				</Text>
				<Text>
					<strong>Corrosion resistant</strong>
					<br />
					<br />
					Naturally, aluminum generates a self-protective oxide layer that makes
					it very resistant to corrosion.
					<br />
					<br />
					Through controlled industrial processes, different types of surface
					treatment can be applied to further improve this property.
				</Text>
			</StyledCaracteristicas>
			{/* <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}> */}
			{/* <Titulo>Datos técnicos</Titulo> */}
			{/* <ImageWithCaption
          src={caracter1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        />
        <ImageWithCaption
          src={caracter1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        /> */}
			{/* <Text>
          <strong>Textos (Jorge)</strong>
        </Text> */}
			{/* <ImageWithCaption
          src={caracter1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        />
        <ImageWithCaption
          src={Norm1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        />
        <ImageWithCaption
          src={caracter1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        />
        <ImageWithCaption
          src={caracter1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        /> */}
			{/* <Text>
          <strong>Textos (Jorge)</strong>
        </Text> */}
			{/* <ImageWithCaption
          src={caracter1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        />
        <ImageWithCaption
          src={caracter1}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        /> */}
			{/* </StyledCaracteristicas> */}
		</>
	);
};

export default CaracteristicasTline;
