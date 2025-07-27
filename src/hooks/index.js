import { useEffect, useState } from 'react'

export const useScreenDetector = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width < 768
  const isTablet = width >= 768 && width < 1024
  const isLaptop = width >= 1024 && width < 1280
  const isDesktop = width >= 1280 && width < 1920
  const isDesktopL = width >= 1920

  return { isMobile, isTablet, isLaptop, isDesktop, isDesktopL }
}
