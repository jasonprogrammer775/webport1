
import { OrbitControls, Text3D,  } from "@react-three/drei/core";
import { ContactShadows,Environment } from "@react-three/drei/web";
import { Canvas ,useThree } from "@react-three/fiber"
import { Drone } from "./Drone";





   export const MyCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [15, 0, 15], fov: 25 }}>
      <OrbitControls />
      <ambientLight intensity={0.5}/>
     



      <ContactShadows position={[0, -0.8, 0]} opacity={1} />
      <Environment preset="sunset" blur={1} background />
       <Drone />
       
    </Canvas>
  );
};



