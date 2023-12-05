precision mediump float;
// uniform vec2 p;
// uniform float r;
// const int I = 500;
// varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;

const int ITERATIONS = 12;//5;
const float ZOOM = .5;

void main() {
  vec2 coord = ZOOM * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);

  // vec2 coord = gl_FragCoord.xy;

  float len;

  for(int i = 0; i < ITERATIONS; i++) {
    len = length(vec2(coord.x, coord.y));

    coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 9.0);
    coord.y = coord.y - sin(coord.x + cos(len)) + sin(u_time / 12.0);
  }

  gl_FragColor = vec4(cos(len) * .2, cos(len) * .02, cos(len) * 1., 1.0);

  // gl_FragColor = vec4(coord.x, coord.y, len, 1.0);
}