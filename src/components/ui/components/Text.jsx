import styled from 'styled-components'
import ScreenSizes from '../../../config/mediaVariables'

const StyledText = styled.article`
  font-size: 18px;
  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 20px;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
    font-size: 25px;
  }
`
const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>
}

export default Text
