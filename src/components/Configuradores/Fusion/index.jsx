import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { TXTUI, Iconos } from "./ui";
import { CanvasSetup } from "./CanvasSetup";
import { useDeviceOrientation } from "../../../hooks/useDeviceOrientation";
import { Alert, AlertTitle } from "@mui/material";
import { useConfigStore } from "./store";

const LandscapePrompt = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 30px;
	background-color: rgba(0, 0, 0, 0.8);
	color: white;
	font-size: 1em;
	text-align: center;
`;

export default function EscenaFusion() {
	const isMobile = useMediaQuery("(max-width:768px)");
	const [showPrompt, setShowPrompt] = useState(false);
	const [selectedSection, setSelectedSection] = useState(null);
	const { isLandscape } = useDeviceOrientation();
	const { materialPorcelanicoSeleccionado } = useConfigStore();

	const handleIconConfigAccept = (sectionName, cmValue) => {
		console.log(`Configuration accepted for ${sectionName}: ${cmValue}`);
		setSelectedSection((prevSelected) => (prevSelected === sectionName ? null : sectionName));
	};

	const handleDirectModelClick = (sectionName) => {
		console.log(`Direct model click on: ${sectionName}`);
		setSelectedSection((prevSelected) => (prevSelected === sectionName ? null : sectionName));
	};

	useEffect(() => {
		const handleOrientationChange = () => {
			if (window.innerHeight > window.innerWidth && isMobile) {
				setShowPrompt(true);
			} else {
				setShowPrompt(false);
			}
		};
		handleOrientationChange();
		window.addEventListener("resize", handleOrientationChange);
		return () => window.removeEventListener("resize", handleOrientationChange);
	}, [isMobile]);

	return (
		<div style={{ width: "100%", height: "100%", position: "relative" }}>
			{isMobile && !isLandscape && (
				<LandscapePrompt>
					Por favor, gira tu dispositivo a modo horizontal. <br />
					<br /> La experiencia en este configurador puede no ser óptima en dispositivos móviles. Para mejores resultados, considera usar un
					dispositivo con pantalla más grande o un ordenador.
				</LandscapePrompt>
			)}
			{(isMobile && isLandscape) ||
				(!isMobile && (
					<>
						{isMobile && isLandscape && (
							<Alert
								severity="warning"
								style={{
									position: "relative",
									top: "20px",
									left: "50%",
									transform: "translateX(-50%)",
									zIndex: 1001,
									minWidth: "300px",
									maxWidth: "calc(100% - 40px)",
									boxSizing: "border-box",
								}}
							>
								<AlertTitle>Aviso para móviles</AlertTitle>
								La experiencia en este configurador puede no ser óptima en dispositivos móviles. Para mejores resultados, considera usar un
								dispositivo con pantalla más grande o un ordenador.
							</Alert>
						)}
						<TXTUI />
						<Iconos onConfigAccept={handleIconConfigAccept} />
						<CanvasSetup />
					</>
				))}
		</div>
	);
}
