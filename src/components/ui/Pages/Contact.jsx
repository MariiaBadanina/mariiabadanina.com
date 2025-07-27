import styled from 'styled-components'
import MaxWidth from '../MaxWidth'
import Title from '../components/Title'
import Text from '../components/Text'
import ScreenSizes from '../../../config/mediaVariables'
import { Link } from 'react-router-dom'
import BluredContainer from '../components/BluredContainer'

const OuterWrapper = styled.div`
  pointer-events: all;
  overflow-y: scroll;
  height: 100vh;
`

const StyledLink = styled(Link)`
  display: block;
  pointer-events: all;
  margin-bottom: 15px;
  @media (min-width: ${ScreenSizes.tablet}) {
    margin-bottom: 30px;
  }
`

const Contact = () => {
  return (
    <OuterWrapper>
      <MaxWidth flexDirection="column">
        <BluredContainer>
          <Title>Contact</Title>
          <Text>
            <StyledLink
              to="https://www.linkedin.com/in/mariabadanina/"
              target="_blank"
            >
              Linkedin
            </StyledLink>
            <StyledLink to="https://github.com/MariaBadanina" target="_blank">
              GitHub
            </StyledLink>
            <StyledLink
              to="https://www.instagram.com/maria__badanina/"
              target="_blank"
            >
              Instagram
            </StyledLink>
            <StyledLink to="mailto:maria.badanina.s@gmail.com" target="_blank">
              Mail
            </StyledLink>
          </Text>
        </BluredContainer>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default Contact
