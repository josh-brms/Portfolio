"use client";

import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const pointer = { x: 0, y: 0 };

function useGlobalPointer() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}

function Particles({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 2600;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.55 + (Math.random() - 0.5) * 0.55;
      pos[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      pos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r;
      pos[i * 3 + 2] = Math.cos(phi) * r;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y += delta * 0.055;
    const t = state.clock.elapsedTime;
    p.rotation.x = Math.sin(t * 0.12) * 0.16;
    p.scale.setScalar(1 + Math.sin(t * 0.6) * 0.03);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={color}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Knot({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.y += delta * 0.08;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.05, 0.28, 150, 18]} />
      <meshBasicMaterial wireframe transparent opacity={0.13} color={color} />
    </mesh>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  useGlobalPointer();
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    g.rotation.y += (pointer.x * 0.35 - g.rotation.y) * 0.04;
    g.rotation.x += (-pointer.y * 0.22 - g.rotation.x) * 0.04;
  });

  return <group ref={ref}>{children}</group>;
}

export default function HeroScene({ theme }: { theme: "dark" | "light" }) {
  const mainColor = theme === "light" ? "#6b58f0" : "#a594ff";
  const softColor = theme === "light" ? "#c02f8f" : "#f472b6";

  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 52 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Rig>
        <Particles color={mainColor} />
        <Knot color={softColor} />
      </Rig>
    </Canvas>
  );
}
