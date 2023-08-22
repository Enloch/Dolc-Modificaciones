import React, { useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Materiales, MaterialesMetalizados } from "./Materiales";
export function Modelo({
  material,
  metalness,
  roughness,
  color,
  colorPickerActive,
  ...props
}) {
  const Acabados = Materiales.map((material) => useTexture(material.map));
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const { nodes, materials } = useGLTF("/modelos/MatrixRotador.glb");
  // Initialize state with the default geometries
  const selectedGeometry1 = "matriz3_m_1";
  const selectedGeometry2 = "matriz3_m_2";
  const geometry1 = nodes[selectedGeometry1].geometry;
  const geometry2 = nodes[selectedGeometry2].geometry;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={geometry1}>
        {!colorPickerActive ? (
          <meshPhysicalMaterial
            map={Acabados[material]}
            roughness={Aspereza[material]}
            metalness={Metalizado[material]}
            color={null}
          />
        ) : (
          <meshStandardMaterial color={color} metalness='0.5' />
        )}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry2}
        material={materials.Aluminio}
      />
    </group>
  );
}
useGLTF.preload("/modelos/MatrixRotador.glb");
