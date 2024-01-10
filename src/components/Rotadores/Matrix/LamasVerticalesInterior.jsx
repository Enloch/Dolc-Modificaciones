import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MaterialesMetalizados } from "./Materiales";
import useStore from "./store"; // Importa la tienda Zustand
import * as THREE from "three";
export function LamasVerticalesInterior(props) {
  const { nodes, materials } = useGLTF("/modelos/LamasVerticalesInterior.glb");
  const ref = useRef();
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const {
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    colorPickerActive,
    selectedMatrix1,
    selectedMatrix2,
    selectedMatrix3,
    selectedMatrix4,
    selectedMatrix5,
    selectedMatrix6,
    materialMalla1,
    materialMalla2,
    materialMalla3,
    materialMalla4,
    materialMalla5,
    materialMalla6,
    selectedGeo1Model1,
    selectedGeo1Model2,
    selectedGeo1Model3,
    selectedGeo1Model4,
    selectedGeo1Model5,
    selectedGeo1Model6,
    numModels,
    materialSource1,
    materialSource2,
    materialSource3,
    materialSource4,
    materialSource5,
    materialSource6,
    materialIndex1,
    materialIndex2,
    materialIndex3,
    materialIndex4,
    materialIndex5,
    materialIndex6,
  } = useStore();
  const Geo1Model1 = nodes[selectedGeo1Model1]?.geometry;
  const Geo1Model2 = nodes[selectedGeo1Model2]?.geometry;
  const Geo1Model3 = nodes[selectedGeo1Model3]?.geometry;
  const Geo1Model4 = nodes[selectedGeo1Model4]?.geometry;
  const Geo1Model5 = nodes[selectedGeo1Model5]?.geometry;
  const Geo1Model6 = nodes[selectedGeo1Model6]?.geometry;
  const MallasVerticales = [
    {
      geometria: Geo1Model1,
      material: materialMalla1,
      metalizado: Metalizado[materialIndex1],
      aspereza: Aspereza[materialIndex1],
      color: color1,
      posicion: selectedMatrix1.posicion,
      colorActivo: materialSource1,
    },
    {
      geometria: Geo1Model2,
      material: materialMalla2,
      metalizado: Metalizado[materialIndex2],
      aspereza: Aspereza[materialIndex2],
      color: color2,
      posicion: selectedMatrix2.posicion,
      colorActivo: materialSource2,
    },
    {
      geometria: Geo1Model3,
      material: materialMalla3,
      metalizado: Metalizado[materialIndex3],
      aspereza: Aspereza[materialIndex3],
      color: color3,
      posicion: selectedMatrix3.posicion,
      colorActivo: materialSource3,
    },
    {
      geometria: Geo1Model4,
      material: materialMalla4,
      metalizado: Metalizado[materialIndex4],
      aspereza: Aspereza[materialIndex4],
      color: color4,
      posicion: selectedMatrix4.posicion,
      colorActivo: materialSource4,
    },
    {
      geometria: Geo1Model5,
      material: materialMalla5,
      metalizado: Metalizado[materialIndex5],
      aspereza: Aspereza[materialIndex5],
      color: color5,
      posicion: selectedMatrix5.posicion,
      colorActivo: materialSource5,
    },
    {
      geometria: Geo1Model6,
      material: materialMalla6,
      metalizado: Metalizado[materialIndex6],
      aspereza: Aspereza[materialIndex6],
      color: color6,
      posicion: selectedMatrix6.posicion,
      colorActivo: materialSource6,
    },
  ];
  // Obtener los elementos iniciales basados en numModels
  const elementosIniciales = MallasVerticales.slice(0, numModels);

  // Crear un nuevo array para contener hasta 45 elementos
  const mallasRepetidas = [];
  let posicionAcumulada = 0;
  let desplazamientoX = 0;
  const incrementoUV = 0.05; // Desplazamiento UV como fracción del ancho de la textura

  while (mallasRepetidas.length < 90) {
    elementosIniciales.forEach((mallaOriginal) => {
      let nuevaMalla = { ...mallaOriginal, posicion: posicionAcumulada };

      // Asumiendo que nuevaMalla.material es una textura
      if (nuevaMalla.material instanceof THREE.Texture) {
        // Clonar la textura para tener una instancia única por malla
        const texturaClonada = nuevaMalla.material.clone();
        // Aplicar el desplazamiento UV
        texturaClonada.offset.set(desplazamientoX, desplazamientoX);
        texturaClonada.wrapS = THREE.MirroredRepeatWrapping;
        texturaClonada.wrapT = THREE.MirroredRepeatWrapping;
        texturaClonada.needsUpdate = true; // Indica que la textura ha sido actualizada

        // Asignar la textura clonada a la malla
        nuevaMalla.material = texturaClonada;
      }
      mallasRepetidas.push(nuevaMalla);
      posicionAcumulada += mallaOriginal.posicion;

      // Incrementar el desplazamiento UV para la siguiente malla
      if (desplazamientoX + incrementoUV > 1) {
        desplazamientoX = 0;
      } else {
        desplazamientoX += incrementoUV;
      }
    });
  }

  // Cortar el array a 45 elementos si excede
  const mallasFinales = mallasRepetidas.slice(0, 90);
  return (
    <group {...props} dispose={null}>
      {mallasFinales.map((malla, index) => (
        <mesh
          castShadow
          receiveShadow
          key={index}
          position={[malla.posicion, 0, 0]} // Ajustar la posición según la propiedad 'posicion'
          geometry={malla.geometria}
          onCreated={({ mesh }) => {
            mesh.layers.enable(1); // Asigna la malla a la capa 1
          }}
        >
          {malla.colorActivo === "colorPicker" ? (
            <meshStandardMaterial
              color={malla.color}
              metalness='0.5'
              roughness='0.5'
              map={null}
            />
          ) : (
            <meshStandardMaterial
              map={malla.material}
              roughness={malla.aspereza}
              metalness={malla.metalizado}
              color={"#FFFFFF"}
            />
          )}
        </mesh>
      ))}
    </group>
  );
}
