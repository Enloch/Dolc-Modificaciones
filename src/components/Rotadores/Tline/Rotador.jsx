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
import { Model1, Model2, Model3, Model4 } from "./Modelos";
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
}) => {
	// Usar un objeto para mapear nombres de modelos a componentes
	const modelComponents = {
		"Modelo 1": Model1,
		"Modelo 2": Model2,
		"Modelo 3": Model3,
		"Modelo 4": Model4,
	};

	// Obtener el componente del modelo seleccionado
	const SelectedModel = modelComponents[modelName];

	if (!SelectedModel) return null;

	return (
		<SelectedModel
			material={materialIndex}
			color={color}
			colorPickerActive={colorPickerActive}
		/>
	);
};

export default function Rotador() {
	const [model, setModel] = useState("Modelo 1");
	const [materialIndex, setMaterialIndex] = useState(0);
	const [showIntro, setShowIntro] = useState(true);
	const [color, setColor] = useState("#ffffff"); // Color blanco como color base predeterminado
	const [colorPickerActive, setColorPickerActive] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
			maxDistance: 0.6,
			enableZoom: true,
			enablePan: false,
		}),
		[]
	);

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
						style={{ position: "relative", top: 0, left: 0 }}
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
								color="#0000001e"
								position={[0, -0.09, 0]}
								frames={1}
								key={model} // Añadir key para forzar la actualización cuando cambia el modelo
							/>
							<ModelRenderer
								modelName={model}
								materialIndex={materialIndex}
								color={color}
								colorPickerActive={colorPickerActive}
							/>
							{/* <ModelTest /> */}
							{/* <Gltf src={mod} /> */}
						</Suspense>
						<OrbitControls {...orbitControlsProps} />
						<Suspense fallback={null}>
							<EffectComposer disableNormalPass multisampling={4}>
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
export function ModelTest(props) {
	const { nodes, materials } = useGLTF("/modelos/CF_L_LUX_02.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.CF_L_LUX_01_1.geometry}
				material={materials.Base}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.CF_L_LUX_01_2.geometry}
				material={materials.Aluminio}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.CF_L_LUX_01_3.geometry}
				material={materials.Emisivo}
				// material-emissiveIntensity={10}
			>
				<meshStandardMaterial
					emissive="#FF0000" // Color del brillo
					emissiveIntensity={10} // Intensidad del brillo
				/>
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.CF_L_LUX_01_4.geometry}
				// material={materials.Metacrilato}
			>
				<meshPhysicalMaterial
					transmission={1} // Activa la transmisión de luz (1 = completamente transparente)
					ior={1.5} // Índice de refracción (1.5 es común para vidrio)
					thickness={0.015} // Grosor del material (ajusta según el modelo)
					roughness={0.3} // Superficie lisa (0 = completamente liso)
					clearcoat={0} // Capa transparente adicional
					clearcoatRoughness={0} // Superficie lisa para la capa transparente
					color="#CCCCCC" // Color base del material
				/>
			</mesh>
		</group>
	);
}
