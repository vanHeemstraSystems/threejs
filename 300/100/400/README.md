# 400 - Add a Shape

Now we can add a shape to our scene. To create one, we first have to initialize the geometry and material and apply them to a mesh.

```
...
// Shapes
const geometry_height = 2;
const geometry_width = 2;
const geometry_depth = 2;
const geometry = new THREE.BoxGeometry (geometry_height, geometry_width, geometry_depth);
...
```
js/scripts.js

Here, we use a simple ```BoxGeometry```.

- The ```height``` parameter refers to the height of the box.
- The ```width``` parameter refers to the width of the box.
- The ```depth``` parameter refers to the depth of the box. There are three more parameters — ```widthSegments```, ```heightSegments```, and ```depthSegments```. The last three are all optional parameters that default to the value of 1.

Then, we choose the material:

```
// Shapes
...
const material = new THREE.MeshPhongMaterial();
...
```
js/scripts.js

- Here, we use ```MeshPhongMaterial```. This is used to simulate shiny and reflective surfaces.

Any kind of material we use inherits directly from the ```Material``` class. This means all the methods that apply to the ```Material``` class can be used on the material we use.

***Note***: There is an exception for the ```color``` property, which is part of the inheriting material class and not the base class. This allows us to set the color of the material.

```
// Shapes
...
material.color = new THREE.Color(0x0ffff0); // aqua
...
```
js/scripts.js

Here, ```THREE.Color``` is another base class explained in this [Answer](https://www.educative.io/answers/what-is-the-color-class-in-threejs).

Now we use the mesh to create the shape we need:

```
// Shapes
...
const box = new THREE.Mesh(geometry, material);
...
```
js/scripts.js

- ```geometry``` is the ```BoxGeometry``` we initialized above.
- ```material``` is the ```MeshPhongMaterial``` we used previously.

Finally, we add the shape to our scene:

```
// Shapes
...
scene.add(box);
...
```
js/scripts.js
