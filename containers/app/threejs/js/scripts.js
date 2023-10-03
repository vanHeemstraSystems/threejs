// Canvas
const canvas = document.querySelector('.webgl');

// Texture Loader
const textureLoader = new THREE.TextureLoader();

// Materials
// const bakedTexture = textureLoader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room05/ae27bdffd31dcc5cd5a919263f8f1c6874e05400/baked.jpg')
const bakedTexture = textureLoader.load('images/baked.jpg')
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding

const bakedMaterial = new THREE.MeshBasicMaterial({
    map: bakedTexture,
    side: THREE.DoubleSide,
})

// GLTF Loader
const loader = new THREE.GLTFLoader();
//loader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room05/ae27bdffd31dcc5cd5a919263f8f1c6874e05400/model.glb',
loader.load('models/model.glb',	
    (gltf) => {
        const model = gltf.scene
        model.traverse( child => child.material = bakedMaterial )
        scene.add(model)
    },
    ( xhr ) => {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' )
    }
);

// Scene
const scene = new THREE.Scene();
const background = textureLoader.load('images/background.jpg'); 
scene.background = background; // "black";

// Base Camera
const fov = 10; // field-of-view
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const aspect_ratio = (sizes.width / sizes.height);
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
camera.position.x = 18;
camera.position.y = 8;
camera.position.z = 20;
scene.add(camera);

// Lights
const color = 0xffffff; // white
const intensity = 0.5;
const light = new THREE.DirectionalLight(color, intensity);

const light_position_x = 0;
const light_position_y = 0;
const light_position_z = 5;
light.position.set(light_position_x, light_position_y, light_position_z);
scene.add(light);

// Shapes
const geometry_height = 2;
const geometry_width = 2;
const geometry_depth = 2;
const geometry = new THREE.BoxGeometry (geometry_height, geometry_width, geometry_depth);
const material = new THREE.MeshPhongMaterial();
material.color = new THREE.Color(0x0ffff0); // aqua
const box = new THREE.Mesh(geometry, material);
// scene.add(box); // Not required

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

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding

// renderer.render(scene, camera); // See Animation

// Events

window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animation
const animate = () => {
    // Update controls
    controls.update();
    // Auto-rotation (optional)
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    // Render
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};

animate();