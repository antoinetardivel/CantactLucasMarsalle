import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import gsap from 'gsap'

const mailClick = document.getElementById('mail')

const goApropos = document.getElementById('goAPropos')
const goContact = document.getElementById('goContact')

/**
 * Base
 */
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
// scene.background = new THREE.Color( 0x000000 )
// #7451EB
// #008600
// Material
const textureLoader = new THREE.TextureLoader()
textureLoader.onStart = () => {
    console.log('onStart')
}
textureLoader.onLoaded = () => {
    console.log('onLoaded')
}
textureLoader.onProgress = () => {
    console.log('onProgress')
}
textureLoader.onError = () => {
    console.log('onError')
}
const whiteTexture = textureLoader.load('./textures/matcaps/white.jpg')
const dogMaterial = new THREE.MeshMatcapMaterial()
dogMaterial.matcap = whiteTexture

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()

gltfLoader.setDRACOLoader(dracoLoader)

let mixer = null
let dogGeometry = null
gltfLoader.load(
    './models/Camera/camera.glb',
    (gltfDog) =>
    {
        gltfDog.scene.scale.set(0.0015, 0.0015, 0.0015)
        gltfDog.scene.traverse( function( node ) {
            if ( node.isMesh ) { node.castShadow = true }
        });
        dogGeometry = gltfDog.scene;
        dogGeometry.position.y = 0
        dogGeometry.position.z = 0.00017 * window.innerWidth
        dogGeometry.rotation.y = Math.PI/5
        // dogGeometry.rotation.y = -Math.PI/5
        dogGeometry.rotation.z = Math.PI/5
        scene.add(dogGeometry)
        dogGeometry.traverse((o) => {
            if (o.isMesh) o.material = dogMaterial;
        })
        console.log(window.location.href.split('/')[window.location.href.split('/').length - 1])
        if(window.location.href.split('/')[window.location.href.split('/').length - 1] == "#Contact"){
            gsap.to(dogGeometry.position, { duration: 0.75, delay: 0, z: -0.00017 * window.innerWidth})
            gsap.to(dogGeometry.rotation, { duration: 0.75, delay: 0, y: (-Math.PI/5 + (Math.PI*2)) })
        }
        
    },
    (progress) =>
    {
        // console.log(progress)
    },
    (error) =>
    {

    }
)

/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0,
        roughness: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
// scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    dogGeometry.position.z = 0.00017 * window.innerWidth
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0.7, 0, 0)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setClearColor( 0x000000, 0 )
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

goApropos.addEventListener('click', () => {
    gsap.to(dogGeometry.position, { duration: 0.75, delay: 0, z: 0.00017 * window.innerWidth })
    gsap.to(dogGeometry.rotation, { duration: 0.75, delay: 0, y: Math.PI/5 })
})
mailClick.addEventListener('click', () => {
    gsap.to(dogGeometry.position, { duration: 0.75, delay: 0, z: -0.00017 * window.innerWidth})
    gsap.to(dogGeometry.rotation, { duration: 0.75, delay: 0, y: (-Math.PI/5 + (Math.PI*2)) })
})
goContact.addEventListener('click', () => {
    gsap.to(dogGeometry.position, { duration: 0.75, delay: 0, z: -0.00017 * window.innerWidth})
    gsap.to(dogGeometry.rotation, { duration: 0.75, delay: 0, y: (-Math.PI/5 + (Math.PI*2)) })
})
window.addEventListener('resize', () => {
    document.getElementById('Aboutme').scrollIntoView();
    gsap.to(dogGeometry.position, { duration: 0.75, delay: 0, z: 0.00017 * window.innerWidth })
    gsap.to(dogGeometry.rotation, { duration: 0.75, delay: 0, y: Math.PI/2 })
});
// dogGeometry.rotation.y = Math.PI/2
// dogGeometry.position.z = 0.45
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()