import { useRef, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  Sky,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls
} from "@react-three/drei";
import { EffectComposer, SSAO, ToneMapping } from "@react-three/postprocessing";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Escena from "/EscenaTXT.glb?url";
import * as THREE from "three";

function Model() {
  const gltf = useLoader(GLTFLoader, Escena);
  // Aseguramos que el modelo reciba y proyecte sombras
  if (gltf.scene) {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }
  return <primitive object={gltf.scene} />;
}
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
        position={[-25,7, 16]}
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
  const lightRef = useRef();
  return (
    <Canvas shadows={"soft"} style={{ width: "100%", height: "100%" }} gl={{antialias: false}}>
      <PerspectiveCamera
        makeDefault={true}
        far={100}
        near={0.1}
        fov={31.417}
        position={[10, 6.6, 9.4]}
        rotation={[0.005, 0.973, -0.004]}
      />
      {/* <OrbitControls /> */}
      <SoftShadows size={100} samples={32} focus={10} />

      {/* <Sky azimuth={0.973} turbidity={20} sunPosition={[2, 2, 1]} /> */}
      {/* Configuración de cámara */}
      {/* Componente 3D */}
      <Model />
      {/* Entorno */}
      <Environment
        files="/HDRI INTERCAMBIADOR TXT.hdr?url"
        background
        environmentIntensity={1}
        environmentRotation={[rotacionX, rotacionZ, rotacionY]}
        backgroundRotation={[rotacionX, rotacionZ, rotacionY]}
      />
      
      {/* Reemplazamos la luz direccional con nuestro componente personalizado */}
      {/* <DirectionalLightWithTarget />
       */}
      <directionalLight
        ref={lightRef}
        castShadow
        intensity={2}
        position={[-25,7, 16]}
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
      <ambientLight intensity={0.3} />

      {/* <EffectComposer enableNormalPass  >
        <SSAO />
				<ToneMapping
									adaptive
									resolution={256}
									middleGrey={0.5}
									maxLuminance={16.0}
									averageLuminance={1.0}
									adaptationRate={1.0}
									mode={ToneMapping.NEUTRAL}
								/>
      </EffectComposer> */}
    </Canvas>
  );
}
