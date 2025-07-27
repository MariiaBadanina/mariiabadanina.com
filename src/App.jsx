import { HashRouter } from 'react-router-dom'
import MyCanvas from './components/fiber/MyCanvas'
import Content from './components/ui/Content'
import { ThemeContext, themes } from './context/theme-context'
import { useState } from 'react'
import styled from 'styled-components'

const CanvasWrapper = styled.div`
  filter: ${(p) => (p.theme === 'color' ? 'grayscale(0%)' : 'grayscale(100%)')};
  width: 100%;
  height: 100%;
  transition: filter 0.5s ease;
`

function App() {
  const [theme, setTheme] = useState('color')
  return (
    <ThemeContext.Provider value={{ themes, theme, setTheme }}>
      <CanvasWrapper theme={theme}>
        <MyCanvas />
      </CanvasWrapper>
      <HashRouter basename="/">
        <Content theme={theme} />
      </HashRouter>
    </ThemeContext.Provider>
  )
}

export default App
