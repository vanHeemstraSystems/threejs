# 700 - The Animation Function

If we are creating a scene with moving objects, we need to create a function that updates to render the animation we require. To do that, we will need to use the ```window.requestAnimationFrame``` method. For a more detailed explanation, you can visit this [Answer](https://www.educative.io/answers/what-is-windowrequestanimationframe-in-javascript).

```
// Animation
const renderFunction = () => {
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call function again on the next frame
    window.requestAnimationFrame(renderFunction)
}
```

Call the render function on page load.

```
renderFunction();
```