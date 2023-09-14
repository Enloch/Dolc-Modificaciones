import React, { useState } from "react";
import { useGLTF, useTexture, Outlines } from "@react-three/drei";
import * as THREE from "three";

export function PerfilesVerticales({
  selectedMaterial,
  selectedModel,
  selectedIndices,
  setSelectedIndices,
  selectedMetalness,
  selectedRoughness,
  selectedColor,
}) {
  console.log("Material?", selectedMaterial);
  const { nodes: nodesA } = useGLTF(
    "/modelos/Matrix/Vertical/Matriz3_A_Vert.gltf"
  );
  const { nodes: nodesB } = useGLTF(
    "/modelos/Matrix/Vertical/Matriz3_J_Vert.gltf"
  );
  const { nodes: nodesC } = useGLTF(
    "/modelos/Matrix/Vertical/Matriz1_A_Vert.gltf"
  );
  const { nodes: nodesD } = useGLTF(
    "/modelos/Matrix/Vertical/Matriz1_B_Vert.gltf"
  );
  const BaseMap = useTexture("/texturas/BurdeosMate.jpg");
  const SwappMap = useTexture("/texturas/Blanco.jpg");
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
            case "matriz3_a_v_":
              targetNodes = nodesA;
              break;
            case "matriz3_j_v_":
              targetNodes = nodesB;
              break;
            case "matriz1_a_v_":
              targetNodes = nodesC;
              break;
            case "matriz1_b_v_":
              targetNodes = nodesD;
              break;
            default:
              targetNodes = nodesA;
          }
          // Determina el color en función del estado de "hover"
          const meshColor = hoveredMeshes[name] ? "red" : selectedColor;
          const meshColorUnder = hoveredMeshes[name] ? "red" : "white";
          const mapStatus = hoveredMeshes[name] ? SwappMap : BaseMap;
          const isClicked = selectedIndices.includes(name);
          const geometry = isClicked
            ? targetNodes[`${selectedModel}${name.split("_v_")[1]}`].geometry
            : meshNodeA.geometry;
          const materialProps = isClicked
            ? {
                color: meshColor, // Añade el color aquí
                map: ApplyMap,
                metalness: selectedMetalness,
                roughness: selectedRoughness,
              }
            : {
                color: meshColorUnder, // Añade el color aquí
                map: mapStatus,
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

useGLTF.preload("/modelos/Matrix/Matriz1_A_Vert.gltf");
useGLTF.preload("/modelos/Matrix/Matriz1_B_Vert.gltf");
useGLTF.preload("/modelos/Matrix/Matriz3_A_Vert.gltf");
useGLTF.preload("/modelos/Matrix/Matriz3_J_Vert.gltf");
