import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../assets/images/DolckerMatrix/Caracteristicas/caracteristicas.jpg";
import ImagenJorge from "../../../assets/images/DolckerTline/tablas.jpg";
import ImagenConstructiva from "../../../assets/images/DolckerTline/tablas.jpg";
import Cdim1 from "../../../assets/icons/caracteristicasTline/caracteristicas dimensionales 1.svg";
import Cdim2 from "../../../assets/icons/caracteristicasTline/caracteristicas dimensionales 2.svg";
import Cmec1 from "../../../assets/icons/caracteristicasTline/caracterisiticqas mecanicas 1.svg";
import Cmec2 from "../../../assets/icons/caracteristicasTline/caracterisiticqas mecanicas 2.svg";
import Chig1 from "../../../assets/icons/caracteristicasTline/caracteristicas higienicas 1.svg";
import Chig2 from "../../../assets/icons/caracteristicasTline/caracteristicas higienicas 2.svg";
import Norm1 from "../../../assets/icons/caracteristicasTline/normas complementarias 1.svg";
import Norm2 from "../../../assets/icons/caracteristicasTline/normas complementarias 2.svg";

import Text from "../../../components/Text";
import Listado from "../../../components/Listado";

const CaracteristicasTline = ({ id }) => {
  return (
    <>
      <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Características técnicas</Titulo>
        <ImageWithCaption
          src={caracter1}
          alt='Render por parte de 7475'
          caption=''
          columnSpan='6'
        />
        <Text>
          <strong>Resistencia y durabilidad</strong>
          <br />
          <br />
          El <strong>aluminio extrusionado </strong>es conocido por su gran
          resistencia estructural, lo que le{" "}
          <strong>
            permite soportar cargas y esfuerzos físicos sin deformarse.
          </strong>
          Esto lo convierte en un material ideal para aplicaciones en la
          industria de la construcción, ya que puede resistir condiciones
          adversas, como cambios de temperatura, humedad y corrosión.
          <br />
          <br />
          Además de su resistencia, el aluminio extrusionado destaca por su
          durabilidad a largo plazo. Su
          <strong> capacidad para resistir la oxidación y la corrosión </strong>
          garantiza una vida útil prolongada, lo que
          <strong> reduce los costos de mantenimiento y reemplazo.</strong>
          <br />
          <br />
        </Text>
        <Text>
          <strong>Variedad de formas y perfiles</strong>
          <br />
          <br />
          El<strong> proceso de extrusión del aluminio </strong>permite obtener
          una amplia variedad de formas y
          <strong> perfiles de aluminio extrusionado.</strong>
          <br />
          <br />
          Las piezas de aluminio extrusionado que se obtienen son de un
          <strong> gran resistencia </strong>, con una forma perfecta y con un
          riesgo muy bajo de salir de fábrica con imperfecciones o errores.
          <br />
          <br />
          Desde barras y tubos hasta perfiles complejos y personalizados,
          <strong> el aluminio extrusionado ofrece versatilidad</strong> para
          adaptarse a diferentes necesidades de diseño y aplicaciones
          específicas
          <br />
          <br />
          Estos perfiles se pueden utilizar en la fabricación de{" "}
          <strong>
            persianas de aluminio extrusionado autoblocantes de seguridad
          </strong>
          , fachadas, entre otros. Los{" "}
          <strong>
            perfiles extrusionados de aluminio permiten dar flexibilidad y crear
            soluciones a medida
          </strong>
          , adaptadas a los requisitos técnicos y estéticos de cada proyecto.
          <br />
          <br />
        </Text>
        <Text>
          <strong>Ligero y resistente</strong>
          <br />
          <br />
          En primer lugar, una de las principales propiedades del aluminio es su
          ligereza. Esto no impide que ajustando la composición de su aleación
          se puede lograr una gran resistencia y como resultado puede adaptarse
          a casi cualquier aplicación.
          <br />
          <br />
        </Text>
        <Text>
          <strong>Mantenimiento 0</strong>
          <br />
          <br />
          Mediante el proceso de acabado del aluminio, bien sea anodizado o
          lacado, se confiere una protección importante frente a los agentes
          agresivos atmosféricos. También se consiguen posibilidades decorativas
          adaptadas al entorno o el diseño de las estructuras que lo componen.
          Por tanto no requiere de mantenimiento específico, lo que conlleva un
          ahorro de costes considerable.
          <br />
          <br />
        </Text>
        <Text>
          <strong>Reciclable</strong>
          <br />
          <br />
          El aluminio es un material totalmente reciclable y contribuye a
          reducir el consumo energético en un 95%. Las características del
          material reciclado no difieren de las del material proveniente del
          mineral. Esta  alta capacidad de reciclaje tiene un valor de
          sostenibilidad pera el medio ambiente.
          <br />
          <br />
        </Text>
        <Text>
          <strong>Variedad de acabados</strong>
          <br />
          <br />
          El aluminio es el material ideal para la creación de conceptos de
          edificación contemporáneos. Tanto si se opta por un acabado de la
          superficie lacado o anodizado, disfrutará de la belleza duradera de
          las ventanas sin tener que invertir en pintura ni en barniz
          <br />
          <br />
        </Text>
        <Text>
          <strong>Resistente a la corrosión</strong>
          <br />
          <br />
          De forma natural, el aluminio genera una capa de óxido autoprotectora
          que lo hace muy resistente a la corrosión.
          <br />
          <br />
          Mediante procesos industriales controlados  se pueden aplicar
          diferentes tipos de tratamiento de superficie para conseguir mejorar
          aún más esta propiedad.
        </Text>
      </StyledCaracteristicas>
      <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
        <Titulo>Datos técnicos</Titulo>
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
        <Text>
          <strong>Textos (Jorge)</strong>
        </Text>
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
        <Text>
          <strong>Textos (Jorge)</strong>
        </Text>
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
      </StyledCaracteristicas>
    </>
  );
};

export default CaracteristicasTline;
