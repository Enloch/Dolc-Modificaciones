import React, { memo, useMemo, Suspense } from "react";
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

		// Si el selector de color está activo, no usamos material
		const activeMaterial = colorPickerActive ? null : material;

		// Verificar si los nodos y geometrías existen
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

		// Si no hay geometría base, mostrar un mensaje de error y retornar null
		if (!baseGeometry) {
			console.error(
				`Geometría base no encontrada para el modelo ${meshName}. Nodos disponibles:`,
				nodes
			);
			return null;
		}

		return (
			<group {...props} dispose={null}>
				{/* Base material mesh */}
				<mesh name={meshName} castShadow receiveShadow geometry={baseGeometry}>
					{!colorPickerActive ? (
						<meshPhysicalMaterial
							map={Acabados[activeMaterial]}
							roughness={Aspereza[activeMaterial]}
							metalness={Metalizado[activeMaterial]}
							color={null}
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
						<meshStandardMaterial emissive={"#E0E0E0"} emissiveIntensity={2} />
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

		// Load the model with error handling
		let nodes, materials;
		try {
			// Preload the model to ensure it's in the cache
			useGLTF.preload(modelConfig.path);

			// Now load the model
			const result = useGLTF(modelConfig.path);
			nodes = result.nodes;
			materials = result.materials;

			if (!nodes) {
				console.error(
					`Model loaded but nodes are undefined for ${modelId} at path ${modelConfig.path}`
				);
				return null;
			}
		} catch (error) {
			console.error(
				`Error loading model ${modelId} from path ${modelConfig.path}:`,
				error
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
		// Simple loading placeholder
		const LoadingPlaceholder = () => (
			<mesh>
				<boxGeometry args={[0.3, 0.3, 0.3]} />
				<meshStandardMaterial color="#cccccc" />
			</mesh>
		);

		return (
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
