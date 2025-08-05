import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/Invisifix/Sistemas/IMG_5896.jpg";

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
          alt="Systems introduction"
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
          The DOLCKER & CLIP system for ceramic facades is a high-inertia profile system with double safety. All components are manufactured with top-quality raw materials.
          <br /><br />
          This is a mechanical clip fastening system + chemical fixing through a substructure composed of high-quality aluminum brackets in the shape of "L" with a thickness of 3 mm, which transmit stresses and are fixed to the base structure of the building (brick wall or concrete slab) by anchoring. On these brackets, vertical aluminum profiles in the shape of "T" with a thickness of 3 mm are fixed using self-tapping stainless steel screws.
          <br /><br />
          On these "T"-shaped profiles, horizontal profiles in the shape of "G" are screwed, allowing the piece to be fully supported. This is the ideal system for installing ceramics, allowing pieces to be replaced since it has a stainless steel sliding clip, achieving infinite installations. Additionally, it allows the horizontal profile to be lacquered in the color of the carpentry, allowing the customer to choose the color of the joint. At least two sliding clips are placed in the upper part of the starting piece at 1/5 of the distance from the length of the piece. In the rest of the intermediate pieces, at least 4 clips will be placed for each ceramic piece. Sika-111 or similar polyurethane adhesive and sealing points (4 per piece) will be added, allowing us to absorb the expansions of the facade in the sliding clips.
          <br /><br />
          This is undoubtedly a system with multiple facade composition options, as it is possible to break the vertical joints. These vertical joints are minimized to just 1 mm, thus enhancing the horizontal joints. The ceramic output is between 43-47 mm, depending on the thickness of the chosen ceramic.
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

      <StyledSistemas id={id[2]}>
        <Titulo2>DOL - TC11</Titulo2>
        <Text>
          The DOL-TC11 system for ceramic facades with hidden clip is a safe, easy, and simple system to install. All components are manufactured with top-quality raw materials.
          <br /><br />
          This is a hidden mechanical fastening system through a substructure composed of adjustable aluminum squares (brackets) with a thickness of 3 mm and a separator function, which also transmit stresses and are fixed to the base structure of the building (brick wall or concrete slab).
        </Text>
        <ImageWithCaption
          src={tc111}
          alt="DOL-TC11 demostración"
          columnSpan="6"
          isGray
        />
        <ImageWithCaption
          src={tc112}
          alt="DOL-TC11 tabla"
          columnSpan="6"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[3]}>
        <Titulo2>DOL - TC14</Titulo2>
        <Text>
          The DOL-TC14 system for ceramic facades with hidden clip is a safe, easy, and simple system to install. All components are manufactured with top-quality raw materials.
          <br /><br />
          This is a hidden mechanical fastening system through a substructure composed of adjustable aluminum squares (brackets) with a thickness of 3 mm and a separator function, which also transmit stresses and are fixed to the base structure of the building (brick wall or concrete slab).
        </Text>
        <ImageWithCaption
          src={tc141}
          alt="DOL-TC14 demostración"
          columnSpan="6"
          isGray
        />
        <ImageWithCaption
          src={tc142}
          alt="DOL-TC14 tabla"
          columnSpan="6"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[4]}>
        <Titulo2>DOL - HC20</Titulo2>
        <Text>
          The DOL-HC20 system for ceramic or stone facades with hidden clip is a safe, easy, and simple system to install. All components are manufactured with top-quality raw materials.
          <br /><br />
          This is a hidden mechanical fastening system through a substructure composed of adjustable aluminum squares (brackets) with a thickness of 3 mm and a separator function, which also transmit stresses and are fixed to the base structure of the building (brick wall or concrete slab).
        </Text>
        <ImageWithCaption
          src={hc201}
          alt="DOL-HC20 demostración"
          columnSpan="6"
          isGray
        />
        <ImageWithCaption
          src={hc202}
          alt="DOL-HC20 tabla"
          columnSpan="6"
          isGray
        />
      </StyledSistemas>
    </>
  );
};

export default Sistemas;
