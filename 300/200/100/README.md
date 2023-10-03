# 100 - TextureLoader

Here's the syntax for the ```TextureLoader``` to initialize, load, and apply a texture to a material:

```
// Loader

// initialization
const loader = new THREE.TextureLoader();

// loading texture
const texture = loader.load ('textures/texture.png');

// initializing material
const material = new THREE.MeshPhongMaterial();

// setting material property
material.map = texture;
```
js/scripts.js

Here, we use ```map```. However, many methods can be used to apply texture.