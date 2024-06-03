import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Test
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

// Model vars
var test = 0;
var Tisch;
var deck;
var Deck;

// Deck
const gltfURLs = [
    'Models/Karten/aceOfClubs.glb',
    'Models/Karten/twoOfClubs.glb',
    'Models/Karten/threeOfClubs.glb',
    'Models/Karten/fourOfClubs.glb',
    'Models/Karten/fiveOfClubs.glb',
    'Models/Karten/sixOfClubs.glb',
    'Models/Karten/sevenOfClubs.glb',
    'Models/Karten/eightOfClubs.glb',
    'Models/Karten/nineOfClubs.glb',
    'Models/Karten/tenOfClubs.glb',
    'Models/Karten/jackOfClubs.glb',
    'Models/Karten/queenOfClubs.glb',
    'Models/Karten/kingOfClubs.glb',
    'Models/Karten/aceOfSpades.glb',
    'Models/Karten/twoOfSpades.glb',
    'Models/Karten/threeOfSpades.glb',
    'Models/Karten/fourOfSpades.glb',
    'Models/Karten/fiveOfSpades.glb',
    'Models/Karten/sixOfSpades.glb',
    'Models/Karten/sevenOfSpades.glb',
    'Models/Karten/eightOfSpades.glb',
    'Models/Karten/nineOfSpades.glb',
    'Models/Karten/tenOfSpades.glb',
    'Models/Karten/jackOfSpades.glb',
    'Models/Karten/queenOfSpades.glb',
    'Models/Karten/kingOfSpades.glb',
    'Models/Karten/aceOfHearts.glb',
    'Models/Karten/twoOfHearts.glb',
    'Models/Karten/threeOfHearts.glb',
    'Models/Karten/fourOfHearts.glb',
    'Models/Karten/fiveOfHearts.glb',
    'Models/Karten/sixOfHearts.glb',
    'Models/Karten/sevenOfHearts.glb',
    'Models/Karten/eightOfHearts.glb',
    'Models/Karten/nineOfHearts.glb',
    'Models/Karten/tenOfHearts.glb',
    'Models/Karten/jackOfHearts.glb',
    'Models/Karten/queenOfHearts.glb',
    'Models/Karten/kingOfHearts.glb',
    'Models/Karten/aceOfDiamonds.glb',
    'Models/Karten/twoOfDiamonds.glb',
    'Models/Karten/threeOfDiamonds.glb',
    'Models/Karten/fourOfDiamonds.glb',
    'Models/Karten/fiveOfDiamonds.glb',
    'Models/Karten/sixOfDiamonds.glb',
    'Models/Karten/sevenOfDiamonds.glb',
    'Models/Karten/eightOfDiamonds.glb',
    'Models/Karten/nineOfDiamonds.glb',
    'Models/Karten/tenOfDiamonds.glb',
    'Models/Karten/jackOfDiamonds.glb',
    'Models/Karten/queenOfDiamonds.glb',
    'Models/Karten/kingOfDiamonds.glb',
]

const batchSize = 2;

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

    console.error('Wir haben einen Brief gekriegt, ich will mich umbringen');

});

loader.load('Models/Karten/Karte_Deck.glb', (gltf) => {

    deck = gltf.scene;
    deck.position.set(0,0.5,2.5);
    scene.add(deck);

}, undefined, function (error) {

    console.error('Fickt euch doch alle');

});

/*
async function loadGTLF(url) {
    const loader = new GLTFLoader();

    return new Promise((resolve, reject) => {
        loader.load(
            url,
            (gltf) => {
                Deck[test] = gltf.scene;
                console.log('gltf datei geladen:', url)
                scene.add(Deck[test])
                resolve(gltf);
            },
            undefined,
            (error) => {
                console.error('Fehler beim laden der gltf datei', error)
                reject(error);
            }
        );
    });
}

async function loadGLTFModelsInBatches(urls, batchSize) {

    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    Deck = [];

    for (let k = 0; k < types.length; k++) {
        for (let j = 0; j < values.length; j++) {
            Deck.push(values[j] + "-" + types[k])
        }
    }

    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize).map(url => loadGTLF(url));
        await Promise.all(batch);
    }
}

loadGLTFModelsInBatches(gltfURLs, batchSize);
*/

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

// ich bin müde und habe keinen bock mehr, bitte lasst mich einfach sterben