import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      {/* need to create a light to see it; see react-three-fiber doc
      to see diff ways to add lights */}
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      {/* point light that shows up as glare on computer */}
      <pointLight intensity={1} />
      {/* will see computer after loading primitive into Canvas */}
      {/* main light: spotlight */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} //where are we looking at this model from
      // pos:[x,y,z], fov: field of view (how wide our fov is going to be)
      gl={{ preserveDrawingBuffer: true }} // needs to be here to properly render 3D model
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* allows us to move model left and right */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} // makes it so that we can only rotate it along a specific access
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas