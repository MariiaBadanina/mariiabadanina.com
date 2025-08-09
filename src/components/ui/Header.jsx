import { animated, config, useSpring } from '@react-spring/web'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../context/theme-context'
import { Drop, Moon, Sun } from './Icons'
import MaxWidth from './MaxWidth'
import ScreenSizes from '../../config/mediaVariables'
import { useScreenDetector } from '../../hooks/index'

const HeaderWrapper = styled.div`
  pointer-events: auto;
  height: 130px;
  display: flex;
  align-items: center;
  /* backdrop-filter: blur(12px); */
  position: fixed;
  width: 100vw;
`
const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transform: scale(0.8);
  @media (min-width: ${ScreenSizes.tablet}) {
    flex-direction: row;
    transform: scale(1);
  }
`
const SwitcherBg = styled(animated.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  z-index: 0;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 100%;
  z-index: 1;
  position: relative;
  cursor: pointer;
`
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  overflow: hidden;
  padding: 0 20px;
  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 20px;
  }
`
const Nav = styled.nav`
  position: relative;
  @media (min-width: ${ScreenSizes.tablet}) {
    margin-right: 50px;
  }
`
const CurrentPageMarker = styled(animated.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 100%;
  bottom: 6px;
  @media (min-width: ${ScreenSizes.tablet}) {
    bottom: 10px;
  }
`
const List = styled.ul`
  display: flex;
  list-style: none;
  padding-inline-start: 0;
`
const ListItem = styled.li`
  margin-right: 30px;
`
const LogoWrapper = styled(Link)`
  font-size: 12px;
  padding: 0 20px;
  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 20px;
  }
`

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const location = useLocation()
  const { isMobile } = useScreenDetector()

  const switcherAnimation = useSpring({
    to: {
      x: isMobile ? 0 : theme === 'dark' ? 5 : theme === 'light' ? 45 : 85,
      y: isMobile ? (theme === 'dark' ? 0 : theme === 'light' ? 30 : 60) : 0,
      backgroundColor:
        theme === 'color' ? '#fe4992' : theme === 'light' ? '#fff' : '#808080',
    },
    config: config.wobbly,
  })

  const menuAnimation = useSpring({
    to: {
      x:
        location.pathname === '/work'
          ? isMobile
            ? 11
            : 22
          : location.pathname === '/about'
          ? isMobile
            ? 75
            : 109
          : location.pathname === '/contact'
          ? isMobile
            ? 146
            : 210
          : -40,
      backgroundColor: theme === 'light' ? '#282828' : '#fff',
    },
    config: config.wobbly,
  })

  return (
    <HeaderWrapper>
      <MaxWidth justifyContent="space-between" alignItems="center">
        <LogoWrapper to="/">Home</LogoWrapper>
        <NavWrapper>
          <Nav>
            <CurrentPageMarker style={menuAnimation} />
            <List>
              <ListItem>
                <Link to="/work">Work</Link>
              </ListItem>
              <ListItem>
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">Contact</Link>
              </ListItem>
            </List>
          </Nav>
          <IconsContainer>
            <SwitcherBg style={switcherAnimation} />
            <IconWrapper onClick={() => setTheme('dark')}>
              <Moon />
            </IconWrapper>
            <IconWrapper onClick={() => setTheme('light')}>
              <Sun />
            </IconWrapper>
            <IconWrapper onClick={() => setTheme('color')}>
              <Drop />
            </IconWrapper>
          </IconsContainer>
        </NavWrapper>
      </MaxWidth>
    </HeaderWrapper>
  )
}

export default Header
