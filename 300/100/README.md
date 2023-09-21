# 100 - Create a Scene

Creating a scene in three.js requires setting up the following components beforehand:

- Scene
- Camera
- Light

The ```Scene``` can then be populated using the ```.add()``` property with elements such as the following:

- Mesh

- -- Geometry

- -- Material

- Object3D

- Light

## Initialize the Scene

The scene needs to be initialized after importing the three.js library as shown below:

```
...
const scene = new THREE.Scene();
...
```
js/scripts.js

We can now use ```scene.add``` to add elements to our scene after initializing them. We will start with the camera.

## Set up the Camera

```
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far)
```

We do the following in the code above:

- We use the PerspectiveCamera. This camera mimics the way the human eye sees.
- The fov parameter refers to the ‘field of view’ of the camera.
- The aspect_ratio is usually set as the size of the screen. Ideally, it is kept the same as the size given to the renderer function (explained below). This can be obtained using the window property from the DOM as shown below:

```
const aspect_ratio = {
    width: window.innerWidth,
    height: window.innerHeight
}

// this can be passed as a parameter 
// using the width and height properties
// (aspect_ratio.width / aspect_ratio.height).
```

- The near parameter is the closest distance that the camera will capture.
- The far parameter is the farthest distance the camera will capture.

The position of the camera can be set as shown below:

```
camera.position.x = 0
camera.position.y = 0
camera.position.z = 4

// or we can use a Vector3

camera.position.set(0,0,4)
```

By default, the objects are placed at the center of the plane.

Lastly, we add the camera to the scene:

```
scene.add(camera)
```

## Place the Light

More ...

## Add a Shape

More ...

## Render the Scene

More ...

## The Animation Function

More ...

## Output

More ...