var canvas       = document.body.appendChild(document.createElement('canvas'))
var camera       = require('canvas-orbit-camera')(canvas)
var gl           = require('gl-context')(canvas, render)
var mat4         = require('gl-matrix').mat4
var fit          = require('canvas-fit')
var createGeo    = require('gl-geometry')
var createShader = require('glslify')
var prism        = require('./')

var cube = prism(1, [-0.5, -0.5, -0.5])
var mesh = createGeo(gl)
  .attr('positions', cube)

var shader = createShader({
    frag: './shaders/cube.frag'
  , vert: './shaders/cube.vert'
})(gl)

window.addEventListener('resize'
  , fit(canvas)
  , false
)

camera.distance = 3

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.enable(gl.DEPTH_TEST)
  gl.enable(gl.CULL_FACE)

  mesh.bind(shader)

  shader.uniforms.view = camera.view()
  shader.uniforms.perspective = mat4.perspective(mat4.create()
    , Math.PI / 4
    , canvas.width / canvas.height
    , 0.001
    , 10000
  )

  mesh.draw()
  mesh.unbind()
  camera.tick()
}
