import { useState, lazy, Suspense } from "react";
import Cita from "../../../../components/Cita";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../../assets/images/DolckerTline/Diseno/catalogo3-1-14.webp";
import fondo from "../../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../../utils/indicadoresFormato";
import Anotacion from "../../../../components/Tline/Anotacion";
import Anotaciones from "../../../../components/Tline/Anotacion/Anotaciones";
import configAcabados from "../../../../configs/configAcabadosTline";
import Series from "./05_2_Series";
import ranurado6 from "../../../../assets/images/DolckerTline/Diseno/Espesores/Dolcker_espesor_6mm.jpg";
import ranurado9 from "../../../../assets/images/DolckerTline/Diseno/Espesores/Dolcker_espesor_9mm.jpg";
import ranurado11 from "../../../../assets/images/DolckerTline/Diseno/Espesores/Dolcker_espesor_11mm.jpg";
import VisualizadorDesplazador from "../../../../components/Tline/VisualizadorDesplazador";
import IndiceSeries from "./05_1_IndiceSeries";
import styled from "styled-components";

// Componente Loader estilizado
const Loader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: ${COLORS.gray01};
`;

// Placeholder atractivo
const Placeholder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: ${COLORS.gray03};
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background: ${COLORS.gray02};
	}
	&::after {
		content: "👆 Cliquez pour explorer les finitions";
		font-size: 3rem;
		color: ${COLORS.gray05};
	}
`;

const RotadorTline = lazy(() =>
	import("../../../../components/Rotadores/TlineV2/Rotador")
		.then((module) => module)
		.catch((error) => {
			console.error("Error loading RotadorTline:", error);
			return {
				default: () => <div>Erreur lors du chargement du visualiseur</div>,
			};
		})
);

const Configurador1Tline = lazy(() =>
	import("../../../../components/VisualizadorVariacionesTline")
		.then((module) => module)
		.catch((error) => {
			console.error("Error loading Configurador1Tline:", error);
			return {
				default: () => <div>Erreur lors du chargement du visualiseur</div>,
			};
		})
);

const Configurador2Tline = lazy(() =>
	import("../../../../components/VisualizadorVariacionesTline2")
		.then((module) => module)
		.catch((error) => {
			console.error("Error loading Configurador2Tline:", error);
			return {
				default: () => <div>Erreur lors du chargement du visualiseur</div>,
			};
		})
);

const DisenosTline = ({ id }) => {
	const ids = [
		"ard",
		"balm",
		"bella",
		"brun",
		"byb",
		"cap",
		"cor",
		"crom",
		"dom",
		"eter",
		"grav",
		"habi",
		"han",
		"inv",
		"kur",
		"nik",
		"stone",
		"stor",
		"uni",
	];

	const propsFormato = {
		anotacion: {
			text: "Cliquez sur le point pour voir les possibilités de format",
			type: "click",
		},
		visualizador: {
			config: indicadoresFormato,
			srcfondo: fondo,
			altFondo: "Image de fond avec indicateurs",
		},
	};
	const [serieActiva, setSerieActiva] = useState("");
	const [showRotador, setShowRotador] = useState(false);

	return (
		<>
			<StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Conception</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Image de conceptions 1"
					columnSpan="6"
				/>
				<Cita
					cita={
						"La règle de l'architecture est de faire les choses avec amour et obsession en grande proportion."
					}
					author="Miguel Fisac (1913-2006)"
					colorAutor={COLORS.gray05}
				/>
			</StyledDisenos>
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo2>Format</Titulo2>
				<Anotacion {...propsFormato.anotacion} />
				<Suspense
					fallback={
						<Loader>
							<div>Chargement du visualiseur...</div>
						</Loader>
					}
				>
					<Configurador1Tline />
				</Suspense>
			</StyledDisenos>
			<StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo2>Finition céramique</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Cliquez sur le point pour voir toutes les possibilités de pièces spéciales"
					/>
					<Anotacion
						type="swipe"
						text="Faites glisser avec la souris ou le doigt pour apprécier la texture"
					/>
				</Anotaciones>
				<VisualizadorDesplazador config={configAcabados} />
			</StyledDisenos>
			<StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo2>Finitions et profils de bandeaux</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Cliquez sur le point pour voir toutes les possibilités de pièces spéciales"
					/>
					<Anotacion
						type="swipe"
						text="Faites glisser avec la souris ou le doigt pour apprécier la texture"
					/>
				</Anotaciones>
				<div
					className="rotador"
					onClick={() => !showRotador && setShowRotador(true)}
				>
					{showRotador ? (
						<Suspense
							fallback={
								<Loader>
									<div>Chargement du visualiseur...</div>
								</Loader>
							}
						>
							<RotadorTline />
						</Suspense>
					) : (
						<Placeholder />
					)}
				</div>
			</StyledDisenos>
			<StyledDisenos id={id[4]} backgroundColor={COLORS.gray01} isEspesores>
				<Titulo2>Épaisseurs</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado6} alt="" />
					<ul>
						<strong>TC 6 / 6 mm.</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Encadrement</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado9} alt="" />
					<ul>
						<strong>TC 9 / 9 mm.</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Encadrement</li>
					</ul>
				</div>
				<div className="espesor espesor-3">
					<img src={ranurado11} alt="" />
					<ul>
						<strong>TC 11 / 11 mm.</strong>
						<li>Sol</li>
						<li>Plafond</li>
						<li>Façade</li>
						<li>Encadrement</li>
					</ul>
				</div>
			</StyledDisenos>

			<IndiceSeries id={id[6]} queSerieActiva={setSerieActiva} />
			<Series id={ids} serieActivaMostrar={serieActiva} />
			<StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
				{/* <Titulo2>Format</Titulo2> */}
				<Anotacion {...propsFormato.anotacion} />
				<Suspense
					fallback={
						<Loader>
							<div>Chargement du visualiseur...</div>
						</Loader>
					}
				>
					<Configurador2Tline />
				</Suspense>
			</StyledDisenos>
		</>
	);
};

export default DisenosTline;
