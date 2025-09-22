import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const { camera } = useThree();

  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;

    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    scene.position.x = -center.x;
    scene.position.y = -center.y;
    scene.position.z = -center.z;

    const scaleFactor = 1;
    scene.scale.setScalar(scaleFactor);

    const distance = maxDim * 1.5;
    cam.position.set(distance, distance, distance);
    cam.lookAt(0, 0, 0);
    cam.updateProjectionMatrix();
  }, [scene, camera]);

  return <primitive object={scene} />;
}

export default function ModelViewer({ url }: { url: string }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 3], fov: 50 }}
      style={{ width: "100%", height: "500px" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model url={url} />
      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
}
