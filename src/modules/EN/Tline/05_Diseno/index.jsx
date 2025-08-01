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
		content: "👆 Click to explore finishes";
		font-size: 3rem;
		color: ${COLORS.gray05};
	}
`;

const RotadorTline = lazy(() =>
	import("../../../../components/Rotadores/TlineV2/Rotador")
		.then((module) => module)
		.catch((error) => {
			console.error("Error loading RotadorTline:", error);
			return { default: () => <div>Error loading visualizer</div> };
		})
);

const Configurador1Tline = lazy(() =>
	import("../../../../components/VisualizadorVariacionesTline")
		.then((module) => module)
		.catch((error) => {
			console.error("Error loading Configurador1Tline:", error);
			return { default: () => <div>Error loading visualizer</div> };
		})
);

const Configurador2Tline = lazy(() =>
	import("../../../../components/VisualizadorVariacionesTline2")
		.then((module) => module)
		.catch((error) => {
			console.error("Error loading Configurador2Tline:", error);
			return { default: () => <div>Error loading visualizer</div> };
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
			text: "Click on the point to see the format possibilities",
			type: "click",
		},
		visualizador: {
			config: indicadoresFormato,
			srcfondo: fondo,
			altFondo: "Imagen de fondo con indicadores",
		},
	};
	const [serieActiva, setSerieActiva] = useState("");
	const [showRotador, setShowRotador] = useState(false);

	return (
		<>
			<StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Design</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Diseños 1"
					// caption='Arquitectos pasan la referencia'
					columnSpan="6"
				/>
				<Cita
					cita="“The rule of architecture is to do things with love and obsession in great proportion.”"
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
							<div>Loading visualizer...</div>
						</Loader>
					}
				>
					<Configurador1Tline />
				</Suspense>
			</StyledDisenos>
			<StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo2>Ceramic Finishes</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Click on the point to see all possibilities for special pieces"
					/>
					<Anotacion
						type="swipe"
						text="Slide with the mouse or finger to appreciate the texture"
					/>
				</Anotaciones>
				<VisualizadorDesplazador config={configAcabados} />
			</StyledDisenos>
			<StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo2>Finishes and Border Profiles</Titulo2>
				<Anotaciones>
					<Anotacion
						type="normal"
						text="Click on the point to see all possibilities for special pieces"
					/>
					<Anotacion
						type="swipe"
						text="Slide with the mouse or finger to appreciate the texture"
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
									<div>Loading visualizer...</div>
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
				<Titulo2>Thicknesses</Titulo2>
				<div className="espesor espesor-1">
					<img src={ranurado6} alt="" />
					<ul>
						<strong>TC 6 / 6 mm.</strong>
						<li>Floor</li>
						<li>Ceiling</li>
						<li>Facade</li>
						<li>Recess</li>
					</ul>
				</div>
				<div className="espesor espesor-2">
					<img src={ranurado9} alt="" />
					<ul>
						<strong>TC 9 / 9 mm.</strong>
						<li>Floor</li>
						<li>Ceiling</li>
						<li>Facade</li>
						<li>Recess</li>
					</ul>
				</div>
				<div className="espesor espesor-3">
					<img src={ranurado11} alt="" />
					<ul>
						<strong>TC 11 / 11 mm.</strong>
						<li>Floor</li>
						<li>Ceiling</li>
						<li>Facade</li>
						<li>Recess</li>
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
							<div>Loading visualizer...</div>
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
