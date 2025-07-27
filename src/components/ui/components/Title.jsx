import styled from 'styled-components'
import ScreenSizes from '../../../config/mediaVariables'

const StyledTitle = styled.h1`
  font-family: GrafitaSpecialDEMO;
  font-size: 40px;
  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 60px;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
  }
  @media (min-width: ${ScreenSizes.desktop}) {
  }
  @media (min-width: ${ScreenSizes.desktopL}) {
  }
`
const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
