import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Test
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

// Model vars
var Coke;
var Tisch;
var Deck;
const clubsGroup = new THREE.Group();
const spadesGroup = new THREE.Group();
const heartsGroup = new THREE.Group()
const diamondsGroup = new THREE.Group()

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

    // initialisierung des Tisch Models + scale & pos
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

    // initialisierung des Kartendeck Models + scale & pos
    Deck = gltf.scene;
    Deck.position.set(3, 0, 1);
    Deck.scale.set(7.5, 7.5, 7.5);
    scene.add(Deck);
    
    // einzel Karteninitialisierung
    const aceOfClubs = scene.getObjectByName('Card_Ace_Clubs');
    const twoOfClubs = scene.getObjectByName('Card_Two_Clubs');
    const threeOfClubs = scene.getObjectByName('Card_Three_Clubs');
    const fourOfClubs = scene.getObjectByName('Card_Four_Clubs');
    const fiveOfClubs = scene.getObjectByName('Card_Five_Clubs');
    const sixOfClubs = scene.getObjectByName('Card_Six_Clubs');
    const sevenOfClubs = scene.getObjectByName('Card_Seven_Clubs');
    const eightOfClubs = scene.getObjectByName('Card_Eight_Clubs');
    const nineOfClubs = scene.getObjectByName('Card_Nine_Clubs');
    const tenOfClubs = scene.getObjectByName('Card_Ten_Clubs');
    const jackOfClubs = scene.getObjectByName('Card_Jack_Clubs');
    const queenOfClubs = scene.getObjectByName('Card_Queen_Clubs');
    const kingOfClubs = scene.getObjectByName('Card_King_Clubs');
    const aceOfSpades = scene.getObjectByName('Card_Ace_Spades');
    const twoOfSpades = scene.getObjectByName('Card_Two_Spades');
    const threeOfSpades = scene.getObjectByName('Card_Three_Spades');
    const fourOfSpades = scene.getObjectByName('Card_Four_Spades');
    const fiveOfSpades = scene.getObjectByName('Card_Five_Spades');
    const sixOfSpades = scene.getObjectByName('Card_Six_Spades');
    const sevenOfSpades = scene.getObjectByName('Card_Seven_Spades');
    const eightOfSpades = scene.getObjectByName('Card_Eight_Spades');
    const nineOfSpades = scene.getObjectByName('Card_Nine_Spades');
    const tenOfSpades = scene.getObjectByName('Card_Ten_Spades');
    const jackOfSpades = scene.getObjectByName('Card_Jack_Spades');
    const queenOfSpades = scene.getObjectByName('Card_Queen_Spades');
    const kingOfSpades = scene.getObjectByName('Card_King_Spades');
    const aceOfHearts = scene.getObjectByName('Card_Ace_Hearts');
    const twoOfHearts = scene.getObjectByName('Card_Two_Hearts');
    const threeOfHearts = scene.getObjectByName('Card_Three_Hearts');
    const fourOfHearts = scene.getObjectByName('Card_Four_Hearts');
    const fiveOfHearts = scene.getObjectByName('Card_Five_Hearts');
    const sixOfHearts = scene.getObjectByName('Card_Six_Hearts');
    const sevenOfHearts = scene.getObjectByName('Card_Seven_Hearts');
    const eightOfHearts = scene.getObjectByName('Card_Eight_Hearts');
    const nineOfHearts = scene.getObjectByName('Card_Nine_Hearts');
    const tenOfHearts = scene.getObjectByName('Card_Ten_Hearts');
    const jackOfHearts = scene.getObjectByName('Card_Jack_Hearts');
    const queenOfHearts = scene.getObjectByName('Card_Queen_Hearts');
    const kingOfHearts = scene.getObjectByName('Card_King_Hearts');
    const aceOfDiamonds = scene.getObjectByName('Card_Ace_Diamonds');
    const twoOfDiamonds = scene.getObjectByName('Card_Two_Diamonds');
    const threeOfDiamonds = scene.getObjectByName('Card_Three_Diamonds');
    const fourOfDiamonds = scene.getObjectByName('Card_Four_Diamonds');
    const fiveOfDiamonds = scene.getObjectByName('Card_Five_Diamonds');
    const sixOfDiamonds = scene.getObjectByName('Card_Six_Diamonds');
    const sevenOfDiamonds = scene.getObjectByName('Card_Seven_Diamonds');
    const eightOfDiamonds = scene.getObjectByName('Card_Eight_Diamonds');
    const nineOfDiamonds = scene.getObjectByName('Card_Nine_Diamonds');
    const tenOfDiamonds = scene.getObjectByName('Card_Ten_Diamonds');
    const jackOfDiamonds = scene.getObjectByName('Card_Jack_Diamonds');
    const queenOfDiamonds = scene.getObjectByName('Card_Queen_Diamonds');
    const kingOfDiamonds = scene.getObjectByName('Card_King_Diamonds');

    clubsGroup.add(aceOfClubs, twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, sixOfClubs, sevenOfClubs, eightOfClubs, nineOfClubs, tenOfClubs, jackOfClubs, queenOfClubs, kingOfClubs)
    spadesGroup.add(aceOfSpades, twoOfSpades, threeOfSpades, fourOfSpades, fiveOfSpades, sixOfSpades, sevenOfSpades, eightOfSpades, nineOfSpades, tenOfSpades, jackOfSpades, queenOfSpades, kingOfSpades)
    heartsGroup.add(aceOfHearts, twoOfHearts, threeOfHearts, fourOfHearts, fiveOfHearts, sixOfHearts, sevenOfHearts, eightOfHearts, nineOfHearts, tenOfHearts, jackOfHearts, queenOfHearts, kingOfHearts)
    diamondsGroup.add(aceOfDiamonds, twoOfDiamonds, threeOfDiamonds, fourOfDiamonds, fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds, kingOfDiamonds)

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
    if (Coke && Deck) {
        const intersection = raycaster.intersectObject(Coke, true);
        if (intersection.length > 0) {
            Coke.position.set(0, 0, 1);
        } else {
            Coke.position.set(2, 0, 1);
        }
    }

    if (Deck){
        clubsGroup.rotateX(0.1);
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