import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Perfiles({
  selectedMaterial,
  selectedModel,
  selectedIndices,
  setSelectedIndices,
  selectedMetalness,
  selectedRoughness,
}) {
  console.log("Material?", selectedMaterial);
  const { nodes: nodesA } = useGLTF("/modelos/Matrix/Matriz3_A_Vert.gltf");
  const { nodes: nodesB } = useGLTF("/modelos/Matrix/Matriz3_J_Vert.gltf");
  const colorMap = useTexture("/texturas/Matrix/BurdeosMate.webp");
  const ApplyMap = useTexture(selectedMaterial);
  console.log("ApplyMap", ApplyMap);
  const newMaterial = new THREE.MeshStandardMaterial({ map: colorMap });

  const onMeshClick = (event, name) => {
    event.stopPropagation();
    setSelectedIndices((prev) => {
      if (prev.includes(name)) {
        return prev.filter((n) => n !== name); // Elimina la malla de la lista si ya está seleccionada
      } else {
        return [...prev, name]; // Agrega la nueva malla a la selección
      }
    });
  };

  return (
    <group dispose={null}>
      {Object.entries(nodesA).map(([name, meshNodeA]) => {
        if (meshNodeA.isMesh) {
          const isClicked = selectedIndices.includes(name);
          const geometry = isClicked
            ? nodesB[`${selectedModel}${name.split("_v_")[1]}`].geometry
            : meshNodeA.geometry;
          const materialProps = isClicked
            ? {
                map: ApplyMap,
                metalness: selectedMetalness,
                roughness: selectedRoughness,
              }
            : { map: colorMap };
          return (
            <mesh
              castShadow
              receiveShadow
              key={name}
              geometry={geometry}
              onPointerDown={(event) => onMeshClick(event, name)}
            >
              <meshStandardMaterial attach='material' {...materialProps} />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload("/modelos/Matrix/Matriz3_A_Vert.gltf");
useGLTF.preload("/modelos/Matrix/Matriz3_J_Vert.gltf");
