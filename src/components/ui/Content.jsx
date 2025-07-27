import { animated, config, useTransition } from '@react-spring/web'
import { Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Work from './pages/Work'
import projects from '../../data/index'
import Project from './pages/Project'

const StyledContainer = styled.main`
  position: fixed;
  z-index: 1;
  top: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
  transition: color 0.7s ease;
  a {
    color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
    transition: color 0.7s ease;
  }
  path {
    fill: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
    transition: fill 0.7s ease;
  }
`

const Content = ({ theme }) => {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -100 },
    exitBeforeEnter: true,
    config: config.gentle,
  })

  return (
    <StyledContainer theme={theme}>
      <Header />
      {transitions((styles, item) => {
        return (
          <animated.div style={styles}>
            <Routes location={item}>
              <Route exact path="/" element={<Home theme={theme} />} />
              <Route exact path="/work" element={<Work theme={theme} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              {projects.map((item, idx) => {
                return (
                  <Route
                    key={idx}
                    exact
                    path={`/work/${item.url}`}
                    element={
                      <Project
                        title={item.title}
                        img={item.img}
                        tags={item.tags}
                        url={item.url}
                        theme={theme}
                        pageInfo={item.pageInfo}
                        description={item.description}
                        externalUrl={item.externalUrl}
                        githubUrl={item.githubUrl}
                      />
                    }
                  />
                )
              })}
            </Routes>
          </animated.div>
        )
      })}
    </StyledContainer>
  )
}

export default Content
