import React, { useState, useRef, useMemo, lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	PerspectiveCamera,
	Environment,
	ContactShadows,
	Gltf,
	useGLTF,
} from "@react-three/drei";
import {
	EffectComposer,
	ToneMapping,
	Bloom,
} from "@react-three/postprocessing";
import { DynamicModel, EmisivoController } from "./Modelos";
import {
	ContRotador,
	CanvasContainer,
	MenuContainer,
	IntroContainer,
	IntroContent,
	IntroImage,
	IntroText,
	BotonExpandir,
	ImagenExpandir,
} from "./styles";
import Menu from "./Menu";
import R360 from "../../../assets/icons/360.svg";
import IconoAbrir from "../../../assets/icons/open-indicator.svg";
import IconoCerrar from "../../../assets/icons/close-indicator.svg";
import { MeshPhysicalMaterial } from "three";

// Componente para renderizar el modelo seleccionado
const ModelRenderer = ({
	modelName,
	materialIndex,
	color,
	colorPickerActive,
	emisiveColor,
	emisiveIntensity,
}) => {
	return (
		<DynamicModel
			modelId={modelName}
			material={materialIndex}
			color={color}
			colorPickerActive={colorPickerActive}
			emisiveColor={emisiveColor}
			emisiveIntensity={emisiveIntensity}
		/>
	);
};

export default function Rotador() {
	// Usar un modelo dinámico por defecto
	const [model, setModel] = useState("CF_L_LUX_01");
	// Establecer el material por defecto a Plata Mate (índice 0)
	const [materialIndex, setMaterialIndex] = useState(0); // MaterialIndex 0 es Plata Mate
	const [showIntro, setShowIntro] = useState(true);
	const [color, setColor] = useState("#ffffff"); // Color blanco como color base predeterminado
	const [colorPickerActive, setColorPickerActive] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Estado para propiedades emisivas
	const [emisiveColor, setEmisiveColor] = useState("#FFFFFF");
	const [emisiveIntensity, setEmisiveIntensity] = useState(4);

	const handleIntroClick = () => setShowIntro(false);
	const handleExpandClick = () => setIsMenuOpen(!isMenuOpen);
	let grados = 270;
	let radianes = grados * (Math.PI / 180);

	// Memoizar las propiedades de la cámara para evitar recálculos innecesarios
	const cameraProps = useMemo(
		() => ({
			fov: 50,
			position: [0, -1, 1],
			near: 0.01,
			far: 10,
		}),
		[]
	);

	// Memoizar las propiedades de OrbitControls
	const orbitControlsProps = useMemo(
		() => ({
			maxPolarAngle: 1.6,
			minDistance: 0.2,
			maxDistance: 0.4,
			enableZoom: true,
			enablePan: false,
		}),
		[]
	);

	// Exponer el controlador emisivo para uso externo
	const updateEmisiveColor = (color) => {
		EmisivoController.updateEmisiveColor(setEmisiveColor, color);
	};

	const updateEmisiveIntensity = (intensity) => {
		EmisivoController.updateEmisiveIntensity(setEmisiveIntensity, intensity);
	};

	const updateEmisiveProperties = (color, intensity) => {
		EmisivoController.updateEmisiveProperties(
			setEmisiveColor,
			setEmisiveIntensity,
			color,
			intensity
		);
	};

	return (
		<ContRotador>
			<BotonExpandir onClick={handleExpandClick}>
				<ImagenExpandir
					src={isMenuOpen ? IconoAbrir : IconoCerrar}
					alt="Rotador"
				/>
			</BotonExpandir>

			<CanvasContainer visible={isMenuOpen}>
				{showIntro && (
					<IntroContainer onClick={handleIntroClick}>
						<IntroContent>
							<IntroImage src={R360} alt="Rotador" />
							<IntroText>Presiona para interactuar</IntroText>
						</IntroContent>
					</IntroContainer>
				)}
				<Suspense fallback={null}>
					<Canvas
						flat
						gl={{ antialias: false }}
						style={{
							position: "relative",
							top: 0,
							left: 0,
							background: "#B4B4B4FF",
						}}
					>
						<PerspectiveCamera makeDefault {...cameraProps} />
						<Environment
							files="/StudioE2.hdr"
							// files="/HDRI/neutral.hdr"
							// background
							backgroundRotation={[0, radianes, 0]}
						/>
						<ambientLight intensity={0.3} />
						<Suspense fallback={null}>
							<ContactShadows
								opacity={0.5}
								scale={1}
								blur={1}
								far={1}
								resolution={256}
								color="#000000"
								position={[0, -0.09, 0]}
								frames={1}
								key={model} // Añadir key para forzar la actualización cuando cambia el modelo
							/>
							<ModelRenderer
								modelName={model}
								materialIndex={materialIndex}
								color={color}
								colorPickerActive={colorPickerActive}
								emisiveColor={emisiveColor}
								emisiveIntensity={emisiveIntensity}
							/>
						</Suspense>
						<OrbitControls {...orbitControlsProps} />
						<Suspense fallback={null}>
							<EffectComposer disableNormalPass multisampling={8}>
								{/** The bloom pass is what will create glow, always set the threshold to 1,
								 * nothing will glow except materials without tonemapping whose colors leave RGB 0-1 **/}
								<Bloom mipmapBlur luminanceThreshold={1} />
								<ToneMapping
									adaptive
									resolution={256}
									middleGrey={0.5}
									maxLuminance={16.0}
									averageLuminance={1.0}
									adaptationRate={1.0}
									type={ToneMapping.ACESFilmicToneMapping}
								/>
							</EffectComposer>
						</Suspense>
					</Canvas>
				</Suspense>
			</CanvasContainer>

			<MenuContainer visible={isMenuOpen}>
				<Menu
					handleModelChange={setModel}
					handleMaterialChange={setMaterialIndex}
					color={color}
					setColor={setColor}
					colorPickerActive={colorPickerActive}
					setColorPickerActive={setColorPickerActive}
				/>
			</MenuContainer>
		</ContRotador>
	);
}

// Exportar el controlador emisivo para uso externo
export { EmisivoController };
