import { useState } from "react";
import Anotacion from "../../../../../components/Anotacion";
import FullScreen from "../../../../../components/FullScreen";
import VisualizadorVariaciones from "../../../../../components/VisualizadorVariaciones";
import configArquitect from "../../../../../configs/Series/configArquitect";
import configBASALT from "../../../../../configs/Series/configBasalt";
import configCRETE from "../../../../../configs/Series/configCrete";
import configDOLM from "../../../../../configs/Series/configDolm";
import configMARBLE from "../../../../../configs/Series/configMarble";
import configPORTLAND from "../../../../../configs/Series/configPortland";
import configQUARCITY from "../../../../../configs/Series/configQuarcity";
import configQUARTZ from "../../../../../configs/Series/configQuartz";
import configSPACE from "../../../../../configs/Series/configSpace";
import configSTONE from "../../../../../configs/Series/configStone";
import configTERRAZO from "../../../../../configs/Series/configTerrazo";
import configTZMENT from "../../../../../configs/Series/configTzment";
import configVOLUMEN from "../../../../../configs/Series/configVolumen";
import configWOOD from "../../../../../configs/Series/configWood";

// Importaciones de las configuraciones de Tline
import configArdesia from "../../../../../configs/SeriesTline/configArdesia";
import configBalmoral from "../../../../../configs/SeriesTline/configBalmoral";
import configBellagio from "../../../../../configs/SeriesTline/configBellagio";
import configBrunswich from "../../../../../configs/SeriesTline/configBrunswich";
import configByb from "../../../../../configs/SeriesTline/configByb";
import configCapri from "../../../../../configs/SeriesTline/configCapri";
import configCore from "../../../../../configs/SeriesTline/configCore";
import configCromat from "../../../../../configs/SeriesTline/configCromat";
import configDome from "../../../../../configs/SeriesTline/configDome";
import configEternal from "../../../../../configs/SeriesTline/configEternal";
import configGravel from "../../../../../configs/SeriesTline/configGravel";
import configHabitat from "../../../../../configs/SeriesTline/configHabitat";
import configHannover from "../../../../../configs/SeriesTline/configHannover";
import configInvictus from "../../../../../configs/SeriesTline/configInvictus";
import configKursaal from "../../../../../configs/SeriesTline/configKursaal";
import configNikea from "../../../../../configs/SeriesTline/configNikea";
import configStoneland from "../../../../../configs/SeriesTline/configStoneland";
import configStorm from "../../../../../configs/SeriesTline/configStorm";
import configUnik from "../../../../../configs/SeriesTline/configUnik";

import { COLORS } from "../../../../../global/GlobalStyles";
import Serie from "./Serie";

import fondo from "../../../../../assets/images/VolumenVariacion/fondo.jpg";
import indicadoresFormato from "../../../../../configs/configVolumenVariacion";
import { useListaCambios } from "../../../../../contexts/MultipleOptionsContext";
import Anotaciones from "../../../../../components/Anotacion/Anotaciones";

import { useRef } from "react";
import createPDF from "../../../../../utils/createPDF";

const Series = ({ ids, selectedSerie }) => {
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

  // Función para renderizar la serie correspondiente
  const renderSerie = (id) => {
    switch (id) {
      case "basalt":
        return (
          <Serie
            id={id}
            config={configBASALT}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "dolm":
        return (
          <Serie
            id={id}
            config={configDOLM}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "dquartz":
        return (
          <Serie
            id={id}
            config={configQUARTZ}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "marble":
        return (
          <Serie
            id={id}
            config={configMARBLE}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "stone":
        return (
          <Serie
            id={id}
            config={configSTONE}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "quarcity":
        return (
          <Serie
            id={id}
            config={configQUARCITY}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "crete":
        return (
          <Serie
            id={id}
            config={configCRETE}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "portland":
        return (
          <Serie
            id={id}
            config={configPORTLAND}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "space":
        return (
          <Serie
            id={id}
            config={configSPACE}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "tzment":
        return (
          <Serie
            id={id}
            config={configTZMENT}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "wood":
        return (
          <Serie
            id={id}
            config={configWOOD}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "terrazo":
        return (
          <Serie
            id={id}
            config={configTERRAZO}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "arquitect":
        return (
          <Serie
            id={id}
            config={configArquitect}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "volumen":
        return (
          <Serie
            id={id}
            config={configVOLUMEN}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          >
            <Anotaciones className="anotacion-variaciones">
              <Anotacion {...propsFormato.anotacion2} />
              <Anotacion {...propsFormato.anotacion} />
              <Anotacion {...propsFormato.anotacionPDF} />
            </Anotaciones>
            <VisualizadorVariaciones {...propsFormato.visualizador} />
          </Serie>
        );

      // Series Tline
      case "ard":
        return (
          <Serie
            id={id}
            config={configArdesia}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "balm":
        return (
          <Serie
            id={id}
            config={configBalmoral}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "bella":
        return (
          <Serie
            id={id}
            config={configBellagio}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "brun":
        return (
          <Serie
            id={id}
            config={configBrunswich}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "byb":
        return (
          <Serie
            id={id}
            config={configByb}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "cap":
        return (
          <Serie
            id={id}
            config={configCapri}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "cor":
        return (
          <Serie
            id={id}
            config={configCore}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "crom":
        return (
          <Serie
            id={id}
            config={configCromat}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "dom":
        return (
          <Serie
            id={id}
            config={configDome}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "eter":
        return (
          <Serie
            id={id}
            config={configEternal}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "grav":
        return (
          <Serie
            id={id}
            config={configGravel}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "habi":
        return (
          <Serie
            id={id}
            config={configHabitat}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "han":
        return (
          <Serie
            id={id}
            config={configHannover}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "inv":
        return (
          <Serie
            id={id}
            config={configInvictus}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "kur":
        return (
          <Serie
            id={id}
            config={configKursaal}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "nik":
        return (
          <Serie
            id={id}
            config={configNikea}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "stone2": // Cambiado para evitar conflicto con stone de Invisifix
        return (
          <Serie
            id={id}
            config={configStoneland}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "stor":
        return (
          <Serie
            id={id}
            config={configStorm}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      case "uni":
        return (
          <Serie
            id={id}
            config={configUnik}
            setFullScreenSrc={setFullScreenSrc}
            setFullScreenTitulo={setFullScreenTitulo}
            backgroundColor={COLORS.gray01}
          />
        );
      default:
        return null;
    }
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
      {selectedSerie && renderSerie(selectedSerie)}
    </>
  );
};

export default Series;
