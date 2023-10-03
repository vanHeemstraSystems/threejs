# 600 - Controls

We can control the geometry on the canvas by means of controls.

```
// Controls
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = true;
controls.enablePan = false;
controls.minDistance = 20;
controls.maxDistance = 40;
controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI / 2;
controls.minAzimuthAngle = - Math.PI / 80;
controls.maxAzimuthAngle = Math.PI / 2.5;
```

**Note**: ```camera``` and ```canvas``` have been defined earlier.

These controls allow us to rotate the canvas and zoom in and out of the canvas with the mouse.

## Advanced controls

To scale and centralize the canvas in response to the resizing of the browser window, an event listener can be applied, as follows:

```
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
```
js/scripts.js