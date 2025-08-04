import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Scala/Dolcker/Volum55.jpg";
import Imagen2 from "../../../../assets/images/Scala/Dolcker/Volum62.jpg";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Move the mouse over the points to see the information",
    type: "normal",
    indicadores: config,
    imgBackground: Imagen2,
    alt: "Imagen de fondo con indicadores",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Scala System solves</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Imagen Dolcker 2"
          caption="Scala System"
        />

        <Text>
          DOLCKER SCALA is the first continuous groove system{" "}
          <strong>full&body</strong>, offering infinite modulation possibilities. It combines plates of different thicknesses —11, 14 and 20 mm—
          to generate reliefs, shadows and spaces between the pieces of the
          facade.
          <br />
          <br />
          This innovative system allows designing architectural envelopes with
          technical solutions also applicable to raised floors, ceilings,
          window reveals and coping covers, always using the
          same material to achieve a continuous and coherent aesthetic throughout
          the project.
          <br />
          <br />
          Thanks to full&body technology, it is possible to design completely
          continuous edges, achieving a uniform, precise and
          high architectural quality finish.
        </Text>
        <ImageWithCaption
          src={Imagen2}
          alt="Imagen Dolcker 2"
          // caption="Sistema Volumen"
        />
      </div>
      {/* <VisualizadorNota {...propsVisualizador} /> */}

      <Text />
    </StyledDolcker>
  );
};

export default DolckerTline;
