import { useState, useRef } from "react";
import FullScreen from "../../../../../components/FullScreen";

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

			{serieActivaMostrar === "#ard" && (
				<Serie
					id={id[0]}
					config={configArdesia}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#balm" && (
				<Serie
					id={id[1]}
					config={configBalmoral}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#bella" && (
				<Serie
					id={id[2]}
					config={configBellagio}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#brun" && (
				<Serie
					id={id[3]}
					config={configBrunswich}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#byb" && (
				<Serie
					id={id[4]}
					config={configByb}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#cap" && (
				<Serie
					id={id[5]}
					config={configCapri}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#cor" && (
				<Serie
					id={id[6]}
					config={configCore}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#crom" && (
				<Serie
					id={id[7]}
					config={configCromat}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#dom" && (
				<Serie
					id={id[8]}
					config={configDome}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#eter" && (
				<Serie
					id={id[9]}
					config={configEternal}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#grav" && (
				<Serie
					id={id[10]}
					config={configGravel}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#habi" && (
				<Serie
					id={id[11]}
					config={configHabitat}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#han" && (
				<Serie
					id={id[12]}
					config={configHannover}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#inv" && (
				<Serie
					id={id[13]}
					config={configInvictus}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#kur" && (
				<Serie
					id={id[14]}
					config={configKursaal}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#nik" && (
				<Serie
					id={id[15]}
					config={configNikea}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#stone" && (
				<Serie
					id={id[16]}
					config={configStoneland}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#stor" && (
				<Serie
					id={id[17]}
					config={configStorm}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}

			{serieActivaMostrar === "#uni" && (
				<Serie
					id={id[18]}
					config={configUnik}
					setFullScreenSrc={setFullScreenSrc}
					setFullScreenTitulo={setFullScreenTitulo}
					backgroundColor={COLORS.gray01}
				/>
			)}
		</>
	);
};

export default Series;
