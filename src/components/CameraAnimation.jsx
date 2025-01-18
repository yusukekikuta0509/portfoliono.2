// CameraAnimation.jsx
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CameraAnimation = ({ projectPositions, currentIndex, duration = 2 }) => {
  const { camera } = useThree();
  const velocityRef = useRef(0);
  const animating = useRef(false);
  const targetPosition = useRef(new THREE.Vector3());

  // 初回マウント時の初期設定
  useEffect(() => {
    if (!projectPositions || projectPositions.length === 0) return;
    // カメラを初期位置に設定し、初回ターゲットを設定
    camera.position.set(0, 0, 20);
    const initialPos = projectPositions[currentIndex] || new THREE.Vector3();
    targetPosition.current.copy(initialPos);
    targetPosition.current.z = camera.position.z; // 奥行きを維持
    velocityRef.current = 0;
    animating.current = true;
  }, [camera, projectPositions, currentIndex]);

  // currentIndex が変わったときに新しいターゲット位置を設定
  useEffect(() => {
    if (!projectPositions || projectPositions.length === 0) return;
    const index = currentIndex % projectPositions.length;
    const newPos = projectPositions[index];
    if (newPos) {
      targetPosition.current.copy(newPos);
      targetPosition.current.z = camera.position.z; // 奥行きを維持
      velocityRef.current = 0;
      animating.current = true;
    }
  }, [currentIndex, projectPositions, camera.position.z]);

  // フレームごとのアニメーション処理
  useFrame((state, delta) => {
    if (animating.current) {
      velocityRef.current += delta;
      const factor = Math.min(velocityRef.current / duration, 1);
      camera.position.lerp(targetPosition.current, factor);
      camera.lookAt(targetPosition.current);
      if (factor >= 1) {
        animating.current = false;
      }
    }
  });

  return null;
};

export default CameraAnimation;
