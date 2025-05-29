import React, { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera, SoftShadows } from "@react-three/drei";
import * as THREE from "three";
import { EscenaTXT } from "./EscenaTXT";
import { useConfigStore } from "./store";
import { Leva, useControls, folder } from "leva";

const rotacionX = 0;
const rotacionY = 0;
// const rotacionZ = 1;
const degToRad = (deg) => (deg * Math.PI) / 180;
const rotacionZ = degToRad(291);
// const rotacionZ = 244.4;

export function CanvasSetup() {
  const [currentFrameLoop, setCurrentFrameLoop] = useState("always");
  const [renderer, setRenderer] = useState();
  const { materialPorcelanicoSeleccionado } = useConfigStore();
  const cameraRef = useRef();
  const directionalLightRef = useRef();
  const lightTargetRef = useRef();

  useEffect(() => {
    setCurrentFrameLoop("always");
    const timer = setTimeout(() => {
      setCurrentFrameLoop("demand");
    }, 5000);
    return () => clearTimeout(timer);
  }, [materialPorcelanicoSeleccionado]);

  useEffect(() => {
    if (directionalLightRef.current) {
      directionalLightRef.current.target.position.set(5, 5, 0);
      directionalLightRef.current.target.updateMatrixWorld();
    }
  }, []);

  // Añadir un renderizado forzado al inicio para asegurar que todo se renderice correctamente
  useEffect(() => {
    // Forzar un renderizado después de un breve retraso
    const timer = setTimeout(() => {
      setCurrentFrameLoop((prev) => (prev === "always" ? "demand" : "always"));
      // Volver al estado original después de otro breve retraso
      setTimeout(() => {
        setCurrentFrameLoop("always");
      }, 100);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const { rotacionA } = useControls({
    rotacionA: {
      value: 0, // Valor en grados
      min: 0,
      max: 360,
      step: 1,
    },
  });

  // Convertir a radianes para usarlo en el componente
  const rotacionARad = degToRad(rotacionA);
  return (
    <>
      {/* <Leva /> */}
      <Canvas
        // flat
        frameloop={currentFrameLoop}
        shadows={"soft"}
      >
        <PerspectiveCamera
          makeDefault={true}
          ref={cameraRef}
          far={25}
          near={0.1}
          fov={31.417}
          position={[10, 6.6, 9.4]}
          rotation={[0.005, 0.973, -0.004]}
        />
        <PerspectiveCamera
          // makeDefault={true}
          ref={cameraRef}
          far={25}
          near={0.1}
          fov={31.417}
          position={[3.12, 5.65, 11.92]}
          rotation={[0, 0, 0]}
        />
        {/* <SoftShadows size={40} samples={100} focus={4} /> */}
        {/* Componente 3D */}
        <EscenaTXT layer />
        {/* Entorno */}
        <Environment
          files="/HDRI INTERCAMBIADOR TXT.hdr"
          background={true}
          environmentIntensity={1}
          backgroundIntensity={1}
          environmentRotation={[rotacionX, rotacionARad, rotacionY]}
          backgroundRotation={[rotacionX, rotacionARad, rotacionY]}
          ground={true}
          encoding={3001}
        />
        <DirectionalLightWithTarget />
      </Canvas>
    </>
  );
}
function DirectionalLightWithTarget() {
  const lightRef = useRef();
  const targetRef = useRef();
  const { scene } = useThree();

  // Configuramos el target de la luz cuando los refs están disponibles
  useEffect(() => {
    if (lightRef.current && targetRef.current) {
      lightRef.current.target = targetRef.current;
      scene.add(targetRef.current); // Es necesario añadir el target a la escena
    }
  }, [scene]);

  return (
    <>
      <directionalLight
        ref={lightRef}
        castShadow
        intensity={4}
        position={[10, 15, 16]}
        shadow-mapSize={[4096, 4096]}
        shadow-bias={-0.0001}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      {/* Este objeto actúa como el target de la luz */}
      {/* <directionalLight ref={lightRef} intensity={2} position={[20, 3, 8]} /> */}
      <object3D ref={targetRef} position={[0, 10, 7]} />
    </>
  );
}
{
  /* <directionalLight
ref={lightRef}
castShadow
intensity={2}
position={[-10, 15, 16]}
shadow-mapSize={[4096, 4096]}
shadow-bias={-0.0001}
shadow-camera-left={-15}
shadow-camera-right={15}
shadow-camera-top={15}
shadow-camera-bottom={-15}
shadow-camera-near={0.1}
shadow-camera-far={50}
/> */
}
