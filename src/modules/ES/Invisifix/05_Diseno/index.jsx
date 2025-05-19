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
      text: "Pulsa en el punto para ver las posibilidades de formato",
      type: "click",
    },
    visualizador: {
      config: indicadoresFormato,
      srcfondo: fondo,
      altFondo: "Imagen de fondo con indicadores",
    },
  };

  return (
    <>
      <StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Diseño</Titulo>
        <ImageWithCaption
          src={img1}
          alt="Imagen de Diseños 1"
          caption="DOLCKER Invisifix"
          columnSpan="6"
        />
        <Cita
          cita="“La arquitectura es el aprendizaje de la luz, el espacio y la forma”"
          author="— Louis Kahn"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledDisenos>
      <StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
        <Titulo2>Acabados</Titulo2>
        <Anotaciones>
          <Anotacion
            type="normal"
            text="Pulsa en el punto para ver todas las posibilidades de piezas especiales"
          />
          <Anotacion
            type="swipe"
            text="Desliza con el ratón o el dedo para apreciar la textura"
          />
        </Anotaciones>
        <VisualizadorDesplazador config={configAcabados} />
      </StyledDisenos>
      <StyledDisenos id={id[2]} backgroundColor={COLORS.gray01} isEspesores>
        <Titulo2>Espesores</Titulo2>
        <div className="espesor espesor-1">
          <img src={ranurado11} alt="" />
          <ul>
            <strong>Porcelánico 8/9/10 mm</strong>
            <li>Suelo</li>
            <li>Techo</li>
            <li>Fachada</li>
          </ul>
        </div>
        <div className="espesor espesor-2">
          <img src={ranurado14} alt="" />
          <ul>
            <strong>Color & FullBody 11 mm</strong>
            <li>Suelo</li>
            <li>Techo</li>
            <li>Fachada</li>
            <li>Recerco</li>
          </ul>
        </div>
        <div className="espesor espesor-3">
          <img src={ranurado20} alt="" />
          <ul>
            <strong>Formato XL 3/6/8 mm</strong>
            <li>Suelo técnico</li>
            <li>Fachada</li>
            <li>Recerco</li>
            <li>Cubiertas</li>
            <li>Vierteaguas</li>
            <li>Rejilla</li>
            <li>Peldaño</li>
          </ul>
        </div>
      </StyledDisenos>
      <IndiceSeries id={id[3]} />
    </>
  );
};

export default DisenosTline;
