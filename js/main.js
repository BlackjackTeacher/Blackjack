import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Model vars
var Coke;
var pc;
var Karte;

// Scene
const scene = new THREE.Scene();

const color1 = new THREE.Color(0x00000);
scene.background = color1;

// Camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls( camera, renderer.domElement);
controls.target.set(2,0,1);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;

camera.position.set(2,1,8);
controls.update();

// Light
const light = new THREE.SpotLight(0xffffff);
const light2 = new THREE.SpotLight(0xffffff);
scene.add(light, light2);
light.position.set(2, 3, 2);
light2.position.set(2, -3, 2);
light.intensity = 25;
light2.intensity = 25
light.angle = 90;
light2.angle = -90;

// GLTF Loader & Models
const loader = new GLTFLoader();

loader.load('Models/PCTest/a_personal_computer.glb', function (gltf) {
    
    pc = gltf.scene;
    pc.position.set(0,-1,0);
    scene.add(pc);

}, undefined, function (error) {

    console.error; ('Wir haben einen Brief gekriegt, ich will mich umbringen');

});

loader.load('Models/CokeCan/coke_can.glb', function (gltf) {
    
    Coke = gltf.scene;
    Coke.position.set(2,-0.5,1);
    Coke.rotation.set(3.14, 0.785, 3.14);
    Coke.scale.set(0.5, 0.5, 0.5);
    scene.add(Coke);

}, undefined, function (error) {
    
    console.error; ('ICH DARF EINFACH KEIN COLA TRINKEN')

});

loader.load('Models/Karten/Karte_Test.glb', function (gltf) {

    Karte = gltf.scene;
    Karte.position.set(3, 0, 1);
    Karte.rotation.set(1.57, 0.785, 3.14);
    Karte.scale.set(5, 5, 5);
    scene.add(Karte);

}, undefined, function (error) {

    console.error; ('Das is aber kein Blackjack...')

})

controls.update();

// Window automatic resize
window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation Loop
function animate() {
    
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera, light);
    
    if(Karte){
    Karte.rotation.y += 0.05;
    Karte.rotation.z += 0.05;
    }
    
    if(Coke){
    Coke.rotation.y += 0.01;
    }

}
animate();