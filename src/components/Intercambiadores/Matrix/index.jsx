import React, { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import {
  OrbitControls,
  Environment,
  Sky,
  Stats,
  PerformanceMonitor,
} from "@react-three/drei";
import { Base } from "./Base";
import { PerfilesVerticales } from "./PerfilesVerticales";
import { PerfilesHorizontales } from "./PerfilesHorizontales";
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
  MenuContainer,
  MenuContainer2,
  MaterialButton,
  MaterialImage,
  MaterialTextContainer,
  MaterialText,
  ModelImage,
  ModelTitulo,
  Titulo,
} from "./styles";
// import Menu from "./Menu";
import {
  MaterialesMetalizados,
  NombreMateriales,
  MaterialesMetalizadosHorizontal,
} from "./Materiales";
const modelTypes = [
  { value: "vertical", label: "Vertical" },
  { value: "horizontal", label: "Horizontal" },
];
const modelVerticalOptions = [
  { value: "matriz1_a_v_", label: "Matriz1 A" },
  { value: "matriz1_b_v_", label: "Matriz1 B" },
  { value: "matriz3_a_v_", label: "Matriz3 A" },
  { value: "matriz3_j_v_", label: "Matriz3 J" },
  // ... puedes agregar más modelos aquí si es necesario
];
const modelHorizontalOptions = [
  { value: "matriz3_a_h_", label: "Matriz3 A" },
  { value: "matriz3_j_h_", label: "Matriz3 j" },
  { value: "matriz4_a_h_", label: "Matriz4 A" },
  { value: "matriz4_b_h_", label: "Matriz4 B" },
  // ... puedes agregar más modelos aquí si es necesario
];

