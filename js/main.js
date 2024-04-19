import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Test
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

// Model vars
var Coke;
var CokeUp = false;
var Tisch;
var Karte;

// Scene
const scene = new THREE.Scene();

const color1 = new THREE.Color(0x00000);
scene.background = color1;

// Camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, 4.5);
camera.rotateX(-1.3);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.SpotLight(0xffffff);
const light2 = new THREE.SpotLight(0xffffff);
const lightTest = new THREE.AmbientLight;
scene.add(light, light2, lightTest);
lightTest.intensity = 2;
light.position.set(2, 3, 2);
light2.position.set(2, -3, 2);
light.intensity = 25;
light2.intensity = 25
light.angle = 90;
light2.angle = -90;

// GLTF Loader & Models
const loader = new GLTFLoader();

loader.load('Models/Tischplatte/BJ_Tischplatte.glb', (gltf) => {

    Tisch = gltf.scene;
    Tisch.position.set(0, -1, -2);
    Tisch.scale.set(1.23, 1, 1.23);
    scene.add(Tisch);

}, undefined, function (error) {

    console.error; ('Wir haben einen Brief gekriegt, ich will mich umbringen');

});

loader.load('Models/CokeCan/coke_can.glb', (gltf) => {

    Coke = gltf.scene;
    Coke.position.set(2, -0.5, 1);
    Coke.rotation.set(3.14, 0.785, 3.14);
    Coke.scale.set(0.5, 0.5, 0.5);
    scene.add(Coke);

}, undefined, function (error) {

    console.error; ('ICH DARF EINFACH KEIN COLA TRINKEN')

});

loader.load('Models/Karten/Karte_Deck.glb', (gltf) => {

    Karte = gltf.scene;
    Karte.position.set(3, 0, 1);
    Karte.scale.set(5, 5, 5);
    scene.add(Karte);

}, undefined, function (error) {

    console.error; ('Das is aber kein Blackjack...')

})

// Window automatic resize
window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Mausbewegung für Mesh-Interaktionen verfolgen
function onMouseMove(event) {

    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

// Raycaster Test
function render() {

    raycaster.setFromCamera(mouse, camera);
    if (Coke) {
        const intersection = raycaster.intersectObject(Coke, true);
        if (intersection.length > 0) {
            Coke.position.set(0, 0, 1);
        } else {
            Coke.position.set(2, 0, 1);
        }
    }
}

window.addEventListener('pointermove', onMouseMove);

// Animation Loop
function animate() {

    requestAnimationFrame(animate);
    window.requestAnimationFrame(render);

    renderer.render(scene, camera, light);

}
animate();

/*Logik vom Spiel

    Karten unterscheiden
    Kartendeck Logik(bei einem deck kann eine karte nicht 2 mal vorkommen)
    Buttons den aktionen zuweisen

*/

/*Doku was das spiel machen soll:

    Spiel start

    Karten werden gemischt und ausgeteilt
        Spieler bekommt eine Karte
        Dealer bekommt eine Karte
        Spieler bekommt eine Karte
        Dealer bekommt verdeckt eine Karte

    Check nach Blackjack
        falls nötig auch bei Dealer
            falls nötig spieler nach insurance fragen
    
    Erste Spieler aktion
        Spieler entscheidet zwischen Hit/Stand(/Double/Split)
            Aktion wird ausgeführt
        Loop bis Punktzahl auf allen händen >= 21 oder Stand auf alle hände zutrifft
    
    Spiel zuende
        wiederhole Spiel

*/