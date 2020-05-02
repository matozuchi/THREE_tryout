let colors = [0x995a56, 0x68a3d4, 0xa828a4]

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial( { 
    // color: 0x00ff00,
    // wireframe: true,
} );

var cube = new THREE.Mesh( geometry, material );
var otherCube = new THREE.Mesh( geometry, material );
scene.add( cube, otherCube );

// camera.position.z = 5;
camera.position.y = 10;
camera.rotation.z = 90;
cube.rotation.y = .9;
cube.rotation.x = -.9;


let cubio = [];
let group = [];
let color = []
let cubeAmount = 1000;
for(let i = 1; i < cubeAmount; i++){
    color[i] = Math.floor(Math.random()*3)
    group[i] = new THREE.Group()
    cubio[i] = new THREE.Mesh( geometry, material );
    cubio[i].material.color.setHex( colors[color[i]] )
    cubio[i].position.x = i*2;
    cubio[i].scale.setScalar(Math.random()*2)
    group[i].add(cubio[i])
    group[i].rotation.y = Math.random()*50
    scene.add(group[i])
}

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

var animate = function () {
    socket.on('otherPosition', (position) => {
        otherCube.position.x = position;
    })
    requestAnimationFrame( animate );
    for(let i = 1; i < cubeAmount; i++){
        cubio[i].rotation.x += i*.0001;
        group[i].rotation.y += Math.random()*.01;
    }

    cube.rotation.y += 0.05;
    if(forward == true) {
        cube.position.z += -.1
    }
    if(right == true) {
        cube.position.x += .1;
        socket.emit('position', cube.position.x);
    }
    if(left == true) {
        cube.position.x += -.1
    }
    if(back == true) {
        cube.position.z += .1
    }

    controls.update();
    renderer.render( scene, camera );
};

animate();