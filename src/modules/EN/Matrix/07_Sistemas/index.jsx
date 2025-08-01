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
          alt='Systems introduction'
          caption=''
          columnSpan='5'
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
          system with high inertia and double safety profiles. Every single
          element that makes up this system is manufactured with
          top quality raw materials. It is a mechanical fastening system
          clip + chemical fastening for the placement of an aluminum trim
          clipped to the system, by means of a substructure that is
          composed of high quality adjustable aluminum brackets in the shape
          of a “L” 3 mm thick, which transmit forces and are fixed
          by anchoring to the base structure of the building (brick wall
          or concrete slab). On these brackets, the vertical profiles
          of extruded aluminum in the shape of a “T” 3 mm thick are fixed by
          stainless steel self-drilling screws.
          <br />
          <br />
          On these “T”-shaped profiles, “G”-shaped horizontal profiles are screwed,
          thus allowing the piece to be fully supported. It is the ideal system
          for placing ceramics, allowing pieces to be replaced since it has a
          stainless steel sliding clip, achieving an infinite number of placements.
          It also allows lacquering the trim profile according to the color of
          its carpentry, allowing the client to choose its color. At least two
          sliding clips are placed at the top of the starting piece at 1/5 of
          the distance from the length of the piece. In the rest of the intermediate
          pieces, at least 4 clips will be placed for each ceramic piece. Sika-111
          or similar polyurethane adhesive and sealing mastic points (4 per piece)
          will be added to allow us to absorb the facade's expansions in the sliding
          clips. Once all the clips are in place, the decorative trim is clipped
          into the already placed clips. This system has a safety profile for
          formats larger than 100 cm for placement with chemical fastening,
          which allows improving wind suction.
          <br />
          <br />
          It is undoubtedly a system with multiple facade composition options as
          it is possible to break the vertical joints. These vertical joints are
          minimized to just 1 mm, thus enhancing the horizontal joints.
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
