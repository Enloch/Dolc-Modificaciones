import Text from "../../../components/Text";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import StyledSistemas, { Enlaces, StyledGrid } from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import sistemas from "../../../assets/images/DolckerMatrix/temporal.webp";
import dolckerClip1 from "../../../assets/images/DolckerTline/detalles.jpg";
import dolckerClip2 from "../../../assets/images/DolckerTline/detalles.jpg";

import esquinaTC14_0_0 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-0.jpg";
import esquinaTC14_0_30 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-30.jpg";
import esquinaTC14_0_60 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-60.jpg";
import esquinaTC14_30_30 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-30.jpg";
import esquinaTC14_30_60 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-60.jpg";
import esquinaTC14_60_60 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 60-60.jpg";

import ImageWithCaption from "../../../components/ImageWithCaption";
import Reemplazo from "../../../assets/images/DolckerMatrix/temporal.webp";
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
              <strong>TXT-TC14</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>

      <StyledSistemas id={id[1]}>
        <Titulo2>TXT-TC14</Titulo2>
        <Titulo2>Detalles esquina</Titulo2>

        <Text>
          <StyledGrid>
            <ImageWithCaption
              src={esquinaTC14_0_0}
              alt="Dolcker-clip tabla"
              caption="TC14 0-0"
              columnSpan="1"
              isGray
            />
            <ImageWithCaption
              src={esquinaTC14_0_30}
              alt="Dolcker-clip tabla"
              caption="TC14 0-30"
              columnSpan="1"
              isGray
            />
            <ImageWithCaption
              src={esquinaTC14_0_60}
              alt="Dolcker-clip tabla"
              caption="TC14 0-60"
              columnSpan="1"
              isGray
            />
            <ImageWithCaption
              src={esquinaTC14_30_60}
              alt="Dolcker-clip tabla"
              caption="TC14 30-60"
              columnSpan="1"
              isGray
            />
            <ImageWithCaption
              src={esquinaTC14_30_60}
              alt="Dolcker-clip tabla"
              caption="TC14 60-60"
              columnSpan="1"
              isGray
            />
            <ImageWithCaption
              src={esquinaTC14_60_60}
              alt="Dolcker-clip tabla"
              caption="TC14 60-60"
              columnSpan="1"
              isGray
            />
          </StyledGrid>
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
        {/* {/* <ImageWithCaption
          src={dolckerClip1}
          alt='Dolcker-clip demostración'
          caption='Imágen demostración (Jorge)'
          columnSpan='5'
          isGray
        /> */}
      </StyledSistemas>
    </>
  );
};

export default SistemasTline;
