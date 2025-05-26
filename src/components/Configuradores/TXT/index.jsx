import { useRef, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  Sky,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { EffectComposer, SSAO, ToneMapping } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { EscenaTXT } from "./EscenaTXT";
let rotacionX = 0;
let rotacionY = 0;
let rotacionZ = 244.4;

// Componente para la luz direccional con target
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
        intensity={2}
        position={[-25, 7, 16]}
        shadow-mapSize={[4096, 4096]}
        shadow-bias={-0.001}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      {/* Este objeto actúa como el target de la luz */}
      <object3D ref={targetRef} position={[0, 0, 0]} />
    </>
  );
}

export default function Escena3DTXT() {
  return (
    <>
      <Canvas
        flat
        frameloop="demand"
        shadows={"soft"}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: false }}
      >
        {/* Configuración de cámara */}
        <PerspectiveCamera
          makeDefault={true}
          far={100}
          near={0.1}
          fov={31.417}
          position={[10, 6.6, 9.4]}
          rotation={[0.005, 0.973, -0.004]}
        />
        <SoftShadows size={32} samples={10} focus={10} />
        {/* <Sky azimuth={0.973} turbidity={20} sunPosition={[2, 2, 1]} /> */}
        {/* Componente 3D */}
        <EscenaTXT />
        {/* Entorno */}
        <Environment
          files="/HDRI INTERCAMBIADOR TXT.hdr"
          background
          environmentIntensity={2}
          environmentRotation={[rotacionX, rotacionZ, rotacionY]}
          backgroundRotation={[rotacionX, rotacionZ, rotacionY]}
        />
        {/* Reemplazamos la luz direccional con nuestro componente personalizado */}
        {/* <DirectionalLightWithTarget />
         */}
        <directionalLight
          castShadow
          intensity={3}
          position={[-25, 7, 16]}
          shadow-mapSize={[4096, 4096]}
          shadow-bias={-0.001}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
        />
        {/* Luz ambiental suave para iluminar áreas en sombra */}
        <ambientLight intensity={0.5} color={0xffffff} />
        <EffectComposer
          enableNormalPass
          enabled={true}
          autoClear={false}
          multisampling={8}
        >
          {/* <SSAO
            blendFunction={BlendFunction.MULTIPLY} // blend mode
            samples={30} // amount of samples per pixel (shouldn't be a multiple of the ring count)
            rings={4} // amount of rings in the occlusion sampling pattern
            distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
            distanceFalloff={0.0} // distance falloff. min: 0, max: 1
            rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
            rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
            luminanceInfluence={0.9} // how much the luminance of the scene influences the ambient occlusion
            radius={20} // occlusion sampling radius
            scale={0.5} // scale of the ambient occlusion
            bias={0.5} // occlusion bias
          /> */}
          <ToneMapping
            adaptive
            resolution={256}
            middleGrey={0.5}
            maxLuminance={16.0}
            averageLuminance={1.0}
            adaptationRate={1.0}
            mode={ToneMapping.ACES}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}
