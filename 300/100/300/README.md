# 300 - Place the Light

Placing a light source is a crucial part of setting up the scene. It illuminates the space and makes the objects visible or, in some cases, adds shades and details to the placed objects. We need to use its constructor first to initialize the kind of light we want to use.

```
...
// Lights
const color = "white"
const intensity = 100
const light = new THREE.DirectionalLight(color, intensity)
...
```
js/scripts.js

- In this snippet, we have used ```DirectionalLight```. This light gets emitted only in a specific direction.
- Here, ```color``` decides what color we want our light to be.
- The ```intensity``` parameter is the intensity of the light.

By default, ```light``` is placed at coordinates: (0,0,0). We can set the position of the light in the following way:

```
...
// Lights
...
const light_position_x = 0
const light_position_y = 0
const light_position_z = 0
light.position.set(light_position_x, light_position_y, light_position_z)
...
```
js/scripts.js

We finish by adding it to the scene:

```
...
// Lights
...
scene.add(light)
...
```
js/scripts.js