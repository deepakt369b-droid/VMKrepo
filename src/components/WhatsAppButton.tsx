"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Circle } from '@react-three/drei';
import * as THREE from 'three';

// An inner component to handle the rotating 3D mesh
function WhatsAppCoin({ hovered }: { hovered: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Base rotation
            meshRef.current.rotation.y += delta * 0.5;

            // Speed up rotation on hover
            if (hovered) {
                meshRef.current.rotation.y += delta * 2;
            }
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={meshRef} castShadow receiveShadow>
                    {/* Cylinder acting as a coin */}
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    {/* Green material */}
                    <meshStandardMaterial
                        color="#25D366"
                        metalness={0.6}
                        roughness={0.2}
                    />

                    {/* Add a simple white ring to mimic the icon */}
                    <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[0.5, 0.7, 32]} />
                        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} />
                    </mesh>
                    <mesh position={[0, -0.11, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[0.5, 0.7, 32]} />
                        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} />
                    </mesh>
                </mesh>
            </Float>
        </group>
    );
}

export default function WhatsAppButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[90] w-20 h-20 md:w-24 md:h-24">
            <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="w-full h-full block rounded-full"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Canvas shadows camera={{ position: [0, 0, 4], fov: 40 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                    <Environment preset="city" />
                    <WhatsAppCoin hovered={hovered} />
                </Canvas>

                {/* Helper pulse behind it */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 -z-10" style={{ animationDuration: '3s' }}></div>
            </a>
        </div>
    );
}
