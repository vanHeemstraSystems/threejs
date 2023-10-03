# 300 - Place the Light

Placing a light source is a crucial part of setting up the scene. It illuminates the space and makes the objects visible or, in some cases, adds shades and details to the placed objects. We need to use its constructor first to initialize the kind of light we want to use.

```
...
// Lights
const color = "white";
const intensity = 100;
const light = new THREE.DirectionalLight(color, intensity)
...
```
js/scripts.js


