varying vec2 vUv;
// uniform float time;
void main() {

  vec3 color1 = vec3(1.0, 0.0, 0.0); // red
  vec3 color2 = vec3(0.0, 1.0, 0.0); // green

  gl_FragColor = vec4(mix(color1, color2, vUv.x), 1.0);
}