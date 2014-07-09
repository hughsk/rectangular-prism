precision mediump float;

varying vec3 vpos;

void main() {
  gl_FragColor = vec4(2.0 * abs(vpos), 1.0);
}
