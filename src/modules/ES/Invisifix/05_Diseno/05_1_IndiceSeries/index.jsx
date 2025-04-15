import { Titulo2 } from "../../../../../components/Titulos";
import { COLORS } from "../../../../../global/GlobalStyles";
import useImagesSeries from "../../../../../hooks/useImagesSeries";
import StyledIndiceSeries from "./styles";
import { Children } from "react";
import Enlace from "../../../../../modules/ES/System/06_Diseno/06_1_IndiceSeries/Enlace";
import getDataFromModules from "../../../../../helpers/getDataFromModules";

// Importar imágenes para las series de Invisifix
const imagenesAmbienteImports = import.meta.globEager(
  "../../../../../assets/images/Series/**/EJEMPLO/**"
);

// Importar imágenes para las series de Tline
const imagenesAmbienteTlineImports = import.meta.globEager(
  "../../../../../assets/images/DolckerTline/Series/**/EJEMPLO/**"
);

const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports);
const imagenesAmbienteTline = getDataFromModules(imagenesAmbienteTlineImports);

// Definir las series de Invisifix
const seriesInvisifix = [
  { titulo: "DO&BASALT", src: imagenesAmbiente[1], id: "#basalt" },
  { titulo: "DO&DOLM", src: imagenesAmbiente[3], id: "#dolm" },
  { titulo: "DO&DQUARTZ", src: imagenesAmbiente[7], id: "#dquartz" },
  { titulo: "DO&MARBLE", src: imagenesAmbiente[4], id: "#marble" },
  { titulo: "DO&STONE", src: imagenesAmbiente[9], id: "#stone" },
  { titulo: "DO&QUARCITY", src: imagenesAmbiente[6], id: "#quarcity" },
  { titulo: "DO&CRETE", src: imagenesAmbiente[2], id: "#crete" },
  { titulo: "DO&PORTLAND", src: imagenesAmbiente[5], id: "#portland" },
  { titulo: "DO&SPACE", src: imagenesAmbiente[8], id: "#space" },
  { titulo: "DO&TZMENT", src: imagenesAmbiente[11], id: "#tzment" },
  { titulo: "DO&WOOD", src: imagenesAmbiente[13], id: "#wood" },
  { titulo: "DO&TERRAZO", src: imagenesAmbiente[10], id: "#terrazo" },
  { titulo: "DO&ARQUITECT", src: imagenesAmbiente[0], id: "#arquitect" },
  { titulo: "DO&VOLUMEN", src: imagenesAmbiente[12], id: "#volumen" },
];

// Definir las series de Tline
const seriesTline = [
  { titulo: "DOLCKER & LINE ARD", src: imagenesAmbienteTline[0], id: "#ard" },
  { titulo: "DOLCKER & LINE BALM", src: imagenesAmbienteTline[1], id: "#balm" },
  {
    titulo: "DOLCKER & LINE BELLA",
    src: imagenesAmbienteTline[2],
    id: "#bella",
  },
  { titulo: "DOLCKER & LINE BRUN", src: imagenesAmbienteTline[3], id: "#brun" },
  { titulo: "DOLCKER & LINE BYB", src: imagenesAmbienteTline[4], id: "#byb" },
  { titulo: "DOLCKER & LINE CAP", src: imagenesAmbienteTline[5], id: "#cap" },
  { titulo: "DOLCKER & LINE COR", src: imagenesAmbienteTline[6], id: "#cor" },
  { titulo: "DOLCKER & LINE CROM", src: imagenesAmbienteTline[7], id: "#crom" },
  { titulo: "DOLCKER & LINE DOM", src: imagenesAmbienteTline[8], id: "#dom" },
  { titulo: "DOLCKER & LINE ETER", src: imagenesAmbienteTline[9], id: "#eter" },
  {
    titulo: "DOLCKER & LINE GRAV",
    src: imagenesAmbienteTline[10],
    id: "#grav",
  },
  {
    titulo: "DOLCKER & LINE HABI",
    src: imagenesAmbienteTline[11],
    id: "#habi",
  },
  { titulo: "DOLCKER & LINE HAN", src: imagenesAmbienteTline[12], id: "#han" },
  { titulo: "DOLCKER & LINE INV", src: imagenesAmbienteTline[13], id: "#inv" },
  { titulo: "DOLCKER & LINE KUR", src: imagenesAmbienteTline[14], id: "#kur" },
  { titulo: "DOLCKER & LINE NIK", src: imagenesAmbienteTline[15], id: "#nik" },
  {
    titulo: "DOLCKER & LINE STONE",
    src: imagenesAmbienteTline[16],
    id: "#stone2",
  },
  {
    titulo: "DOLCKER & LINE STOR",
    src: imagenesAmbienteTline[17],
    id: "#stor",
  },
  { titulo: "DOLCKER & LINE UNI", src: imagenesAmbienteTline[18], id: "#uni" },
];

const IndiceSeries = ({ id }) => {
  // Función para manejar el clic en una serie
  const handleSerieClick = (event, serieId) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado
    
    // Extraer el ID sin el #
    const serieIdWithoutHash = serieId.substring(1);
    
    // Cambiar la URL manualmente
    window.location.hash = serieIdWithoutHash;
    
    // Esperar un momento para que el componente se cargue y luego desplazar la página
    setTimeout(() => {
      // Intentar encontrar el elemento por su ID
      const element = document.getElementById(serieIdWithoutHash);
      if (element) {
        // Si se encuentra el elemento, desplazar la página hasta él
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Si no se encuentra el elemento, desplazar la página hasta el inicio de la sección de series
        window.scrollTo({
          top: document.getElementById(id).offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100); // Esperar 100ms para que el componente se cargue
  };

  // Crear elementos para las series de Invisifix
  const elementosInvisifix = Children.toArray(
    seriesInvisifix.map(({ titulo, src, id }) => {
      return (
        <Enlace 
          href={id} 
          className="enlace"
          onClick={(event) => handleSerieClick(event, id)}
        >
          <img src={src} alt={titulo + " ejemplo"} />
          <span>{titulo}</span>
        </Enlace>
      );
    })
  );

  // Crear elementos para las series de Tline
  const elementosTline = Children.toArray(
    seriesTline.map(({ titulo, src, id }) => {
      return (
        <Enlace 
          href={id} 
          className="enlace"
          onClick={(event) => handleSerieClick(event, id)}
        >
          <img src={src} alt={titulo + " ejemplo"} />
          <span>{titulo}</span>
        </Enlace>
      );
    })
  );

  return (
    <>
      {/* Sección para series Invisifix */}
      <StyledIndiceSeries id={id} backgroundColor={COLORS.gray02}>
        <Titulo2>SERIES INVISIFIX</Titulo2>
        {elementosInvisifix}
      </StyledIndiceSeries>

      {/* Sección para series Tline */}
      <StyledIndiceSeries id={`${id}-tline`} backgroundColor={COLORS.gray02}>
        <Titulo2>SERIES TLINE</Titulo2>
        {elementosTline}
      </StyledIndiceSeries>
    </>
  );
};

export default IndiceSeries;
