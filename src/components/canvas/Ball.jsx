import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei' // decal: texture

import CanvasLoader from '../Loader'

const Ball = (props) => {
  // the imgUrl are the icons that are being passed into BallCanvas
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* render a icosahedron */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0,0,1]}
          rotation={[2*Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => (
  <Canvas
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }} // needs to be here to properly render 3D model
  >
    <Suspense fallback={<CanvasLoader />}>
      {/* allows us to move model left and right */}
      <OrbitControls
        enableZoom={false}
      />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
)

export default BallCanvas