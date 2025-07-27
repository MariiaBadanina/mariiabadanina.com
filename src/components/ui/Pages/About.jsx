import styled from 'styled-components'
import MaxWidth from '../MaxWidth'
import BluredContainer from '../components/BluredContainer'
import Text from '../components/Text'
import Title from '../components/Title'

const OuterWrapper = styled.div`
  pointer-events: all;
  overflow-y: scroll;
  height: 100vh;
`

const About = () => {
  return (
    <OuterWrapper>
      <MaxWidth flexDirection="column">
        <BluredContainer>
          <Title>About</Title>
          <Text>
            <p>
              Hey there! I'm Maria, a Frontend Developer with a graphic design
              background. I've been doing this for over 5 years, working with
              HTML, CSS, JavaScript, and React.
            </p>
            <p>
              When it comes to me, I'd say I'm kind, caring, and independent.
              I'm always trying to be myself while staying professional. I have
              made continuous learning a part of my daily routine, and I
              understand that a great product is the result of strong teamwork,
              even when it's not always easy. 😄
            </p>
            <p>
              When I'm not working, you might catch me on a TikTok binge,
              getting artsy in Procreate, or leveling up my coding skills. Oh,
              and let's not forget those occasional existential moments.
            </p>
            <p>
              I'm excited about the chance to use my skills with perseverance and
              passion for your project and create something that exceeds your
              expectations. Let's team up and make great things happen!
            </p>
          </Text>
        </BluredContainer>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default About
