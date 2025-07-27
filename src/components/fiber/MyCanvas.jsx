// import { Html, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
  EffectComposer,
  Noise,
  BrightnessContrast,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
// import { Suspense } from 'react'
import Bg from './Bg'
import EnvironmentComponent from './EnvironmentComponent'
import SphereGroup from './SphereGroup'

const MyCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 22 }}>
      {/* <Suspense fallback={<Html center>Loading............</Html>}> */}
      <SphereGroup />
      <EnvironmentComponent />
      <Bg />
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Noise opacity={0.4} blendFunction={BlendFunction.OVERLAY} />
        <BrightnessContrast
          brightness={-0.1} // brightness. min: -1, max: 1
          contrast={0.2} // contrast: min -1, max: 1
        />
      </EffectComposer>
      {/* </Suspense> */}
      {/* <OrbitControls /> */}
    </Canvas>
  )
}
export default MyCanvas
