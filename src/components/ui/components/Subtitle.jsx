import styled from 'styled-components'
import ScreenSizes from '../../../config/mediaVariables'

const StyledSubtitle = styled.h1`
  font-size: 25px;
  font-family: GrafitaSpecialDEMO;
  margin: 20px 0;

  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 30px;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
  }
  @media (min-width: ${ScreenSizes.desktop}) {
  }
  @media (min-width: ${ScreenSizes.desktopL}) {
  }
`
const Subtitle = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>
}

export default Subtitle
