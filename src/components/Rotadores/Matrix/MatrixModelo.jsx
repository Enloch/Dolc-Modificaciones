import React, { useState, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Materiales, MaterialesMetalizados } from "./Materiales";
export function Modelo({
  material,
  metalness,
  roughness,
  color,
  colorPickerActive,
  selectedMatrix,
  ...props
}) {
  const Acabados = Materiales.map((material) => useTexture(material.map));
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const { nodes, materials } = useGLTF("/modelos/MatrixRotador.glb");
  const [selectedGeometry1, setSelectedGeometry1] = useState("matriz3_m_1");
  const [selectedGeometry2, setSelectedGeometry2] = useState("matriz3_m_2");
  // Initialize state with the default geometries
  useEffect(() => {
    if (selectedMatrix?.geometries) {
      setSelectedGeometry1(selectedMatrix.geometries[0]);
      setSelectedGeometry2(selectedMatrix.geometries[1]);
    }
  }, [selectedMatrix]);
  const geometry1 = nodes[selectedGeometry1]?.geometry;
  const geometry2 = nodes[selectedGeometry2]?.geometry;
  console.log("geometry1: ", selectedGeometry1);
  console.log("geometry2: ", selectedGeometry2);
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
          <meshStandardMaterial color={color} metalness='0.5' roughness='0.5' />
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
// useGLTF.preload("/modelos/MatrixRotador.glb");
