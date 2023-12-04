
<template>
  <TresCanvas window-size clear-color="#222">
    <TresOrthographicCamera :position="[0, 20, 0]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <TresMesh ref="blobRef" :rotation="[-Math.PI / 2, 0, 0]">
      <TresPlaneGeometry :args="[100, 100, 100, 100]" />
      <TresShaderMaterial :vertex-shader="vertexShader" :fragment-shader="fragmentShader" :uniforms="uniforms" />
    </TresMesh>
    <!-- <TresGridHelper /> -->
  </TresCanvas>
</template>

<script setup>
import { Color, Vector2 } from 'three';

import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from './shaders/fragment.glsl?raw';

const palette = ['red', 'green', 'blue'].map((color) => new Color(color));

const blobRef = ref(null);
// const materialRef = ref(null);
const uniforms = {
  uTime: { value: 0 },
  uAmplitude: { value: new Vector2(0.1, 0.1) },
  uFrequency: { value: new Vector2(20, 5) },
  uPalette: { value: palette }
}

const { onLoop, resume } = useRenderLoop();
resume();
onLoop(({ _delta, elapsed }) => {
  if (blobRef.value) {
    blobRef.value.material.uniforms.uTime.value = elapsed
  }
});
</script>