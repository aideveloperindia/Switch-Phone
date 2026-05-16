import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

export const DEVICE_ICON_URLS = [
  '/icons/speaker.png',
  '/icons/camera.png',
  '/icons/microphone.png',
  '/icons/pulse.png',
] as const;

useTexture.preload([...DEVICE_ICON_URLS]);

function configureIconTexture(texture: THREE.Texture) {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

export function useDeviceIconTextures() {
  const [speaker, camera, microphone, pulse] = useTexture([...DEVICE_ICON_URLS]);
  return {
    speaker: configureIconTexture(speaker),
    camera: configureIconTexture(camera),
    microphone: configureIconTexture(microphone),
    pulse: configureIconTexture(pulse),
  };
}

export function iconMaterialProps(texture: THREE.Texture) {
  return {
    map: texture,
    transparent: true,
    alphaTest: 0.05,
    depthWrite: false,
    toneMapped: false,
  };
}
