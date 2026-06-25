"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Stylized brass biryani-pot silhouette built from a lathe profile. */
function BrassVessel() {
  const groupRef = useRef<THREE.Group>(null);

  const latheGeometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const y = (t - 0.5) * 3.4;
      const r = 1.65 - Math.pow(Math.abs(t - 0.42), 1.6) * 2.3;
      points.push(new THREE.Vector2(Math.max(r, 0.05), y));
    }
    return new THREE.LatheGeometry(points, 48);
  }, []);

  const handleGeometry = useMemo(
    () => new THREE.TorusGeometry(0.4, 0.07, 8, 24, Math.PI),
    []
  );
  const knobGeometry = useMemo(() => new THREE.SphereGeometry(0.22, 16, 16), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.18;
    groupRef.current.position.y = -1.4 + Math.sin(t * 0.6) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -1.4, -1]} scale={1.5}>
      <mesh geometry={latheGeometry}>
        <meshStandardMaterial
          color="#c9a04a"
          metalness={0.85}
          roughness={0.28}
          emissive="#1a0f02"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh geometry={knobGeometry} position={[0, 1.85, 0]}>
        <meshStandardMaterial color="#8a6a2e" metalness={0.8} roughness={0.35} />
      </mesh>
      <mesh
        geometry={handleGeometry}
        position={[1.55, 0.1, 0]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
      >
        <meshStandardMaterial color="#8a6a2e" metalness={0.8} roughness={0.35} />
      </mesh>
      <mesh
        geometry={handleGeometry}
        position={[-1.55, 0.1, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="#8a6a2e" metalness={0.8} roughness={0.35} />
      </mesh>
    </group>
  );
}

const emberVertexShader = `
  attribute float size;
  varying float vAlpha;
  void main(){
    vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
    gl_PointSize = size * (220.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = clamp(1.0 - (-mvPosition.z - 6.0)/26.0, 0.06, 1.0);
  }
`;
const emberFragmentShader = `
  varying float vAlpha;
  void main(){
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if(d > 0.5) discard;
    float glow = smoothstep(0.5, 0.0, d);
    vec3 col = mix(vec3(0.78,0.39,0.19), vec3(0.94,0.80,0.49), glow);
    gl_FragColor = vec4(col, glow * vAlpha * 0.8);
  }
`;

/** Drifting ember / spice-dust particle field, additive-blended for glow. */
function EmberField() {
  const pointsRef = useRef<THREE.Points>(null);
  const COUNT = 360;

  const [{ positions, sizes, speeds }] = useState(() => {
    const positions = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const speeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 34;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22 - 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22 - 3;
      sizes[i] = 0.5 + Math.random() * 2.0;
      speeds[i] = 0.35 + Math.random() * 1.1;
    }
    return { positions, sizes, speeds };
  });

  useFrame((state) => {
    const geom = pointsRef.current?.geometry;
    if (!geom) return;
    const t = state.clock.getElapsedTime();
    const posAttr = geom.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < COUNT; i++) {
      let y = posAttr.array[i * 3 + 1] + speeds[i] * 0.011;
      if (y > 11) y = -11;
      posAttr.array[i * 3 + 1] = y;
      (posAttr.array as Float32Array)[i * 3] += Math.sin(t * 0.5 + i) * 0.0022;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={emberVertexShader}
        fragmentShader={emberFragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Faint depth rings, purely atmospheric. */
function DepthRings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (r1.current) r1.current.rotation.z = t * 0.05;
    if (r2.current) r2.current.rotation.z = -t * 0.04;
  });
  return (
    <>
      <mesh ref={r1} position={[-8, 3, -10]} rotation={[1.1, 0, 0]}>
        <torusGeometry args={[3.4, 0.035, 8, 64]} />
        <meshBasicMaterial color="#c9a04a" transparent opacity={0.16} />
      </mesh>
      <mesh ref={r2} position={[9, -3, -14]} rotation={[0.6, 0, 0]} scale={1.7}>
        <torusGeometry args={[3.4, 0.035, 8, 64]} />
        <meshBasicMaterial color="#c9a04a" transparent opacity={0.1} />
      </mesh>
    </>
  );
}

/** Camera rig: subtle mouse-follow parallax + scroll dolly. */
function CameraRig() {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollT = useRef(0);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    }
    function handleScroll() {
      scrollT.current = Math.min(window.scrollY / (window.innerHeight * 0.9), 1);
    }
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state) => {
    const cam = state.camera;
    cam.position.x += (mouse.current.x * 2.4 - cam.position.x) * 0.03;
    cam.position.y += (1.2 - mouse.current.y * 1.4 - cam.position.y) * 0.03;
    cam.position.z = 13 - scrollT.current * 3;
    cam.lookAt(0, -0.4, 0);
  });

  return null;
}

function HeroLights() {
  const keyRef = useRef<THREE.PointLight>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (keyRef.current) keyRef.current.position.x = Math.sin(t * 0.3) * 5;
  });
  return (
    <>
      <ambientLight color="#4a3018" intensity={1.4} />
      <pointLight ref={keyRef} color="#f0cd7e" intensity={3.5} distance={30} position={[4, 5, 6]} />
      <pointLight color="#c44848" intensity={2} distance={30} position={[-5, -2, -4]} />
    </>
  );
}

/**
 * Full hero 3D scene: a rotating brass vessel, drifting ember field,
 * faint depth rings, and a mouse/scroll-reactive camera.
 * Always loaded via next/dynamic(..., { ssr: false }) by its parent,
 * so this component only ever mounts on the client.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 13], fov: 50 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      className="!absolute inset-0"
    >
      <HeroLights />
      <BrassVessel />
      <EmberField />
      <DepthRings />
      <CameraRig />
    </Canvas>
  );
}
