import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { MaterialesMetalizados } from "./Materiales";
import useStore from "./store"; // Importa la tienda Zustand
import * as THREE from "three";
export function Interior(props) {
  const { nodes, materials } = useGLTF("/modelos/MatrixInterior.glb");
  useEffect(() => {
    if (materials["Dormitorio plano"]) {
      materials["Dormitorio plano"].transparent = true;
      materials["Dormitorio plano"].opacity = 0.4; // Ajusta esto para controlar la mezcla
      materials["Dormitorio plano"].blendMode = THREE.AdditiveBlending;
    }
  }, [materials]);

  return (
    <group {...props} dispose={null} position={[0, 0, -0.2]}>
      <mesh
        geometry={nodes.Dormitorio_copia.geometry}
        material={materials["Dormitorio copia"]}
      />
      <mesh
        geometry={nodes.Dormitorio_Plano.geometry}
        material={materials["Dormitorio plano"]}
      />
    </group>
  );
}
