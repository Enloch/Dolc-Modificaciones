import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/Aluform/Caracteristicas/IMG_7657.jpg";
import Text from "../../../../components/Text";

const CaracteristicasTline = ({ id }) => {
  return (
    <>
      <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Características técnicas</Titulo>
        <ImageWithCaption
          src={caracter1}
          alt="Render por parte de 7475"
          caption=""
          columnSpan="6"
        />
        <Text>
          <strong>Resistencia y Durabilidad</strong>
          <br />
          <br />
          El aluminio, al ser plegado y posteriormente lacado, adquiere una
          estructura robusta capaz de soportar cargas y esfuerzos físicos sin
          deformarse. Su{" "}
          <strong>
            resistencia a condiciones climáticas adversas, como cambios de
            temperatura, humedad y corrosión
          </strong>
          , lo convierte en un material ideal para aplicaciones exteriores. El
          lacado añade una capa protectora que mejora aún más su resistencia a
          la corrosión y a la abrasión, garantizando una{" "}
          <strong>vida útil prolongada</strong> con mínimos costos de
          mantenimiento.
        </Text>
        <Text>
          <strong>Versatilidad en Formas y Diseños</strong>
          <br />
          <br />
          El proceso de plegado permite conformar el aluminio en una{" "}
          <strong>amplia variedad de formas y perfiles</strong>, adaptándose a
          diseños específicos y necesidades arquitectónicas particulares. Esta
          flexibilidad es especialmente útil en la creación de fachadas modernas
          y elementos decorativos personalizados.
        </Text>
        <Text>
          <strong>Ligereza y Resistencia</strong>
          <br />
          <br />
          Una de las principales ventajas del aluminio es su baja densidad, lo
          que lo hace significativamente más ligero que otros metales. Esta
          ligereza facilita su manipulación e instalación,{" "}
          <strong>
            reduciendo los tiempos y costos en proyectos de construcción
          </strong>
          . A pesar de su peso reducido, el aluminio plegado ofrece una{" "}
          <strong>resistencia mecánica notable</strong>, adecuada para diversas
          aplicaciones estructurales.
        </Text>
        <Text>
          <strong>Mantenimiento Reducido</strong>
          <br />
          <br />
          El acabado lacado del aluminio proporciona una superficie que resiste
          eficazmente la acumulación de suciedad y la acción de agentes
          atmosféricos. Esto se traduce en un{" "}
          <strong>mantenimiento mínimo</strong>, generalmente limitado a
          limpiezas periódicas con agua y detergentes suaves, sin necesidad de
          tratamientos adicionales.
        </Text>
        <Text>
          <strong>Sostenibilidad y Reciclabilidad</strong>
          <br />
          <br />
          El aluminio es un material <strong>100% reciclable</strong> sin
          pérdida de sus propiedades originales. Su reciclaje consume solo el 5%
          de la energía requerida para producir aluminio primario, contribuyendo
          significativamente a la{" "}
          <strong>
            reducción del impacto ambiental y promoviendo prácticas de
            construcción sostenibles.
          </strong>
        </Text>
        <Text>
          <strong>Variedad de Acabados Estéticos</strong>
          <br />
          <br />
          El proceso de lacado ofrece una{" "}
          <strong>amplia gama de colores y texturas</strong>, permitiendo
          personalizar la apariencia del aluminio según las preferencias
          estéticas del proyecto. Esto facilita su integración en diferentes
          estilos arquitectónicos, desde los más tradicionales hasta los más
          vanguardistas.
        </Text>
        <Text>
          <strong>Resistencia a la Corrosión</strong>
          <br />
          <br />
          De forma natural, el aluminio desarrolla una capa de óxido que lo
          protege contra la corrosión. El lacado potencia esta propiedad,
          proporcionando una barrera adicional que lo hace{" "}
          <strong>
            especialmente adecuado para entornos húmedos o salinos
          </strong>
          , como zonas costeras.
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
