import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/Scala/Sistemas/Volum94.jpg";

import dolckerClip1 from "../../../../assets/images/Sistemas/sistema-dolcker-clip.webp";
import dolckerClip2 from "../../../../assets/icons/Sistemas/EN/dolcker-clip.svg";
import ImageWithCaption from "../../../../components/ImageWithCaption";

const Sistemas = ({ id }) => {
	return (
		<>
			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Construction systems</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Systems introduction"
					columnSpan="5"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							System
							<br />
							<strong>Dolcker & Clip</strong>
						</a>
					</li>
					{/* <li>
            <a href={"#" + id[2]}>
              Sistema
              <br />
              <strong>DOL - TC11</strong>
            </a>
          </li> */}
					{/* <li>
            <a href={"#" + id[3]}>
              Sistema
              <br />
              <strong>DOL - TC14</strong>
            </a>
          </li> */}
					{/* <li>
            <a href={"#" + id[4]}>
              Sistema
              <br />
              <strong>DOL - HC20</strong>
            </a>
          </li> */}
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Titulo2>Dolcker & Clip</Titulo2>
				<Text>
					The DOLCKER & CLIP system for dolcker-type ceramic facades is a system
					with high inertia profiling and double security. Each and every one of
					the elements that make up this system are manufactured with raw
					materials of the highest quality.
					<br />
					<br />
					It is a mechanical clip fixing system + chemical fixing through a
					substructure composed of adjustable aluminum brackets in the shape of
					an "L" with a thickness of 3 mm, which transmit stresses and are fixed
					by anchoring to the base structure of the building (brick wall or
					concrete slab). On these brackets, vertical aluminum profiles extruded
					in the shape of a "T" with a thickness of 3 mm are fixed with
					self-drilling screws of stainless steel.
					<br />
					<br />
					On these "T"-shaped profiles, horizontal profiles in the shape of a
					"G" are screwed, thus allowing the piece to be fully supported. It is
					the ideal system for the installation of ceramics, allowing pieces to
					be replaced since it has a stainless steel sliding clip achieving
					infinite installations. It also allows painting the horizontal profile
					according to the color of its carpentry, allowing the customer to
					choose the color of the joint. At least two sliding clips are placed
					on the upper part of the starting piece at 1/5 distance with respect
					to the length of the piece. In the rest of the intermediate pieces,
					the installation of at least 4 clips per ceramic piece will proceed.
					Points of polyurethane putty for bonding and sealing sika-111 or
					similar (4 per piece) will be added to allow absorbing the expansions
					of the facade in the sliding clips.
					<br />
					<br />
					It is undoubtedly a system with multiple facade composition options
					since it is possible to break the vertical joints. These vertical
					joints are minimized to just 1 mm, thus enhancing the horizontal
					joints. The ceramic protrusion is between 43-47 mm depending on the
					thickness of the chosen ceramic.
				</Text>
				<ImageWithCaption
					src={dolckerClip1}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					isGray
				/>
				<ImageWithCaption
					src={dolckerClip2}
					alt="Dolcker-clip tabla"
					columnSpan="6"
					isGray
				/>
			</StyledSistemas>

			{/* <StyledSistemas id={id[2]}>
        <Titulo2>DOL - TC11</Titulo2>
        <Text>
          El sistema DOL-TC11 para fachadas de cerámica con grapa oculta es un
          sistema seguro, fácil y sencillo de instalar. Todos y cada uno de los
          elementos que componen este sistema están fabricados con materias
          primeras de máxima calidad.
          <br />
          <br />
          Se trata de un de fijación mecánica oculta mediante una subestructura
          que está compuesta por escuadras (ménsulas) regulables de aluminio de
          alta calidad de 3 mm de espesor con función de separadora, que también
          transmiten esfuerzos y que van fijadas a la estructura base del
          edificio (pared de ladrillo o forjado de hormigón)
        </Text>
        <ImageWithCaption
          src={tc111}
          alt="DOL-TC11 demostración"
          columnSpan="5"
          isGray
        />
        <ImageWithCaption
          src={tc112}
          alt="DOL-TC11 tabla"
          columnSpan="8"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[3]}>
        <Titulo2>DOL - TC14</Titulo2>
        <Text>
          The DOL-TC14 system for ceramic facades with hidden bracket is a
          safe, easy and simple system to install. Each and every one of the
          elements that make up this system are manufactured with raw
          materials of the highest quality.
          <br />
          <br />
          Se trata de un de fijación mecánica oculta mediante una subestructura
          que está compuesta por escuadras (ménsulas) regulables de aluminio de
          alta calidad de 3 mm de espesor con función de separadora, que también
          transmiten esfuerzos y que van fijadas a la estructura base del
          edificio (pared de ladrillo o forjado de hormigón)
        </Text>
        <ImageWithCaption
          src={tc141}
          alt="DOL-TC14 demostración"
          columnSpan="5"
          isGray
        />
        <ImageWithCaption
          src={tc142}
          alt="DOL-TC14 tabla"
          columnSpan="8"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[4]}>
        <Titulo2>DOL - HC20</Titulo2>
        <Text>
          The DOL-HC20 system for 20 mm ceramic or stone facades with
          hidden bracket is a safe, easy and simple system to install. Each
          and every one of the elements that make up this system are manufactured
          with raw materials of the highest quality.
          <br />
          <br />
          Se trata de un de fijación mecánica oculta mediante una subestructura
          que está compuesta por escuadras (ménsulas) regulables de aluminio de
          alta calidad de 3 mm de espesor con función de separadora, que también
          transmiten esfuerzos y que van fijadas a la estructura base del
          edificio (pared de ladrillo o forjado de hormigón)
        </Text>
        <ImageWithCaption
          src={hc201}
          alt="DOL-HC20 demostración"
          columnSpan="5"
          isGray
        />
        <ImageWithCaption
          src={hc202}
          alt="DOL-HC20 tabla"
          columnSpan="8"
          isGray
        />
      </StyledSistemas> */}
		</>
	);
};

export default Sistemas;
