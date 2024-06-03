import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Test
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

// Model vars
var Tisch;
var Deck;

// Deck
var aceOfClubs;
var twoOfClubs;
var threeOfClubs;
var fourOfClubs;
var fiveOfClubs;
var sixOfClubs;
var sevenOfClubs;
var eightOfClubs;
var nineOfClubs;
var tenOfClubs;
var jackOfClubs;
var queenOfClubs;
var kingOfClubs;
var aceOfSpades;
var twoOfSpades;
var threeOfSpades;
var fourOfSpades;
var fiveOfSpades;
var sixOfSpades;
var sevenOfSpades;
var eightOfSpades;
var nineOfSpades;
var tenOfSpades;
var jackOfSpades;
var queenOfSpades;
var kingOfSpades;
var aceOfHearts;
var twoOfHearts;
var threeOfHearts;
var fourOfHearts;
var fiveOfHearts;
var sixOfHearts;
var sevenOfHearts;
var eightOfHearts;
var nineOfHearts;
var tenOfHearts;
var jackOfHearts;
var queenOfHearts;
var kingOfHearts;
var aceOfDiamonds;
var twoOfDiamonds;
var threeOfDiamonds;
var fourOfDiamonds;
var fiveOfDiamonds;
var sixOfDiamonds;
var sevenOfDiamonds;
var eightOfDiamonds;
var nineOfDiamonds;
var tenOfDiamonds;
var jackOfDiamonds;
var queenOfDiamonds;
var kingOfDiamonds;

// Scene
const scene = new THREE.Scene();

const color1 = new THREE.Color(0x00000);
scene.background = color1;

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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

    // initialisierung des Tisch Models + scale & pos
    Tisch = gltf.scene;
    Tisch.position.set(0, -1, -2);
    Tisch.scale.set(1.25, 1, 1.25);
    scene.add(Tisch);

}, undefined, function (error) {

    console.error; ('Wir haben einen Brief gekriegt, ich will mich umbringen');

});

