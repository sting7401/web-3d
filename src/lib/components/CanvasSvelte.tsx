import React from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';

export const CanvasSvelte = () => {
  return (
    <>
    <div id="canvas-container">
    <Canvas>
     <mesh>
       <boxGeometry args={[2, 2, 2]} />
       <meshPhongMaterial />
     </mesh>
     <ambientLight intensity={0.1} />
     <directionalLight position={[0, 0, 5]} color="red" />
   </Canvas>
   </div>
   </>
  )
}
