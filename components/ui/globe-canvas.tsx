"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { CanvasErrorBoundary } from "@/components/site/canvas-error-boundary";

const Globe: React.FC<{ rotationSpeed: number; radius: number }> = ({
  rotationSpeed,
  radius,
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
      groupRef.current.rotation.x += rotationSpeed * 0.3;
      groupRef.current.rotation.z += rotationSpeed * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[radius, 48, 48]} />
        <meshBasicMaterial
          color="hsl(var(--foreground))"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
    </group>
  );
};

export default function GlobeCanvas({
  rotationSpeed,
  radius,
}: {
  rotationSpeed: number;
  radius: number;
}) {
  return (
    <CanvasErrorBoundary>
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe rotationSpeed={rotationSpeed} radius={radius} />
      </Canvas>
    </CanvasErrorBoundary>
  );
}