export default function Intercambiador() {
  const [modelType, setModelType] = useState("vertical");
  const initialMaterials =
    modelType === "vertical"
      ? MaterialesMetalizados
      : MaterialesMetalizadosHorizontal;
  const [selectedMaterial, setSelectedMaterial] = useState(
    initialMaterials[16].name
  );
  const [selectedMetalness, setSelectedMetalness] = useState(
    initialMaterials[16].metalness
  );
  const [selectedRoughness, setSelectedRoughness] = useState(
    initialMaterials[16].roughness
  );
  const [selectedColor, setSelectedColor] = useState(
    initialMaterials[16].color
  );
  const [selectedIndices, setSelectedIndices] = useState([]);
  useEffect(() => {
    if (modelType === "vertical") {
      setSelectedModel(modelVerticalOptions[0].value);
    } else if (modelType === "horizontal") {
      setSelectedModel(modelHorizontalOptions[0].value);
    }
  }, [modelType]);
  const [selectedModel, setSelectedModel] = useState("matriz3_j_v_");
  const applyChanges = () => {
    // Por ahora, esta función solo limpia la selección.
    // Si necesitas realizar alguna otra acción cuando se aplican los cambios, puedes agregarla aquí.
    setSelectedIndices([]);
  };
  const [dpr, setDpr] = useState(1.5);
  const [showMetales, setShowMetales] = useState(false);
  const [showMaderas, setShowMaderas] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleMaterialChange = (index) => {
    const materials =
      modelType === "vertical"
        ? MaterialesMetalizados
        : MaterialesMetalizadosHorizontal;
    setSelectedMaterial(materials[index].name);
    setSelectedMetalness(materials[index].metalness);
    setSelectedRoughness(materials[index].roughness);
    setSelectedColor(materials[index].color);
  };

  const handleColorChange = (color) => {
    // Aquí puedes manejar el cambio de color según lo necesites
    setSelectedColor(color.hex); // ejemplo si usas la librería 'react-color' y necesitas el color en formato hexadecimal
  };
  return (
    <ContRotador>
      <CanvasContainer>
        <Canvas
          frameloop='demand'
          shadows
          style={{ position: "relative", top: 0, left: 0 }}
          camera={{
            position: [2.777, -1.686, 3.611],
            rotation: [0.843, 0.365, -0.149],
            fov: 25.361,
          }}
        >
          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
          ></PerformanceMonitor>
          {/* <Stats /> */}
          <Environment files='/PBR_HDRI.hdr' intensity={0.3} />
          {/* <ambientLight intensity={0.3} /> */}
          <Sky sunPosition={[-10, 10, 10]} />
          <directionalLight
            position={[-20, 20, 5]}
            castShadow
            intensity={2}
            shadow-mapSize={8192}
          >
            <orthographicCamera
              attach='shadow-camera'
              shadowBias={-0.005}
              args={[-8.5, 8.5, 8.5, -8.5, 0.01, 100]}
            />
          </directionalLight>
          <Suspense fallback={null}>
            <Base />
            {modelType === "vertical" ? (
              <PerfilesVerticales
                selectedMaterial={selectedMaterial}
                selectedModel={selectedModel}
                selectedIndices={selectedIndices}
                setSelectedIndices={setSelectedIndices}
                selectedMetalness={selectedMetalness}
                selectedRoughness={selectedRoughness}
                selectedColor={selectedColor}
              />
            ) : (
              <PerfilesHorizontales
                selectedMaterial={selectedMaterial}
                selectedModel={selectedModel}
                selectedIndices={selectedIndices}
                setSelectedIndices={setSelectedIndices}
                selectedMetalness={selectedMetalness}
                selectedRoughness={selectedRoughness}
                selectedColor={selectedColor}
              />
            )}
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <RotadorMenuContainer>
        <select onChange={(e) => setModelType(e.target.value)}>
          {modelTypes.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {selectedIndices && selectedIndices.length > 0 && (
          <div>
            <select onChange={(e) => setSelectedModel(e.target.value)}>
              {modelType === "vertical"
                ? modelVerticalOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))
                : modelHorizontalOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
            </select>
            <div className='metales'>
              <Titulo
                onClick={() => (
                  setShowMetales(!showMetales),
                  setShowMaderas(false),
                  setShowColorPicker(false),
                  setColorPickerActive(false)
                )}
              >
                Metales
              </Titulo>
              <MenuContainer2 visible={showMetales}>
                {NombreMateriales.slice(0, 18).map((material, index) => (
                  <MaterialButton
                    key={index}
                    onClick={() => handleMaterialChange(index)}
                  >
                    <MaterialImage
                      src={material.textura}
                      alt={`Material ${material.nombre}`}
                    />
                    <MaterialTextContainer>
                      <MaterialText>{material.nombre}</MaterialText>
                    </MaterialTextContainer>
                  </MaterialButton>
                ))}
              </MenuContainer2>
              <Titulo
                onClick={() => (
                  setShowMaderas(!showMaderas),
                  setShowMetales(false),
                  setShowColorPicker(false),
                  setColorPickerActive(false)
                )}
              >
                Maderas
              </Titulo>
              <MenuContainer2 visible={showMaderas}>
                {NombreMateriales.slice(18, 22).map((material, index) => (
                  <MaterialButton
                    key={index}
                    onClick={() => handleMaterialChange(index + 18)}
                  >
                    <MaterialImage
                      src={material.textura}
                      alt={`Material ${material.nombre}`}
                    />
                    <MaterialTextContainer>
                      <MaterialText>{material.nombre}</MaterialText>
                    </MaterialTextContainer>
                  </MaterialButton>
                ))}
              </MenuContainer2>
            </div>
            <button onClick={applyChanges}>Limpiar Cambios</button>
          </div>
        )}
      </RotadorMenuContainer>
    </ContRotador>
  );
}

// const {
//   shadowMapSize,

//   lightX,
//   lightY,
//   lightZ,
//   Intensidad,
//   left,
//   right,
//   top,
//   bottom,
//   near,
//   far,
// } = useControls({
//   lightX: { value: -20, min: -50, max: 50, step: 0.1 },
//   lightY: { value: 20, min: -50, max: 50, step: 0.1 },
//   lightZ: { value: 5, min: 1, max: 100, step: 0.1 },
//   Intensidad: { value: 2, min: 0, max: 3, step: 0.1 },
//   left: { value: -8.5, min: -50, max: 50, step: 0.1 },
//   right: { value: 8.5, min: -50, max: 50, step: 0.1 },
//   top: { value: 8.5, min: -50, max: 50, step: 0.1 },
//   bottom: { value: -8.5, min: -50, max: 50, step: 0.1 },
//   near: { value: 0.01, min: 0.01, max: 10, step: 0.01 },
//   far: { value: 100, min: 1, max: 500, step: 1 },
//   shadowMapSize: {
//     value: 8192,
//     options: [128, 256, 512, 1024, 2048, 4096, 8192],
//     label: "Shadow Map Size",
//   },
// });
