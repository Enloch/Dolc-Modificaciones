import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
    ContactShadows,
} from '@react-three/drei'
import Menu from './Menu'
import { Model1, Model2, Model3, Model4 } from './Modelos'
import { Materiales, MaterialesMetalizados } from './Materiales'

export default function RotadorTline() {
    const [model, setModel] = useState('Modelo 1')
    const [materialIndex, setMaterialIndex] = useState(0)

    const handleModelChange = selectedModel => {
        console.log('Cambiando modelo a:', selectedModel)
        setModel(selectedModel)
    }

    const handleMaterialChange = index => {
        console.log('Cambiando material a:', index)
        setMaterialIndex(index)
    }

    return (
        <div style={{ width: 'auto', height: '100%', position: 'relative' }}>
            <Canvas linear flat>
                <PerspectiveCamera makeDefault fov={25} position={[0, 0, 1]} />
                <Environment files='/StudioA.hdr' />
                <ambientLight intensity={0.3} />
                <ContactShadows
                    opacity={0.5}
                    scale={1}
                    blur={1}
                    far={1}
                    resolution={256}
                    color='#0000001e'
                    position={[0, -0.09, 0]}
                    frames={1}
                />
                {model === 'Modelo 1' && (
                    <Model1
                        material={materialIndex}
                        metalness={materialIndex}
                        roughness={materialIndex}
                    />
                )}
                {model === 'Modelo 2' && (
                    <Model2
                        material={materialIndex}
                        metalness={materialIndex}
                        roughness={materialIndex}
                    />
                )}
                {model === 'Modelo 3' && (
                    <Model3
                        material={materialIndex}
                        metalness={materialIndex}
                        roughness={materialIndex}
                    />
                )}
                {model === 'Modelo 4' && (
                    <Model4
                        material={materialIndex}
                        metalness={materialIndex}
                        roughness={materialIndex}
                    />
                )}

                <OrbitControls
                    maxPolarAngle={1.6}
                    minDistance={0.6}
                    maxDistance={1}
                    enableZoom={true}
                    enablePan={false}
                />
            </Canvas>
            <div style={{ position: 'absolute', bottom: '5%', left: '5%' }}>
                <Menu
                    handleModelChange={handleModelChange}
                    handleMaterialChange={handleMaterialChange}
                />
            </div>
        </div>
    )
}
