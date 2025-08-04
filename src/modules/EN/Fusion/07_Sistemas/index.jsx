import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/Fusion/Sistemas/img_0001.jpg";

import dolckerClip1 from "../../../../assets/images/Sistemas/sistema-dolcker-clip.webp";
import dolckerClip2 from "../../../../assets/icons/Sistemas/dolcker-clip.svg";

import tc111 from "../../../../assets/images/Sistemas/sistema-dolcker-tc11.webp";
import tc112 from "../../../../assets/icons/Sistemas/dol-tc11.svg";

import tc141 from "../../../../assets/images/Sistemas/sistema-dolcker-tc14.webp";
import tc142 from "../../../../assets/icons/Sistemas/dol-tc14.svg";

import hc201 from "../../../../assets/images/Sistemas/sistema-dolcker-hc20.webp";
import hc202 from "../../../../assets/icons/Sistemas/dol-hc20.svg";
import ImageWithCaption from "../../../../components/ImageWithCaption";

const Sistemas = ({ id }) => {
  return (
    <>
      <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Construction Systems</Titulo>
        <ImageWithCaption
          src={sistemas}
          alt="Systems introduction image"
          columnSpan="6"
        />
        <Enlaces>
          <li>
            <a href={"#" + id[1]}>
              System
              <br />
              <strong>Dolcker & Clip</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[2]}>
              System
              <br />
              <strong>DOL - TC11</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[3]}>
              System
              <br />
              <strong>DOL - TC14</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[4]}>
              System
              <br />
              <strong>DOL - HC20</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>

      <StyledSistemas id={id[1]}>
        <Titulo2>Dolcker & Clip</Titulo2>
        <Text>
          The DOLCKER & CLIP system for ceramic-type dolcker facades is a system
          with high inertia profiles and double safety. Each and every one of the
          components of this system are manufactured with top quality raw materials.
          <br />
          <br />
          It is a mechanical fixing system of clip + chemical fixing through a
          substructure composed of adjustable aluminum brackets in "L" shape of 3 mm
          thickness, which transmit efforts and are fixed by anchoring to the base
          structure of the building (brick wall or concrete slab).
          <br />
          <br />
          On these brackets, vertical aluminum profiles extruded in "T" shape of 3 mm
          thickness are fixed by self-tapping stainless steel screws.
          <br />
          <br />
          In these "T" shaped profiles, horizontal profiles in "G" shape are screwed,
          thus allowing the piece to be fully supported. It is the ideal system for
          the placement of ceramics, allowing the replacement of pieces since it has
          a stainless steel sliding clip that allows countless placements. Moreover,
          it allows the lacquering of the horizontal profile according to the color
          of the carpentry, allowing the customer to choose the color of the joint.
          At least two sliding clips are placed in the upper part of the starting
          piece at 1/5 of the distance from the length of the piece. In the rest of
          the intermediate pieces, at least 4 clips are placed per ceramic piece.
          Polyurethane adhesive and sealing points (4 per piece) are added, which
          allow us to absorb the expansions of the facade in the sliding clips.
          <br />
          <br />
          It is undoubtedly a system with multiple facade composition options, as it
          is possible to break the vertical joints. These vertical joints are
          minimized to just 1 mm, thus enhancing the horizontal joints. The ceramic
          outlet is between 43-47 mm depending on the thickness of the chosen
          ceramic.
        </Text>
        <ImageWithCaption
          src={dolckerClip1}
          alt="Dolcker-clip demonstration"
          columnSpan="6"
          isGray
        />
        <ImageWithCaption
          src={dolckerClip2}
          alt="Dolcker-clip table"
          columnSpan="6"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[2]}>
        <Titulo2>DOL - TC11</Titulo2>
        <Text>
          The DOL-TC11 system for ceramic facades with hidden clip is a safe, easy
          and simple system to install. Each and every one of the components of this
          system are manufactured with top quality raw materials.
          <br />
          <br />
          It is a mechanical fixing system with hidden clip through a substructure
          composed of adjustable aluminum brackets of 3 mm thickness with separator
          function, which also transmit efforts and are fixed to the base structure
          of the building (brick wall or concrete slab).
        </Text>
        <ImageWithCaption
          src={tc111}
          alt="DOL-TC11 demonstration"
          columnSpan="6"
          isGray
        />
        <ImageWithCaption
          src={tc112}
          alt="DOL-TC11 table"
          columnSpan="6"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[3]}>
        <Titulo2>DOL - TC14</Titulo2>
        <Text>
          The DOL-TC14 system for ceramic facades with hidden clip is a safe, easy
          and simple system to install. Each and every one of the components of this
          system are manufactured with top quality raw materials.
          <br />
          <br />
          It is a mechanical fixing system with hidden clip through a substructure
          composed of adjustable aluminum brackets of 3 mm thickness with separator
          function, which also transmit efforts and are fixed to the base structure
          of the building (brick wall or concrete slab).
        </Text>
        <ImageWithCaption
          src={tc141}
          alt="DOL-TC14 demonstration"
          columnSpan="6"
          isGray
        />
        <ImageWithCaption
          src={tc142}
          alt="DOL-TC14 table"
          columnSpan="6"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[4]}>
        <Titulo2>DOL - HC20</Titulo2>
        <Text>
          The DOL-HC20 system for ceramic or stone facades of 20 mm with hidden clip
          is a safe, easy and simple system to install. Each and every one of the
          components of this system are manufactured with top quality raw materials.
          <br />
          <br />
          It is a mechanical fixing system with hidden clip through a substructure
          composed of adjustable aluminum brackets of 3 mm thickness with separator
          function, which also transmit efforts and are fixed to the base structure
          of the building (brick wall or concrete slab).
        </Text>
        <ImageWithCaption
          src={hc201}
          alt="DOL-HC20 demonstration"
          columnSpan="6"
          isGray
        />
        <ImageWithCaption
          src={hc202}
          alt="DOL-HC20 table"
          columnSpan="6"
          isGray
        />
      </StyledSistemas>
    </>
  );
};

export default Sistemas;
