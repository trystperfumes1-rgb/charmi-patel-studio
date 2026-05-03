import { Float, Icosahedron, Sphere, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

function FloatingTorus({
  position,
  color,
  speed,
}: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <Torus ref={ref} position={position} args={[0.8, 0.25, 16, 60]}>
        <meshStandardMaterial
          color={color}
          wireframe
          opacity={0.4}
          transparent
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
    </Float>
  );
}

function FloatingSphere({
  position,
  color,
  speed,
}: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.4;
    }
  });
  return (
    <Float speed={speed * 0.8} rotationIntensity={0.6} floatIntensity={2}>
      <Sphere ref={ref} position={position} args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color={color}
          opacity={0.35}
          transparent
          metalness={0.6}
          roughness={0.3}
        />
      </Sphere>
    </Float>
  );
}

function FloatingIcosahedron({
  position,
  color,
  speed,
}: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
    }
  });
  return (
    <Float speed={speed * 1.2} rotationIntensity={0.8} floatIntensity={1.8}>
      <Icosahedron ref={ref} position={position} args={[0.7]}>
        <meshStandardMaterial
          color={color}
          wireframe
          opacity={0.35}
          transparent
          metalness={0.7}
          roughness={0.3}
        />
      </Icosahedron>
    </Float>
  );
}

function GlowOrb({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={0.6} floatIntensity={3}>
      <Sphere position={position} args={[0.15, 16, 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          opacity={0.7}
          transparent
        />
      </Sphere>
    </Float>
  );
}

export function Hero3DScene() {
  return (
    <Canvas
      className="absolute inset-0 w-full h-full"
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
    >
      {/* Warm ambient & directional lighting for light theme */}
      <ambientLight intensity={0.8} color="#FFF8F0" />
      <pointLight position={[5, 5, 5]} color="#C4956A" intensity={2.5} />
      <pointLight position={[-5, -5, 5]} color="#8B5E3C" intensity={2} />
      <pointLight position={[0, 5, -5]} color="#E8D5B7" intensity={1.5} />
      <pointLight position={[3, -3, 3]} color="#A0714F" intensity={1.2} />

      {/* Warm amber/brown torus rings */}
      <FloatingTorus position={[-4, 2, -2]} color="#C4956A" speed={1.2} />
      <FloatingTorus position={[5, -1, -3]} color="#8B5E3C" speed={0.8} />
      <FloatingTorus position={[3, 3, -4]} color="#A0714F" speed={1.5} />

      {/* Warm amber spheres */}
      <FloatingSphere position={[-5, -2, -1]} color="#C4956A" speed={1.0} />
      <FloatingSphere position={[6, 1, -2]} color="#D4B896" speed={1.3} />
      <FloatingSphere position={[-2, 4, -3]} color="#8B5E3C" speed={0.9} />
      <FloatingSphere position={[4, -3, -2]} color="#A0714F" speed={1.1} />

      {/* Icosahedron wireframes in warm brown */}
      <FloatingIcosahedron position={[2, -4, -1]} color="#8B5E3C" speed={0.7} />
      <FloatingIcosahedron position={[-6, 1, -4]} color="#6B3F2A" speed={1.0} />
      <FloatingIcosahedron position={[1, 4, -2]} color="#C4956A" speed={1.4} />

      {/* Glowing amber orbs */}
      <GlowOrb position={[-3, 0, 0]} color="#C4956A" />
      <GlowOrb position={[3, 2, 1]} color="#8B5E3C" />
      <GlowOrb position={[-1, -3, 1]} color="#A0714F" />
      <GlowOrb position={[5, -2, 0]} color="#D4B896" />
      <GlowOrb position={[-4, 3, -1]} color="#C4956A" />
      <GlowOrb position={[2, 0, 2]} color="#8B5E3C" />
    </Canvas>
  );
}
