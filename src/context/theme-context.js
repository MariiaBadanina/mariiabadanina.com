import { createContext } from 'react'

export const themes = {
  light: {
    bgColorA: '#bababa',
    bgColorB: '#ffffff',
    sfColorA: '#bababa',
    sfColorB: '#eeeeee',
  },
  dark: {
    bgColorA: '#494949',
    bgColorB: '#5e5e5e',
    sfColorA: '#3f3f3f',
    sfColorB: '#494949',
  },
  color: {
    bgColorA: '#73007f',
    bgColorB: '#ff7d58',
    sfColorA: '#b1344f',
    sfColorB: '#e44019',
  },
}

export const ThemeContext = createContext(themes.color)
