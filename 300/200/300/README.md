# 300 - SphereGeometry

We will use ```SphereGeometry``` and add material to it. We will also add lighting to the scene to illuminate the sphere.

Our goal is to make this scene into a shot of Earth from space.

Now, we'll apply the texture to the sphere and make it transparent. We'll also create another sphere right underneath the previous one and set its color to blue. 

The scene will take a while to render everything because it has to load and apply textures to the objects.

Here is the source code:

```

```
sphere.html

```
import * as THREE from 'three'

// Loading textures
const loader = new THREE.TextureLoader();
const earth = loader.load('images/earth.png')
const backgroup = loader.load('images/background.png')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = background;

// Objects
const geometry_one = new THREE.SphereGeometry( 1, 36, 16 );
const geometry_two = new THREE.SphereGeometry(0.99, 36, 16);

// Materials
//For the outer sphere
const material_one = new THREE.MeshPhongMaterial()
material_one.color = new THREE.Color(0x00ff00)
material_one.map = earth;
material_one.transparent = true;
```
js/sphere.js

Lines 4–6: This code loads required textures using the TextureLoader object's load method. One is to apply to the scene and the other to Earth.

Line 15: This code applies the texture to the scene background. We can invoke the background property and set it to the loaded texture.

Lines 28–29: This code applies the texture to the material of the shape. We use the simple map property. In the following line, we make the material layer transparent using the transparent method. Therefore, only the texture shows up and does not obscure the cube beneath.