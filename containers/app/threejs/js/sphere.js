// import * as THREE from 'three'

// Loading textures
const loader = new THREE.TextureLoader();
const earth = loader.load('images/earth.png')
const background = loader.load('images/space.png')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = background;

// Objects
const geometry_one = new THREE.SphereGeometry( 1, 36, 16 );
const geometry_two = new THREE.SphereGeometry(0.99, 36, 16);

// Materials
// For the outer sphere
const material_one = new THREE.MeshPhongMaterial()
material_one.color = new THREE.Color(0x00ff00)
material_one.map = earth;
material_one.transparent = true;