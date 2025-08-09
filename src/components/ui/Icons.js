import styled from 'styled-components'
import { ReactComponent as MoonIcon } from '../../static/svg/moon.svg'
import { ReactComponent as DropIcon } from '../../static/svg/drop.svg'
import { ReactComponent as SunIcon } from '../../static/svg/sun.svg'
import { ReactComponent as ArrowIcon } from '../../static/svg/arrow.svg'

const Arrow = styled(ArrowIcon)`
  width: 35px;
`

const Moon = styled(MoonIcon)``
const Sun = styled(SunIcon)``
const Drop = styled(DropIcon)``

export { Moon, Sun, Drop, Arrow }
