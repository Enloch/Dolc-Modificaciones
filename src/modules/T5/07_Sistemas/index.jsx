import Text from "../../../components/Text";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import sistemas from "../../../assets/images/DolckerTline/7475.webp";
import dolckerClip1 from "../../../assets/images/DolckerTline/detalles.jpg";
import dolckerClip2 from "../../../assets/images/DolckerTline/detalles.jpg";

import tc111 from "../../../assets/images/DolckerTline/detalles.jpg";
import tc112 from "../../../assets/images/DolckerTline/detalles.jpg";

import tc141 from "../../../assets/images/DolckerTline/detalles.jpg";
import tc142 from "../../../assets/images/DolckerTline/detalles.jpg";

import hc201 from "../../../assets/images/DolckerTline/detalles.jpg";
import hc202 from "../../../assets/images/DolckerTline/detalles.jpg";
import ImageWithCaption from "../../../components/ImageWithCaption";

const Sistemas = ({ id }) => {
  return (
    <>
      <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Sistema constructivos</Titulo>
        <ImageWithCaption
          src={sistemas}
          alt='Sistemas introducción'
          caption='Render creado por 7475'
          columnSpan='5'
        />
        <Enlaces>
          <li>
            <a href={"#" + id[1]}>
              Sistema
              <br />
              <strong>Nombre sistema</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[2]}>
              Sistema
              <br />
              <strong>Nombre sistema</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[3]}>
              Sistema
              <br />
              <strong>Nombre sistema</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[4]}>
              Sistema
              <br />
              <strong>Nombre sistema</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>

      <StyledSistemas id={id[1]}>
        <Titulo2>Sistema 1</Titulo2>
        <Text>
          <strong>Textos (Jorge)</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          tortor justo. Cras rutrum tristique sagittis. Nam semper porttitor
          sapien in sagittis. Cras congue egestas nunc, in scelerisque felis
          consectetur at. Nulla ullamcorper bibendum diam non vehicula. Aenean
          tristique, enim vel commodo lobortis, nisl diam finibus mauris, at
          sodales turpis ipsum a turpis. Suspendisse malesuada nulla neque,
          ornare hendrerit metus molestie at. In hac habitasse platea dictumst.
          Maecenas nisl magna, aliquam ut lorem ut, ornare interdum urna.
          Curabitur turpis enim, sagittis ut justo ut, luctus iaculis nunc.
          Aenean accumsan, ante sed varius pharetra, diam augue viverra justo,
          at facilisis arcu ligula sed eros.
          <br />
          <br />
          Duis in neque et neque malesuada mattis vel nec velit. Nulla
          pellentesque laoreet nunc rhoncus imperdiet. Nullam ante libero,
          aliquet vel metus non, aliquet tincidunt justo. Praesent feugiat
          porttitor elementum. Vivamus pharetra blandit diam at viverra. Vivamus
          vitae eros suscipit, dapibus purus ut, ultricies mauris. Curabitur
          sodales vel tellus eu rhoncus. Etiam interdum velit quis fringilla
          maximus. In hac habitasse platea dictumst. Vivamus dictum dignissim
          tortor, ac luctus magna feugiat in. Fusce ultricies orci nec arcu
          venenatis, id venenatis quam bibendum. Donec congue volutpat nisi, id
          ullamcorper nisi pellentesque in. In lacus nisl, sollicitudin vel quam
          quis, pulvinar elementum ligula.
          <br />
          <br />
          Nam cursus ultricies diam ac tristique. Suspendisse maximus augue a
          neque vehicula, non hendrerit libero ultrices. Fusce non dapibus
          augue. Maecenas varius, orci non luctus aliquet, mauris felis dapibus
          lorem, nec mattis quam nibh sed leo. Sed molestie felis in ornare
          molestie. Morbi consectetur vel quam ac commodo. Sed augue purus,
          rutrum et erat eu, volutpat feugiat nisl.
        </Text>
        <ImageWithCaption
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
        />
      </StyledSistemas>

      <StyledSistemas id={id[2]}>
        <Titulo2>Sistema 2</Titulo2>
        <Text>
          <strong>Textos (Jorge)</strong>
          <br />
          <br />
          Nam cursus ultricies diam ac tristique. Suspendisse maximus augue a
          neque vehicula, non hendrerit libero ultrices. Fusce non dapibus
          augue. Maecenas varius, orci non luctus aliquet, mauris felis dapibus
          lorem, nec mattis quam nibh sed leo. Sed molestie felis in ornare
          molestie. Morbi consectetur vel quam ac commodo. Sed augue purus,
          rutrum et erat eu, volutpat feugiat nisl.
        </Text>
        <ImageWithCaption
          src={tc111}
          alt='DOL-TC11 demostración'
          caption='Imágen demostración (Jorge)'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={tc112}
          alt='DOL-TC11 tabla'
          caption='Imágen tabla (Jorge)'
          columnSpan='8'
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[3]}>
        <Titulo2>Sistema 3</Titulo2>
        <Text>
          <strong>Textos (Jorge)</strong>
          <br />
          <br />
          Nam cursus ultricies diam ac tristique. Suspendisse maximus augue a
          neque vehicula, non hendrerit libero ultrices. Fusce non dapibus
          augue. Maecenas varius, orci non luctus aliquet, mauris felis dapibus
          lorem, nec mattis quam nibh sed leo. Sed molestie felis in ornare
          molestie. Morbi consectetur vel quam ac commodo. Sed augue purus,
          rutrum et erat eu, volutpat feugiat nisl.
        </Text>
        <ImageWithCaption
          src={tc141}
          alt='DOL-TC14 demostración'
          caption='Imágen demostración (Jorge)'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={tc142}
          alt='DOL-TC14 tabla'
          caption='Imágen tabla (Jorge)'
          columnSpan='8'
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[4]}>
        <Titulo2>Sistema 4</Titulo2>
        <Text>
          <strong>Textos (Jorge)</strong>
          <br />
          <br />
          Nam cursus ultricies diam ac tristique. Suspendisse maximus augue a
          neque vehicula, non hendrerit libero ultrices. Fusce non dapibus
          augue. Maecenas varius, orci non luctus aliquet, mauris felis dapibus
          lorem, nec mattis quam nibh sed leo. Sed molestie felis in ornare
          molestie. Morbi consectetur vel quam ac commodo. Sed augue purus,
          rutrum et erat eu, volutpat feugiat nisl.
        </Text>
        <ImageWithCaption
          src={hc201}
          alt='DOL-HC20 demostración'
          caption='Imágen demostración (Jorge)'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={hc202}
          alt='DOL-HC20 tabla'
          caption='Imágen tabla (Jorge)'
          columnSpan='8'
          isGray
        />
      </StyledSistemas>
    </>
  );
};

export default Sistemas;
