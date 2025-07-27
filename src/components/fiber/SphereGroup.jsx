import { animated, useSpring } from '@react-spring/three'
import { MarchingCube, MarchingCubes } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Depth, Fresnel, LayerMaterial } from 'lamina'
import { useContext, useRef } from 'react'
import { ThemeContext } from '../../context/theme-context'
import Cursor from './Cursor'

const AnimatedDepth = animated(Depth)

const Sphere = ({ x, y, z, s }) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    ref.current.position.x = x / 1.5 + Math.cos((t * s) / 2) * 0.2
    ref.current.position.y = y / 1.5 + Math.sin((t * s) / 2) * 0.2
    ref.current.position.z = z / 1.5 + Math.sin((t * s) / 2) * 0.2
  })

  return <MarchingCube ref={ref} />
}

const SphereGroup = () => {
  const { themes, theme } = useContext(ThemeContext)
  const data = new Array(7).fill().map((_, i) => ({
    x: Math.random() - 0.5,
    y: Math.random() - 0.5,
    z: Math.random() - 0.5,
    s: Math.random() + 2,
  }))

  const springs = useSpring({
    colorA: themes[theme]?.sfColorA,
    colorB: themes[theme]?.sfColorB,
  })

  return (
    <MarchingCubes resolution={64} enableColors>
      <LayerMaterial lighting="standard" toneMapped={true}>
        <AnimatedDepth
          colorB={springs.colorB}
          colorA={springs.colorA}
          alpha={1}
          mode="normal"
          near={0.2}
          far={1}
          origin={[0.3, -0.3, 0]}
        />
        <Fresnel
          color="#fefefe"
          alpha={0.54}
          bias={0.1}
          mode="overlay"
          scale={1}
        />
      </LayerMaterial>
      {data.map((props, i) => (
        <Sphere key={i} {...props} />
      ))}
      <Cursor />
    </MarchingCubes>
  )
}

export default SphereGroup
