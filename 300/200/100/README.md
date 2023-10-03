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

We can use TextureLoader for loading a background image for our scene, like so:

```
// Scene
const backgroundLoader = new THREE.TextureLoader();
const background = backgroundLoader.load('images/background.jpg'); 
scene.background = background; // "black";
```
js/scripts.js