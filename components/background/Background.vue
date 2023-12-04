
<template>
  <TresCanvas window-size clear-color="#222">
    <TresPerspectiveCamera :position="[11, 11, 11]" />
    <OrbitControls />
    <TresMesh ref="blobRef" :rotation="[-Math.PI / 2, 0, 0]">
      <TresPlaneGeometry :args="[10, 10, 10, 10]" />
      <TresShaderMaterial :vertex-shader="vertexShader" :fragment-shader="fragmentShader" :uniforms="uniforms"
        wireframe />
    </TresMesh>
    <!-- <TresGridHelper /> -->
  </TresCanvas>
</template>

<script setup>
import { Vector2 } from 'three';

import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from './shaders/fragment.glsl?raw';

const blobRef = ref(null);
// const materialRef = ref(null);
const uniforms = {
  uTime: { value: 0 },
  uAmplitude: { value: new Vector2(0.1, 0.1) },
  uFrequency: { value: new Vector2(20, 5) },
}

const { onLoop, resume } = useRenderLoop();
resume();
onLoop(({ _delta, elapsed }) => {
  if (blobRef.value) {
    blobRef.value.material.uniforms.uTime.value = elapsed
  }
});
</script>