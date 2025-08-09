import styled from 'styled-components'
import ScreenSizes from '../../config/mediaVariables'

const Flex = styled.div`
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${ScreenSizes.tablet}) {
    width: 688px;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
    width: 928px;
  }
  @media (min-width: ${ScreenSizes.desktop}) {
    width: 1120px;
  }
  @media (min-width: ${ScreenSizes.desktopL}) {
    width: 1488px;
  }
`

const MaxWidth = ({ justifyContent, flexDirection, alignItems, children }) => {
  return (
    <Flex
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      alignItems={alignItems}
    >
      {children}
    </Flex>
  )
}

export default MaxWidth
