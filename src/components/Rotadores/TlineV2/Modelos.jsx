import React, { memo, useMemo, Suspense, useState, useFrame } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Materiales, MaterialesMetalizados } from "./Materiales";
import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { getModelById } from "./modelosConfig";

// Componente base para todos los modelos
const ModelBase = memo(
	({
		material,
		color,
		colorPickerActive,
		nodes,
		materials,
		geometryNames,
		meshName,
		hasEmisivo,
		hasMetacrilato,
		emisiveColor,
		emisiveIntensity = 1,
		...props
	}) => {
		// Verificar que nodes y geometryNames existen
		if (!nodes || !geometryNames) {
			console.error(`Nodes or geometryNames missing for model ${meshName}`);
			return null;
		}

		// Cargar texturas fuera de useMemo
		const texturas = Materiales.map((mat) => mat.map);
		const acabados = useTexture(texturas);

		// Ahora useMemo solo procesa los datos, no llama hooks
		const Acabados = useMemo(() => acabados, [acabados]);
		const Metalizado = useMemo(
			() => MaterialesMetalizados.map((metal) => metal.metalness),
			[]
		);
		const Aspereza = useMemo(
			() => MaterialesMetalizados.map((aspereza) => aspereza.roughness),
			[]
		);

		// Si el selector de color estu00e1 activo, no usamos material
		const activeMaterial = colorPickerActive ? null : material;

		// Verificar si los nodos y geometru00edas existen
		const baseGeometry =
			nodes && geometryNames?.base && nodes[geometryNames.base]?.geometry;
		const aluminioGeometry =
			nodes &&
			geometryNames?.aluminio &&
			nodes[geometryNames.aluminio]?.geometry;
		const emisivoGeometry =
			hasEmisivo &&
			nodes &&
			geometryNames?.emisivo &&
			nodes[geometryNames.emisivo]?.geometry;
		const metacrilatoGeometry =
			hasMetacrilato &&
			nodes &&
			geometryNames?.metacrilato &&
			nodes[geometryNames.metacrilato]?.geometry;

		// Si no hay geometru00eda base, mostrar un mensaje de error y retornar null
		if (!baseGeometry) {
			console.error(
				`Geometru00eda base no encontrada para el modelo ${meshName}. Nodos disponibles:`,
				nodes ? Object.keys(nodes) : "nodes is undefined"
			);
			return null;
		}

		// Verificar si las texturas estu00e1n cargadas
		const texturesLoaded = Acabados && Acabados[activeMaterial];

		return (
			<group {...props} dispose={null}>
				{/* Base material mesh */}
				<mesh name={meshName} castShadow receiveShadow geometry={baseGeometry}>
					{!colorPickerActive ? (
						<meshPhysicalMaterial
							map={texturesLoaded ? Acabados[activeMaterial] : null}
							roughness={texturesLoaded ? Aspereza[activeMaterial] : 0.5}
							metalness={texturesLoaded ? Metalizado[activeMaterial] : 0.5}
							color={texturesLoaded ? null : "#cccccc"}
						/>
					) : (
						<meshStandardMaterial
							color={color}
							metalness={0.5}
							roughness={0.5}
							map={null}
						/>
					)}
				</mesh>

				{/* Aluminio mesh */}
				{aluminioGeometry && (
					<mesh
						castShadow
						receiveShadow
						geometry={aluminioGeometry}
						material={materials?.Aluminio}
					/>
				)}

				{/* Emisivo mesh - only for LED models */}
				{hasEmisivo && emisivoGeometry && (
					<mesh castShadow receiveShadow geometry={emisivoGeometry}>
						<meshStandardMaterial
							emissive={emisiveColor || "#E0E0E0"}
							emissiveIntensity={emisiveIntensity || 2}
						/>
					</mesh>
				)}

				{/* Metacrilato mesh - only for LED models */}
				{hasMetacrilato && metacrilatoGeometry && (
					<mesh castShadow receiveShadow geometry={metacrilatoGeometry}>
						<meshPhysicalMaterial
							transmission={1}
							ior={1.5}
							thickness={0.015}
							roughness={0.3}
							clearcoat={0}
							clearcoatRoughness={0}
							color="#CCCCCC"
						/>
					</mesh>
				)}
			</group>
		);
	}
);

