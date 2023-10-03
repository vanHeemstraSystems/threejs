# 700 - The Animation Function

If we are creating a scene with moving objects, we need to create a function that updates to render the animation we require. To do that, we will need to use the ```window.requestAnimationFrame``` method. For a more detailed explanation, you can visit this [Answer](https://www.educative.io/answers/what-is-windowrequestanimationframe-in-javascript).

```
// Animation
const animate = () => {
    // Update controls
    controls.update();

    // Auto-rotation (optional)
    box.rotation.x += 0.01;
	box.rotation.y += 0.01;

    // Render
    renderer.render(scene, camera);

    // Call function again on the next frame
    window.requestAnimationFrame(animate);  
}
```

Call the animate function on page load.

```
animate();
```

Auto-rotation, which is optional, adds rotation on the x and y axes of the cube.

Follow this [link](https://www.educative.io/answers/how-to-rotate-an-object-on-its-own-axis-in-threejs) to learn how to make an object rotate about its own axis.