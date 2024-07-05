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
  // const mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(2, 1, 0);

  /**
   * Group : so we can do any action which will be aaplied to all the elements in the group
   */

  const group = new THREE.Group();
  scene.add(group);

  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x123456 })
  );
  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );
  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  cube2.position.set(2, 0, 0);
  cube3.position.set(-2, 0, 0);

  group.add(cube1);
  group.add(cube2);
  group.add(cube3);

  group.scale.y = 2;
  group.rotation.y = 1;

  // scene.add(mesh);

  // mesh.scale.set(1, 0.5, 2);
  /** Rotation
   * - reorder must be done before the rotation for expected results
   */
  // mesh.rotation.reorder("YXZ");
  // mesh.rotation.x = Math.PI * 0.25;
  // mesh.rotation.y = Math.PI * 0.25;
  // mesh.rotation.set(1, 1, 1, "XYZ");

  /** used to normalize the values  */
  // mesh.position.normalize();

  /**
   * axes helper helps to position the elements in 3d space
   */
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  /**
   * Grid helper which is being added to the scene used as a ref.
   */
  // const gridHelper = new THREE.GridHelper();
  // scene.add(gridHelper);

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

  /**
   * lookAt is used set the camera view on something here we set on meash psotion so it is kept in the center of the screen
   */
  camera.lookAt(group.position);

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
