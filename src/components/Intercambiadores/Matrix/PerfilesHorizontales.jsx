import React, { useState } from "react";
import { useGLTF, useTexture, Outlines } from "@react-three/drei";
import * as THREE from "three";

export function PerfilesHorizontales({
  selectedMaterial,
  selectedModel,
  selectedIndices,
  setSelectedIndices,
  selectedMetalness,
  selectedRoughness,
}) {
  console.log("Modelo?", selectedModel);
  const { nodes: nodesA } = useGLTF(
    "/modelos/Matrix/Horizontal/Matriz3_A_Hor.gltf"
  );
  const { nodes: nodesB } = useGLTF(
    "/modelos/Matrix/Horizontal/Matriz3_J_Hor.gltf"
  );
  const { nodes: nodesC } = useGLTF(
    "/modelos/Matrix/Horizontal/Matriz4_A_Hor.gltf"
  );
  const { nodes: nodesD } = useGLTF(
    "/modelos/Matrix/Horizontal/Matriz4_B_Hor.gltf"
  );
  const colorMap = useTexture("/texturas/BurdeosMate.webp");
  const ApplyMap = useTexture(selectedMaterial);

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
  // Cambia el estado a un objeto

  const [hoveredMeshes, setHoveredMeshes] = useState({});

  // Función para actualizar el estado de "hover" de una malla específica
  const handleHover = (name, isHovered) => {
    setHoveredMeshes((prev) => ({
      ...prev,
      [name]: isHovered,
    }));
  };
  return (
    <group dispose={null}>
      {Object.entries(nodesA).map(([name, meshNodeA]) => {
        if (meshNodeA.isMesh) {
          let targetNodes;
          switch (selectedModel) {
            case "matriz3_a_h_":
              targetNodes = nodesA;
              break;
            case "matriz3_j_h_":
              targetNodes = nodesB;
              break;
            case "matriz4_a_h_":
              targetNodes = nodesC;
              break;
            case "matriz4_b_h_":
              targetNodes = nodesD;
              break;
            default:
              targetNodes = nodesA;
          }

          const meshColor = hoveredMeshes[name] ? "red" : "white";
          const isClicked = selectedIndices.includes(name);
          const geometry = isClicked
            ? targetNodes[`${selectedModel}${name.split("_h_")[1]}`].geometry
            : meshNodeA.geometry;
          const materialProps = isClicked
            ? {
                color: meshColor, // Añade el color aquí
                map: ApplyMap,
                metalness: selectedMetalness,
                roughness: selectedRoughness,
              }
            : {
                color: meshColor, // Añade el color aquí
                map: colorMap,
              };

          return (
            <mesh
              castShadow
              receiveShadow
              key={name}
              geometry={geometry}
              onPointerDown={(event) => onMeshClick(event, name)}
              onPointerOver={() => handleHover(name, true)}
              onPointerOut={() => handleHover(name, false)}
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

useGLTF.preload("/modelos/Matrix/Horizontal/Matriz3_A_Hor.gltf");
useGLTF.preload("/modelos/Matrix/Horizontal/Matriz3_J_Hor.gltf");
useGLTF.preload("/modelos/Matrix/Horizontal/Matriz4_A_Hor.gltf");
useGLTF.preload("/modelos/Matrix/Horizontal/Matriz4_B_Hor.gltf");
