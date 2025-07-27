import { Environment } from '@react-three/drei'

const EnvironmentComponent = () => {
  return (
    <group>
      <Environment
        // preset="apartment" // best for the light bg ???
        // preset="night" // best for the dark bg
        // files="adamsbridge.hdr" // best for the dark bg
        // background={true}
        files="quarry_04_4k.hdr" // best for the color bg
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-0.5, 1, -0.5]} intensity={0.5} />
      <directionalLight position={[-1, 1, 1]} intensity={0.2} />

      <directionalLight
        castShadow
        intensity={0.01}
        args={['#ffffff']}
        position={[0, 100, -100]}
      />
    </group>
  )
}
export default EnvironmentComponent
