import styled from 'styled-components'
import MaxWidth from '../MaxWidth'
import ScreenSizes from '../../../config/mediaVariables'

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const HeroText = styled.div`
  @media (min-width: ${ScreenSizes.tablet}) {
    display: flex;
  }
`
const RegularText = styled.div`
  align-items: center;
  font-size: 16px;
  text-align: center;
  margin: 45px 0 20px 0;
  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 20px;
    margin: 40px 0 0 0;
    display: flex;
    text-align: left;
  }
`
const AccentText = styled.div`
  position: relative;
  display: inline-block;
  font-family: GrafitaSpecialDEMO;
  line-height: 1;
  font-size: 70px;
  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 80px;
    margin: 0 40px;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
    font-size: 120px;
  }
  @media (min-width: ${ScreenSizes.desktop}) {
    font-size: 150px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
    transition: all 0.7s ease;
    z-index: 2;
    @media (min-width: ${ScreenSizes.tablet}) {
      height: 6px;
      bottom: -3px;
    }
    @media (min-width: ${ScreenSizes.laptop}) {
      height: 10px;
      bottom: -10px;
    }
  }
`

const Home = ({ theme }) => {
  return (
    <MaxWidth>
      <HeroTextWrapper>
        <HeroText>
          <RegularText>Mariia Badanina</RegularText>
          <AccentText theme={theme}>frontend</AccentText>
        </HeroText>
        <HeroText>
          <AccentText theme={theme}>developer</AccentText>
          <RegularText>based in USA</RegularText>
        </HeroText>
      </HeroTextWrapper>
    </MaxWidth>
  )
}

export default Home
