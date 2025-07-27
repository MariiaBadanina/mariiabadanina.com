import styled from 'styled-components'
import { ReactComponent as NameIcon } from '../../static/svg/name.svg'
import { ReactComponent as MeltedIcon } from '../../static/svg/melted.svg'
import { ReactComponent as MoonIcon } from '../../static/svg/moon.svg'
import { ReactComponent as DropIcon } from '../../static/svg/drop.svg'
import { ReactComponent as SunIcon } from '../../static/svg/sun.svg'
import { ReactComponent as ArrowIcon } from '../../static/svg/arrow.svg'

const Name = styled(NameIcon)`
  width: 90px;
  height: 90px;
`

const Arrow = styled(ArrowIcon)`
  width: 35px;
`

const Melted = styled(MeltedIcon)``
const Moon = styled(MoonIcon)``
const Sun = styled(SunIcon)``
const Drop = styled(DropIcon)``

export { Name, Melted, Moon, Sun, Drop, Arrow }
