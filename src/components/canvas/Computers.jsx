import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* need to create a light to see it; see react-three-fiber doc
      to see diff ways to add lights */}
      <hemisphereLight intensity={0.15} groundColor='black' />
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
      {/* point light that shows up as glare on computer */}
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // checks to see if we're on mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // sets isMobile variable to true or false
    setIsMobile(mediaQuery.matches);

    // handles changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add callback fnc as listener for changes to media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // remove listener when component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
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
          <Computers isMobile={isMobile} />
        </Suspense>
  
        <Preload all />
      </Canvas>
    );
  };
  
  export default ComputersCanvas;