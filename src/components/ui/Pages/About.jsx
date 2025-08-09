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
              Hi, I’m Maria — a Frontend Developer with 6+ years of experience
              and a background in graphic design. I work with modern tools like
              React, TypeScript, Vite, Next.js, Tailwind CSS, React Query,
              Three.js and AI integrations, to build responsive, accessible, and
              performant user interfaces.
            </p>
            <p>
              I thrive in diverse, collaborative teams where ideas come from
              different cultures and perspectives. I believe the best products
              happen when creativity meets thoughtful engineering and when
              people feel safe to bring their whole selves to work.
            </p>
            <p>
              I’m a detail-oriented creator who enjoys taking the time to do
              things well. Whether I’m refining a UI component or painting in
              oils, I value the process as much as the finished piece. This
              mindset helps me bring care, patience, and focus into every
              project I work on.
            </p>
          </Text>
        </BluredContainer>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default About
