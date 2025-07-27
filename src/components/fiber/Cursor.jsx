import { MarchingCube } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/three'

const Cursor = () => {
  const [mousePosX, setMousePosX] = useState(0)
  const [mousePosY, setMousePosY] = useState(0)
  const [out, setOut] = useState(0)
  const ref = useRef()

  const { x, y } = useSpring({
    x: out ? 0 : mousePosX,
    y: out ? 0 : mousePosY,
    config: out ? config.molasses : config.wobbly,
  })

  useFrame(({ mouse, viewport }) => {
    const { width, height } = viewport.getCurrentViewport()
    setMousePosX(mouse.x * (width / 2))
    setMousePosY(mouse.y * (height / 2))

    const k = 1.1

    if (mousePosX > k || mousePosX < -k || mousePosY > k || mousePosY < -k) {
      setOut(true)
    } else {
      setOut(false)
    }
  })

  return (
    <animated.mesh position-x={x} position-y={y} ref={ref}>
      <MarchingCube />
    </animated.mesh>
  )
}

export default Cursor
