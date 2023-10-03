# 200 - Set up the Camera

```
// Base camera
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
```

We do the following in the code above:

- We use the PerspectiveCamera. This camera mimics the way the human eye sees.
- The ```fov``` parameter refers to the ‘field of view’ of the camera.
- The ```aspect_ratio``` is usually set as the size of the screen. Ideally, it is kept the same as the size given to the renderer function (explained below). This can be obtained using the window property from the DOM as shown below:

```
...
const fov = 10;
...
```
js/scripts.js

```
...
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};
const aspect_ratio = (sizes.width / sizes.height);

// this can be passed as a parameter 
// using the width and height properties
// (sizes.width / sizes.height).
...
```
js/scripts.js

- The ```near``` parameter is the closest distance that the camera will capture.
- The ```far``` parameter is the farthest distance the camera will capture.

```
...
const near = 0.1;
const far = 100;
...
```
js/scripts.js

The position of the camera can be set as shown below:

```
camera.position.x = 18;
camera.position.y = 8;
camera.position.z = 20;

// or we can use a Vector3

// camera.position.set(18,8,20);
```
js/scripts.js

By default, the objects are placed at the center of the plane.

Lastly, we add the camera to the scene:

```
scene.add(camera);
```
js/scripts.js

So far we have the following:

```
const scene = new THREE.Scene();
const fov = 10; // field-of-view
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};
const aspect_ratio = (sizes.width / sizes.height);
const near = 0.1;
const far = 100;

// Base camera
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
camera.position.x = 18;
camera.position.y = 8;
camera.position.z = 20;
scene.add(camera);
```
js/scripts.js