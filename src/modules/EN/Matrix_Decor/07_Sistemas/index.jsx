import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/DolckerMatrix/temporal.webp";
import ImageWithCaption from "../../../../components/ImageWithCaption";

const SistemasTline = ({ id }) => {
	return (
		<>
			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Construction systems</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Sistemas introducción"
					caption=""
					columnSpan="5"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							System
							<br />
							<strong>MATRIX</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Titulo2>MATRIX</Titulo2>
				<Text>
					The DOLCKER MATRIX system for dolcker-type ceramic facades is a
					system with high inertia profiling and double security. Each and every
					one of the elements that make up this system are manufactured with
					high-quality raw materials. It is a mechanical clip + chemical fixing system for installing an aluminum capping strip clipped to the system, through a substructure composed of adjustable high-quality aluminum brackets in the shape
					of "L" with a thickness of 3 mm, which transmit stresses and are fixed
					by anchoring to the base structure of the building (brick wall
					or concrete slab). On these brackets, vertical aluminum profiles
					extruded in the shape of "T" with a thickness of 3 mm are fixed using
					self-drilling stainless steel screws.
					<br />
					<br />
					On these "T" shaped profiles, horizontal profiles in the shape of "G" are screwed, allowing the piece to be fully supported. It is the ideal system for
					installing ceramics, allowing replacement of pieces since it
					has a stainless steel sliding clip achieving infinite
					installations. It also allows painting the capping profile according to the
					color of the carpentry, allowing the customer to choose the color of
					<br />
					<br />
					It is undoubtedly a system with multiple facade composition options since it is possible to break the vertical joints. These vertical joints are minimized to just 1 mm, thus enhancing the horizontal joints.
				</Text>
				<Text>
					<strong>MATRIX</strong> is an innovative aluminum slat cladding system with an exclusive clipped installation mechanism that guarantees quick, safe, and trouble-free assembly. Its wide variety of designs and finishes makes it a versatile solution for creating ventilated facades, interior claddings, and decorative panels with high visual impact.
					<br />
					<br />
					Thanks to its carefully crafted aesthetics and premium quality,{" "}
					<strong>MATRIX</strong> is an ideal option for <strong>high decoration</strong> projects, bringing sophistication and modernity to interior spaces. Its combination of design and functionality allows environments to be transformed with a contemporary and elegant style, making it the perfect choice for architects and designers looking for a distinctive and durable cladding.
				</Text>
				{/* <ImageWithCaption
          src={dolckerClip1}
          alt='Dolcker-clip demostración'
          caption='Imágen demostración (Jorge)'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={dolckerClip2}
          alt='Dolcker-clip tabla'
          caption='Imágen tabla (Jorge)'
          columnSpan='8'
          isGray
        /> */}
			</StyledSistemas>
		</>
	);
};

export default SistemasTline;
