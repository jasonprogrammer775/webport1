


import { useGLTF } from '@react-three/drei';



export const Drone = () => {

const model = useGLTF("/drone.glb");

 

  return <primitive object={model.scene} scale={0.5} />

}




