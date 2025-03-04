import React, { memo, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Materiales, MaterialesMetalizados } from "./Materiales";
import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";

// Componente base para todos los modelos
const ModelBase = memo(
	({
		material,
		color,
		colorPickerActive,
		nodes,
		materials,
		geometryName,
		geometryAluminio,
		meshName,
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

		return (
			<group {...props} dispose={null}>
				<mesh
					name={meshName}
					castShadow
					receiveShadow
					geometry={nodes[geometryName].geometry}
				>
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
				<mesh
					castShadow
					receiveShadow
					geometry={nodes[geometryAluminio].geometry}
					material={materials.Aluminio}
				/>
			</group>
		);
	}
);

// Modelos específicos que utilizan el componente base
export const Model1 = memo(
	({ material, color, colorPickerActive, ...props }) => {
		const { nodes, materials } = useGLTF("/modelos/Cenefa01.gltf");

		return (
			<ModelBase
				material={material}
				color={color}
				colorPickerActive={colorPickerActive}
				nodes={nodes}
				materials={materials}
				geometryName="Material_01"
				geometryAluminio="Material_01_1"
				meshName="Material_01"
				{...props}
			/>
		);
	}
);

export const Model2 = memo(
	({ material, color, colorPickerActive, ...props }) => {
		const { nodes, materials } = useGLTF("/modelos/Cenefa02.gltf");

		return (
			<ModelBase
				material={material}
				color={color}
				colorPickerActive={colorPickerActive}
				nodes={nodes}
				materials={materials}
				geometryName="Material_02"
				geometryAluminio="Material_02_1"
				meshName="Material_02"
				{...props}
			/>
		);
	}
);

export const Model3 = memo(
	({ material, color, colorPickerActive, ...props }) => {
		const { nodes, materials } = useGLTF("/modelos/Cenefa03.gltf");

		return (
			<ModelBase
				material={material}
				color={color}
				colorPickerActive={colorPickerActive}
				nodes={nodes}
				materials={materials}
				geometryName="Material_03"
				geometryAluminio="Material_03_1"
				meshName="Material_03"
				{...props}
			/>
		);
	}
);

export const Model4 = memo(
	({ material, color, colorPickerActive, ...props }) => {
		const { nodes, materials } = useGLTF("/modelos/Cenefa04.gltf");

		return (
			<ModelBase
				material={material}
				color={color}
				colorPickerActive={colorPickerActive}
				nodes={nodes}
				materials={materials}
				geometryName="Material_04"
				geometryAluminio="Material_04_1"
				meshName="Material_04"
				{...props}
			/>
		);
	}
);
