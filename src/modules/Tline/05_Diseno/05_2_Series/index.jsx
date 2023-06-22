import { useState, useRef } from "react";
import Anotacion from "../../../../components/Anotacion";
import FullScreen from "../../../../components/FullScreen";
import VisualizadorVariaciones from "../../../../components/VisualizadorVariaciones";
import configArquitect from "../../../../configs/Series/configArquitect";
import configAmarna from "../../../../configs/SeriesTline/configAmarna";
import configArdesia from "../../../../configs/SeriesTline/configArdesia";
import configBalmoral from "../../../../configs/SeriesTline/configBalmoral";
import configBellagio from "../../../../configs/SeriesTline/configBellagio";
import configBrunswich from "../../../../configs/SeriesTline/configBrunswich";
import configByb from "../../../../configs/SeriesTline/configByb";
import configCapri from "../../../../configs/SeriesTline/configCapri";
import configCore from "../../../../configs/SeriesTline/configCore";
import configCromat from "../../../../configs/SeriesTline/configCromat";
import configDome from "../../../../configs/SeriesTline/configDome";
import configEternal from "../../../../configs/SeriesTline/configEternal";
import configGravel from "../../../../configs/SeriesTline/configGravel";
import configHabitat from "../../../../configs/SeriesTline/configHabitat";

import { COLORS } from "../../../../global/GlobalStyles";
import Serie from "./Serie";

import fondo from "../../../../assets/images/VolumenVariacion/fondo.jpg";
import indicadoresFormato from "../../../../configs/configVolumenVariacion";
import { useListaCambios } from "../../../../contexts/MultipleOptionsContext";
import Anotaciones from "../../../../components/Anotacion/Anotaciones";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import configfachadaimg from "../../../../assets/images/DolckerTline/configcenefas.jpg";
import createPDF from "../../../../utils/createPDF";

const Series = ({ ids }) => {
  const [fullScreenSrc, setFullScreenSrc] = useState("");
  const [fullScreenTitulo, setFullScreenTitulo] = useState("");
  const visRef = useRef(null);

  const { listaCambios, cleanListaCambios, addIdsMenu, idsMenu } =
    useListaCambios();

  const propsFormato = {
    anotacionPDF: {
      text: "Haz click aquí para descargar un PDF con tu colocación",
      type: "pdf",
      onClick: () => createPDF(visRef),
    },
    anotacion2: {
      text: "Selecciona las áreas donde quieras aplicar la pieza",
      type: "normal",
    },
    anotacion: {
      text: "Haz click en el punto para seleccionar la pieza a aplicar",
      type: "click",
    },
    visualizador: {
      config: indicadoresFormato,
      srcfondo: fondo,
      altFondo: "Imagen de fondo con indicadores",
      volumen: { listaCambios, cleanListaCambios, addIdsMenu, idsMenu },
      visRef,
    },
  };

  return (
    <>
      <FullScreen
        imgSrc={fullScreenSrc}
        setFullScreenSrc={setFullScreenSrc}
        titulo={fullScreenTitulo}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[0]}
        config={configAmarna}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[1]}
        config={configArdesia}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[2]}
        config={configBalmoral}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[3]}
        config={configBellagio}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[4]}
        config={configBrunswich}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[5]}
        config={configByb}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[6]}
        config={configCapri}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[7]}
        config={configCore}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[8]}
        config={configDome}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[9]}
        config={configEternal}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[10]}
        config={configGravel}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={ids[11]}
        config={configHabitat}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />

      <Serie
        id={ids[13]}
        config={configCapri}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      >
        {/* <VisualizadorVariaciones {...propsFormato.visualizador} /> */}
        <ImageWithCaption
          src={configfachadaimg}
          alt='Imagen de Diseños 1'
          caption='intercambiador de fachada'
          columnSpan='6'
        />
        <Anotaciones className='anotacion-variaciones'>
          <Anotacion {...propsFormato.anotacion2} />
          <Anotacion {...propsFormato.anotacion} />
          <Anotacion {...propsFormato.anotacionPDF} />
        </Anotaciones>
      </Serie>
    </>
  );
};

export default Series;
