precision mediump float;

attribute vec3 positions;
attribute vec3 normals;

varying vec3 vpos;
uniform mat4 perspective;
uniform mat4 view;

void main() {
  vpos = positions;
  gl_Position = perspective * view * vec4(positions, 1.0);
}
