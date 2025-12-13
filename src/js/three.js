import * as THREE from "three";
import { OBJLoader } from "https://esm.sh/three/examples/jsm/loaders/OBJLoader.js";

// Chemin vers le modèle OBJ
let modelSource = "assets/obj/planet1.obj";
const container = document.querySelector("#viewer");

// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x000000, 0); // Couleur de fond transparente
container.appendChild(renderer.domElement);

// Limiaires de la scène
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);
const ambient = new THREE.AmbientLight(0x666666, 1.2);
scene.add(ambient);

// Chargement du modèle OBJ
let model = null;
const loader = new OBJLoader();
loader.load(
  modelSource,
  (obj) => {
    model = obj;

    // Affichage en wireframe
    model.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          side: THREE.DoubleSide
        });
      }
    });

    // Ajustements selon le modèle
    model.position.set(0, 0, 0);
    model.scale.set(0.000001, 0.000001, 0.000001);
    scene.add(model);
    console.log("Modèle OBJ chargé !");
    animate();
  },
  (progress) => {
    if (progress.lengthComputable) {
      console.log(
        ((progress.loaded / progress.total) * 100).toFixed(2) + "% chargé"
      );
    } else {
      console.log("Chargement en cours...");
    }
  },
  (error) => {
    console.error("Erreur lors du chargement du modèle :", error);
  }
);

// Responsive
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}
window.addEventListener("resize", onWindowResize, false);

// Animer la rotation de l'objet
function animate() {
  requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.005;
  renderer.render(scene, camera);
}