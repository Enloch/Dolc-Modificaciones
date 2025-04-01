import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import Reemplazo from "../../../../assets/images/DolckerMatrix/temporal.webp";
const SistemasTline = ({ id }) => {
  return (
    <>
      <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Sistema constructivos</Titulo>
        <ImageWithCaption
          src={Reemplazo}
          alt="Sistemas introducción"
          caption=""
          columnSpan="5"
        />
        <Enlaces>
          <li>
            <a href={"#" + id[1]}>
              Sistema
              <br />
              <strong>Leiva</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>

      <StyledSistemas id={id[1]}>
        <Titulo2>LEIVA</Titulo2>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
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
