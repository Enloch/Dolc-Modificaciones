import React, { useState, useEffect, useRef } from "react";
import { useGLTF, useTexture, Outlines, useCursor } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Materiales, MaterialesMetalizados } from "./Materiales";
import useStore from "./store"; // Importa la tienda Zustand
export function Modelo({ modelId, ...props }) {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [hovered, setHover] = useState(false);
  useCursor(hovered);
  const [selected, setSelected] = useState(false);
  const { gl } = useThree();

  // Acceder a los estados y acciones necesarios desde la tienda Zustand
  const {
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,

    colorPickerActive,
  } = useStore();

  const {
    selectedMatrix1,
    selectedMatrix2,
    selectedMatrix3,
    selectedMatrix4,
    selectedMatrix5,
    selectedMatrix6,
    selectedModel1,
    selectedModel2,
    selectedModel3,
    selectedModel4,
    selectedModel5,
    selectedModel6,
    setSelectedModel1,
    setSelectedModel2,
    setSelectedModel3,
    setSelectedModel4,
    setSelectedModel5,
    setSelectedModel6,
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
    setMaterialMalla1,
    setMaterialMalla2,
    setMaterialMalla3,
    setMaterialMalla4,
    setMaterialMalla5,
    setMaterialMalla6,
    selectedGeo1Model1,
    selectedGeo2Model1,
    selectedGeo1Model2,
    selectedGeo2Model2,
    selectedGeo1Model3,
    selectedGeo2Model3,
    selectedGeo1Model4,
    selectedGeo2Model4,
    selectedGeo1Model5,
    selectedGeo2Model5,
    selectedGeo1Model6,
    selectedGeo2Model6,
    setSelectedGeo1Model1,
    setSelectedGeo2Model1,
    setSelectedGeo1Model2,
    setSelectedGeo2Model2,
    setSelectedGeo1Model3,
    setSelectedGeo2Model3,
    setSelectedGeo1Model4,
    setSelectedGeo2Model4,
    setSelectedGeo1Model5,
    setSelectedGeo2Model5,
    setSelectedGeo1Model6,
    setSelectedGeo2Model6,
  } = useStore();

  const Acabados = Materiales.map((material) => useTexture(material.map));
  const Metalizado = MaterialesMetalizados.map((metal) => metal.metalness);
  const Aspereza = MaterialesMetalizados.map((aspereza) => aspereza.roughness);
  const { nodes, materials } = useGLTF("/modelos/Leiva/LeivaRotador.glb");

  // Initialize state with the default geometries
  useEffect(() => {
    if (modelId === 1 && selectedMatrix1?.geometries) {
      setSelectedGeo1Model1(selectedMatrix1.geometries[0]);
      setSelectedGeo2Model1(selectedMatrix1.geometries[1]);
    } else if (modelId === 2 && selectedMatrix1?.geometries) {
      setSelectedGeo1Model2(selectedMatrix1.geometries[0]);
      setSelectedGeo2Model2(selectedMatrix1.geometries[1]);
    } else if (modelId === 3 && selectedMatrix1?.geometries) {
      setSelectedGeo1Model3(selectedMatrix1.geometries[0]);
      setSelectedGeo2Model3(selectedMatrix1.geometries[1]);
    } else if (modelId === 4 && selectedMatrix1?.geometries) {
      setSelectedGeo1Model4(selectedMatrix1.geometries[0]);
      setSelectedGeo2Model4(selectedMatrix1.geometries[1]);
    } else if (modelId === 5 && selectedMatrix1?.geometries) {
      setSelectedGeo1Model5(selectedMatrix1.geometries[0]);
      setSelectedGeo2Model5(selectedMatrix1.geometries[1]);
    } else if (modelId === 6 && selectedMatrix1?.geometries) {
      setSelectedGeo1Model6(selectedMatrix1.geometries[0]);
      setSelectedGeo2Model6(selectedMatrix1.geometries[1]);
    }
  }, [
    modelId,
    selectedMatrix1,
    selectedMatrix2,
    selectedMatrix3,
    selectedMatrix4,
    selectedMatrix5,
    selectedMatrix6,
  ]);
  const Geo1Model1 = nodes[selectedGeo1Model1]?.geometry;
  const Geo2Model1 = nodes[selectedGeo2Model1]?.geometry;
  const Geo1Model2 = nodes[selectedGeo1Model1]?.geometry;
  const Geo2Model2 = nodes[selectedGeo2Model1]?.geometry;
  const Geo1Model3 = nodes[selectedGeo1Model1]?.geometry;
  const Geo2Model3 = nodes[selectedGeo2Model1]?.geometry;
  const Geo1Model4 = nodes[selectedGeo1Model1]?.geometry;
  const Geo2Model4 = nodes[selectedGeo2Model1]?.geometry;
  const Geo1Model5 = nodes[selectedGeo1Model1]?.geometry;
  const Geo2Model5 = nodes[selectedGeo2Model1]?.geometry;
  const Geo1Model6 = nodes[selectedGeo1Model1]?.geometry;
  const Geo2Model6 = nodes[selectedGeo2Model1]?.geometry;
  useEffect(() => {
    setMaterialMalla1(Acabados[materialIndex1]);
    setMaterialMalla2(Acabados[materialIndex2]);
    setMaterialMalla3(Acabados[materialIndex3]);
    setMaterialMalla4(Acabados[materialIndex4]);
    setMaterialMalla5(Acabados[materialIndex5]);
    setMaterialMalla6(Acabados[materialIndex6]);
  }, [
    materialIndex1,
    materialIndex2,
    materialIndex3,
    materialIndex4,
    materialIndex5,
    materialIndex6,
  ]);
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target === ref1.current) {
        setSelectedModel1((prevSelected) => !prevSelected);
      } else if (event.target === ref2.current) {
        setSelectedModel2((prevSelected) => !prevSelected);
      } else if (event.target === ref3.current) {
        setSelectedModel3((prevSelected) => !prevSelected);
      } else if (event.target === ref4.current) {
        setSelectedModel4((prevSelected) => !prevSelected);
      } else if (event.target === ref5.current) {
        setSelectedModel5((prevSelected) => !prevSelected);
      } else if (event.target === ref6.current) {
        setSelectedModel6((prevSelected) => !prevSelected);
      }
    };

    gl.domElement.addEventListener("pointerdown", handleClick);

    return () => {
      gl.domElement.removeEventListener("pointerdown", handleClick);
    };
  }, [
    gl,
    setSelectedModel1,
    setSelectedModel2,
    setSelectedModel3,
    setSelectedModel4,
    setSelectedModel5,
    setSelectedModel6,
  ]);

  return (
    <group {...props} dispose={null}>
      {modelId === 1 && (
        <>
          <mesh
            ref={ref1}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
            onPointerDown={(e) => {
              setSelectedModel1(!selectedModel1); // Actualiza el modelo seleccionado
            }}
            castShadow
            receiveShadow
            geometry={Geo1Model1}
          >
            {materialSource1 === "colorPicker" ? (
              <meshStandardMaterial
                color={selectedModel1 ? "#f60000" : color1}
                opacity={selectedModel1 ? 0.1 : 1}
                metalness='0.5'
                roughness='0.5'
                map={null}
              />
            ) : (
              <meshPhysicalMaterial
                map={Acabados[materialIndex1]}
                roughness={Aspereza[materialIndex1]}
                metalness={Metalizado[materialIndex1]}
                color={selectedModel1 ? "#f60000" : "#FFFFFF"}
                opacity={selectedModel1 ? 0.1 : 1}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={Geo2Model1}
            material={materials.Aluminio}
          />
        </>
      )}
      {modelId === 2 && (
        <>
          <mesh
            ref={ref2}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
            onPointerDown={(e) => {
              setSelectedModel2(!selectedModel2); // Actualiza el modelo seleccionado
            }}
            castShadow
            receiveShadow
            geometry={Geo1Model2}
          >
            {materialSource2 === "colorPicker" ? (
              <meshStandardMaterial
                color={selectedModel2 ? "#f60000" : color2}
                opacity={selectedModel2 ? 0.1 : 1}
                metalness='0.5'
                roughness='0.5'
                map={null}
              />
            ) : (
              <meshPhysicalMaterial
                map={Acabados[materialIndex2]}
                roughness={Aspereza[materialIndex2]}
                metalness={Metalizado[materialIndex2]}
                color={selectedModel2 ? "#f60000" : "#ffffff"}
                opacity={selectedModel2 ? 0.1 : 1}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={Geo2Model2}
            material={materials.Aluminio}
          />
        </>
      )}
      {modelId === 3 && (
        <>
          <mesh
            ref={ref3}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
            onPointerDown={(e) => {
              setSelectedModel3(!selectedModel3); // Actualiza el modelo seleccionado
            }}
            castShadow
            receiveShadow
            geometry={Geo1Model3}
          >
            {materialSource3 === "colorPicker" ? (
              <meshStandardMaterial
                color={selectedModel3 ? "#f60000" : color3}
                opacity={selectedModel3 ? 0.1 : 1}
                metalness='0.5'
                roughness='0.5'
                map={null}
              />
            ) : (
              <meshPhysicalMaterial
                map={Acabados[materialIndex3]}
                roughness={Aspereza[materialIndex3]}
                metalness={Metalizado[materialIndex3]}
                color={selectedModel3 ? "#f60000" : "#FFFFFF"}
                opacity={selectedModel3 ? 0.1 : 1}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={Geo2Model3}
            material={materials.Aluminio}
          />
        </>
      )}
      {modelId === 4 && (
        <>
          <mesh
            ref={ref4}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
            onPointerDown={(e) => {
              setSelectedModel4(!selectedModel4); // Actualiza el modelo seleccionado
            }}
            castShadow
            receiveShadow
            geometry={Geo1Model4}
          >
            {materialSource4 === "colorPicker" ? (
              <meshStandardMaterial
                color={selectedModel4 ? "#f60000" : color4}
                opacity={selectedModel4 ? 0.5 : 1}
                metalness='0.5'
                roughness='0.5'
                map={null}
              />
            ) : (
              <meshPhysicalMaterial
                map={Acabados[materialIndex4]}
                roughness={Aspereza[materialIndex4]}
                metalness={Metalizado[materialIndex4]}
                color={selectedModel4 ? "#f60000" : "#FFFFFF"}
                opacity={selectedModel4 ? 0.1 : 1}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={Geo2Model4}
            material={materials.Aluminio}
          />
        </>
      )}
      {modelId === 5 && (
        <>
          <mesh
            ref={ref5}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
            onPointerDown={(e) => {
              setSelectedModel5(!selectedModel5); // Actualiza el modelo seleccionado
            }}
            castShadow
            receiveShadow
            geometry={Geo1Model5}
          >
            {materialSource5 === "colorPicker" ? (
              <meshStandardMaterial
                color={selectedModel5 ? "#f60000" : color5}
                opacity={selectedModel5 ? 0.5 : 1}
                metalness='0.5'
                roughness='0.5'
                map={null}
              />
            ) : (
              <meshPhysicalMaterial
                map={Acabados[materialIndex5]}
                roughness={Aspereza[materialIndex5]}
                metalness={Metalizado[materialIndex5]}
                color={selectedModel5 ? "#f60000" : "#FFFFFF"}
                opacity={selectedModel5 ? 0.1 : 1}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={Geo2Model5}
            material={materials.Aluminio}
          />
        </>
      )}
      {modelId === 6 && (
        <>
          <mesh
            ref={ref6}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
            onPointerDown={(e) => {
              setSelectedModel6(!selectedModel6); // Actualiza el modelo seleccionado
            }}
            castShadow
            receiveShadow
            geometry={Geo1Model6}
          >
            {materialSource6 === "colorPicker" ? (
              <meshStandardMaterial
                color={selectedModel6 ? "#f60000" : color6}
                opacity={selectedModel6 ? 0.5 : 1}
                metalness='0.5'
                roughness='0.5'
                map={null}
              />
            ) : (
              <meshPhysicalMaterial
                map={Acabados[materialIndex6]}
                roughness={Aspereza[materialIndex6]}
                metalness={Metalizado[materialIndex6]}
                color={selectedModel6 ? "#f60000" : "#FFFFFF"}
                opacity={selectedModel6 ? 0.1 : 1}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={Geo2Model6}
            material={materials.Aluminio}
          />
        </>
      )}
    </group>
  );
}
