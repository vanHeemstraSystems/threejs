# 500 - Render the Scene

After the scene is set, we need to create a render function that updates to render the animations on the screen.

```
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas, 
    antialias:true, 
    alpha:true
});
```
js/scripts.js

- A scene is typically rendered using the ```WebGLRenderer```. However, the usage may vary depending upon the needs.
- The ```WebGLRenderer``` is given a canvas object as a parameter to render the scene in.

**Note**: If no parameters are passed, the renderer will create a new canvas, which can be appended to the DOM.

We can set the size of the renderer using the setSize property:

```
// Renderer
...
renderer.setSize(sizes.width, sizes.height);
```
js/scripts.js

**Note**: ```sizes`````` as been defined earlier as being: 

```
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
```

We can set the pixel ratio of the renderer using the setPixelRatio property:

```
// Renderer
...
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```
js/scripts.js

We can set the output encoding of the renderer using the outputEncoding property:

```
// Renderer
...
renderer.outputEncoding = THREE.sRGBEncoding;
```
js/scripts.js

Finally, we will call the render method to render the scene:

```
// Renderer
...
renderer.render(scene, camera);
```
js/scripts.js

This method takes the ```scene``` we created and the ```camera``` as parameters. 

**Note**: the ```render``` function, when using animation, will be called from within the animation function (here: tick) instead.