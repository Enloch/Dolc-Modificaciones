import React, { useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Materiales, MaterialesMetalizados } from "./Materiales";

export function Model1({ material, metalness, roughness, ...props }) {
  const Acabados = Materiales.map((material) => useTexture(material.map));
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const { nodes, materials } = useGLTF("/modelos/Cenefa01.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        name='Material_01'
        castShadow
        receiveShadow
        geometry={nodes.Material_01.geometry}
      >
        {/* Aplica la textura actual a este material */}

        <meshStandardMaterial
          map={Acabados[material]}
          roughness={Aspereza[metalness]}
          metalness={Metalizado[roughness]}
        />
        {console.log("Acabado? ", Acabados[material])}
      </mesh>
      <mesh
        name='Material_01_1'
        castShadow
        receiveShadow
        geometry={nodes.Material_01_1.geometry}
        material={materials.Aluminio}
      />
    </group>
  );
}

useGLTF.preload("/modelos/Cenefa01.gltf");
export function Model2({ material, metalness, roughness, ...props }) {
  const Acabados = Materiales.map((material) => useTexture(material.map));
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const { nodes, materials } = useGLTF("/modelos/Cenefa02.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Material_02'
        castShadow
        receiveShadow
        geometry={nodes.Material_02.geometry}
      >
        {/* Aplica la textura actual a este material */}
        <meshStandardMaterial
          map={Acabados[material]}
          roughness={Aspereza[metalness]}
          metalness={Metalizado[roughness]}
        />
      </mesh>
      <mesh
        name='Material_02_1'
        castShadow
        receiveShadow
        geometry={nodes.Material_02_1.geometry}
        material={materials.Aluminio}
      />
    </group>
  );
}

useGLTF.preload("/modelos/Cenefa02.gltf");

export function Model3({ material, metalness, roughness, ...props }) {
  const Acabados = Materiales.map((material) => useTexture(material.map));
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const { nodes, materials } = useGLTF("/modelos/Cenefa03.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Material_03'
        castShadow
        receiveShadow
        geometry={nodes.Material_03.geometry}
      >
        {/* Aplica la textura actual a este material */}
        <meshStandardMaterial
          map={Acabados[material]}
          roughness={Aspereza[metalness]}
          metalness={Metalizado[roughness]}
        />
      </mesh>
      <mesh
        name='Material_03_1'
        castShadow
        receiveShadow
        geometry={nodes.Material_03_1.geometry}
        material={materials.Aluminio}
      />
    </group>
  );
}

useGLTF.preload("/modelos/Cenefa03.gltf");

export function Model4({ material, metalness, roughness, ...props }) {
  const Acabados = Materiales.map((material) => useTexture(material.map));
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const { nodes, materials } = useGLTF("/modelos/Cenefa04.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Material_04'
        castShadow
        receiveShadow
        geometry={nodes.Material_04.geometry}
      >
        {/* Aplica la textura actual a este material */}
        <meshStandardMaterial
          map={Acabados[material]}
          roughness={Aspereza[metalness]}
          metalness={Metalizado[roughness]}
        />
      </mesh>
      <mesh
        name='Material_04_1'
        castShadow
        receiveShadow
        geometry={nodes.Material_04_1.geometry}
        material={materials.Aluminio}
      />
    </group>
  );
}

useGLTF.preload("/modelos/Cenefa04.gltf");
