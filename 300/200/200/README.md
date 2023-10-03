# 200 - GLTFLoader

Here's the syntax for the ```GLTFLoader``` to initialize, load, and apply a texture to a material:

```
// Loader

// initialization
const loader = new THREE.GLTFLoader();

// loading texture
const texture = loader.load ('textures/texture.png');

// initializing material
const material = new THREE.MeshPhongMaterial();

// setting material property
material.map = texture;
```
js/scripts.js