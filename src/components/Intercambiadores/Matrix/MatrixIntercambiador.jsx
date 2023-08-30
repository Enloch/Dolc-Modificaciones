import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, useTexture } from "@react-three/drei";

export function Modelo(props) {
  const TexturaTemporal = useTexture("/texturas/PlataGrata.jpg");
  const { nodes, materials } = useGLTF("/modelos/MatrixIntercambiador.gltf");
  const TexturaBase = materials.Base01;
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={25.361}
        position={[-0.368, 0.438, 3.611]}
        rotation={[0.843, 0.365, -0.149]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh.geometry}
        material={materials["Concrete Weathered12"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={materials["Concrete Weathered1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials["Concrete Floor Satin"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_3.geometry}
        material={materials["marc finestra1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_4.geometry}
        material={materials["Glass Smoked"]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh111.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh111_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh110.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh110_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh109.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh109_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh108.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh108_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh107.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh107_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh106.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh106_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh105.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh105_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh104.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh104_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh103.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh103_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh102.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh102_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh101.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh101_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh100.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh100_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh099.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh099_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh098.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh098_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh097.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh097_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh096.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh096_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh095.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh095_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh094.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh094_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh093.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh093_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh092.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh092_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh091.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh091_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh090.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh090_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh089.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh089_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh088.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh088_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh087.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh087_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh086.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh086_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh085.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh085_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh084.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh084_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh083.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh083_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh082.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh082_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh081.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh081_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh080.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh080_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh079.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh079_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh078.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh078_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh077.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh077_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh076.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh076_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh075.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh075_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh074.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh074_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh073.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh073_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh072.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh072_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh071.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh071_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh070.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh070_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh069.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh069_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh068.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh068_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh067.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh067_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh066.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh066_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh011.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh011_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh007.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh007_1.geometry}
        material={materials.Aluminio}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh005.geometry}>
        <meshPhysicalMaterial map={TexturaBase} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh005_1.geometry}
        material={materials.Aluminio}
      />
    </group>
  );
}
// useGLTF.preload("/modelos/MatrixIntercambiador.gltf");
