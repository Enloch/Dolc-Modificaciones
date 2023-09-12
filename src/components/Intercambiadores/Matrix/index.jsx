import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  useEnvironment,
  Lightformer,
  Sky,
  RandomizedLight,
  AccumulativeShadows,
  SoftShadows,
  Stats,
} from "@react-three/drei";
import { Modelo } from "./MatrixIntercambiador";
import { Base } from "./Base";
import { Matriz3kv } from "./Matriz3";
import { Perfiles } from "./Perfiles";
import {
  ContRotador,
  CanvasContainer,
  RotadorMenuContainer,
  IntroContainer,
  IntroContent,
  IntroImage,
  IntroText,
  BotonExpandir,
  ImagenExpandir,
} from "./styles";
// import Menu from "./Menu";
import { MaterialesMetalizados, NombreMateriales } from "./Materiales";
const modelOptions = [
  { value: "matriz3_a_v_", label: "Matriz3 A" },
  { value: "matriz3_j_v_", label: "Matriz3 J" },
  // ... puedes agregar más modelos aquí si es necesario
];
export default function Intercambiador() {
  const {
    shadowMapSize,
    CambiarModelo,
    lightX,
    lightY,
    lightZ,
    Intensidad,
    left,
    right,
    top,
    bottom,
    near,
    far,
  } = useControls({
    CambiarModelo: { value: true, label: "Show Model" },
    lightX: { value: -20, min: -50, max: 50, step: 0.1 },
    lightY: { value: 15, min: -50, max: 50, step: 0.1 },
    lightZ: { value: 10, min: 1, max: 100, step: 0.1 },
    Intensidad: { value: 1, min: 0, max: 3, step: 0.1 },
    left: { value: -8.5, min: -50, max: 50, step: 0.1 },
    right: { value: 8.5, min: -50, max: 50, step: 0.1 },
    top: { value: 8.5, min: -50, max: 50, step: 0.1 },
    bottom: { value: -8.5, min: -50, max: 50, step: 0.1 },
    near: { value: 0.01, min: 0.01, max: 10, step: 0.01 },
    far: { value: 100, min: 1, max: 500, step: 1 },
    shadowMapSize: {
      value: 8192,
      options: [128, 256, 512, 1024, 2048, 4096, 8192],
      label: "Shadow Map Size",
    },
  });
  const [selectedMaterial, setSelectedMaterial] = useState(
    MaterialesMetalizados[0].name
  );
  const [selectedMetalness, setSelectedMetalness] = useState(
    MaterialesMetalizados[0].metalness
  );
  const [selectedRoughness, setSelectedRoughness] = useState(
    MaterialesMetalizados[0].roughness
  );
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [selectedModel, setSelectedModel] = useState("matriz3_j_v_");
  const applyChanges = () => {
    // Por ahora, esta función solo limpia la selección.
    // Si necesitas realizar alguna otra acción cuando se aplican los cambios, puedes agregarla aquí.
    setSelectedIndices([]);
  };

  return (
    <ContRotador>
      <CanvasContainer>
        <Canvas
          shadows
          style={{ position: "relative", top: 0, left: 0 }}
          camera={{
            position: [2.777, -1.686, 3.611],
            rotation: [0.843, 0.365, -0.149],
            fov: 25.361,
          }}
        >
          <Stats />
          <Environment files='/PBR_HDRI.hdr' intensity={0.3} />
          {/* <ambientLight intensity={0.3} /> */}
          <Sky sunPosition={[-10, 10, 10]} />
          <directionalLight
            position={[lightX, lightY, lightZ]}
            castShadow
            intensity={Intensidad}
            shadow-mapSize={shadowMapSize}
          >
            <orthographicCamera
              attach='shadow-camera'
              shadowBias={-0.005}
              args={[left, right, top, bottom, near, far]}
            />
          </directionalLight>
          <Base />
          {CambiarModelo ? (
            <Perfiles
              selectedMaterial={selectedMaterial}
              selectedModel={selectedModel}
              selectedIndices={selectedIndices}
              setSelectedIndices={setSelectedIndices}
              selectedMetalness={selectedMetalness}
              selectedRoughness={selectedRoughness}
            />
          ) : (
            <Matriz3kv />
          )}
        </Canvas>
      </CanvasContainer>
      <RotadorMenuContainer>
        {selectedIndices && selectedIndices.length > 0 && (
          <div>
            <select
              onChange={(e) => {
                setSelectedMaterial(MaterialesMetalizados[e.target.value].name),
                  setSelectedMetalness(
                    MaterialesMetalizados[e.target.value].metalness
                  );
                setSelectedRoughness(
                  MaterialesMetalizados[e.target.value].roughness
                );
              }}
            >
              {NombreMateriales.map((material, index) => (
                <option key={index} value={index}>
                  {material.nombre}
                </option>
              ))}
            </select>
            <button onClick={applyChanges}>Limpiar Cambios</button>
          </div>
        )}
      </RotadorMenuContainer>
    </ContRotador>
  );
}