// Generic model component that can render any model based on its configuration
export const ModeloGenerico = memo(
	({
		modelId,
		material,
		color,
		colorPickerActive,
		emisiveColor,
		emisiveIntensity,
		...props
	}) => {
		// Get model configuration from the ID
		const modelConfig = getModelById(modelId);

		if (!modelConfig) {
			console.error(`Model with ID ${modelId} not found`);
			return null;
		}

		// Preload the model to ensure it's in the cache
		useGLTF.preload(modelConfig.path);

		// Load the model directly
		const { nodes, materials } = useGLTF(modelConfig.path);

		if (!nodes) {
			console.error(
				`Model loaded but nodes are undefined for ${modelId} at path ${modelConfig.path}`
			);
			return null;
		}

		// Process geometry names if they are functions
		const processedGeometryNames = {};
		Object.entries(modelConfig.geometryNames).forEach(([key, value]) => {
			processedGeometryNames[key] =
				typeof value === "function" ? value(modelId) : value;
		});

		// Debug information
		console.log(
			`Loading model ${modelId} with geometries:`,
			processedGeometryNames
		);
		console.log(`Available nodes:`, Object.keys(nodes));

		return (
			<ModelBase
				material={material}
				color={color}
				colorPickerActive={colorPickerActive}
				nodes={nodes}
				materials={materials}
				geometryNames={processedGeometryNames}
				meshName={modelId}
				hasEmisivo={modelConfig.hasEmisivo}
				hasMetacrilato={modelConfig.hasMetacrilato}
				emisiveColor={emisiveColor}
				emisiveIntensity={emisiveIntensity}
				{...props}
			/>
		);
	}
);

// Error boundary component for model loading errors
class ModelErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error("Model loading error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Render fallback UI
			return (
				<mesh>
					<boxGeometry args={[0.3, 0.3, 0.3]} />
					<meshStandardMaterial color="#ff0000" />
				</mesh>
			);
		}

		return this.props.children;
	}
}

// Dynamic model loader - updated to use ModeloGenerico
export const DynamicModel = memo(
	({
		modelId,
		material,
		color,
		colorPickerActive,
		emisiveColor,
		emisiveIntensity,
		...props
	}) => {
		// Improved loading placeholder with animation
		const LoadingPlaceholder = () => {
			const [rotation, setRotation] = useState({ x: 0, y: 0 });

			return (
				<mesh rotation={[rotation.x, rotation.y, 0]}>
					<boxGeometry args={[0.3, 0.3, 0.3]} />
					<meshStandardMaterial color="#888888" />
				</mesh>
			);
		};

		return (
			<ModelErrorBoundary>
				<Suspense fallback={<LoadingPlaceholder />}>
					<ModeloGenerico
						modelId={modelId}
						material={material}
						color={color}
						colorPickerActive={colorPickerActive}
						emisiveColor={emisiveColor}
						emisiveIntensity={emisiveIntensity}
						{...props}
					/>
				</Suspense>
			</ModelErrorBoundary>
		);
	}
);

// Emisivo Controller - for programmatically controlling emissive properties
export class EmisivoController {
	static updateEmisiveColor(setEmisiveColor, color) {
		setEmisiveColor(color);
	}

	static updateEmisiveIntensity(setEmisiveIntensity, intensity) {
		setEmisiveIntensity(intensity);
	}

	static updateEmisiveProperties(
		setEmisiveColor,
		setEmisiveIntensity,
		color,
		intensity
	) {
		this.updateEmisiveColor(setEmisiveColor, color);
		this.updateEmisiveIntensity(setEmisiveIntensity, intensity);
	}
}