loader.load('Models/Karten/aceOfClubs.glb', (gltf) => {

    aceOfClubs = gltf.scene;
    scene.add(aceOfClubs);

    aceOfClubs.position.set(0, 0, 2)

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein aceOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/twoOfClubs.glb', (gltf) => {

    twoOfClubs = gltf.scene;
    scene.add(twoOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein twoOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/threeOfClubs.glb', (gltf) => {

    threeOfClubs = gltf.scene;
    scene.add(threeOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein threeOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/fourOfClubs.glb', (gltf) => {

    fourOfClubs = gltf.scene;
    scene.add(fourOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fourOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/fiveOfClubs.glb', (gltf) => {

    fiveOfClubs = gltf.scene;
    scene.add(fiveOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fiveOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/sixOfClubs.glb', (gltf) => {

    sixOfClubs = gltf.scene;
    sixOfClubs.position.set(0, 0.15, 2)
    scene.add(sixOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sixOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/sevenOfClubs.glb', (gltf) => {

    sevenOfClubs = gltf.scene;
    sevenOfClubs.position.set(0, 0.16, 2)
    scene.add(sevenOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sevenOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/eightOfClubs.glb', (gltf) => {

    eightOfClubs = gltf.scene;
    eightOfClubs.position.set(0, 0.17, 2)
    scene.add(eightOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein eightOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/nineOfClubs.glb', (gltf) => {

    nineOfClubs = gltf.scene;
    nineOfClubs.position.set(0, 0.18, 2)
    scene.add(nineOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein nineOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/tenOfClubs.glb', (gltf) => {

    tenOfClubs = gltf.scene;
    tenOfClubs.position.set(0, 0.19, 2)
    scene.add(tenOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein tenOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/jackOfClubs.glb', (gltf) => {

    jackOfClubs = gltf.scene;
    jackOfClubs.position.set(0, 0.2, 2)
    scene.add(jackOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein jackOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/queenOfClubs.glb', (gltf) => {

    queenOfClubs = gltf.scene;
    queenOfClubs.position.set(0, 0.21, 2)
    scene.add(queenOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein queenOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/kingOfClubs.glb', (gltf) => {

    kingOfClubs = gltf.scene;
    kingOfClubs.position.set(0, 0.22, 2)
    scene.add(kingOfClubs);

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein kingOfClubs runtergefallen...')

});
}

loader.load('Models/Karten/aceOfSpades.glb', (gltf) => {

    aceOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein aceOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/twoOfSpades.glb', (gltf) => {

    twoOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein twoOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/threeOfSpades.glb', (gltf) => {

    threeOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein threeOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/fourOfSpades.glb', (gltf) => {

    fourOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fourOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/fiveOfSpades.glb', (gltf) => {

    fiveOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fiveOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/sixOfSpades.glb', (gltf) => {

    sixOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sixOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/sevenOfSpades.glb', (gltf) => {

    sevenOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sevenOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/eightOfSpades.glb', (gltf) => {

    eightOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein eightOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/nineOfSpades.glb', (gltf) => {

    nineOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein nineOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/tenOfSpades.glb', (gltf) => {

    tenOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein tenOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/jackOfSpades.glb', (gltf) => {

    jackOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein jackOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/queenOfSpades.glb', (gltf) => {

    queenOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein queenOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/kingOfSpades.glb', (gltf) => {

    kingOfSpades = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein kingOfSpades runtergefallen...')

});
}

loader.load('Models/Karten/aceOfHearts.glb', (gltf) => {

    aceOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein aceOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/twoOfHearts.glb', (gltf) => {

    twoOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein twoOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/threeOfHearts.glb', (gltf) => {

    threeOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein threeOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/fourOfHearts.glb', (gltf) => {

    fourOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fourOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/fiveOfHearts.glb', (gltf) => {

    fiveOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fiveOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/sixOfHearts.glb', (gltf) => {

    sixOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sixOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/sevenOfHearts.glb', (gltf) => {

    sevenOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sevenOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/eightOfHearts.glb', (gltf) => {

    eightOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein eightOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/nineOfHearts.glb', (gltf) => {

    nineOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein nineOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/tenOfHearts.glb', (gltf) => {

    tenOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein tenOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/jackOfHearts.glb', (gltf) => {

    jackOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein jackOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/queenOfHearts.glb', (gltf) => {

    queenOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein queenOfHearts runtergefallen...')

});
}

loader.load('Models/Karten/kingOfHearts.glb', (gltf) => {

    kingOfHearts = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein kingOfHearts runtergefallen...')

});
}

if (kingOfHearts) {
loader.load('Models/Karten/aceOfDiamonds.glb', (gltf) => {

    aceOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein aceOfDiamonds runtergefallen...')

});
}

if (aceOfDiamonds) {
loader.load('Models/Karten/twoOfDiamonds.glb', (gltf) => {

    twoOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein twoOfDiamonds runtergefallen...')

});
}

if (twoOfDiamonds) {
loader.load('Models/Karten/threeOfDiamonds.glb', (gltf) => {

    threeOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein threeOfDiamonds runtergefallen...')

});
}

if (threeOfDiamonds) {
loader.load('Models/Karten/fourOfDiamonds.glb', (gltf) => {

    fourOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fourOfDiamonds runtergefallen...')

});
}

if (fourOfDiamonds) {
loader.load('Models/Karten/fiveOfDiamonds.glb', (gltf) => {

    fiveOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein fiveOfDiamonds runtergefallen...')

});
}

if (fiveOfDiamonds) {
loader.load('Models/Karten/sixOfDiamonds.glb', (gltf) => {

    sixOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sixOfDiamonds runtergefallen...')

});
}

if (sixOfDiamonds) {
loader.load('Models/Karten/sevenOfDiamonds.glb', (gltf) => {

    sevenOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein sevenOfDiamonds runtergefallen...')

});
}

if (sevenOfDiamonds) {
loader.load('Models/Karten/eightOfDiamonds.glb', (gltf) => {

    eightOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein eightOfDiamonds runtergefallen...')

});
}

if (eightOfDiamonds) {
loader.load('Models/Karten/nineOfDiamonds.glb', (gltf) => {

    nineOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein nineOfDiamonds runtergefallen...')

});
}

if (nineOfDiamonds) {
loader.load('Models/Karten/tenOfDiamonds.glb', (gltf) => {

    tenOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein tenOfDiamonds runtergefallen...')

});
}

if (tenOfDiamonds) {
loader.load('Models/Karten/jackOfDiamonds.glb', (gltf) => {

    jackOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein jackOfDiamonds runtergefallen...')

});
}

if (jackOfDiamonds) {
loader.load('Models/Karten/queenOfDiamonds.glb', (gltf) => {

    queenOfDiamonds = gltf.scene;

}, undefined, function (error) {
    console.error('Ich glaub mir ist ein queenOfDiamonds runtergefallen...')

});
}

if (queenOfDiamonds) {
    loader.load('Models/Karten/kingOfDiamonds.glb', (gltf) => {

        kingOfDiamonds = gltf.scene;

    }, undefined, function (error) {
        console.error('Ich glaub mir ist ein kingOfDiamonds runtergefallen...')

    });
}

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

}

window.addEventListener('pointermove', onMouseMove);

// Animation Loop
function animate() {

    if (Tisch) {
        Tisch.position.set(0, -1, -2);
        Tisch.scale.set(1.25, 1, 1.25);
    }
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