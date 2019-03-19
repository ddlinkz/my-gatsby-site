import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';

import alphaTexture from './stripes_gradient.jpg';
import angelObj from './obj/male02.obj';

OBJLoader(THREE);

export default scene => {
    const group = new THREE.Group();

    const subjectGeometry = deformGeometry(new THREE.IcosahedronGeometry(10, 2));
    
    const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#000", transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
    subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
    subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
    subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    subjectMaterial.alphaMap.repeat.y = 1;

    const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);
        
    const subjectWireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(subjectGeometry),
        new THREE.LineBasicMaterial()
    );

    //console.log(typeof THREE.OBJLoader);

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);
    var material = new THREE.MeshBasicMaterial({color: 'blue', side: THREE.DoubleSide});

    loader.load(
        angelObj,
        function (object){
            object.traverse(function(child) {
                if(child instanceof THREE.Mesh){
                    child.material = material;
                }
            })
            group.add(object);
        },
        function (xhr){
            console.log(((xhr.loaded)/xhr.total * 100) + '% loaded');
        },
        function (error){
            console.log('An error happened ' + error);
        }
    );

    //group.add(loader);
    group.add(subjectMesh);
    group.add(subjectWireframe);
    scene.add(group);

    group.rotation.z = Math.PI/4;

    const speed = 1;
    const textureOffsetSpeed = 0.02;

    function deformGeometry(geometry) {
        for (let i=0; i<geometry.vertices.length; i+=2) {
            const scalar = 1 + Math.random()*0.8;
            geometry.vertices[i].multiplyScalar(scalar)
        }

        return geometry;
    }

    function update(time) {
        const angle = time*speed;

        group.rotation.y = angle;

        subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

        subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
        
        const scale = (Math.sin(angle*8)+6.4)/5;
        subjectWireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}