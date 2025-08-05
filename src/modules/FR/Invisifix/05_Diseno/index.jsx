import Cita from "../../../../components/Cita";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../../assets/images/Invisifix/Diseno/IMG_6516.jpg";
import fondo from "../../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../../utils/indicadoresFormato";
import Anotacion from "../../../../components/Anotacion";
import VisualizadorVariaciones from "../../../../components/VisualizadorVariaciones";
import Anotaciones from "../../../../components/Anotacion/Anotaciones";
import configAcabados from "../../../../configs/configAcabados";
import ranurado11 from "../../../../assets/images/Diseno/Espesores/ranurado11mm.webp";
import ranurado14 from "../../../../assets/images/Diseno/Espesores/ranurado14.webp";
import ranurado20 from "../../../../assets/images/Diseno/Espesores/ranurado20.webp";
import VisualizadorDesplazador from "../../../../components/VisualizadorDesplazador";
import IndiceSeries from "./05_1_IndiceSeries";

const DisenosTline = ({ id }) => {
  const propsFormato = {
    anotacion: {
      text: "Click on the point to see format options",
      type: "click",
    },
    visualizador: {
      config: indicadoresFormato,
      srcfondo: fondo,
      altFondo: "Background image with indicators",
    },
  };

  return (
    <>
      <StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Design</Titulo>
        <ImageWithCaption
          src={img1}
          alt="Designs image 1"
          caption="DOLCKER Invisifix"
          columnSpan="6"
        />
        <Cita
          cita={`"Architecture is the learned game of light, space and form"`}
          author="— Louis Kahn"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledDisenos>
      <StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
        <Titulo2>Finishes</Titulo2>
        <Anotaciones>
          <Anotacion
            type="normal"
            text="Click on the point to see all special piece options"
          />
          <Anotacion
            type="swipe"
            text="Swipe with mouse or finger to appreciate the texture"
          />
        </Anotaciones>
        <VisualizadorDesplazador config={configAcabados} />
      </StyledDisenos>
      <StyledDisenos id={id[2]} backgroundColor={COLORS.gray01} isEspesores>
        <Titulo2>Thicknesses</Titulo2>
        <div className="espesor espesor-1">
          <img src={ranurado11} alt="" />
          <ul>
            <strong>Porcelain 8/9/10 mm</strong>
            <li>Floor</li>
            <li>Ceiling</li>
            <li>Facade</li>
          </ul>
        </div>
        <div className="espesor espesor-2">
          <img src={ranurado14} alt="" />
          <ul>
            <strong>Color & FullBody 11 mm</strong>
            <li>Floor</li>
            <li>Ceiling</li>
            <li>Facade</li>
            <li>Edge</li>
          </ul>
        </div>
        <div className="espesor espesor-3">
          <img src={ranurado20} alt="" />
          <ul>
            <strong>XL Format 3/6/8 mm</strong>
            <li>Technical floor</li>
            <li>Facade</li>
            <li>Edge</li>
            <li>Coverings</li>
            <li>Drip edges</li>
            <li>Grille</li>
            <li>Step</li>
          </ul>
        </div>
      </StyledDisenos>
      <IndiceSeries id={id[3]} />
    </>
  );
};

export default DisenosTline;
