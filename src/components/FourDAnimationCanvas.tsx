import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import {
  Sparkles,
  Zap,
  Layers,
  Rotate3d,
  Sliders,
  Maximize2,
  Minimize2,
  Compass,
  Activity,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';
import { LanguageMode } from '../types';

export type FourDMode = 'tesseract' | 'quantum_vortex' | 'neural_matrix' | 'hologram_core';

interface FourDAnimationCanvasProps {
  language: LanguageMode;
  variant?: 'hero_embedded' | 'fullscreen_background' | 'interactive_stage';
  className?: string;
}

// 16 Vertices of a 4D Hypercube (Tesseract) in 4D Space (x, y, z, w)
const TESSERACT_VERTICES_4D: [number, number, number, number][] = [];
for (let i = 0; i < 16; i++) {
  TESSERACT_VERTICES_4D.push([
    (i & 1 ? 1 : -1) * 1.5,
    (i & 2 ? 1 : -1) * 1.5,
    (i & 4 ? 1 : -1) * 1.5,
    (i & 8 ? 1 : -1) * 1.5
  ]);
}

// 32 Edges connecting vertices of a 4D Tesseract
const TESSERACT_EDGES: [number, number][] = [];
for (let i = 0; i < 16; i++) {
  for (let j = i + 1; j < 16; j++) {
    // Two vertices share an edge if they differ in exactly 1 coordinate
    const diff =
      (Boolean(i & 1) !== Boolean(j & 1) ? 1 : 0) +
      (Boolean(i & 2) !== Boolean(j & 2) ? 1 : 0) +
      (Boolean(i & 4) !== Boolean(j & 4) ? 1 : 0) +
      (Boolean(i & 8) !== Boolean(j & 8) ? 1 : 0);
    if (diff === 1) {
      TESSERACT_EDGES.push([i, j]);
    }
  }
}

export const FourDAnimationCanvas: React.FC<FourDAnimationCanvasProps> = ({
  language,
  variant = 'hero_embedded',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 4D Interactive Parameters State
  const [activeMode, setActiveMode] = useState<FourDMode>('tesseract');
  const [timeWarpSpeed, setTimeWarpSpeed] = useState<number>(1.2);
  const [wDimensionDepth, setWDimensionDepth] = useState<number>(2.8);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);
  const [tensorCoords, setTensorCoords] = useState({ x: 0, y: 0, z: 0, w: 0 });

  // Refs for three.js objects to avoid re-instantiation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  });

  // Dynamic 4D Rotation Angles
  const anglesRef = useRef({
    xy: 0,
    xz: 0,
    xw: 0,
    yz: 0,
    yw: 0,
    zw: 0
  });

  // Shockwave ripples
  const shockwavesRef = useRef<{ x: number; y: number; z: number; radius: number; maxRadius: number; opacity: number }[]>([]);

  // 4D ➔ 3D Stereographic Projection Math
  // Projects (x, y, z, w) in 4D space down to (X, Y, Z) in 3D camera space
  const project4DTo3D = useCallback((
    v: [number, number, number, number],
    angles: typeof anglesRef.current,
    cameraW: number
  ): THREE.Vector3 => {
    let [x, y, z, w] = v;

    // 1. 4D Rotation in XW Plane
    const cosXW = Math.cos(angles.xw);
    const sinXW = Math.sin(angles.xw);
    const x1 = x * cosXW - w * sinXW;
    const w1 = x * sinXW + w * cosXW;

    // 2. 4D Rotation in YW Plane
    const cosYW = Math.cos(angles.yw);
    const sinYW = Math.sin(angles.yw);
    const y2 = y * cosYW - w1 * sinYW;
    const w2 = y * sinYW + w1 * cosYW;

    // 3. 4D Rotation in ZW Plane
    const cosZW = Math.cos(angles.zw);
    const sinZW = Math.sin(angles.zw);
    const z3 = z * cosZW - w2 * sinZW;
    const w3 = z * sinZW + w2 * cosZW;

    // 4. 3D Standard Rotations (XY, XZ, YZ)
    const cosXY = Math.cos(angles.xy);
    const sinXY = Math.sin(angles.xy);
    const x4 = x1 * cosXY - y2 * sinXY;
    const y4 = x1 * sinXY + y2 * cosXY;

    const cosXZ = Math.cos(angles.xz);
    const sinXZ = Math.sin(angles.xz);
    const x5 = x4 * cosXZ - z3 * sinXZ;
    const z5 = x4 * sinXZ + z3 * cosXZ;

    // 5. 4D Perspective / Stereographic Division by W (4th Dimension Scaling)
    // As object moves in 4th dimension W, its 3D size and perspective morph
    const distanceW = cameraW;
    const factorW = distanceW / (distanceW - w3);

    return new THREE.Vector3(x5 * factorW, y4 * factorW, z5 * factorW);
  }, []);

  // Setup Three.js WebGL Scene
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9);
    cameraRef.current = camera;

    // WebGL Renderer with high DPI antialiasing and alpha transparency
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // 1. Tesseract 4D Group (Vertices + Edges)
    const tesseractGroup = new THREE.Group();
    scene.add(tesseractGroup);

    // 16 Vertex Spheres (with luminous glowing material)
    const vertexGeometry = new THREE.SphereGeometry(0.09, 16, 16);
    const vertexMaterials = [
      new THREE.MeshBasicMaterial({ color: 0xf59e0b }), // Amber Gold
      new THREE.MeshBasicMaterial({ color: 0xa855f7 }), // Purple
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 }), // Cyan
      new THREE.MeshBasicMaterial({ color: 0xec4899 })  // Pink
    ];

    const vertexMeshes: THREE.Mesh[] = [];
    for (let i = 0; i < 16; i++) {
      const mesh = new THREE.Mesh(vertexGeometry, vertexMaterials[i % 4]);
      tesseractGroup.add(mesh);
      vertexMeshes.push(mesh);
    }

    // 32 Edges (Dynamic Line Segments)
    const edgePositions = new Float32Array(TESSERACT_EDGES.length * 2 * 3);
    const edgeColors = new Float32Array(TESSERACT_EDGES.length * 2 * 3);

    // Create gradient colors for 4D connections
    for (let i = 0; i < TESSERACT_EDGES.length; i++) {
      const colorA = new THREE.Color(i % 2 === 0 ? 0xa855f7 : 0xf59e0b);
      const colorB = new THREE.Color(i % 3 === 0 ? 0x38bdf8 : 0xffffff);

      edgeColors[i * 6 + 0] = colorA.r;
      edgeColors[i * 6 + 1] = colorA.g;
      edgeColors[i * 6 + 2] = colorA.b;

      edgeColors[i * 6 + 3] = colorB.r;
      edgeColors[i * 6 + 4] = colorB.g;
      edgeColors[i * 6 + 5] = colorB.b;
    }

    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute('position', new THREE.BufferAttribute(edgePositions, 3));
    edgeGeometry.setAttribute('color', new THREE.BufferAttribute(edgeColors, 3));

    const edgeMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    tesseractGroup.add(edgeLines);

    // 2. 4D Quantum Particle Vortex (1200 Hyper-Particles in 4D Torus)
    const PARTICLE_COUNT = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const particle4DCoords: [number, number, number, number][] = [];
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);
    const particlePositions3D = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // 4D Clifford Torus Formula: (r1*cos(u), r1*sin(u), r2*cos(v), r2*sin(v))
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const r1 = 1.6 + (Math.random() - 0.5) * 0.5;
      const r2 = 1.6 + (Math.random() - 0.5) * 0.5;

      particle4DCoords.push([
        r1 * Math.cos(u),
        r1 * Math.sin(u),
        r2 * Math.cos(v),
        r2 * Math.sin(v)
      ]);

      const pColor = new THREE.Color().setHSL(0.65 + Math.random() * 0.25, 0.9, 0.6);
      particleColors[i * 3 + 0] = pColor.r;
      particleColors[i * 3 + 1] = pColor.g;
      particleColors[i * 3 + 2] = pColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions3D, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle sprite / texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const pCtx = particleCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(168, 85, 247, 0.8)');
      grad.addColorStop(0.8, 'rgba(245, 158, 11, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const quantumParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(quantumParticles);

    // 3. Central 4D Falcon AI Hologram Sphere (Core Core Reactor)
    const coreGeometry = new THREE.IcosahedronGeometry(0.85, 2);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLine = new THREE.LineSegments(
      coreWireframe,
      new THREE.LineBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      })
    );
    scene.add(coreLine);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa855f7, 2, 20);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth || 600;
      const h = containerRef.current.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Mouse Move & Gyro Parallax Handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Touch support
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.touches[0].clientY - rect.top) / rect.height) * 2 - 1);
        mouseRef.current.targetX = x;
        mouseRef.current.targetY = y;
      }
    };
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Main 4D Animation Loop
    let lastTime = performance.now();
    let frameCounter = 0;
    let lastFpsUpdate = performance.now();

    const animate = (time: number) => {
      const dt = (time - lastTime) * 0.001;
      lastTime = time;

      // FPS calculation
      frameCounter++;
      if (time - lastFpsUpdate >= 500) {
        setFps(Math.round((frameCounter * 1000) / (time - lastFpsUpdate)));
        frameCounter = 0;
        lastFpsUpdate = time;
      }

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const currentSpeed = isPlaying ? timeWarpSpeed : 0;

      // Increment 4D Hyperplane Rotations with Time Warp
      anglesRef.current.xw += dt * 0.55 * currentSpeed + mouseRef.current.x * 0.01;
      anglesRef.current.yw += dt * 0.45 * currentSpeed + mouseRef.current.y * 0.01;
      anglesRef.current.zw += dt * 0.35 * currentSpeed;
      anglesRef.current.xz += dt * 0.25 * currentSpeed;
      anglesRef.current.xy += dt * 0.15 * currentSpeed;

      // Update Live Tensor Coordinates for UI display
      setTensorCoords({
        x: Number((Math.sin(anglesRef.current.xy) * 1.5).toFixed(2)),
        y: Number((Math.cos(anglesRef.current.yw) * 1.5).toFixed(2)),
        z: Number((Math.sin(anglesRef.current.zw) * 1.5).toFixed(2)),
        w: Number((Math.cos(anglesRef.current.xw) * wDimensionDepth).toFixed(2))
      });

      // 1. Animate 4D Tesseract Vertices & Edges
      if (activeMode === 'tesseract' || activeMode === 'hologram_core') {
        tesseractGroup.visible = true;
        const projectedVertices: THREE.Vector3[] = [];

        for (let i = 0; i < 16; i++) {
          const p3d = project4DTo3D(
            TESSERACT_VERTICES_4D[i],
            anglesRef.current,
            wDimensionDepth
          );
          projectedVertices.push(p3d);
          vertexMeshes[i].position.copy(p3d);

          // Morph vertex scale based on 4D distance
          const scale = Math.max(0.04, 0.12 * (1 / (1 + Math.abs(p3d.z * 0.2))));
          vertexMeshes[i].scale.set(scale, scale, scale);
        }

        // Update 32 Edge Line positions
        const posAttr = edgeGeometry.attributes.position as THREE.BufferAttribute;
        let lineIdx = 0;
        for (let i = 0; i < TESSERACT_EDGES.length; i++) {
          const [vA, vB] = TESSERACT_EDGES[i];
          const posA = projectedVertices[vA];
          const posB = projectedVertices[vB];

          posAttr.setXYZ(lineIdx++, posA.x, posA.y, posA.z);
          posAttr.setXYZ(lineIdx++, posB.x, posB.y, posB.z);
        }
        posAttr.needsUpdate = true;
      } else {
        tesseractGroup.visible = false;
      }

      // 2. Animate 4D Quantum Particle Vortex
      if (activeMode === 'quantum_vortex' || activeMode === 'neural_matrix' || activeMode === 'hologram_core') {
        quantumParticles.visible = true;
        const pPosAttr = particleGeometry.attributes.position as THREE.BufferAttribute;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const p4D = particle4DCoords[i];
          const p3D = project4DTo3D(p4D, anglesRef.current, wDimensionDepth);

          // Add slight interactive ripple from mouse
          const dx = p3D.x - mouseRef.current.x * 2;
          const dy = p3D.y - mouseRef.current.y * 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 1.5) {
            p3D.z += (1.5 - dist) * 0.4;
          }

          pPosAttr.setXYZ(i, p3D.x, p3D.y, p3D.z);
        }
        pPosAttr.needsUpdate = true;
        quantumParticles.rotation.y = time * 0.0003 * currentSpeed;
      } else {
        quantumParticles.visible = false;
      }

      // 3. Central Core Reactivity
      if (coreLine) {
        coreLine.rotation.x = anglesRef.current.yw * 0.8;
        coreLine.rotation.y = anglesRef.current.xw * 0.8;
        coreLine.rotation.z = anglesRef.current.zw * 0.5;
        const corePulse = 0.85 + Math.sin(time * 0.003 * currentSpeed) * 0.08;
        coreLine.scale.set(corePulse, corePulse, corePulse);
      }

      // Parallax Camera Orbit based on cursor
      camera.position.x = mouseRef.current.x * 1.5;
      camera.position.y = mouseRef.current.y * 1.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      renderer.dispose();
      vertexGeometry.dispose();
      edgeGeometry.dispose();
      particleGeometry.dispose();
    };
  }, [activeMode, timeWarpSpeed, wDimensionDepth, isPlaying, project4DTo3D]);

  // Trigger 4D interactive ripple shockwave on click
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Increase rotational impulse instantly
    anglesRef.current.xw += 0.4;
    anglesRef.current.yw += 0.3;
    anglesRef.current.zw += 0.2;
  };

  const modeLabels: Record<FourDMode, { en: string; ur: string; desc: string }> = {
    tesseract: {
      en: '4D Hypercube (Tesseract)',
      ur: '۴ ڈی ہائپر کیوب (ٹیسیریکٹ)',
      desc: '16 Vertices & 32 Edges in 4D (X, Y, Z, W) Spacetime Rotation'
    },
    quantum_vortex: {
      en: '4D Quantum Torus Vortex',
      ur: '۴ ڈی کوانٹم ٹورس ورٹیکس',
      desc: '1000+ Multidimensional Particles in Clifford Torus Orbit'
    },
    neural_matrix: {
      en: '4D AI Neural Synapse',
      ur: '۴ ڈی نیورل اے آئی سائیناپس',
      desc: 'Dynamic Multi-Node Synapse Web across Hyper-Dimensions'
    },
    hologram_core: {
      en: 'Unified NexaBoost 4D Core',
      ur: 'متحدہ نیکسا بوسٹ ۴ ڈی کور',
      desc: 'Full Spectrum Quantum Particle + Hypercube + Core Hologram'
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleCanvasClick}
      className={`relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#09090D] via-[#0E0E14] to-[#08080C] border border-purple-500/20 shadow-2xl group select-none ${className}`}
      style={{ minHeight: variant === 'fullscreen_background' ? '100vh' : '420px' }}
    >
      {/* 3D/4D Ambient Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Main ThreeJS WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing relative z-10"
      />

      {/* Top Overlay Badge & Telemetry */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        {/* Mode Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/30 text-xs text-white shadow-lg pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <Rotate3d className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-bold">
            {language === 'ur_nastaliq' ? modeLabels[activeMode].ur : modeLabels[activeMode].en}
          </span>
        </div>

        {/* 4D Real-time Telemetry Tensor */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300 pointer-events-auto shadow-md">
          <Activity className="w-3 h-3 text-emerald-400" />
          <span className="text-purple-300">X:{tensorCoords.x}</span>
          <span className="text-amber-300">Y:{tensorCoords.y}</span>
          <span className="text-sky-300">Z:{tensorCoords.z}</span>
          <span className="text-pink-300 font-bold">W:{tensorCoords.w}</span>
          <span className="text-neutral-400 ml-1">({fps} FPS)</span>
        </div>
      </div>

      {/* Bottom Floating Control Dock */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Mode Selectors */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 overflow-x-auto max-w-full no-scrollbar shadow-xl">
          {(Object.keys(modeLabels) as FourDMode[]).map((mode) => {
            const isSelected = activeMode === mode;
            return (
              <button
                key={mode}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMode(mode);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {mode === 'tesseract' && '4D Tesseract'}
                {mode === 'quantum_vortex' && 'Quantum Torus'}
                {mode === 'neural_matrix' && 'Neural Synapse'}
                {mode === 'hologram_core' && 'NexaBoost 4D Core'}
              </button>
            );
          })}
        </div>

        {/* Action Buttons (Time Warp Play/Pause, Sliders Toggle) */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white hover:bg-white/10 transition-all cursor-pointer shadow-lg"
            title={isPlaying ? 'Pause 4D Time Rotation' : 'Resume 4D Time Rotation'}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowControls(!showControls);
            }}
            className={`p-2.5 rounded-xl backdrop-blur-md border transition-all cursor-pointer shadow-lg flex items-center gap-1.5 text-xs font-bold ${
              showControls
                ? 'bg-purple-600 border-purple-400 text-white'
                : 'bg-black/70 border-white/15 text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
            title="Toggle 4D Dimension Sliders"
          >
            <Sliders className="w-4 h-4" />
            <span className="hidden sm:inline">4D Warp Sliders</span>
          </button>
        </div>
      </div>

      {/* Expandable 4D Dimension Tuning Drawer */}
      {showControls && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-16 right-4 z-30 w-72 sm:w-80 p-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-purple-500/40 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span>4D Spacetime Dimension Warp</span>
            </span>
            <button
              onClick={() => {
                setTimeWarpSpeed(1.2);
                setWDimensionDepth(2.8);
              }}
              className="text-[10px] text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              Reset
            </button>
          </div>

          {/* Slider 1: 4th Dimension Speed (Time Warp) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-300">Time-Warp Velocity (dt):</span>
              <span className="font-mono text-purple-400 font-bold">{timeWarpSpeed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="4.0"
              step="0.1"
              value={timeWarpSpeed}
              onChange={(e) => setTimeWarpSpeed(parseFloat(e.target.value))}
              className="w-full accent-purple-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 2: W-Axis Hyper-Depth Projection */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-300">W-Axis Hyper-Depth (d_w):</span>
              <span className="font-mono text-amber-400 font-bold">{wDimensionDepth.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1.8"
              max="5.0"
              step="0.1"
              value={wDimensionDepth}
              onChange={(e) => setWDimensionDepth(parseFloat(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
            />
          </div>

          <p className="text-[10px] text-neutral-400 italic">
            * Drag cursor on canvas to tilt stereographic 4D projection planes. Click canvas to induce quantum gravity ripple shockwaves.
          </p>
        </div>
      )}

      {/* Interactive Helper Cue */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-60 group-hover:opacity-0 transition-opacity">
        <span className="text-[11px] font-medium text-neutral-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
          ✦ Move mouse to orbit 4D space • Click for shockwave
        </span>
      </div>
    </div>
  );
};
