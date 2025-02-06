import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

class Game {
  constructor() {
    this.canvas = document.querySelector(".js-canvas");
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.init();
  }

  init() {
    this.createScene();
    this.createCamera();
    this.createLight();
    this.createForm();
    this.createRender();
    this.createOrbitControls();
    this.animate();
  }

  createScene() {
    this.scene = new THREE.Scene();
  }
  createCamera() {
    const aspectRatio = this.canvasWidth / this.canvasHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000);
    this.camera.position.x = 200;
    this.camera.position.y = 200;
    this.camera.position.z = 200;
  }

  createLight() {
    //lumière direct
    this.light = new THREE.PointLight(0xffffff, 1, 100);
    this.light.position.set(50, 50, 50);
    this.scene.add(this.light);
    //lumiere ambiante
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0); // Lumière ambiante douce
    this.scene.add(this.ambientLight);
    //direction de la lumiere
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(10, 40, 50);
    this.scene.add(this.directionalLight);
  }

  createForm() {
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const texture = new THREE.TextureLoader().load("./img/wood.jpg");
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.cube = new THREE.Mesh(geometry, material);
    //this.cube.position.set(10, 10, 10);
    this.scene.add(this.cube);
  }
  createRender() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    this.canvas.appendChild(this.renderer.domElement);
  }

  createOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
  }
  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }
}

export { Game };
