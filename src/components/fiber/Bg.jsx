import { animated, useSpring } from '@react-spring/three'
import { Depth, LayerMaterial } from 'lamina'
import { useContext } from 'react'
import * as THREE from 'three'
import { ThemeContext } from '../../context/theme-context'

const AnimatedDepth = animated(Depth)

const Bg = () => {
  const { themes, theme } = useContext(ThemeContext)

  const springs = useSpring({
    colorA: themes[theme]?.bgColorA,
    colorB: themes[theme]?.bgColorB,
  })

  return (
    <mesh scale={10}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <AnimatedDepth
          colorB={springs.colorB}
          colorA={springs.colorA}
          alpha={1}
          mode="normal"
          near={11.5}
          far={19}
          origin={[10, -10, -10]}
        />
      </LayerMaterial>
    </mesh>
  )
}

export default Bg
