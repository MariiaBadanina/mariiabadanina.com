import styled from 'styled-components'
import ScreenSizes from '../../../config/mediaVariables'
import projects from '../../../data/index'
import MaxWidth from '../MaxWidth'
import BluredContainer from '../components/BluredContainer'
import ProjectThumbnail from '../components/ProjectThumbnail'
import Title from '../components/Title'

const OuterWrapper = styled.div`
  pointer-events: all;
  overflow-y: scroll;
  height: 100vh;
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  position: relative;
  @media (min-width: ${ScreenSizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Disclaimer = styled.p`
  margin-bottom: 50px;
`

const Work = ({ theme }) => {
  return (
    <OuterWrapper>
      <MaxWidth flexDirection="column">
        <BluredContainer>
          <Title>Work</Title>
          <Disclaimer>
            This page is a work in progress and it's going to grow and improve.
          </Disclaimer>
          <ProjectsContainer>
            {projects.map((item, idx) => {
              return (
                <ProjectThumbnail
                  key={idx}
                  title={item.title}
                  img={item.img}
                  tags={item.tags}
                  url={item.url}
                  theme={theme}
                />
              )
            })}
          </ProjectsContainer>
        </BluredContainer>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default Work
