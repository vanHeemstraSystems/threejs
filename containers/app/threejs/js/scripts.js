const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()
const textureLoader = new THREE.TextureLoader()
const fov = 10; // field-of-view
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const aspect_ratio = (sizes.width / sizes.height);
const near = 0.1
const far = 100

// Base camera
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far)
camera.position.x = 18
camera.position.y = 8
camera.position.z = 20
scene.add(camera)

// Lights
const color = "white"
const intensity = 100
const light = new THREE.DirectionalLight(color, intensity)

const light_position_x = 0
const light_position_y = 0
const light_position_z = 0
light.position.set(light_position_x, light_position_y, light_position_z)
scene.add(light)

// Controls
const controls = new THREE.OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = true
controls.enablePan = false
controls.minDistance = 20
controls.maxDistance = 40
controls.minPolarAngle = Math.PI / 4
controls.maxPolarAngle = Math.PI / 2
controls.minAzimuthAngle = - Math.PI / 80
controls.maxAzimuthAngle = Math.PI / 2.5

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding

// Materials
// const bakedTexture = textureLoader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room05/ae27bdffd31dcc5cd5a919263f8f1c6874e05400/baked.jpg')
const bakedTexture = textureLoader.load('images/baked.jpg')
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding

const bakedMaterial = new THREE.MeshBasicMaterial({
    map: bakedTexture,
    side: THREE.DoubleSide,
})

// Loader
const loader = new THREE.GLTFLoader()
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
)


window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
// Animation
const tick = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
