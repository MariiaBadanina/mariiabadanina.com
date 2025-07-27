import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tags from './Tags'
import Subtitle from './Subtitle'

const Container = styled(Link)`
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
`

const Img = styled.div`
  height: 300px;
  border-radius: 15px;
  background-image: url(${(p) => p.bg});
  background-size: cover;
`


const ProjectThumbnail = ({ title, img, tags, theme, url }) => {
  return (
    <Container to={url}>
      <Img bg={img} />
      <Subtitle>{title}</Subtitle>
      <Tags tags={tags} theme={theme} />
    </Container>
  )
}

export default ProjectThumbnail
