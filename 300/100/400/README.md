# 400 - Add a Shape

Now we can add a shape to our scene. To create one, we first have to initialize the geometry and material and apply them to a mesh.

```
...
// Shapes
const geometry_height = 10
const geometry_width = 10
const geometry_depth = 10
const geometry = new THREE.BoxGeometry (geometry_height, geometry_width, geometry_depth)
...
```
js/scripts.js

