import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Archiform/Dolcker/Archiform54.jpg";
import Imagen2 from "../../../../assets/images/Archiform/Dolcker/Archiform01.jpg";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Passez la souris sur les points pour voir les informations",
    type: "normal",
    indicadores: config,
    imgBackground: Imagen2,
    alt: "Image d'arrière-plan avec indicateurs",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Le système Archiform résout</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Imagen Dolcker 2"
          caption="Système Archiform"
        />

        <Text>
          DOLCKER & Archiform présente son système innovant pour les formats trapézoïdaux
          avec rainure continue en épaisseurs de 14 et 20 mm : le
          premier système <strong>full&body</strong> avec rainure continue, offrant
          des possibilités infinies de modulation et de conception.
          <br />
          <br />
          Grâce à la technologie full&body, il est possible de créer des façades avec
          des bords complètement continus, offrant une esthétique différenciante
          par rapport aux formats carrés ou rectangulaires traditionnels. Une
          solution idéale pour des enveloppes architecturales élégantes et distinctives.
          <br />
          <br />
          Le système DOLCKER & Archiform va au-delà des façades, offrant
          des solutions complètes également pour les planchers surélevés, les plafonds, les cadres de fenêtres
          et les chapeaux de protection, tout en conservant le même matériau et la même finition. Cela
          permet une cohérence totale dans la conception architecturale.
          <br />
          <br />
          De plus, DOLCKER a développé un système d'installation haute sécurité,
          conçu pour faciliter le travail des techniciens et garantir des performances maximales
          dans des bâtiments uniques, tant sur le plan technique qu'esthétique.
        </Text>
        <ImageWithCaption
          src={Imagen2}
          alt="Dolcker Image 2"
          // caption="Volume System"
        />
      </div>
      {/* <VisualizadorNota {...propsVisualizador} /> */}

      <Text />
    </StyledDolcker>
  );
};

export default DolckerTline;
