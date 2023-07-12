import { useState, useRef } from "react";
import FullScreen from "../../../../components/FullScreen";

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
import configHannover from "../../../../configs/SeriesTline/configHannover";
import configInvictus from "../../../../configs/SeriesTline/configInvictus";
import configKursaal from "../../../../configs/SeriesTline/configKursaal";
import configNikea from "../../../../configs/SeriesTline/configNikea";
import configStoneland from "../../../../configs/SeriesTline/configStoneland";
import configStorm from "../../../../configs/SeriesTline/configStorm";
import configUnik from "../../../../configs/SeriesTline/configUnik";
import { COLORS } from "../../../../global/GlobalStyles";
import Serie from "./Serie";

const Series = ({ id, serieActivaMostrar }) => {
  const [fullScreenSrc, setFullScreenSrc] = useState("");
  const [fullScreenTitulo, setFullScreenTitulo] = useState("");
  return (
    <>
      <FullScreen
        imgSrc={fullScreenSrc}
        setFullScreenSrc={setFullScreenSrc}
        titulo={fullScreenTitulo}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />

      {serieActivaMostrar === "#ardesia" && (
        <Serie
          id={id[1]}
          config={configArdesia}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#balmoral" && (
        <Serie
          id={id[2]}
          config={configBalmoral}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#bellagio" && (
        <Serie
          id={id[3]}
          config={configBellagio}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#brunswich" && (
        <Serie
          id={id[4]}
          config={configBrunswich}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#byb" && (
        <Serie
          id={id[5]}
          config={configByb}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#capri" && (
        <Serie
          id={id[6]}
          config={configCapri}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#core" && (
        <Serie
          id={id[7]}
          config={configCore}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#cromat" && (
        <Serie
          id={id[8]}
          config={configCromat}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#dome" && (
        <Serie
          id={id[9]}
          config={configDome}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#eternal" && (
        <Serie
          id={id[10]}
          config={configEternal}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#gravel" && (
        <Serie
          id={id[11]}
          config={configGravel}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#habitat" && (
        <Serie
          id={id[12]}
          config={configHabitat}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#hannover" && (
        <Serie
          id={id[13]}
          config={configHannover}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#invictus" && (
        <Serie
          id={id[14]}
          config={configInvictus}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#kursaal" && (
        <Serie
          id={id[15]}
          config={configKursaal}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#nikea" && (
        <Serie
          id={id[17]}
          config={configNikea}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#stoneland" && (
        <Serie
          id={id[19]}
          config={configStoneland}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#storm" && (
        <Serie
          id={id[20]}
          config={configStorm}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}

      {serieActivaMostrar === "#unik" && (
        <Serie
          id={id[21]}
          config={configUnik}
          setFullScreenSrc={setFullScreenSrc}
          setFullScreenTitulo={setFullScreenTitulo}
          backgroundColor={COLORS.gray01}
        />
      )}
      {/* <Serie
        id={id[0]}
        config={configAmarna}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[1]}
        config={configArdesia}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[2]}
        config={configBalmoral}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[3]}
        config={configBellagio}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[4]}
        config={configBrunswich}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[5]}
        config={configByb}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[6]}
        config={configCapri}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[7]}
        config={configCore}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[8]}
        config={configCromat}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[9]}
        config={configDome}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[10]}
        config={configEternal}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[11]}
        config={configGravel}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[12]}
        config={configHabitat}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[13]}
        config={configHannover}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[14]}
        config={configInvictus}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[15]}
        config={configKursaal}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[16]}
        config={configLenci}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[17]}
        config={configNikea}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[18]}
        config={configNiro}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[19]}
        config={configStoneland}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[20]}
        config={configStorm}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      />
      <Serie
        id={id[21]}
        config={configUnik}
        setFullScreenSrc={setFullScreenSrc}
        setFullScreenTitulo={setFullScreenTitulo}
        backgroundColor={COLORS.gray01}
      /> */}
    </>
  );
};

export default Series;
