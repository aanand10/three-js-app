import * as THREE from "three";

// getting dom element for scene
/**
 * Scene creation as the DOM content gets loaded
 */

window.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();

  /**
   * creating a gemoetry and material wich is being added to mesh
   */
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  /**
   * Grid helper which is being added to the scene used as a ref.
   */
  const gridHelper = new THREE.GridHelper();
  scene.add(gridHelper);

  const camera = new THREE.PerspectiveCamera(
    50, // fov angle
    window.innerWidth / window.innerHeight, // aspect ratio
    1, // near plane
    2000 // far plane
  );

  /**
   * setting the camera positon can be added using .set(x,y,z)
   */

  camera.position.z = 5;
  camera.position.x = 1;
  camera.position.y = 1;
  scene.add(camera);

  // render : scene from the camera point of view
  const canvas = document.querySelector(".world");

  console.log(canvas);
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  console.log(mesh.position.distanceTo(camera.position));
});

// scene.background = new THREE.Color(0x123456);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const size = 10;
// const divisions = 10;

// const gridHelper = new THREE.GridHelper(size, divisions);
// scene.add(gridHelper);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }
