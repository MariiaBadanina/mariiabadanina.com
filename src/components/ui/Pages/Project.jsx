import styled from 'styled-components'
import MaxWidth from '../MaxWidth'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Tags from '../components/Tags'
import { Link } from 'react-router-dom'
import { Arrow } from '../Icons'
import Markdown from 'react-markdown'
import BluredContainer from '../components/BluredContainer'

const OuterWrapper = styled.div`
  pointer-events: all;
  overflow-y: scroll;
  height: 100vh;
`

const ContentContainer = styled.div``

const Img = styled.div`
  height: 500px;
  border-radius: 15px;
  background-image: url(${(p) => p.bg});
  background-size: cover;
`

const ProjectLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonOuterWrapper = styled(Link)`
  display: block;
  overflow: hidden;
  width: 112px;
`
const ButtonInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 147px;
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: translate(-45px);
  }
`
const ButtonText = styled.div`
  margin: 0 20px;
`
const ExternalButtonWrapper = styled.div`
  display: flex;
`
const ExternalButton = styled(Link)`
  display: block;
  border: 1px solid;
  border-color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 30px;
`

const StyledMarkdown = styled(Markdown)`
  margin: 30px 0 20px 0;
  a {
    text-decoration: underline;
  }
`

const Project = ({
  title,
  img,
  tags,
  theme,
  pageInfo,
  description,
  externalUrl,
  githubUrl,
}) => {
  return (
    <OuterWrapper>
      <MaxWidth>
        <BluredContainer>
          <ButtonOuterWrapper to="/work">
            <ButtonInnerWrapper>
              <Arrow />
              <ButtonText>Back</ButtonText>
              <Arrow />
            </ButtonInnerWrapper>
          </ButtonOuterWrapper>
          <Title>{title}</Title>
          <ContentContainer>
            <Tags tags={tags} theme={theme} />
            <StyledMarkdown>{pageInfo}</StyledMarkdown>
            <Img bg={img} />
            <StyledMarkdown>{description}</StyledMarkdown>
            <ProjectLinkWrapper>
              <Subtitle>Check it out</Subtitle>
              <ExternalButtonWrapper>
                <ExternalButton to={githubUrl} theme={theme}>
                  GitHub
                </ExternalButton>
                <ExternalButton to={externalUrl} theme={theme}>
                  Visit site
                </ExternalButton>
              </ExternalButtonWrapper>
            </ProjectLinkWrapper>
          </ContentContainer>
        </BluredContainer>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default Project
