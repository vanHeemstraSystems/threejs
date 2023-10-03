# 100 - Initialize the Scene

The scene needs to be initialized after importing the three.js library as shown below:

```
...
const scene = new THREE.Scene();
...
```
js/scripts.js

We can now use ```scene.add``` to add elements to our scene after initializing them. We will start with the camera.