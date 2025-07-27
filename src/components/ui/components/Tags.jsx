import styled from 'styled-components'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Tag = styled.div`
  border: 1px solid;
  border-color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
  padding: 10px 20px;
  margin: 0 10px 10px 0;
  border-radius: 30px;
`

const Tags = ({ tags, theme }) => {
  return (
    <TagContainer>
      {tags?.map((item, idx) => {
        return (
          <Tag key={idx} theme={theme}>
            {item}
          </Tag>
        )
      })}
    </TagContainer>
  )
}

export default Tags
