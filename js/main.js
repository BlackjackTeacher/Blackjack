import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);
const light = new THREE.SpotLight( 0xffffff );
scene.add( light );

const controls = new OrbitControls( camera, renderer.domElement);
controls.target.set(2,0,1);
controls.autoRotate = true;
controls.enableDamping = true;
controls.dampingFactor = 0.05;

camera.position.set(2,1,6);
controls.update();

light.position.set(2,3,2);
light.intensity = 25;
light.angle = 90;

const loader = new GLTFLoader();

loader.load('Models/PCTest/a_personal_computer.glb', function ( gltf ) {

    scene.add(gltf.scene);

}, undefined, function (error){

    console.error;('Wir haben einen Brief gekriegt, ich will mich umbringen');

});


function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render(scene, camera, light);
}
animate();