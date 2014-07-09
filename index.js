var prism = require('./cube')

module.exports = createPrism

function createPrism(size, pos) {
  pos  = pos || [0,0,0]
  size = size || [1,1,1]

  if (!Array.isArray(size)) {
    size = [size, size, size]
  }

  var prism = clonePrism()

  for (var i = 0; i < prism.positions.length; i++) {
    prism.positions[i][0] *= size[0]
    prism.positions[i][1] *= size[1]
    prism.positions[i][2] *= size[2]
    prism.positions[i][0] += pos[0]
    prism.positions[i][1] += pos[1]
    prism.positions[i][2] += pos[2]
  }

  return prism
}

function clonePrism() {
  return {
    cells: prism.cells.map(function(d) {
      return d.slice()
    }),
    positions: prism.positions.map(function(d) {
      return d.slice()
    })
  }
}
