# rectangular-prism [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Quickly generate an [indexed mesh](http://github.com/hughsk/indexed-geometry-demo)
for a rectangular prism, because triangles.

![cube](http://imgur.com/ovGeDBD.png)

## Usage

[![NPM](https://nodei.co/npm/rectangular-prism.png)](https://nodei.co/npm/rectangular-prism/)

### mesh = prism([size], [position])

Returns a [simplicial-complex](https://github.com/mikolalysenko/simplicial-complex)-style
mesh, i.e. an object with two properties:

* `mesh.positions`: the prism's vertices.
* `mesh.cells`: the prism's faces.

If you don't pass the function any arguments, you'll simply get a unit (1x1x1)
cube mesh in return. You can optionally pass in the following arguments for
your convenience:

* `size`: the size of the prism. May either be a number (if you just want a cube),
  or an array with the `[x, y, z]` dimensions of your new mesh. Defaults to `1`.
* `position`: an array containing the `[x, y, z]` position of the mesh. Defaults
  to `[0, 0, 0]`.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/rectangular-prism/blob/master/LICENSE.md) for details.
