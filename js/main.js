import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);
const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

camera.position.z = 5;

const loader = new GLTFLoader();

loader.load('Models/PCTest/a_personal_computer.glb', function ( gltf ) {

    scene.add(gltf.scene);

}, undefined, function (error){

    console.error;('Wir haben einen Brief gegriegt, ich will mich umbringen');

});


function animate() {
    requestAnimationFrame( animate );
    renderer.render(scene, camera, light);
}
animate();