import styled from 'styled-components'
import ScreenSizes from '../../../config/mediaVariables'

const Container = styled.div`
  width: 100%;
  margin: 20vh auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border-radius: 30px;
  padding: 40px;
  @media (min-width: ${ScreenSizes.tablet}) {
    padding: 70px;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
    padding: 100px;
  }
`

const BluredContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default BluredContainer
